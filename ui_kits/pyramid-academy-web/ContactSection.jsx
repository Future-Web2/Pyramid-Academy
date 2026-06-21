const { Card: PA_Card3, Input: PA_Input, Button: PA_Button3, SectionHeading: PA_SectionHeading3, Badge: PA_Badge3 } = window.PyramidAcademyDesignSystem_4db737;

function ContactSection() {
  const [course, setCourse] = React.useState("IELTS");
  const courses = ["IELTS", "CEFR", "SAT", "Mental Arifmetika", "Matematika", "Ingliz Tili", "Rus Tili"];

  return (
    <section id="contact" style={{
      padding: "120px 24px",
      background: "white",
      borderTop: "1px solid var(--border-default)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: 64,
      }}>
        <div>
          <PA_SectionHeading
            eyebrow="Aloqa"
            title="Yangi guruhga ro'yxatdan o'ting"
            lede="Yangihayot filialida yangi guruhlar ochiq. Ariza qoldiring — biz 24 soat ichida bog'lanamiz."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "var(--radius-md)",
                background: "var(--brand-navy-50)", color: "var(--brand-navy-700)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}><MapPin /></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Yangihayot filiali</div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Massiv Uzgarish 1v, Toshkent<br/>
                  Massiv Uzgarish 1/2, Toshkent
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "var(--radius-md)",
                background: "var(--brand-navy-50)", color: "var(--brand-navy-700)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}><Phone /></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Qo'ng'iroq qiling</div>
                <a href="tel:+998000000000" style={{ fontSize: 14, color: "var(--text-link)", fontFamily: "var(--font-mono)" }}>+998 XX XXX XX XX</a>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "var(--radius-md)",
                background: "var(--brand-navy-50)", color: "var(--brand-navy-700)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}><Clock /></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>Ish vaqti</div>
                <div style={{ fontSize: 14, color: "var(--text-muted)" }}>Du–Sha: 09:00–20:00 · Yak: 10:00–17:00</div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 28, borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-default)", overflow: "hidden",
            background: "var(--slate-100)", aspectRatio: "16 / 9",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <div style={{ position:"absolute", inset:0, background:
              "linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 100%)" }}/>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div style={{
              position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              color: "var(--brand-navy-700)",
            }}>
              <MapPin size={32} />
              <span style={{ fontWeight: 700, fontSize: 14 }}>Massiv Uzgarish 1v</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Google Maps embed</span>
            </div>
          </div>
        </div>

        <PA_Card3 padding="xl" style={{ alignSelf: "start" }} id="register">
          <PA_Badge3 tone="accent" style={{ marginBottom: 12 }}>Yangi guruhlar — sentabr 2026</PA_Badge3>
          <h3 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
            Bepul maslahat oling
          </h3>
          <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 24px" }}>
            Bizning maslahatchi 24 soat ichida siz bilan bog'lanadi va kurs tanlashda yordam beradi.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <PA_Input label="Ism" required placeholder="Ismingiz" />
            <PA_Input label="Yosh" type="number" placeholder="14–35" />
          </div>
          <div style={{ marginTop: 14 }}>
            <PA_Input label="Telefon" type="tel" required iconLeft={<Phone size={18} />} placeholder="+998 XX XXX XX XX" />
          </div>

          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 14, fontWeight: 600, display: "block", marginBottom: 6 }}>Kurs *</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {courses.map((c) => (
                <button
                  key={c}
                  onClick={() => setCourse(c)}
                  style={{
                    padding: "8px 14px",
                    fontSize: 13, fontWeight: 600,
                    borderRadius: "var(--radius-pill)",
                    border: "1.5px solid " + (course === c ? "var(--brand-navy-700)" : "var(--border-default)"),
                    background: course === c ? "var(--brand-navy-700)" : "white",
                    color: course === c ? "white" : "var(--text-default)",
                    cursor: "pointer",
                    transition: "all 150ms cubic-bezier(.4,0,.2,1)",
                    fontFamily: "var(--font-sans)",
                  }}
                >{c}</button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 24, alignItems: "center" }}>
            <PA_Button3 variant="accent" size="lg" fullWidth iconRight={<ArrowRight size={20} />}>
              Arizani Yuborish
            </PA_Button3>
          </div>
          <p style={{ fontSize: 12, color: "var(--text-subtle)", margin: "12px 0 0", textAlign: "center" }}>
            Yuborish orqali siz shaxsiy ma'lumotlar siyosatiga roziligingizni bildirasiz.
          </p>
        </PA_Card3>
      </div>
    </section>
  );
}

window.ContactSection = ContactSection;
