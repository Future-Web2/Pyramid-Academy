import React from "react";

/**
 * Stat — large number with label, used in trust-signal rows.
 */
export function Stat({ value, label, tone = "navy", align = "left", style }) {
  const tones = {
    navy:   { value: "var(--brand-navy-700)", label: "var(--text-muted)" },
    accent: { value: "var(--brand-amber-600)", label: "var(--text-muted)" },
    inverse:{ value: "var(--white)", label: "rgba(255,255,255,0.7)" },
  }[tone];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: align, fontFamily: "var(--font-sans)", ...style }}>
      <span style={{
        fontSize: 44,
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        color: tones.value,
      }}>{value}</span>
      <span style={{ fontSize: 14, fontWeight: 500, color: tones.label }}>{label}</span>
    </div>
  );
}
