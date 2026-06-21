import * as React from "react";

/**
 * SectionHeading — the eyebrow + H2 + lede that opens a page section.
 * Uses the brand's overline-eyebrow + tight-display-H2 convention.
 */
export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
