// Contact — info column + registration glass form.
function GlassContact() {
  const courses = ["IELTS", "CEFR", "SAT", "Mental Arifmetika", "Matematika", "Ingliz Tili", "Rus Tili"];
  const [picked, setPicked] = React.useState("IELTS");

  return (
    <section id="contact" style={{ position: "relative", padding: "96px 24px 64px", maxWidth: 1280, margin: "0 auto" }}>
      <div className="g-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 32, alignItems: "stretch" }}>
        {/* Info column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <span className="gbadge gbadge--blue" style={{ marginBottom: 16 }}>Aloqa</span>
            <h2 className="glass-text" style={{
              fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 700, lineHeight: 1.2,
              letterSpacing: "-0.02em", margin: "0 0 12px",
              color: "var(--glass-text-primary)",
            }}>
              Yangi guruhga ro'yxatdan o'ting
            </h2>
            <p style={{ fontSize: 17, color: "var(--glass-text-secondary)", margin: 0 }}>
              Ikkala filialimizda ham yangi guruhlar ochiq. Ariza qoldiring — biz 24 soat ichida bog'lanamiz.
            </p>
          </div>

          {/* Two branches */}
          <div className="g-branch-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <BranchCard
              tag="Asosiy filial"
              tagTone="amber"
              addr={<>Massiv Uzgarish 1v<br/>Yangihayot, Toshkent</>}
              phone="+998 93 576 22 32"
              phoneHref="tel:+998935762232"
            />
            <BranchCard
              tag="2-filial"
              tagTone="blue"
              addr={<>Massiv Uzgarish 1/2<br/>Yangihayot, Toshkent</>}
              phone="+998 95 797 22 32"
              phoneHref="tel:+998957972232"
            />
          </div>

          <InfoRow icon={<G_Clock />} title="Ish vaqti" body="Du–Sha: 09:00–20:00 · Yak: 10:00–17:00" />

          {/* Map placeholder — both branches */}
          <div className="glass glass--md" style={{
            padding: 14, background: "rgba(15,23,42,0.45)",
            marginTop: 4,
          }}>
            <div style={{
              position: "relative", borderRadius: 16, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
              aspectRatio: "16/9",
              background: "linear-gradient(135deg, #1E293B, #0F172A)",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}/>
              {/* two pins */}
              <div style={{ position: "absolute", top: "38%", left: "34%", display: "flex", flexDirection: "column", alignItems: "center", color: "#FCD34D" }}>
                <G_Pin size={26} />
                <span style={{ fontSize: 10, fontWeight: 700, color: "white", textShadow: "0 1px 4px #000" }}>1v</span>
              </div>
              <div style={{ position: "absolute", top: "58%", left: "62%", display: "flex", flexDirection: "column", alignItems: "center", color: "#93C5FD" }}>
                <G_Pin size={26} />
                <span style={{ fontSize: 10, fontWeight: 700, color: "white", textShadow: "0 1px 4px #000" }}>1/2</span>
              </div>
              <span style={{ position: "absolute", bottom: 10, left: 0, right: 0, textAlign: "center", fontSize: 11, color: "var(--glass-text-tertiary)" }}>2 filial · Google Maps embed</span>
            </div>
          </div>
        </div>

        {/* Registration glass form */}
        <form id="register" className="glass glass--xl" onSubmit={(e) => e.preventDefault()} style={{
          padding: "36px 32px", background: "rgba(15,23,42,0.55)",
        }}>
          <span className="gbadge gbadge--amber" style={{ marginBottom: 14 }}>Yangi guruhlar — sentabr 2026</span>
          <h3 className="glass-text" style={{
            fontSize: 30, fontWeight: 700, margin: "0 0 8px",
            letterSpacing: "-0.02em", color: "var(--glass-text-primary)",
          }}>Bepul maslahat oling</h3>
          <p style={{ fontSize: 15, color: "var(--glass-text-secondary)", margin: "0 0 28px" }}>
            Bizning maslahatchi 24 soat ichida siz bilan bog'lanadi va kurs tanlashda yordam beradi.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Ism *">
              <input className="ginput" placeholder="Ismingiz" required />
            </Field>
            <Field label="Yosh">
              <input className="ginput" type="number" placeholder="14–35" min={5} max={70} />
            </Field>
          </div>
          <div style={{ marginTop: 14 }}>
            <Field label="Telefon *">
              <input className="ginput" type="tel" placeholder="+998 93 576 22 32" required />
            </Field>
          </div>

          <div style={{ marginTop: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "var(--glass-text-primary)", display: "block", marginBottom: 8, letterSpacing: "0.02em" }}>Kurs *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {courses.map((c) => {
                const active = picked === c;
                return (
                  <button key={c} type="button" onClick={() => setPicked(c)} style={{
                    padding: "8px 14px",
                    fontSize: 13, fontWeight: 600,
                    borderRadius: 999,
                    border: "1px solid " + (active ? "rgba(252,211,77,0.5)" : "rgba(255,255,255,0.18)"),
                    background: active
                      ? "linear-gradient(180deg, rgba(251,191,36,0.95), rgba(245,158,11,0.9))"
                      : "rgba(255,255,255,0.06)",
                    color: active ? "#1E1606" : "var(--glass-text-primary)",
                    cursor: "pointer",
                    transition: "all 200ms cubic-bezier(.4,0,.2,1)",
                    fontFamily: "var(--font-sans)",
                    boxShadow: active ? "0 0 18px rgba(245,158,11,0.45)" : "none",
                  }}>{c}</button>
                );
              })}
            </div>
          </div>

          <button type="submit" className="gbtn gbtn--amber gbtn--lg" style={{ marginTop: 28, width: "100%" }}>
            Arizani Yuborish
            <G_Arrow size={20} />
          </button>

          <p style={{ fontSize: 12, color: "var(--glass-text-tertiary)", margin: "14px 0 0", textAlign: "center" }}>
            Yuborish orqali siz shaxsiy ma'lumotlar siyosatiga roziligingizni bildirasiz.
          </p>
        </form>
      </div>

      <style>{`@media (max-width: 900px) { .g-contact-grid { grid-template-columns: 1fr !important; } .g-branch-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  );
}

function BranchCard({ tag, tagTone, addr, phone, phoneHref }) {
  return (
    <div className="glass glass--sm glass--interactive" style={{ padding: 16, background: "rgba(15,23,42,0.5)", display: "flex", flexDirection: "column", gap: 10 }}>
      <span className={tagTone === "amber" ? "gbadge gbadge--amber" : "gbadge gbadge--blue"} style={{ alignSelf: "flex-start" }}>
        <G_Pin size={12} /> {tag}
      </span>
      <div style={{ fontSize: 13.5, color: "var(--glass-text-secondary)", lineHeight: 1.55 }}>{addr}</div>
      <a href={phoneHref} style={{ color: "#93C5FD", fontFamily: "var(--font-mono)", fontSize: 13.5, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
        <G_Phone size={14} /> {phone}
      </a>
    </div>
  );
}

function InfoRow({ icon, title, body }) {
  return (
    <div className="glass glass--sm" style={{ padding: 16, background: "rgba(15,23,42,0.45)", display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: "rgba(59,130,246,0.18)", color: "#93C5FD",
        border: "1px solid rgba(96,165,250,0.32)",
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 15, color: "var(--glass-text-primary)" }}>{title}</div>
        <div style={{ fontSize: 13, color: "var(--glass-text-secondary)", lineHeight: 1.6, marginTop: 2 }}>{body}</div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--glass-text-primary)", letterSpacing: "0.02em" }}>{label}</span>
      {children}
    </label>
  );
}

window.GlassContact = GlassContact;
