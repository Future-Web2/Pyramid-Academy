import * as React from "react";

export type BadgeTone = "neutral" | "navy" | "accent" | "success" | "danger" | "info" | "inverse";

/**
 * Badge — small pill label used for course duration, "Yangi", level chips, etc.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  children: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
