import * as React from "react";

/**
 * Testimonial — student or parent quote with name, role, optional score badge.
 */
export interface TestimonialProps {
  quote: React.ReactNode;
  name: string;
  role?: React.ReactNode;
  score?: React.ReactNode;
  avatarUrl?: string;
  style?: React.CSSProperties;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
