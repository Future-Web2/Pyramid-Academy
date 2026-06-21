import React from "react";

/**
 * PyramidMark — inline SVG of the brand mark. Color via `color` style.
 */
export function PyramidMark({ size = 32, color, style, ...rest }) {
  return (
    <svg
      viewBox="0 0 200 180"
      width={size}
      height={size * (180 / 200)}
      fill="currentColor"
      aria-label="Pyramid Academy"
      style={{ color, display: "inline-block", flexShrink: 0, ...style }}
      {...rest}
    >
      <path d="M10 160 L70 160 L40 60 Z" />
      <path d="M130 160 L190 160 L160 60 Z" />
      <path d="M100 10 L125 90 L100 160 L75 90 Z" />
    </svg>
  );
}
