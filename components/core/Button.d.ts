import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Button — the primary call-to-action.
 *
 * Use `primary` for the single main action per view (navy fill).
 * Use `accent` (amber) only for the one highest-conversion moment per view —
 * typically the hero's enrollment CTA. Never two accents on screen at once.
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Render as `<a>` automatically when `href` is set. */
  href?: string;
  /** Render as a different element/component. */
  as?: React.ElementType;
  fullWidth?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
