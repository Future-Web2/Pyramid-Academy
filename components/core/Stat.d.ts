import * as React from "react";

/**
 * Stat — big-number proof point. Used in trust-signal rows ("5 yillik tajriba", "1.3K+").
 */
export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  tone?: "navy" | "accent" | "inverse";
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
