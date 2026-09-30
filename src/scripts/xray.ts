// "X-ray" hover: letters near the pointer flip to a second colour, with a soft falloff so the
// nearest letters change fully and their neighbours part-way. Mouse only; skipped for reduced motion.
const split = (el: HTMLElement) => {
  const text = el.textContent ?? "";
  el.dataset.xrText = text;
  el.textContent = "";
  for (const ch of text) {
    if (ch === " ") {
      el.append(" ");
      continue;
    }
    const s = document.createElement("span");
    s.className = "xr-ch";
    s.textContent = ch;
    el.append(s);
  }
};

export function initXray(zone: Element | null, radiusRem = 10) {
  if (!zone) return;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduced) return;

  const leaves = [...zone.querySelectorAll<HTMLElement>("[data-xray]")];
  if (zone instanceof HTMLElement && zone.hasAttribute("data-xray")) leaves.push(zone);
  if (!leaves.length) return;

  const R = radiusRem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  let pt: { x: number; y: number } | null = null;
  let queued = false;

  const paint = () => {
    queued = false;
    for (const el of leaves) {
      for (const ch of el.querySelectorAll<HTMLElement>(".xr-ch")) {
        let t = 0;
        if (pt) {
          const r = ch.getBoundingClientRect();
          const d = Math.hypot(r.left + r.width / 2 - pt.x, r.top + r.height / 2 - pt.y);
          t = Math.max(0, 1 - d / R);
          t = Math.min(1, t * 2.6); // nearest letters reach full colour, edges stay crisp
        }
        ch.style.setProperty("--t", t.toFixed(3));
      }
    }
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };

  leaves.forEach((el) => {
    split(el);
    el.classList.add("is-xray-ready");
    // The rotating word swaps its text: split the new word as soon as it changes.
    new MutationObserver(() => {
      if (el.textContent !== el.dataset.xrText) { split(el); queue(); }
    }).observe(el, { childList: true });
  });

  zone.addEventListener("pointermove", (e) => {
    const ev = e as PointerEvent;
    if (ev.pointerType !== "mouse") return;
    pt = { x: ev.clientX, y: ev.clientY };
    queue();
  });
  const off = () => { pt = null; queue(); };
  zone.addEventListener("pointerleave", off);
  window.addEventListener("blur", off);
  document.addEventListener("scroll", () => { if (pt) queue(); }, { passive: true });
}
