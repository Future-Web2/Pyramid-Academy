import * as React from "react";

/**
 * CourseCard — single course tile used in the course grid.
 * Set `highlighted` for the single "featured" course (navy felt + amber CTA).
 */
export interface CourseCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  audience?: React.ReactNode;
  duration?: React.ReactNode;
  level?: React.ReactNode;
  href?: string;
  cta?: React.ReactNode;
  highlighted?: boolean;
  style?: React.CSSProperties;
}

export function CourseCard(props: CourseCardProps): JSX.Element;
