// Signature: 5-level glass pyramid. Click a level to surface course recs.
function GlassPyramidTracker() {
  const levels = [
    { id: "a1", title: "A1 — Beginner",      ielts: "IELTS 3.0",  recommend: "Ingliz Tili — Beginner",   meta: "0–2 oy" },
    { id: "a2", title: "A2 — Elementary",    ielts: "IELTS 3.5",  recommend: "Ingliz Tili — Elementary", meta: "2–3 oy" },
    { id: "b1", title: "B1 — Intermediate",  ielts: "IELTS 4.5",  recommend: "CEFR B1 + Foundation",     meta: "2–4 oy" },
    { id: "b2", title: "B2 — Upper",         ielts: "IELTS 5.5",  recommend: "IELTS Foundation",         meta: "3–4 oy" },
    { id: "c1", title: "C1 / C2 — Advanced", ielts: "IELTS 7.0+", recommend: "IELTS Intensive 7.0+",     meta: "3–6 oy" },
  ];
  const [active, setActive] = React.useState(3);
  const cur = levels[active];

  // 5 trapezoidal glass layers (top is narrowest).
  const W = 520, H = 360;
  const layerH = H / 5;
  const layers = levels.map((d, i) => {
    const fromTop = levels.length - 1 - i;
    const yTop = fromTop * layerH;
    const yBot = yTop + layerH;
    const insetTop = (yTop / H) * (W / 2);
    const insetBot = (yBot / H) * (W / 2);
    return {
      ...d,
      idx: i,
      points: `${insetTop+8},${yTop+4} ${W - insetTop-8},${yTop+4} ${W - insetBot-8},${yBot-4} ${insetBot+8},${yBot-4}`,
      cy: (yTop + yBot) / 2,
    };
  });

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 32, alignItems: "center" }}>
      <div>
        <svg viewBox={`0 0 ${W} ${H + 16}`} style={{ width: "100%", height: "auto", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.45))" }}>
          <defs>
            <linearGradient id="gpt-active" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"   stopColor="#FCD34D" stopOpacity="0.95"/>
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.85"/>
            </linearGradient>
            <linearGradient id="gpt-idle" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.22)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)"/>
            </linearGradient>
            <linearGradient id="gpt-sheen" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.35)"/>
              <stop offset="50%"  stopColor="rgba(255,255,255,0)"/>
            </linearGradient>
            <filter id="gpt-blur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="0.6"/>
            </filter>
          </defs>
          {layers.map((l) => {
            const isActive = l.idx === active;
            return (
              <g key={l.id} style={{ cursor: "pointer", transition: "opacity 250ms" }}
                 onClick={() => setActive(l.idx)}>
                <polygon
                  points={l.points}
                  fill={isActive ? "url(#gpt-active)" : "url(#gpt-idle)"}
                  stroke={isActive ? "rgba(252,211,77,0.85)" : "rgba(255,255,255,0.35)"}
                  strokeWidth="1.5"
                  style={{
                    transition: "all 300ms cubic-bezier(.4,0,.2,1)",
                    filter: isActive ? "drop-shadow(0 0 18px rgba(245,158,11,0.65))" : "none",
                  }}
                />
                {/* sheen highlight */}
                <polygon
                  points={l.points}
                  fill="url(#gpt-sheen)"
                  opacity="0.6"
                  pointerEvents="none"
                />
                <text
                  x={W / 2}
                  y={l.cy + 5}
                  textAnchor="middle"
                  fill={isActive ? "#1E1606" : "white"}
                  fontSize="18"
                  fontWeight="700"
                  letterSpacing="0.06em"
                  pointerEvents="none"
                  style={{ textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}
                >{l.id.toUpperCase()}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="glass glass--md" style={{ padding: 28, background: "rgba(15,23,42,0.45)" }}>
        <span className="gbadge gbadge--amber" style={{ marginBottom: 14 }}>
          <G_Sparkle size={12} />
          Sizning darajangiz
        </span>
        <h3 style={{
          fontSize: 30, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em",
          margin: "8px 0 6px", color: "var(--glass-text-primary)",
        }} className="glass-text">{cur.title}</h3>
        <p style={{ color: "var(--glass-text-secondary)", margin: "0 0 22px", fontSize: 15 }}>
          Tahminiy {cur.ielts}
        </p>

        <div style={{ height: 1, background: "rgba(255,255,255,0.12)", margin: "0 0 20px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{
            fontSize: 11, color: "var(--glass-text-tertiary)",
            fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
          }}>Tavsiya etilgan kurs</span>
          <span style={{ fontSize: 22, fontWeight: 700, color: "var(--glass-text-primary)" }}>{cur.recommend}</span>
          <span style={{ fontSize: 14, color: "var(--glass-text-secondary)" }}>{cur.meta}</span>
        </div>

        <a className="gbtn gbtn--amber gbtn--sm" style={{ marginTop: 22 }} href="#register">
          Tanlash
          <G_Arrow size={14} />
        </a>
      </div>
    </div>
  );
}
window.GlassPyramidTracker = GlassPyramidTracker;
