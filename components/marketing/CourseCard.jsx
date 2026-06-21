import React from "react";
import { Card } from "../core/Card.jsx";
import { Badge } from "../core/Badge.jsx";
import { Button } from "../core/Button.jsx";

/**
 * CourseCard — single course tile (icon + title + meta + CTA).
 */
export function CourseCard({
  icon,
  title,
  description,
  audience,
  duration,
  level,
  href = "#",
  cta = "Kursni Tanlash",
  highlighted = false,
  style,
}) {
  return (
    <Card
      interactive
      padding="lg"
      variant={highlighted ? "navy" : "surface"}
      style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%", ...style }}
    >
      <div style={{
        width: 48, height: 48,
        borderRadius: "var(--radius-md)",
        background: highlighted ? "rgba(245,158,11,0.18)" : "var(--brand-navy-50)",
        color: highlighted ? "var(--brand-amber-400)" : "var(--brand-navy-700)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {icon}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <h3 style={{
            fontSize: 22, fontWeight: 700, margin: 0,
            letterSpacing: "-0.01em", lineHeight: 1.25,
            color: highlighted ? "var(--white)" : "var(--text-default)",
          }}>{title}</h3>
          {level && <Badge tone={highlighted ? "inverse" : "accent"}>{level}</Badge>}
        </div>
        <p style={{
          fontSize: 15, lineHeight: 1.6, margin: 0,
          color: highlighted ? "rgba(255,255,255,0.78)" : "var(--text-muted)",
        }}>{description}</p>
      </div>

      <div style={{
        display: "flex", flexDirection: "column", gap: 6,
        fontSize: 13,
        color: highlighted ? "rgba(255,255,255,0.7)" : "var(--text-subtle)",
      }}>
        {audience && <span><strong style={{ color: highlighted ? "var(--white)" : "var(--text-default)", fontWeight: 600 }}>Auditoriya:</strong> {audience}</span>}
        {duration && <span><strong style={{ color: highlighted ? "var(--white)" : "var(--text-default)", fontWeight: 600 }}>Davomiyligi:</strong> {duration}</span>}
      </div>

      <Button
        variant={highlighted ? "accent" : "secondary"}
        size="md"
        href={href}
        fullWidth
      >{cta}</Button>
    </Card>
  );
}
