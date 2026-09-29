(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Rotating headline word
  const rotator = document.querySelector(".rotator");
  const words = rotator.dataset.words.split(",").map((w) => w.trim());
  const INTERVAL = 2200;
  const DURATION = 550;
  const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";
  let index = 0;

  function next() {
    index = (index + 1) % words.length;
    const current = rotator.querySelector(".rotator-word:last-child");

    if (reduceMotion) {
      current.textContent = words[index];
      return;
    }

    const incoming = document.createElement("span");
    incoming.className = "rotator-word";
    incoming.textContent = words[index];
    incoming.style.position = "absolute";
    incoming.style.inset = "0";
    rotator.appendChild(incoming);

    const opts = { duration: DURATION, easing: EASE, fill: "forwards" };
    current.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
      opts
    );
    incoming
      .animate(
        [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }],
        opts
      )
      .finished.then(() => {
        current.remove();
        incoming.style.position = "";
        incoming.style.inset = "";
        incoming.getAnimations().forEach((a) => a.cancel());
      });
  }

  setInterval(() => {
    if (!document.hidden) next();
  }, INTERVAL);

  // Menu toggle
  const btn = document.querySelector(".menu-btn");
  const menu = document.getElementById("menu");

  function setMenu(open) {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
  }

  btn.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) setMenu(false);
  });

  // Cursor dot
  const dot = document.querySelector(".cursor-dot");
  let x = 0, y = 0, dx = 0, dy = 0, raf = null;

  function follow() {
    dx += (x - dx) * 0.18;
    dy += (y - dy) * 0.18;
    dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    raf = requestAnimationFrame(follow);
  }

  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    x = e.clientX;
    y = e.clientY;
    if (!dot.classList.contains("is-visible")) {
      dx = x;
      dy = y;
      dot.classList.add("is-visible");
    }
    if (!raf) follow();
  });
  document.addEventListener("pointerleave", () => dot.classList.remove("is-visible"));
})();
