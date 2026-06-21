const { Testimonial: PA_Testimonial, Stat: PA_Stat, SectionHeading: PA_SectionHeading } = window.PyramidAcademyDesignSystem_4db737;

function TrustSection() {
  return (
    <section style={{
      background: "white",
      borderTop: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)",
      padding: "96px 24px",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <PA_SectionHeading
          align="center"
          eyebrow="Ishonch"
          title="Talabalarimiz va ota-onalarimiz fikri"
          lede="Real natijalar, real hikoyalar. Yangihayot filialida 5 yillik tajriba."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          marginTop: 48,
        }}>
          <PA_Testimonial
            quote="O'qituvchilar juda professional. 4 oy ichida IELTS 6.5 dan 7.5 ga ko'tarildim. Hozir Londonda Bachelor's o'qiyman."
            name="Aziza Karimova"
            role="IELTS talabasi"
            score="IELTS 7.5"
          />
          <PA_Testimonial
            quote="Farzandim 8 yoshdan mental arifmetika kursiga qatnashadi. Matematikadan eng yaxshi sinfda. Tezligi juda yuqori."
            name="Dilshod Yusupov"
            role="Ota-ona"
          />
          <PA_Testimonial
            quote="SAT tayyorgarligi tizimli va aniq. 1480 ball oldim va Amerikadagi top-50 universitetga qabul qilindim."
            name="Sherzod Olimov"
            role="SAT talabasi"
            score="SAT 1480"
          />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          marginTop: 64,
          padding: "32px 0",
          borderTop: "1px solid var(--border-default)",
          borderBottom: "1px solid var(--border-default)",
        }}>
          <PA_Stat value="5" label="Yillik tajriba" />
          <PA_Stat value="1.3K+" label="Instagram followers" />
          <PA_Stat value="7+" label="Kurs yo'nalishi" />
          <PA_Stat value="3" label="O'qitish tili" tone="accent" />
        </div>
      </div>
    </section>
  );
}

window.TrustSection = TrustSection;
