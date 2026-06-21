import * as React from "react";

export interface NavLink {
  label: React.ReactNode;
  href: string;
}

/**
 * Navbar — sticky marketing-site header with logo, links, lang switcher, CTA.
 */
export interface NavbarProps {
  links?: NavLink[];
  currentLang?: string;
  langs?: string[];
  onLangChange?: (lang: string) => void;
  cta?: React.ReactNode;
  ctaHref?: string;
  style?: React.CSSProperties;
}

export function Navbar(props: NavbarProps): JSX.Element;
