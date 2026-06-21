import React from "react";

/**
 * SectionHeading — eyebrow + H2 + optional lede. Page section starter.
 */
export function SectionHeading({ eyebrow, title, lede, align = "left", tone = "default", style }) {
  const colors = tone === "inverse"
    ? { eyebrow: "var(--brand-amber-400)", title: "var(--white)", lede: "rgba(255,255,255,0.78)" }
    : { eyebrow: "var(--brand-navy-700)", title: "var(--text-default)", lede: "var(--text-muted)" };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      textAlign: align,
      maxWidth: align === "center" ? 720 : undefined,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      fontFamily: "var(--font-sans)",
      ...style,
    }}>
      {eyebrow && (
        <span style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: colors.eyebrow,
        }}>{eyebrow}</span>
      )}
      <h2 style={{
        fontSize: "var(--text-h2)",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
        color: colors.title,
        margin: 0,
      }}>{title}</h2>
      {lede && (
        <p style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: colors.lede,
          margin: 0,
          textWrap: "pretty",
        }}>{lede}</p>
      )}
    </div>
  );
}
