import * as React from "react";

/**
 * PyramidMark — the brand mark (three triangles forming a pyramid).
 * Colored via `currentColor` — set `color` or wrap in a colored element.
 */
export interface PyramidMarkProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

export function PyramidMark(props: PyramidMarkProps): JSX.Element;
