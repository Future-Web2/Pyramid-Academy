// Trust — video-short testimonial cards (parent/student reviews) + stats strip.
// Each card holds a vertical 9:16 short with real play/pause + mute UX,
// a glass frame, and a caption overlay (name, role, result).
function GlassTrust() {
  const reviews = [
    { src: "./assets/loader.mp4", name: "Nodira Rahimova", role: "Ota-ona", result: "Farzandi — IELTS 7.0",
      desc: "«Bolam 5 oyda ravon gapira boshladi. O'qituvchilar har bir dars natijasini bizga yetkazib turishadi.»" },
    { src: "./assets/loader.mp4", name: "Jamshid Tursunov", role: "Ota-ona", result: "Farzandi — SAT 1460",
      desc: "«SAT guruhida tartib va metodika kuchli. Ball haqiqatan ko'tarildi — biz juda mamnunmiz.»" },
    { src: "./assets/loader.mp4", name: "Madina Yo'ldosheva", role: "Talaba", result: "CEFR C1",
      desc: "«Speaking darslar jonli o'tadi. Avval qo'rqardim, hozir erkin suhbatlashaman.»" },
    { src: "./assets/loader.mp4", name: "Bekzod Ergashev", role: "Ota-ona", result: "Farzandi — Matematika",
      desc: "«Mental arifmetikadan keyin hisoblash tezligi sezilarli oshdi. Maktabda eng oldida.»" },
  ];

  return (
    <section id="reviews" style={{ position: "relative", padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span className="gbadge gbadge--blue" style={{ marginBottom: 16 }}>Video sharhlar</span>
        <h2 className="glass-text" style={{
          fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2,
          letterSpacing: "-0.02em", margin: "0 auto 12px", color: "var(--glass-text-primary)", maxWidth: 720,
        }}>
          Ota-onalar va talabalar o'z so'zlari bilan
        </h2>
        <p style={{ fontSize: 17, color: "var(--glass-text-secondary)", margin: 0 }}>
          Real natijalar, real hikoyalar. Kartochkani bosib videoni tomosha qiling.
        </p>
      </div>

      <div className="g-reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {reviews.map((r, i) => (
          <VideoReview key={i} {...r} delay={i} />
        ))}
      </div>

      {/* Stats strip */}
      <div className="glass glass--md g-trust-strip" style={{
        marginTop: 32, padding: "28px 32px",
        background: "rgba(15,23,42,0.45)",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr) auto",
        gap: 32, alignItems: "center",
      }}>
        <Stat3 v="5"     l="Yillik tajriba" />
        <Stat3 v="1.3K+" l="Instagram followers" />
        <Stat3 v="2"     l="Filial" />
        <Stat3 v="3"     l="O'qitish tili" tone="amber" />
        <div style={{ display: "flex", gap: 8 }}>
          <a aria-label="Instagram" href="https://www.instagram.com/pyramid_academy_lc/" className="gbtn gbtn--ghost gbtn--sm" style={{ width: 44, padding: 0, height: 44 }}>
            <G_Instagram size={20} />
          </a>
          <a aria-label="Telegram" href="https://t.me/PYRAMID_academy" className="gbtn gbtn--ghost gbtn--sm" style={{ width: 44, padding: 0, height: 44 }}>
            <G_Telegram size={20} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) { .g-reviews-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 900px)  { .g-trust-strip { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px)  { .g-reviews-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// Single vertical video short with play/pause + mute UX + glass caption.
function VideoReview({ src, name, role, result, desc, delay = 0 }) {
  const vref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [open, setOpen] = React.useState(false); // caption expanded

  function togglePlay(e) {
    e.stopPropagation();
    const v = vref.current; if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }
  function toggleMute(e) {
    e.stopPropagation();
    const v = vref.current; if (!v) return;
    v.muted = !v.muted; setMuted(v.muted);
  }

  return (
    <div
      className="glass glass--md glass--interactive glass--liquid"
      data-parallax data-speed={(0.02 + delay * 0.02).toFixed(3)}
      onClick={togglePlay}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ padding: 10, background: "rgba(15,23,42,0.45)", cursor: "pointer" }}
    >
      <div style={{
        position: "relative", borderRadius: 18, overflow: "hidden",
        aspectRatio: "9 / 16", background: "#0B1428",
        border: "1px solid rgba(255,255,255,0.16)",
      }}>
        <video
          ref={vref}
          src={(typeof window !== "undefined" && window.__resources && window.__resources.heroVideo) || src}
          muted loop playsInline preload="metadata"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* readability gradient */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(5,11,31,0.35) 0%, transparent 28%, transparent 52%, rgba(5,11,31,0.85) 100%)",
        }} />

        {/* top: result chip + mute */}
        <div style={{ position: "absolute", top: 12, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="gbadge gbadge--amber" style={{ padding: "4px 9px", fontSize: 11, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)" }}>
            <G_Award size={11} /> {result}
          </span>
          <button onClick={toggleMute} aria-label={muted ? "Ovozni yoqish" : "Ovozni o'chirish"} style={{
            width: 34, height: 34, borderRadius: 999, cursor: "pointer",
            border: "1px solid rgba(255,255,255,0.3)", color: "white",
            background: "rgba(0,0,0,0.4)", backdropFilter: "blur(10px)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0,
          }}>
            {muted
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>}
          </button>
        </div>

        {/* center play button */}
        {!playing && (
          <div style={{
            position: "absolute", top: "44%", left: "50%", transform: "translate(-50%,-50%)",
            width: 60, height: 60, borderRadius: 999,
            background: "rgba(245,158,11,0.92)",
            boxShadow: "0 0 32px rgba(245,158,11,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1E1606"><path d="M8 5v14l11-7z"/></svg>
          </div>
        )}

        {/* bottom caption */}
        <div style={{ position: "absolute", left: 14, right: 14, bottom: 12, color: "white" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, rgba(96,165,250,0.6), rgba(37,99,235,0.6))",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: 12,
            }}>{name.split(" ").map(s => s[0]).join("").slice(0,2)}</div>
            <div style={{ lineHeight: 1.25, textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)" }}>{role}</div>
            </div>
          </div>
          <p style={{
            margin: "10px 0 0", fontSize: 12.5, lineHeight: 1.5,
            color: "rgba(255,255,255,0.92)", textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            maxHeight: open ? 120 : 0, overflow: "hidden",
            transition: "max-height 350ms cubic-bezier(.4,0,.2,1)",
          }}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Stat3({ v, l, tone }) {
  return (
    <div>
      <div style={{
        fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1,
        color: tone === "amber" ? "#FCD34D" : "var(--glass-text-primary)",
      }}>{v}</div>
      <div style={{ fontSize: 12, color: "var(--glass-text-tertiary)", marginTop: 6, fontWeight: 500 }}>{l}</div>
    </div>
  );
}

window.GlassTrust = GlassTrust;
