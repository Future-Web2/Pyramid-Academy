import React from "react";

/**
 * Badge — small status / category capsule.
 */
export function Badge({ tone = "neutral", children, style, ...rest }) {
  const tones = {
    neutral: { bg: "var(--slate-100)", fg: "var(--slate-700)" },
    navy:    { bg: "var(--brand-navy-50)", fg: "var(--brand-navy-700)" },
    accent:  { bg: "var(--color-accent-soft)", fg: "var(--brand-amber-600)" },
    success: { bg: "var(--success-100)", fg: "var(--success-600)" },
    danger:  { bg: "var(--danger-100)", fg: "var(--danger-600)" },
    info:    { bg: "var(--info-100)", fg: "var(--info-600)" },
    inverse: { bg: "rgba(255,255,255,0.14)", fg: "var(--white)" },
  }[tone];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.4,
        letterSpacing: "0.02em",
        color: tones.fg,
        background: tones.bg,
        borderRadius: "var(--radius-pill)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
