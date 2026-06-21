// Subtle, cinematic parallax engine.
// Listens to scroll once (rAF-throttled), updates transform on any element
// tagged with [data-parallax]. Speed is the fraction of scroll to translate by:
//   data-speed="-0.15"  → drifts UP as the page scrolls (background feel)
//   data-speed="0.08"   → drifts DOWN slightly slower than scroll (midground)
//   data-speed="0.0"    → fixed to scroll (default content)
// Optional data-scale="0.0001" adds a tiny scale change per scrolled px.
// Optional data-origin="center" sets transform-origin.
//
// Honors prefers-reduced-motion (disables all parallax).
// Disables on small screens (<= 720px) where it costs more than it helps.

(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small  = window.matchMedia("(max-width: 720px)").matches;
  if (reduce || small) return;

  let ticking = false;
  let lastY = window.scrollY;

  function collect() {
    return Array.from(document.querySelectorAll("[data-parallax]")).map(el => {
      const speed = parseFloat(el.dataset.speed || el.dataset.parallax || "0");
      const scale = parseFloat(el.dataset.scale || "0");
      const anchor = el.getBoundingClientRect().top + window.scrollY;
      return { el, speed, scale, anchor };
    });
  }

  let nodes = [];

  function update() {
    ticking = false;
    const y = lastY;
    for (const n of nodes) {
      const dy = (y - n.anchor) * n.speed;
      const ds = 1 + (y - n.anchor) * n.scale;
      // translate3d keeps it on the compositor
      n.el.style.transform = "translate3d(0," + dy.toFixed(2) + "px,0)" +
        (n.scale ? " scale(" + ds.toFixed(4) + ")" : "");
    }
  }

  function onScroll() {
    lastY = window.scrollY;
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  function refresh() {
    nodes = collect();
    update();
  }

  // Mount after DOM + React render settle
  function init() {
    refresh();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => { setTimeout(refresh, 60); });
    // React mounts asynchronously; re-collect a beat later
    setTimeout(refresh, 200);
    setTimeout(refresh, 800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.__pa_parallax_refresh = refresh;
})();
