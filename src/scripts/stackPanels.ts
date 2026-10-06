// Stacking panels: each [data-panel] is sticky, so the next one slides over it.
// As the next panel covers it, --cover (0 to 1) is written on the covered panel; CSS turns that into a dim and a small drift.
// Panels taller than the screen stick by their bottom edge, so all of their content scrolls past first.
export function initStack(root: HTMLElement) {
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const panels = [...root.querySelectorAll<HTMLElement>("[data-panel]")];
  if (calm || panels.length < 2) return;
  root.classList.add("is-live");

  const clamp = (n: number) => Math.min(1, Math.max(0, n));
  const place = () => {
    const vh = window.innerHeight;
    panels.forEach((p) => {
      p.style.top = "0px";
      const over = p.offsetHeight - vh;
      p.style.top = over > 0 ? `${-over}px` : "0px";
    });
  };
  const paint = () => {
    const vh = window.innerHeight;
    panels.forEach((p, i) => {
      const next = panels[i + 1];
      if (!next) return;
      const k = clamp((vh - next.getBoundingClientRect().top) / vh);
      p.style.setProperty("--cover", k.toFixed(3));
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; paint(); });
  };
  const measure = () => { place(); paint(); };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", measure);
  new ResizeObserver(measure).observe(root);
  document.fonts?.ready.then(measure);
  measure();
}
