// Sticky glass nav. Desktop: logo · links · lang pill · CTAs.
// Mobile (<=860px): logo · lang pill · hamburger → full-screen glass menu.
function GlassNav() {
  const [lang, setLang] = React.useState("UZ");
  const [open, setOpen] = React.useState(false);
  const links = [
    { label: "Bosh sahifa", href: "#home" },
    { label: "Kurslar", href: "#courses" },
    { label: "Galereya", href: "#gallery" },
    { label: "Sharhlar", href: "#reviews" },
    { label: "Aloqa", href: "#contact" },
  ];

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const LangPill = ({ size = "sm" }) => (
    <div style={{
      display: "inline-flex", alignItems: "center",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: 999, padding: 2,
      background: "rgba(255,255,255,0.05)",
    }}>
      {["UZ", "RU", "EN"].map((l) => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding: size === "lg" ? "8px 16px" : "4px 10px",
          borderRadius: 999, border: "none", cursor: "pointer",
          background: l === lang ? "linear-gradient(180deg, rgba(59,130,246,0.95), rgba(37,99,235,0.95))" : "transparent",
          color: l === lang ? "white" : "var(--glass-text-secondary)",
          fontWeight: 600, fontSize: size === "lg" ? 14 : 12, fontFamily: "var(--font-sans)",
          boxShadow: l === lang ? "0 4px 12px -2px rgba(37,99,235,0.5)" : "none",
        }}>{l}</button>
      ))}
    </div>
  );

  return (
    <header style={{
      position: "sticky", top: 16, zIndex: 60,
      padding: "0 16px",
      pointerEvents: "auto",
    }}>
      <div className="glass glass--sm" style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "10px 12px 10px 18px",
        display: "flex", alignItems: "center", gap: 16,
        background: "rgba(15,23,42,0.6)",
      }}>
        <a href="#home" onClick={() => setOpen(false)} style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--glass-text-primary)", textDecoration: "none", flexShrink: 0 }}>
          <GlassPyramidMark size={26} style={{ color: "#93C5FD" }} />
          <span className="g-brand-name" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>Pyramid Academy</span>
        </a>

        {/* Desktop links */}
        <nav style={{ display: "flex", gap: 26, marginLeft: 12, flex: 1 }} className="g-nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              color: "var(--glass-text-secondary)", textDecoration: "none",
              fontSize: 14, fontWeight: 500,
            }}>{l.label}</a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="g-nav-actions" style={{ alignItems: "center", gap: 12 }}>
          <LangPill />
          <a className="gbtn gbtn--ghost gbtn--sm" href="./login.html">Kirish</a>
          <a className="gbtn gbtn--primary gbtn--sm" href="#register">
            Guruhga Qatnish
            <G_Arrow size={16} />
          </a>
        </div>

        {/* Mobile: lang + burger */}
        <div className="g-nav-mobile" style={{ marginLeft: "auto", alignItems: "center", gap: 10 }}>
          <LangPill />
          <button onClick={() => setOpen(o => !o)} aria-label="Menyu" aria-expanded={open} style={{
            width: 44, height: 44, borderRadius: 12, cursor: "pointer",
            border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)",
            color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0,
          }}>
            {open
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="g-mobile-menu" style={{
          position: "fixed", inset: 0, zIndex: 55,
          background: "rgba(5,11,31,0.86)",
          backdropFilter: "blur(22px) saturate(160%)",
          WebkitBackdropFilter: "blur(22px) saturate(160%)",
          display: "flex", flexDirection: "column",
          padding: "96px 24px 32px",
          animation: "g-menu-in 280ms cubic-bezier(.2,.7,.1,1) both",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {links.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontSize: 24, fontWeight: 700, color: "white", textDecoration: "none",
                padding: "16px 4px", borderBottom: "1px solid rgba(255,255,255,0.08)",
                letterSpacing: "-0.01em",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                {l.label}
                <G_Arrow size={20} style={{ color: "var(--glass-text-tertiary)" }} />
              </a>
            ))}
          </nav>

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
            <a className="gbtn gbtn--ghost gbtn--lg" href="./login.html" onClick={() => setOpen(false)} style={{ width: "100%" }}>
              Tizimga kirish
            </a>
            <a className="gbtn gbtn--amber gbtn--lg" href="#register" onClick={() => setOpen(false)} style={{ width: "100%" }}>
              Guruhga Qatnish
              <G_Arrow size={20} />
            </a>
            <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 8 }}>
              <a aria-label="Instagram" href="https://www.instagram.com/pyramid_academy_lc/" style={{ color: "var(--glass-text-secondary)" }}><G_Instagram size={22} /></a>
              <a aria-label="Telegram" href="https://t.me/PYRAMID_academy" style={{ color: "var(--glass-text-secondary)" }}><G_Telegram size={22} /></a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .g-nav-actions { display: flex; }
        .g-nav-mobile  { display: none; }
        @keyframes g-menu-in { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 860px) {
          .g-nav-links   { display: none !important; }
          .g-nav-actions { display: none !important; }
          .g-nav-mobile  { display: flex !important; }
        }
        @media (max-width: 380px) {
          .g-brand-name { display: none; }
        }
      `}</style>
    </header>
  );
}
window.GlassNav = GlassNav;
