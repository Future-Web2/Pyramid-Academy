import * as React from "react";

export type CardPadding = "none" | "sm" | "md" | "lg" | "xl";
export type CardVariant = "surface" | "muted" | "navy" | "outline";

/**
 * Card — neutral container. Use `surface` for default content cards,
 * `navy` for hero/promotional emphasis blocks (felt backdrop), and
 * `outline` when the surface needs to read transparent.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  padding?: CardPadding;
  variant?: CardVariant;
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
