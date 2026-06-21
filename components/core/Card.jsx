import React from "react";

/**
 * Card — neutral surface container with optional hover lift.
 */
export function Card({
  as: Comp = "div",
  padding = "lg",
  interactive = false,
  variant = "surface",
  style,
  children,
  ...rest
}) {
  const pad = { none: 0, sm: 16, md: 20, lg: 24, xl: 32 }[padding];
  const variants = {
    surface: { background: "var(--bg-surface)", color: "var(--text-default)", border: "1px solid var(--border-default)" },
    muted:   { background: "var(--bg-surface-muted)", color: "var(--text-default)", border: "1px solid transparent" },
    navy:    { background: "var(--brand-navy-900)", color: "var(--text-inverse)", border: "1px solid var(--brand-navy-800)", backgroundImage: "var(--gradient-navy-felt)" },
    outline: { background: "transparent", color: "var(--text-default)", border: "1px solid var(--border-default)" },
  }[variant];

  return (
    <Comp
      style={{
        borderRadius: "var(--radius-lg)",
        padding: pad,
        boxShadow: interactive ? "var(--shadow-sm)" : "var(--shadow-xs)",
        transition: interactive ? "transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)" : undefined,
        cursor: interactive ? "pointer" : undefined,
        ...variants,
        ...style,
      }}
      onMouseEnter={interactive ? (e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; } : undefined}
      onMouseLeave={interactive ? (e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; } : undefined}
      {...rest}
    >
      {children}
    </Comp>
  );
}
