// Inline brand mark — currentColor SVG.
function GlassPyramidMark({ size = 36, style }) {
  return (
    <svg viewBox="0 0 200 180" width={size} height={size * 0.9} fill="currentColor" style={{ display: "inline-block", flexShrink: 0, ...style }} aria-label="Pyramid Academy">
      <path d="M10 160 L70 160 L40 60 Z" />
      <path d="M130 160 L190 160 L160 60 Z" />
      <path d="M100 10 L125 90 L100 160 L75 90 Z" />
    </svg>
  );
}
window.GlassPyramidMark = GlassPyramidMark;
