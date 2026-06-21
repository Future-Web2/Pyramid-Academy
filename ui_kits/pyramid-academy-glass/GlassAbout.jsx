// About — split layout: text glass panel + image/visual glass panel.
function GlassAbout() {
  const items = [
    { icon: <G_Users />, title: "Professional o'qituvchilar", body: "Xalqaro sertifikatlangan o'qituvchilar va aniq metodika." },
    { icon: <G_Globe />, title: "3 tilda ta'lim",              body: "O'zbek, rus va ingliz tillarida moslashuvchan dars jadvali." },
    { icon: <G_Award />, title: "Tasdiqlangan natijalar",      body: "IELTS 7.0+, SAT 1400+ — talabalarimizning real natijalari." },
  ];
  return (
    <section id="about" style={{ position: "relative", padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}>
      <div className="g-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "stretch" }}>
        {/* Visual panel */}
        <div className="glass glass--xl glass--sheen"
             data-parallax data-speed="-0.04"
             style={{ padding: 18, background: "rgba(15,23,42,0.45)", minHeight: 520 }}>
          <span className="sheen-track" aria-hidden />
          <div style={{
            position: "relative", width: "100%", height: "100%", minHeight: 480,
            borderRadius: 24, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.18)",
          }}>
            <img src={(typeof window !== "undefined" && window.__resources && window.__resources.aboutImg) || "./assets/pyramid-mark-on-navy.jpg"} alt="" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
            }}/>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(5,11,31,0.1) 0%, rgba(5,11,31,0.7) 100%)",
            }}/>
            <div style={{
              position: "absolute", left: 24, right: 24, bottom: 24,
              display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16,
              color: "white",
            }}>
              <div>
                <div style={{
                  fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)",
                }}>EST. 2021</div>
                <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4, letterSpacing: "-0.01em" }}>
                  Yangihayot, Toshkent
                </div>
              </div>
              <span className="gbadge gbadge--amber">5 yil</span>
            </div>
          </div>
        </div>

        {/* Text panel */}
        <div className="glass glass--xl"
             data-parallax data-speed="0.05"
             style={{ padding: "40px 36px", background: "rgba(15,23,42,0.45)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span className="gbadge gbadge--blue" style={{ marginBottom: 16, alignSelf: "flex-start" }}>Biz haqimizda</span>
          <h2 className="glass-text" style={{
            fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 700, lineHeight: 1.2,
            letterSpacing: "-0.02em", margin: "0 0 18px",
            color: "var(--glass-text-primary)",
          }}>
            Pyramid Academy — Sizning Muvaffaqiyat Piramidangiz
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--glass-text-secondary)", margin: "0 0 28px", textWrap: "pretty" }}>
            Pyramid Academy Toshkentda 2021-yildan faoliyat yuritmoqda. Yangihayot filialida
            (Massiv Uzgarish 1v/1/2) 5 yillik tajriba asosida IELTS, CEFR, SAT, matematika
            va mental arifmetika kurslarini o'zbek, rus va ingliz tillarida taqdim etamiz.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((it, i) => (
              <div key={i} className="glass glass--sm" style={{ padding: 16, background: "rgba(255,255,255,0.04)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: "rgba(59,130,246,0.18)", color: "#93C5FD",
                  border: "1px solid rgba(96,165,250,0.32)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>{it.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "var(--glass-text-primary)" }}>{it.title}</div>
                  <div style={{ fontSize: 13, color: "var(--glass-text-secondary)", lineHeight: 1.6, marginTop: 2 }}>{it.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .g-about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
window.GlassAbout = GlassAbout;
