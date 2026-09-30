// "X-ray" hover: a soft circle follows the pointer over big type and reveals a second colour
// inside the letters. Mouse only, and skipped when the visitor prefers reduced motion.
export function initXray(zone: Element | null, radiusRem = 9) {
  if (!zone) return;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduced) return;

  const leaves = [...zone.querySelectorAll<HTMLElement>("[data-xray]")];
  if (zone instanceof HTMLElement && zone.hasAttribute("data-xray")) leaves.push(zone);
  if (!leaves.length) return;

  const radius = `${radiusRem * parseFloat(getComputedStyle(document.documentElement).fontSize)}px`;
  leaves.forEach((el) => el.classList.add("is-xray-ready"));

  let queued = false;
  let pt = { x: 0, y: 0 };
  const place = () => {
    queued = false;
    for (const el of leaves) {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--xr-x", `${pt.x - r.left}px`);
      el.style.setProperty("--xr-y", `${pt.y - r.top}px`);
    }
  };
  const setR = (value: string) => leaves.forEach((el) => el.style.setProperty("--xr-r", value));

  zone.addEventListener("pointermove", (e) => {
    const ev = e as PointerEvent;
    if (ev.pointerType !== "mouse") return;
    pt = { x: ev.clientX, y: ev.clientY };
    if (!queued) { queued = true; requestAnimationFrame(place); }
  });
  zone.addEventListener("pointerenter", (e) => {
    const ev = e as PointerEvent;
    if (ev.pointerType !== "mouse") return;
    pt = { x: ev.clientX, y: ev.clientY };
    place();
    setR(radius);
  });
  zone.addEventListener("pointerleave", () => setR("0px"));
  window.addEventListener("blur", () => setR("0px"));
}
