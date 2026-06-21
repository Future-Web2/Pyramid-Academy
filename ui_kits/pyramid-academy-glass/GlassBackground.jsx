// Animated background — fixed mesh + three floating orbs.
// Each orb has an outer parallax wrapper (JS-driven on scroll) and an inner
// element with the CSS keyframe float — so both motions compose cleanly.
function GlassBackground() {
  return (
    <div className="glass-bg" aria-hidden>
      <div data-parallax data-speed="-0.18" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="glass-orb glass-orb--1" />
      </div>
      <div data-parallax data-speed="-0.10" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="glass-orb glass-orb--2" />
      </div>
      <div data-parallax data-speed="-0.22" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="glass-orb glass-orb--3" />
      </div>
    </div>
  );
}
window.GlassBackground = GlassBackground;
