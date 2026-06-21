import React, { useState } from "react";
import { PyramidMark } from "./PyramidMark.jsx";

/**
 * PyramidProgress — the signature interaction.
 * 5 ascending levels of an SVG pyramid; click a level to see the
 * matched course recommendation in the side panel.
 */
export function PyramidProgress({ levels, onSelect, defaultLevel = 0, style }) {
  const data = levels || [
    { id: "a1", title: "A1 — Beginner",      ielts: "IELTS 3.0",  recommend: "Ingliz Tili — Beginner",   meta: "0–2 months" },
    { id: "a2", title: "A2 — Elementary",    ielts: "IELTS 3.5",  recommend: "Ingliz Tili — Elementary", meta: "2–3 months" },
    { id: "b1", title: "B1 — Intermediate",  ielts: "IELTS 4.5",  recommend: "CEFR B1 + Foundation",     meta: "2–4 months" },
    { id: "b2", title: "B2 — Upper",         ielts: "IELTS 5.5",  recommend: "IELTS Foundation",         meta: "3–4 months" },
    { id: "c1", title: "C1 / C2 — Advanced", ielts: "IELTS 7.0+", recommend: "IELTS Intensive 7.0+",     meta: "3–6 months" },
  ];
  const [active, setActive] = useState(defaultLevel);

  // 5 trapezoidal layers stacked, each narrower than the last.
  // Geometry: total 5 layers across 360 height, 480 base width.
  const W = 480, H = 360;
  const layerH = H / 5;
  const layers = data.map((d, i) => {
    const fromTop = data.length - 1 - i; // top layer is last in data
    const yTop = fromTop * layerH;
    const yBot = yTop + layerH;
    const insetTop = (yTop / H) * (W / 2);
    const insetBot = (yBot / H) * (W / 2);
    return {
      ...d,
      idx: i,
      points: `${insetTop},${yTop} ${W - insetTop},${yTop} ${W - insetBot},${yBot} ${insetBot},${yBot}`,
      centroidY: (yTop + yBot) / 2,
    };
  });

  const cur = data[active];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
        gap: 32,
        alignItems: "center",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <div style={{ position: "relative" }}>
        <svg viewBox={`0 0 ${W} ${H + 28}`} style={{ width: "100%", height: "auto", display: "block" }}>
          <defs>
            <linearGradient id="pp-active" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#FBBF24"/>
              <stop offset="100%" stopColor="#D97706"/>
            </linearGradient>
            <linearGradient id="pp-idle" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1E40AF"/>
              <stop offset="100%" stopColor="#0B1E4A"/>
            </linearGradient>
          </defs>
          {layers.map((l) => {
            const isActive = l.idx === active;
            const fromTop = layers.length - 1 - l.idx;
            return (
              <g key={l.id} style={{ cursor: "pointer" }}
                 onClick={() => { setActive(l.idx); onSelect && onSelect(l); }}
                 onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.92"; }}
                 onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                <polygon
                  points={l.points}
                  fill={isActive ? "url(#pp-active)" : "url(#pp-idle)"}
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.5"
                  style={{ transition: "fill 200ms cubic-bezier(.4,0,.2,1)" }}
                />
                <text
                  x={W / 2}
                  y={l.centroidY + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize={fromTop === 0 ? 16 : 18}
                  fontWeight={700}
                  letterSpacing="0.04em"
                >{l.id.toUpperCase()}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        padding: 24,
        boxShadow: "var(--shadow-sm)",
      }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--brand-amber-600)",
        }}>
          <PyramidMark size={14} color="var(--brand-amber-600)" />
          Sizning darajangiz
        </span>
        <h3 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 4px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
          {cur.title}
        </h3>
        <p style={{ color: "var(--text-muted)", margin: "0 0 18px", fontSize: 15 }}>
          Tahminiy {cur.ielts}
        </p>

        <div style={{ height: 1, background: "var(--border-default)", margin: "0 0 18px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontSize: 12, color: "var(--text-subtle)", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>Tavsiya etilgan kurs</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text-default)" }}>{cur.recommend}</span>
          <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{cur.meta}</span>
        </div>
      </div>
    </div>
  );
}
