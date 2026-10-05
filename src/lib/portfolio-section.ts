// Which portfolio section is on screen: "brand", "web", "app", "social" or "faq".
// Shared by the desktop page bar (DesignPageNav) and the phone pill (DesignPageNavMobile).
export function currentKind(): string {
  const wall = document.getElementById("more-work");
  const faq = document.getElementById("faq");
  if (!wall || !faq) return "brand";
  const line = window.innerHeight * 0.4;
  if (faq.getBoundingClientRect().top <= line) return "faq";
  if (wall.getBoundingClientRect().top <= line) {
    const slug = document.querySelector<HTMLElement>(".dz-rail--wall a[aria-current]")?.dataset.spy;
    return (slug && document.getElementById(slug)?.dataset.kind) || "web";
  }
  return "brand";
}
