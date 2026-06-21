import * as React from "react";

export interface PyramidLevel {
  id: string;
  title: string;
  ielts?: string;
  recommend: string;
  meta?: string;
}

/**
 * PyramidProgress — Pyramid Academy's signature on-brand interaction.
 * Five ascending trapezoidal levels (A1 → C2 / IELTS 0 → 7.0+) that the
 * user clicks to surface a course recommendation. Built around the
 * three-triangle brand mark conceptually (the pyramid of success).
 */
export interface PyramidProgressProps {
  levels?: PyramidLevel[];
  defaultLevel?: number;
  onSelect?: (level: PyramidLevel) => void;
  style?: React.CSSProperties;
}

export function PyramidProgress(props: PyramidProgressProps): JSX.Element;
