// Thin glass strip footer.
function GlassFooter() {
  return (
    <footer style={{ padding: "32px 24px 32px", position: "relative" }}>
      <div className="glass glass--md" style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "28px 32px",
        background: "rgba(5,11,31,0.55)",
      }}>
        <div className="g-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr auto", gap: 32, alignItems: "start" }}>
          <div>
            <a href="#home" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "white", textDecoration: "none" }}>
              <GlassPyramidMark size={28} style={{ color: "#93C5FD" }} />
              <span style={{ fontSize: 18, fontWeight: 700 }}>Pyramid Academy</span>
            </a>
            <p style={{ fontSize: 13, color: "var(--glass-text-tertiary)", margin: "12px 0 0", maxWidth: 320, lineHeight: 1.6 }}>
              Zamonaviy ta'lim markazi. Toshkentda 5 yillik tajriba. IELTS, CEFR, SAT,
              matematika va mental arifmetika.
            </p>
          </div>

          <FooterCol heading="Sahifalar" items={[
            { label: "Bosh sahifa", href: "#home" },
            { label: "Kurslar", href: "#courses" },
            { label: "Biz haqimizda", href: "#about" },
            { label: "Aloqa", href: "#contact" },
          ]} />
          <FooterCol heading="Kurslar" items={[
            { label: "IELTS", href: "#courses" },
            { label: "CEFR", href: "#courses" },
            { label: "SAT", href: "#courses" },
            { label: "Matematika", href: "#courses" },
          ]} />

          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="https://www.instagram.com/pyramid_academy_lc/" aria-label="Instagram" className="gbtn gbtn--ghost gbtn--sm" style={{ width: 40, padding: 0, height: 40 }}>
                <G_Instagram size={18} />
              </a>
              <a href="https://t.me/PYRAMID_academy" aria-label="Telegram" className="gbtn gbtn--ghost gbtn--sm" style={{ width: 40, padding: 0, height: 40 }}>
                <G_Telegram size={18} />
              </a>
            </div>
            <span style={{ fontSize: 12, color: "var(--glass-text-tertiary)", fontFamily: "var(--font-mono)" }}>O'zbek · Русский · English</span>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "24px 0 16px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--glass-text-tertiary)", flexWrap: "wrap", gap: 8 }}>
          <span>© 2026 Pyramid Academy. Toshkent, Uzbekistan.</span>
          <span>Massiv Uzgarish 1v, Yangihayot</span>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .g-footer-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  );
}

function FooterCol({ heading, items }) {
  return (
    <div>
      <h4 style={{
        fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em",
        color: "#FCD34D", fontWeight: 700, margin: "0 0 12px",
      }}>{heading}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map(it => (
          <a key={it.label} href={it.href} style={{ fontSize: 14, color: "var(--glass-text-secondary)", textDecoration: "none" }}>{it.label}</a>
        ))}
      </div>
    </div>
  );
}

window.GlassFooter = GlassFooter;
