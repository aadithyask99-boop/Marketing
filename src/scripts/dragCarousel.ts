// Looping drag carousel shared by "Our values" and "Keep reading". Markup: [data-window] > [data-track] > .vals-list (cards),
// optional .vals-btn[data-dir] buttons and .vals-dots.
export function initDragCarousel(root: HTMLElement) {

  const win = root.querySelector<HTMLElement>("[data-window]");
  const track = root.querySelector<HTMLElement>("[data-track]");
  const dots = [...root.querySelectorAll<HTMLElement>(".vals-dots span")];
  if (win && track) {
    // One server-rendered set of cards is enough: clone it twice here so the loop is seamless
    // without repeating links in the HTML. Clones stay clickable (never inert) but are hidden from assistive tech and the tab order.
    const first = track.querySelector<HTMLElement>(".vals-list")!;
    if (track.querySelectorAll(".vals-list").length === 1) {
      for (let i = 0; i < 2; i++) {
        const c = first.cloneNode(true) as HTMLElement;
        c.setAttribute("data-clone", "");
        c.setAttribute("aria-hidden", "true");
        c.querySelectorAll("a, button").forEach((el) => el.setAttribute("tabindex", "-1"));
        track.append(c);
      }
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("is-enhanced");

    let setW = 0;   // width of one set of cards
    let cardW = 0;  // card width plus gap
    let x = 0;      // current offset, always kept in (-setW, 0]
    let anim = 0;

    const measure = () => {
      const lists = track.querySelectorAll<HTMLElement>(".vals-list");
      setW = lists[0].offsetWidth + 20;
      const card = lists[0].querySelector<HTMLElement>("li")!;
      cardW = card.offsetWidth + 20;
      x = wrap(x);
      draw();
    };
    const wrap = (v: number) => (setW ? -(((-v % setW) + setW) % setW) : v);
    const draw = () => {
      track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`;
      const idx = cardW ? Math.round(-x / cardW) % dots.length : 0;
      dots.forEach((d, i) => d.classList.toggle("is-on", i === ((idx % dots.length) + dots.length) % dots.length));
    };
    // Start with the first card a little in from the edge so both sides peek
    const start = () => { measure(); x = wrap(-cardW * 0.45); draw(); };
    if (document.fonts?.ready) document.fonts.ready.then(start); else start();
    window.addEventListener("resize", measure);

    const glideTo = (target: number, ms = 450) => {
      cancelAnimationFrame(anim);
      if (reduced) { x = wrap(target); draw(); return; }
      const from = x, t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / ms);
        const e = 1 - Math.pow(1 - t, 3);
        x = wrap(from + (target - from) * e);
        draw();
        if (t < 1) anim = requestAnimationFrame(tick);
      };
      anim = requestAnimationFrame(tick);
    };
    const step = (dir: number) => glideTo(Math.round(x / cardW) * cardW - dir * cardW);

    root.querySelectorAll<HTMLButtonElement>(".vals-btn").forEach((b) => b.addEventListener("click", () => step(Number(b.dataset.dir))));
    win.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    });

    // Drag (mouse and touch) with momentum, looping forever. Nothing moves on its own.
    let drag: { id: number; x0: number; start: number; last: number; v: number; moved: boolean } | null = null;
    let raf = 0;
    win.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      cancelAnimationFrame(anim);
      cancelAnimationFrame(raf);
      drag = { id: e.pointerId, x0: e.clientX, start: x, last: e.clientX, v: 0, moved: false };
    });
    win.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x0;
      if (Math.abs(dx) > 8 && !drag.moved) { drag.moved = true; win.setPointerCapture(e.pointerId); }
      if (!drag.moved) return;
      drag.v = e.clientX - drag.last;
      drag.last = e.clientX;
      x = wrap(drag.start + dx);
      draw();
    });
    let dragged = false;
    win.addEventListener("click", (e) => { if (dragged) { e.preventDefault(); e.stopPropagation(); dragged = false; } }, true);
    win.addEventListener("dragstart", (e) => e.preventDefault());
    const release = () => {
      if (!drag) return;
      let v = drag.v;
      dragged = drag.moved;
      if (dragged) window.setTimeout(() => { dragged = false; }, 120);
      drag = null;
      if (reduced) return;
      const glide = () => {
        x = wrap(x + v);
        draw();
        v *= 0.94;
        if (Math.abs(v) > 0.3) raf = requestAnimationFrame(glide);
      };
      raf = requestAnimationFrame(glide);
    };
    win.addEventListener("pointerup", release);
    win.addEventListener("pointercancel", release);
  }
}
