// Hero — the navy felt environment with H1, subhead, CTAs, and PyramidProgress.
const { Button: PA_Button, Badge: PA_Badge, PyramidMark: PA_PyramidMark, PyramidProgress: PA_PyramidProgress } = window.PyramidAcademyDesignSystem_4db737;

function Hero() {
  return (
    <section style={{
      position: "relative",
      backgroundImage: "var(--gradient-navy-felt)",
      color: "white",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto",
        padding: "96px 24px 120px",
        display: "grid",
        gridTemplateColumns: "1.05fr 1fr",
        gap: 64,
        alignItems: "center",
        position: "relative",
      }}>
        <div>
          <PA_Badge tone="inverse" style={{ marginBottom: 24 }}>
            <PA_PyramidMark size={12} color="var(--brand-amber-400)" />
            <span style={{ color: "var(--brand-amber-400)" }}>Yangihayot filiali — yangi guruhlar</span>
          </PA_Badge>

          <h1 style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            margin: 0,
            color: "white",
            textWrap: "balance",
          }}>
            Zamonaviy Ta'lim Markazi —{" "}
            <span style={{
              background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>Mukammal Natijalar</span>{" "}
            IELTS, CEFR va SAT da
          </h1>

          <p style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.78)",
            margin: "24px 0 36px",
            maxWidth: 540,
            textWrap: "pretty",
          }}>
            Toshkentda 5 yillik tajriba. Yangihayot filialida yangi guruhlar ochiq. 
            Ingliz, rus va o'zbek tillarda ta'lim.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <PA_Button variant="accent" size="lg" href="#register" iconRight={<ArrowRight size={20} />}>
              Guruhga Qatnish
            </PA_Button>
            <PA_Button variant="inverse" size="lg" href="#courses">
              Batafsil Ma'lumot
            </PA_Button>
          </div>

          <div style={{
            display: "flex", gap: 36, marginTop: 48,
            paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.14)",
          }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>5</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>Yillik tajriba</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>1.3K+</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>Instagram followers</div>
            </div>
            <div>
              <div style={{
                fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1,
                color: "var(--brand-amber-400)",
              }}>7+</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>Kurs yo'nalishi</div>
            </div>
          </div>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--radius-xl)",
          padding: 28,
          boxShadow: "0 32px 64px -16px rgba(0,0,0,0.4)",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--brand-amber-400)", marginBottom: 16,
          }}>
            <Sparkles size={14} />
            Pyramid Progress Tracker
          </div>
          <PyramidProgressOnDark />
        </div>
      </div>
    </section>
  );
}

// Variant of PyramidProgress styled for dark backgrounds (overrides the
// inner recommendation card to be transparent + white text).
function PyramidProgressOnDark() {
  return (
    <div style={{ "--bg-surface": "rgba(255,255,255,0.06)", "--border-default": "rgba(255,255,255,0.1)", "--text-default": "white", "--text-muted": "rgba(255,255,255,0.7)", "--text-subtle": "rgba(255,255,255,0.55)" }}>
      <PA_PyramidProgress defaultLevel={3} />
    </div>
  );
}

window.Hero = Hero;
