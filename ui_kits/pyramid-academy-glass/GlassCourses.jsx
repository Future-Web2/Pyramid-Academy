// Courses — an ascending liquid-glass PYRAMID of the flagship English track
// (IELTS at the peak, widening down through IELTS Speaking / CEFR / SAT),
// followed by the remaining banner courses blended in the same glass style.
function GlassCourses() {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    e.currentTarget.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  }

  // Top → bottom = narrowest → widest. Peak is the flagship (amber).
  const pyramid = [
    { icon: <G_Cap />,       title: "IELTS",          detail: "0 dan 6 oyda IELTS gacha", band: "6.0–7.5", peak: true,  width: 420 },
    { icon: <G_Mic />,       title: "IELTS Speaking", detail: "Ravon nutq va yuqori ball", band: "7.0+",    width: 560 },
    { icon: <G_FileCheck />, title: "CEFR",           detail: "3 oyda B2 darajasiga",      band: "A1 → C2", width: 700 },
    { icon: <G_Award />,     title: "SAT",            detail: "Amerika universitetlari uchun", band: "1400+", width: 840 },
  ];

  // Remaining courses from the banners, grouped.
  const langs = [
    { icon: <G_Languages />, title: "Rus tili",    note: "3 oyda" },
    { icon: <G_Globe />,     title: "Nemis tili",  note: "3 oyda" },
    { icon: <G_Globe />,     title: "Koreys tili", note: "Boshlang'ich → suhbat" },
    { icon: <G_Book />,      title: "Ona tili",    note: "Imtihon va savodxonlik" },
  ];
  const stem = [
    { icon: <G_Sigma /> , title: "Matematika" },
    { icon: <G_Atom />,   title: "Fizika" },
    { icon: <G_Flask />,  title: "Kimyo" },
    { icon: <G_Leaf />,   title: "Biologiya" },
  ];

  return (
    <section id="courses" style={{ position: "relative", padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}>
      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span className="gbadge gbadge--blue" style={{ marginBottom: 16 }}>Kurslar</span>
        <h2 className="glass-text" style={{
          fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15,
          letterSpacing: "-0.02em", margin: "0 auto 12px", color: "var(--glass-text-primary)", maxWidth: 760,
        }}>
          Bilim piramidasi — yuqoriga intiling
        </h2>
        <p style={{ fontSize: 17, color: "var(--glass-text-secondary)", margin: "0 auto", maxWidth: 620, textWrap: "pretty" }}>
          Ingliz tili yo'nalishimiz cho'qqisi — IELTS. Har bir qatlam keyingisiga
          poydevor: pastdan yuqoriga, natijaga qadam-baqadam.
        </p>
      </div>

      {/* ─────────  THE PYRAMID  ───────── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 16, position: "relative" }} className="g-pyramid">
        {/* Glowing cap mark above the peak */}
        <div data-parallax data-speed="-0.06" style={{ marginBottom: 4, color: "#FCD34D", filter: "drop-shadow(0 0 20px rgba(245,158,11,0.7))" }}>
          <GlassPyramidMark size={46} />
        </div>

        {pyramid.map((c, i) => (
          <div
            key={c.title}
            className="glass glass--md glass--interactive glass--liquid glass--sheen g-pyr-row"
            data-parallax data-speed={(0.015 * i).toFixed(3)}
            onMouseMove={onMove}
            style={{
              width: c.width, maxWidth: "100%",
              padding: "18px 28px",
              display: "flex", alignItems: "center", gap: 18,
              background: c.peak
                ? "linear-gradient(180deg, rgba(251,191,36,0.30), rgba(245,158,11,0.10))"
                : "rgba(15,23,42,0.42)",
              borderColor: c.peak ? "rgba(251,191,36,0.55)" : undefined,
              boxShadow: c.peak ? "0 0 44px rgba(245,158,11,0.4), var(--glass-shadow)" : undefined,
            }}
          >
            <span className="sheen-track" aria-hidden />
            <div style={{
              width: 48, height: 48, borderRadius: 14, flexShrink: 0,
              background: c.peak ? "rgba(245,158,11,0.28)" : "rgba(59,130,246,0.18)",
              color: c.peak ? "#FCD34D" : "#93C5FD",
              border: "1px solid " + (c.peak ? "rgba(251,191,36,0.5)" : "rgba(96,165,250,0.32)"),
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}>{c.icon}</div>

            <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span className="glass-text" style={{
                  fontSize: c.peak ? 26 : 22, fontWeight: 800, letterSpacing: "-0.01em",
                  color: c.peak ? "#FDE68A" : "var(--glass-text-primary)",
                }}>{c.title}</span>
                <span className={c.peak ? "gbadge gbadge--amber" : "gbadge gbadge--blue"} style={{ padding: "3px 9px", fontSize: 11 }}>{c.band}</span>
              </div>
              <div style={{ fontSize: 14, color: "var(--glass-text-secondary)", marginTop: 2 }}>{c.detail}</div>
            </div>

            <a className={c.peak ? "gbtn gbtn--amber gbtn--sm" : "gbtn gbtn--ghost gbtn--sm"} href="#register" style={{ flexShrink: 0 }}>
              Tanlash
              <G_Arrow size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* ─────────  REMAINING COURSES  ───────── */}
      <div style={{ marginTop: 72 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          <h3 className="glass-text" style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "var(--glass-text-primary)" }}>
            Boshqa yo'nalishlar
          </h3>
          <span style={{ fontSize: 13, color: "var(--glass-text-tertiary)" }}>Tillar · Aniq fanlar</span>
        </div>

        {/* Languages row */}
        <div className="g-rest-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {langs.map((c, i) => (
            <div key={c.title}
                 className="glass glass--md glass--interactive glass--liquid"
                 data-parallax data-speed={(0.02 + (i % 4) * 0.02).toFixed(3)}
                 onMouseMove={onMove}
                 style={{ padding: 22, background: "rgba(15,23,42,0.42)", display: "flex", flexDirection: "column", gap: 14, minHeight: 168 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 13,
                background: "rgba(59,130,246,0.18)", color: "#93C5FD",
                border: "1px solid rgba(96,165,250,0.32)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>{c.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="glass-text" style={{ fontSize: 18, fontWeight: 700, color: "var(--glass-text-primary)" }}>{c.title}</div>
                <div style={{ fontSize: 13, color: "var(--glass-text-secondary)", marginTop: 3 }}>{c.note}</div>
              </div>
              <a className="gbtn gbtn--ghost gbtn--sm" href="#register" style={{ alignSelf: "flex-start" }}>
                Tanlash <G_Arrow size={13} />
              </a>
            </div>
          ))}
        </div>

        {/* STEM strip — grouped, "fast & effective for certificates" */}
        <div className="glass glass--md glass--sheen g-stem"
             data-parallax data-speed="0.03"
             style={{ marginTop: 16, padding: "24px 28px", background: "rgba(15,23,42,0.42)",
                      display: "grid", gridTemplateColumns: "auto 1px repeat(4, 1fr)", gap: 24, alignItems: "center" }}>
          <span className="sheen-track" aria-hidden />
          <div style={{ maxWidth: 180 }}>
            <div className="glass-text" style={{ fontSize: 18, fontWeight: 700, color: "var(--glass-text-primary)" }}>Aniq fanlar</div>
            <div style={{ fontSize: 13, color: "var(--glass-text-secondary)", marginTop: 4 }}>Sertifikatlar uchun tez va samarali tanlov</div>
          </div>
          <div style={{ width: 1, height: 56, background: "rgba(255,255,255,0.12)" }} className="g-stem-div" />
          {stem.map((c) => (
            <div key={c.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
              <div style={{
                width: 46, height: 46, borderRadius: 13,
                background: "rgba(96,165,250,0.14)", color: "#93C5FD",
                border: "1px solid rgba(96,165,250,0.3)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>{c.icon}</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--glass-text-primary)" }}>{c.title}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .g-pyramid .g-pyr-row { width: 100% !important; }
          .g-rest-grid { grid-template-columns: 1fr 1fr !important; }
          .g-stem { grid-template-columns: 1fr 1fr !important; }
          .g-stem .g-stem-div { display: none !important; }
        }
        @media (max-width: 560px) {
          .g-rest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
window.GlassCourses = GlassCourses;
