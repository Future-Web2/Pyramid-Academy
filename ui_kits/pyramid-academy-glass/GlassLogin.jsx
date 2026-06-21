// LMS login — 3 role entries (Administrator / O'qituvchi / Talaba).
// Each role themes the panel and routes to its own destination page.
function GlassLogin() {
  const roles = [
    {
      id: "admin", label: "Administrator", icon: <G_Users />,
      accent: "245,158,11", chip: "gbadge gbadge--amber",
      idLabel: "Login yoki email", idPlaceholder: "admin@pyramid.uz", idType: "text",
      dest: "./lms-admin.html",
      note: "Markaz boshqaruvi — guruhlar, to'lovlar, hisobotlar.",
    },
    {
      id: "teacher", label: "O'qituvchi", icon: <G_Cap />,
      accent: "59,130,246", chip: "gbadge gbadge--blue",
      idLabel: "O'qituvchi ID yoki email", idPlaceholder: "teacher@pyramid.uz", idType: "text",
      dest: "./lms-teacher.html",
      note: "Darslar jadvali, davomat, baholar va materiallar.",
    },
    {
      id: "student", label: "Talaba", icon: <G_Book />,
      accent: "16,185,129", chip: "gbadge",
      idLabel: "Talaba ID yoki telefon", idPlaceholder: "+998 90 123 45 67", idType: "text",
      dest: "./lms-student.html",
      note: "Kurslar, uy vazifalari, natijalar va to'lov holati.",
    },
  ];

  const [role, setRole] = React.useState("student");
  const cur = roles.find(r => r.id === role);
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    // Each role lands on its own destination.
    setTimeout(() => { window.location.href = cur.dest; }, 650);
  }

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    e.currentTarget.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", position: "relative", zIndex: 1 }} className="g-login-shell">
      {/* Left brand panel */}
      <div className="g-login-brand" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 56px" }}>
        <a href="./index.html" style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "white", textDecoration: "none" }}>
          <GlassPyramidMark size={34} style={{ color: "#93C5FD" }} />
          <span style={{ fontSize: 20, fontWeight: 700 }}>Pyramid Academy</span>
          <span className="gbadge gbadge--blue" style={{ marginLeft: 6 }}>LMS</span>
        </a>

        <div data-parallax data-speed="0.04">
          <span className="gbadge gbadge--amber" style={{ marginBottom: 20 }}>
            <G_Sparkle size={12} /> O'quv platformasi
          </span>
          <h1 className="glass-text" style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.08,
            letterSpacing: "-0.025em", margin: "0 0 16px", color: "white", maxWidth: 520,
          }}>
            Bilim piramidangizga kiring
          </h1>
          <p style={{ fontSize: 18, color: "var(--glass-text-secondary)", margin: 0, maxWidth: 460, lineHeight: 1.6 }}>
            Bir platforma — uch xil kirish. Administrator, o'qituvchi va talaba
            o'z shaxsiy kabinetiga ega.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 32, maxWidth: 440 }}>
            {roles.map(r => (
              <div key={r.id} className="glass glass--sm" style={{
                padding: "12px 16px", background: "rgba(15,23,42,0.4)",
                display: "flex", alignItems: "center", gap: 12,
                opacity: role === r.id ? 1 : 0.55,
                transition: "opacity 250ms",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: `rgba(${r.accent},0.2)`, color: `rgb(${r.accent})`,
                  border: `1px solid rgba(${r.accent},0.4)`,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>{r.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{r.label}</div>
                  <div style={{ fontSize: 12, color: "var(--glass-text-tertiary)" }}>{r.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 12, color: "var(--glass-text-tertiary)" }}>
          © 2026 Pyramid Academy · Toshkent
        </div>
      </div>

      {/* Right login card */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 48px" }}>
        <form
          onSubmit={submit}
          onMouseMove={onMove}
          className="glass glass--xl glass--liquid glass--sheen"
          style={{ width: "100%", maxWidth: 440, padding: "36px 34px", background: "rgba(15,23,42,0.55)" }}
        >
          <span className="sheen-track" aria-hidden />

          <h2 className="glass-text" style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px", color: "white", letterSpacing: "-0.02em" }}>
            Tizimga kirish
          </h2>
          <p style={{ fontSize: 14, color: "var(--glass-text-secondary)", margin: "0 0 22px" }}>
            Avval qaysi sifatda kirayotganingizni tanlang.
          </p>

          {/* Role segmented control */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6,
            padding: 5, borderRadius: 16,
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
            marginBottom: 22,
          }}>
            {roles.map(r => {
              const active = role === r.id;
              return (
                <button key={r.id} type="button" onClick={() => setRole(r.id)} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                  padding: "12px 6px", borderRadius: 12, cursor: "pointer",
                  border: "1px solid " + (active ? `rgba(${r.accent},0.55)` : "transparent"),
                  background: active ? `rgba(${r.accent},0.16)` : "transparent",
                  color: active ? `rgb(${r.accent})` : "var(--glass-text-secondary)",
                  transition: "all 220ms cubic-bezier(.4,0,.2,1)",
                  boxShadow: active ? `0 0 22px rgba(${r.accent},0.28)` : "none",
                }}>
                  {React.cloneElement(r.icon, { size: 22 })}
                  <span style={{ fontSize: 12, fontWeight: 600, color: active ? "white" : "var(--glass-text-tertiary)" }}>{r.label}</span>
                </button>
              );
            })}
          </div>

          {/* Fields */}
          <label style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>{cur.idLabel}</span>
            <input className="ginput" type={cur.idType} placeholder={cur.idPlaceholder} required autoComplete="username" />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>Parol</span>
            <div style={{ position: "relative" }}>
              <input className="ginput" type={show ? "text" : "password"} placeholder="••••••••" required autoComplete="current-password" style={{ paddingRight: 44 }} />
              <button type="button" onClick={() => setShow(s => !s)} aria-label="Parolni ko'rsatish" style={{
                position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                width: 30, height: 30, borderRadius: 8, border: "none", cursor: "pointer",
                background: "transparent", color: "var(--glass-text-tertiary)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0,
              }}>
                {show
                  ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
              </button>
            </div>
          </label>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
            <label style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--glass-text-secondary)", cursor: "pointer" }}>
              <input type="checkbox" style={{ width: 16, height: 16, accentColor: `rgb(${cur.accent})` }} defaultChecked />
              Meni eslab qol
            </label>
            <a href="#" style={{ fontSize: 13, color: "#93C5FD", textDecoration: "none" }}>Parolni unutdingizmi?</a>
          </div>

          <button type="submit" disabled={loading} className="gbtn gbtn--lg" style={{
            width: "100%",
            background: `linear-gradient(180deg, rgba(${cur.accent},0.95), rgba(${cur.accent},0.78))`,
            color: cur.id === "admin" ? "#1E1606" : "white",
            boxShadow: `0 12px 32px -8px rgba(${cur.accent},0.6), 0 0 0 1px rgba(255,255,255,0.18) inset`,
            opacity: loading ? 0.75 : 1,
          }}>
            {loading ? "Kirilmoqda…" : <>{cur.label} sifatida kirish <G_Arrow size={18} /></>}
          </button>

          <p style={{ fontSize: 12.5, color: "var(--glass-text-tertiary)", textAlign: "center", margin: "18px 0 0" }}>
            Hisobingiz yo'qmi? <a href="./index.html#contact" style={{ color: "#93C5FD", textDecoration: "none" }}>Markaz bilan bog'laning</a>
          </p>
        </form>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .g-login-shell { grid-template-columns: 1fr !important; }
          .g-login-brand { padding: 32px 28px !important; gap: 28px; }
        }
      `}</style>
    </div>
  );
}
window.GlassLogin = GlassLogin;
