import React from "react";
import { Card } from "../core/Card.jsx";

/**
 * Testimonial — quote + author block. Photo is optional; falls back to initials.
 */
export function Testimonial({ quote, name, role, score, avatarUrl, style }) {
  const initials = (name || "")
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card padding="lg" style={{ display: "flex", flexDirection: "column", gap: 18, height: "100%", ...style }}>
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden style={{ color: "var(--brand-amber-500)" }}>
        <path d="M0 22V13C0 6 4 1 11 0L12 3C8 4 6 7 6 11H11V22H0ZM17 22V13C17 6 21 1 28 0L29 3C25 4 23 7 23 11H28V22H17Z" fill="currentColor"/>
      </svg>
      <p style={{
        fontSize: 17, lineHeight: 1.6, margin: 0,
        color: "var(--text-default)", textWrap: "pretty", flex: 1,
      }}>{quote}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {avatarUrl ? (
          <img src={avatarUrl} alt="" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
        ) : (
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "var(--brand-navy-50)",
            color: "var(--brand-navy-700)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 15,
          }}>{initials}</div>
        )}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
          <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text-default)" }}>{name}</span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{role}{score ? " · " + score : ""}</span>
        </div>
      </div>
    </Card>
  );
}
