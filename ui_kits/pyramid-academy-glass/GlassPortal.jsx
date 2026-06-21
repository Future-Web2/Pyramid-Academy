// Role-aware LMS portal shell. Each destination page sets window.__role
// to "admin" | "teacher" | "student"; this renders that role's dashboard.
function GlassPortal() {
  const role = (typeof window !== "undefined" && window.__role) || "student";

  const CFG = {
    admin: {
      accent: "245,158,11", label: "Administrator", who: "Sardor Aliyev", initials: "SA",
      icon: <G_Users />,
      nav: ["Boshqaruv paneli", "Guruhlar", "O'qituvchilar", "Talabalar", "To'lovlar", "Hisobotlar"],
      title: "Boshqaruv paneli",
      stats: [
        { v: "412", l: "Faol talaba", t: "245,158,11" },
        { v: "28", l: "Guruh", t: "59,130,246" },
        { v: "16", l: "O'qituvchi", t: "16,185,129" },
        { v: "94M", l: "Oylik to'lov (so'm)", t: "168,85,247" },
      ],
    },
    teacher: {
      accent: "59,130,246", label: "O'qituvchi", who: "Dilnoza Karimova", initials: "DK",
      icon: <G_Cap />,
      nav: ["Bosh sahifa", "Mening guruhlarim", "Jadval", "Davomat", "Baholar", "Materiallar"],
      title: "Xush kelibsiz, Dilnoza",
      stats: [
        { v: "6", l: "Faol guruh", t: "59,130,246" },
        { v: "78", l: "Talaba", t: "16,185,129" },
        { v: "3", l: "Bugungi dars", t: "245,158,11" },
        { v: "12", l: "Tekshirish kutmoqda", t: "168,85,247" },
      ],
    },
    student: {
      accent: "16,185,129", label: "Talaba", who: "Jasur Tolipov", initials: "JT",
      icon: <G_Book />,
      nav: ["Bosh sahifa", "Kurslarim", "Vazifalar", "Natijalar", "Jadval", "To'lov"],
      title: "Salom, Jasur",
      stats: [
        { v: "B2", l: "Joriy daraja", t: "16,185,129" },
        { v: "2", l: "Faol kurs", t: "59,130,246" },
        { v: "3", l: "Vazifa muddati", t: "245,158,11" },
        { v: "92%", l: "Davomat", t: "168,85,247" },
      ],
    },
  };
  const cfg = CFG[role];
  const [active, setActive] = React.useState(0);

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    e.currentTarget.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  }

  return (
    <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "grid", gridTemplateColumns: "264px 1fr" }} className="g-portal">
      {/* Sidebar */}
      <aside className="glass g-portal-side" style={{
        margin: 16, padding: "22px 16px", background: "rgba(10,17,38,0.6)",
        display: "flex", flexDirection: "column", gap: 8, borderRadius: 24,
        position: "sticky", top: 16, alignSelf: "start", height: "calc(100vh - 32px)",
      }}>
        <a href="./index.html" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "white", textDecoration: "none", padding: "4px 8px 16px" }}>
          <GlassPyramidMark size={26} style={{ color: `rgb(${cfg.accent})` }} />
          <span style={{ fontSize: 16, fontWeight: 700 }}>Pyramid LMS</span>
        </a>

        <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {cfg.nav.map((n, i) => {
            const on = i === active;
            return (
              <button key={n} onClick={() => setActive(i)} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "11px 14px", borderRadius: 12, cursor: "pointer", textAlign: "left",
                border: "1px solid " + (on ? `rgba(${cfg.accent},0.45)` : "transparent"),
                background: on ? `rgba(${cfg.accent},0.16)` : "transparent",
                color: on ? "white" : "var(--glass-text-secondary)",
                fontSize: 14, fontWeight: on ? 600 : 500, fontFamily: "var(--font-sans)",
                transition: "all 200ms",
              }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, flexShrink: 0, background: on ? `rgb(${cfg.accent})` : "rgba(255,255,255,0.25)" }} />
                {n}
              </button>
            );
          })}
        </div>

        <a href="./login.html" className="gbtn gbtn--ghost gbtn--sm" style={{ justifyContent: "flex-start" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Chiqish
        </a>
      </aside>

      {/* Main */}
      <main style={{ padding: "16px 24px 32px 8px" }}>
        {/* Topbar */}
        <div className="glass glass--md" style={{
          padding: "14px 20px", background: "rgba(15,23,42,0.5)",
          display: "flex", alignItems: "center", gap: 16, marginBottom: 20,
        }}>
          <div style={{ flex: 1 }}>
            <span className={role === "admin" ? "gbadge gbadge--amber" : role === "teacher" ? "gbadge gbadge--blue" : "gbadge"} style={{ marginBottom: 4 }}>
              {React.cloneElement(cfg.icon, { size: 12 })} {cfg.label}
            </span>
          </div>
          <div style={{ position: "relative", flex: "0 0 240px", maxWidth: "32vw" }} className="g-portal-search">
            <input className="ginput" placeholder="Qidirish…" style={{ paddingLeft: 38, height: 42 }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "var(--glass-text-tertiary)" }}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: `linear-gradient(135deg, rgba(${cfg.accent},0.6), rgba(${cfg.accent},0.3))`,
              border: "1px solid rgba(255,255,255,0.2)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: 14, color: "white",
            }}>{cfg.initials}</div>
            <div className="g-portal-who" style={{ lineHeight: 1.3 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "white" }}>{cfg.who}</div>
              <div style={{ fontSize: 11, color: "var(--glass-text-tertiary)" }}>{cfg.label}</div>
            </div>
          </div>
        </div>

        <h1 className="glass-text" style={{ fontSize: 28, fontWeight: 700, margin: "4px 0 20px", color: "white", letterSpacing: "-0.02em" }}>
          {cfg.title}
        </h1>

        {/* Stat cards */}
        <div className="g-portal-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 20 }}>
          {cfg.stats.map((s, i) => (
            <div key={i} className="glass glass--md glass--interactive glass--liquid" onMouseMove={onMove}
                 style={{ padding: 20, background: "rgba(15,23,42,0.45)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, marginBottom: 14,
                background: `rgba(${s.t},0.18)`, border: `1px solid rgba(${s.t},0.4)`,
                display: "inline-flex", alignItems: "center", justifyContent: "center", color: `rgb(${s.t})` }}>
                <span style={{ width: 12, height: 12, borderRadius: 4, background: `rgb(${s.t})` }} />
              </div>
              <div className="glass-text" style={{ fontSize: 30, fontWeight: 800, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 13, color: "var(--glass-text-secondary)", marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Role-specific content */}
        <div className="g-portal-main" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}>
          <PortalPrimary role={role} accent={cfg.accent} />
          <PortalSide role={role} accent={cfg.accent} />
        </div>
      </main>

      <style>{`
        @media (max-width: 920px) {
          .g-portal { grid-template-columns: 1fr !important; }
          .g-portal-side { position: static !important; height: auto !important; flex-direction: row !important; flex-wrap: wrap; }
          .g-portal-stats { grid-template-columns: 1fr 1fr !important; }
          .g-portal-main { grid-template-columns: 1fr !important; }
          .g-portal-who { display: none; }
        }
      `}</style>
    </div>
  );
}

function Panel({ title, action, children, style }) {
  return (
    <div className="glass glass--md" style={{ padding: 22, background: "rgba(15,23,42,0.45)", ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h3 className="glass-text" style={{ fontSize: 17, fontWeight: 700, margin: 0, color: "white" }}>{title}</h3>
        {action && <span style={{ fontSize: 12.5, color: "#93C5FD" }}>{action}</span>}
      </div>
      {children}
    </div>
  );
}

function Row({ left, mid, right, tone }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ width: 8, height: 8, borderRadius: 999, background: tone ? `rgb(${tone})` : "rgba(255,255,255,0.3)", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{left}</div>
        {mid && <div style={{ fontSize: 12, color: "var(--glass-text-tertiary)" }}>{mid}</div>}
      </div>
      {right && <div style={{ fontSize: 13, color: "var(--glass-text-secondary)", flexShrink: 0 }}>{right}</div>}
    </div>
  );
}

function PortalPrimary({ role, accent }) {
  if (role === "admin") {
    return (
      <Panel title="So'nggi ro'yxatdan o'tishlar" action="Barchasi">
        <Row left="Aziza Karimova" mid="IELTS · Asosiy filial" right="Bugun" tone="245,158,11" />
        <Row left="Bekzod Ergashev" mid="SAT · 2-filial" right="Kecha" tone="59,130,246" />
        <Row left="Madina Yo'ldosheva" mid="CEFR · Asosiy filial" right="2 kun" tone="16,185,129" />
        <Row left="Sardor Umarov" mid="Matematika · 2-filial" right="3 kun" tone="168,85,247" />
        <Row left="Nilufar Saidova" mid="Ingliz tili · Asosiy filial" right="4 kun" tone="59,130,246" />
      </Panel>
    );
  }
  if (role === "teacher") {
    return (
      <Panel title="Bugungi darslar" action="Jadval">
        <Row left="IELTS — Intensive (B2)" mid="09:00 – 10:30 · 12 talaba" right="Xona 3" tone="59,130,246" />
        <Row left="Speaking Club" mid="11:00 – 12:00 · 8 talaba" right="Xona 1" tone="16,185,129" />
        <Row left="CEFR — B1 guruh" mid="15:00 – 16:30 · 14 talaba" right="Xona 5" tone="245,158,11" />
      </Panel>
    );
  }
  return (
    <Panel title="Mening kurslarim" action="Hammasi">
      <Row left="IELTS — Intensive" mid="O'qituvchi: D. Karimova · B2" right="68%" tone="16,185,129" />
      <Row left="Speaking Club" mid="Haftada 2 marta · jonli amaliyot" right="45%" tone="59,130,246" />
    </Panel>
  );
}

function PortalSide({ role, accent }) {
  if (role === "admin") {
    return (
      <Panel title="Filiallar bo'yicha">
        <Row left="Asosiy filial" mid="Massiv Uzgarish 1v" right="248 talaba" tone="245,158,11" />
        <Row left="2-filial" mid="Massiv Uzgarish 1/2" right="164 talaba" tone="59,130,246" />
        <div style={{ marginTop: 16 }}>
          <button className="gbtn gbtn--amber gbtn--sm" style={{ width: "100%" }}>Hisobotni yuklab olish</button>
        </div>
      </Panel>
    );
  }
  if (role === "teacher") {
    return (
      <Panel title="Tekshirish kutmoqda">
        <Row left="IELTS Writing Task 2" mid="12 ta topshiriq" right="→" tone="245,158,11" />
        <Row left="CEFR Reading test" mid="9 ta topshiriq" right="→" tone="59,130,246" />
        <div style={{ marginTop: 16 }}>
          <button className="gbtn gbtn--primary gbtn--sm" style={{ width: "100%" }}>Davomat belgilash</button>
        </div>
      </Panel>
    );
  }
  return (
    <Panel title="Yaqin vazifalar">
      <Row left="IELTS Writing Task 2" mid="O'qituvchi: D. Karimova" right="2 kun" tone="245,158,11" />
      <Row left="Vocabulary Unit 7" mid="40 ta so'z" right="4 kun" tone="59,130,246" />
      <div style={{ marginTop: 16, padding: 14, borderRadius: 14, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}>
        <div style={{ fontSize: 13, color: "white", fontWeight: 600, marginBottom: 4 }}>To'lov holati</div>
        <div style={{ fontSize: 12, color: "var(--glass-text-secondary)" }}>Sentabr — to'langan ✓ · Oktabr — 5 kun qoldi</div>
      </div>
    </Panel>
  );
}

window.GlassPortal = GlassPortal;
