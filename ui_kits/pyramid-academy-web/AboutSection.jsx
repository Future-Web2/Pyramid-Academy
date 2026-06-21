const { Card: PA_Card, SectionHeading: PA_SectionHeading, PyramidMark: PA_PyramidMark2 } = window.PyramidAcademyDesignSystem_4db737;

function AboutSection() {
  const items = [
    { icon: <Users />,  title: "Professional o'qituvchilar",  body: "Xalqaro sertifikatlangan o'qituvchilar va aniq metodika." },
    { icon: <Globe />,  title: "3 tilda ta'lim",                body: "O'zbek, rus va ingliz tillarida moslashuvchan dars jadvali." },
    { icon: <Award />,  title: "Tasdiqlangan natijalar",        body: "IELTS 7.0+, SAT 1400+ — talabalarimizning real natijalari." },
  ];

  return (
    <section id="about" style={{ padding: "120px 24px", background: "var(--bg-page)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
      }}>
        <div style={{
          backgroundImage: "var(--gradient-navy-felt)",
          borderRadius: "var(--radius-xl)",
          aspectRatio: "4 / 5",
          position: "relative",
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <PA_PyramidMark2 size={220} color="var(--brand-silver-50)" style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.3))" }} />
          <div style={{
            position: "absolute", left: 24, bottom: 24, right: 24,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            fontSize: 13, color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            <span>EST. 2021</span>
            <span>Yangihayot, Toshkent</span>
          </div>
        </div>

        <div>
          <PA_SectionHeading
            eyebrow="Biz haqimizda"
            title="Pyramid Academy — Sizning Muvaffaqiyat Piramidangiz"
            lede="Pyramid Academy Toshkentda 2021-yildan faoliyat yuritmoqda. Yangihayot filialida (Massiv Uzgarish 1v/1/2) 5 yillik tajriba asosida IELTS, CEFR, SAT, matematika va mental arifmetika kurslarini o'zbek, rus va ingliz tillarida taqdim etamiz."
          />

          <p style={{
            fontSize: 16, lineHeight: 1.7, color: "var(--text-muted)",
            margin: "20px 0 32px",
          }}>
            Bizning maqsad — har bir talabaga mukammal natijaga erishishda yordam berish.
            Har bir kurs aniq metodologiya, professional o'qituvchilar va real natijalarga asoslangan.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((it, i) => (
              <PA_Card key={i} padding="md" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "var(--radius-md)",
                  background: "var(--brand-navy-50)",
                  color: "var(--brand-navy-700)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>{it.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{it.title}</div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{it.body}</div>
                </div>
              </PA_Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.AboutSection = AboutSection;
