// Hero — split layout: glass text card on the left, glass-framed video on the right.
function GlassHero() {
  const videoRef = React.useRef(null);

  // Track mouse on the video card for liquid-glass sheen.
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    e.currentTarget.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  }

  return (
    <section id="home" style={{ position: "relative", padding: "48px 24px 96px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
        gap: 40,
        alignItems: "stretch",
      }} className="g-hero-grid">
        {/* Left: text + CTAs */}
        <div data-parallax data-speed="0.06" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "16px 0" }}>
          <span className="gbadge gbadge--amber" style={{ marginBottom: 24 }}>
            <GlassPyramidMark size={12} style={{ color: "#FCD34D" }} />
            Yangihayot filiali — yangi guruhlar
          </span>

          <h1 className="glass-text" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(40px, 5.2vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            margin: 0,
            color: "var(--glass-text-primary)",
            textWrap: "balance",
          }}>
            Zamonaviy Ta'lim Markazi —{" "}
            <span style={{
              backgroundImage: "linear-gradient(180deg, #FCD34D 0%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "drop-shadow(0 4px 16px rgba(245,158,11,0.35))",
            }}>Mukammal Natijalar</span>{" "}
            IELTS, CEFR va SAT da
          </h1>

          <p style={{
            color: "var(--glass-text-secondary)",
            fontSize: 19, lineHeight: 1.65,
            margin: "24px 0 36px",
            maxWidth: 560,
            textWrap: "pretty",
          }} className="glass-text">
            Toshkentda 5 yillik tajriba. Yangihayot filialida yangi guruhlar ochiq.
            Ingliz, rus va o'zbek tillarda ta'lim.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="gbtn gbtn--amber gbtn--lg" href="#register">
              Guruhga Qatnish
              <G_Arrow size={20} />
            </a>
            <a className="gbtn gbtn--ghost gbtn--lg" href="#courses">
              Batafsil Ma'lumot
            </a>
          </div>

          <div style={{ display: "flex", gap: 32, marginTop: 44, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em" }}>5</div>
              <div style={{ fontSize: 13, color: "var(--glass-text-tertiary)", marginTop: 4 }}>Yillik tajriba</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em" }}>1.3K+</div>
              <div style={{ fontSize: 13, color: "var(--glass-text-tertiary)", marginTop: 4 }}>Instagram followers</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.02em", color: "#FCD34D" }}>7+</div>
              <div style={{ fontSize: 13, color: "var(--glass-text-tertiary)", marginTop: 4 }}>Kurs yo'nalishi</div>
            </div>
          </div>
        </div>

        {/* Right: glass-framed video */}
        <div
          className="glass glass--xl glass--liquid glass--sheen"
          data-parallax data-speed="-0.08"
          style={{
            padding: 14,
            background: "rgba(15,23,42,0.4)",
            animation: "g-hero-rise 900ms cubic-bezier(.2,.7,.1,1) both",
            minHeight: 480,
          }}
          onMouseMove={onMove}
        >
          <span className="sheen-track" aria-hidden />
          <div style={{
            position: "relative", width: "100%", height: "100%",
            borderRadius: 24, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "#0B1428",
            aspectRatio: "4 / 5",
          }}>
            <video
              ref={videoRef}
              src={(typeof window !== "undefined" && window.__resources && window.__resources.heroVideo) || "./assets/loader.mp4"}
              autoPlay muted loop playsInline
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%", objectFit: "cover",
                display: "block",
              }}
            />
            {/* Readability overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(5,11,31,0.0) 40%, rgba(5,11,31,0.55) 100%)",
              pointerEvents: "none",
            }} />
            {/* Bottom caption */}
            <div style={{
              position: "absolute", left: 20, right: 20, bottom: 20,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              color: "white", fontSize: 13,
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            }}>
              <span className="gbadge" style={{
                background: "rgba(0,0,0,0.35)",
                borderColor: "rgba(255,255,255,0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: 999,
                  background: "#F87171", boxShadow: "0 0 8px #F87171",
                  display: "inline-block",
                }}/>
                LIVE — sentabr guruhi
              </span>
              <span style={{ opacity: 0.85, letterSpacing: "0.04em" }}>Pyramid Academy ↗</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes g-hero-rise {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @media (max-width: 900px) {
          .g-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
window.GlassHero = GlassHero;
