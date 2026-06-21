const { CourseCard: PA_CourseCard, SectionHeading: PA_SectionHeading } = window.PyramidAcademyDesignSystem_4db737;

function CoursesSection() {
  const courses = [
    {
      icon: <GraduationCap />, title: "IELTS Preparation",
      description: "International English Language Testing System — 7.0+ natijaga tayyorgarlik.",
      audience: "Chet elga o'qishga ketuvchilar", duration: "3–6 oy", level: "B2 → C1",
      highlighted: true,
    },
    {
      icon: <FileCheck />, title: "CEFR",
      description: "Common European Framework — ingliz tilining barcha darajalari (A1–C2).",
      audience: "Barcha darajalar", duration: "2–8 oy", level: "A1 → C2",
    },
    {
      icon: <Award />, title: "SAT Preparation",
      description: "Scholastic Assessment Test — Amerika universitetlariga kirish.",
      audience: "Maktab o'quvchilari", duration: "3–4 oy", level: "11–12 sinf",
    },
    {
      icon: <Brain />, title: "Mental Arithmetic",
      description: "Bolalar uchun mental arifmetika — tez hisoblash va mantiqiy fikrlash.",
      audience: "6–14 yosh", duration: "4–6 oy", level: "Beginner",
    },
    {
      icon: <Calculator />, title: "Matematika",
      description: "Maktab va universitet imtihonlariga oddiy va oliy matematika.",
      audience: "12–25 yosh", duration: "2–6 oy", level: "5 → 12 sinf",
    },
    {
      icon: <Languages />, title: "Ingliz Tili",
      description: "Ingliz tilining barcha darajalari — boshlang'ich darajadan tortib professional kommunikatsiyagacha.",
      audience: "Barcha yoshlar", duration: "2–8 oy", level: "A1 → C2",
    },
    {
      icon: <BookOpen />, title: "Rus Tili",
      description: "Rus tilining barcha darajalari — kundalik nutq, yozuv va imtihon tayyorgarligi.",
      audience: "Barcha yoshlar", duration: "2–8 oy", level: "A1 → C2",
    },
  ];

  return (
    <section id="courses" style={{ padding: "120px 24px", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: 64,
        alignItems: "end",
        marginBottom: 56,
      }}>
        <PA_SectionHeading
          eyebrow="Kurslar"
          title="Mukammal natijaga tayyorgarlik"
          lede="IELTS, CEFR, SAT, matematika va mental arifmetika — bir markazda. Har bir kurs uchun professional o'qituvchilar va aniq metodika."
        />
        <div style={{ display: "flex", gap: 16, fontSize: 14, color: "var(--text-muted)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand-navy-600)" }} />
            7 kurs yo'nalishi
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand-amber-500)" }} />
            3 ta til
          </div>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 20,
      }}>
        {courses.map((c, i) => <PA_CourseCard key={i} {...c} />)}
      </div>
    </section>
  );
}

window.CoursesSection = CoursesSection;
