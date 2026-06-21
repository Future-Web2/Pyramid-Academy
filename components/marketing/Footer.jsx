import React from "react";
import { PyramidMark } from "../brand/PyramidMark.jsx";

const IG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.7 3.3a1 1 0 0 0-1.05-.15L2.6 10.6a1 1 0 0 0 .06 1.86l4.55 1.55 2.06 6.46a1 1 0 0 0 1.65.41l3.04-2.79 4.52 3.32a1 1 0 0 0 1.57-.57l3.5-15.7a1 1 0 0 0-.35-1.02zM9.6 14.92l-.93 4.04-1.5-4.7 9.27-7.05-6.84 7.7z"/></svg>
);

/**
 * Footer — multi-column footer with quick links, contact, social.
 */
export function Footer({ style }) {
  const linkStyle = {
    fontSize: 14, color: "rgba(255,255,255,0.78)",
    textDecoration: "none", display: "block", padding: "4px 0",
  };
  const headStyle = {
    fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em",
    color: "var(--brand-amber-400)", fontWeight: 600, margin: "0 0 14px",
  };

  return (
    <footer style={{
      backgroundImage: "var(--gradient-navy-felt)",
      color: "white",
      padding: "64px 0 28px",
      fontFamily: "var(--font-sans)",
      ...style,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}>
          <div>
            <a href="#home" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "white", textDecoration: "none" }}>
              <PyramidMark size={32} color="white" />
              <span style={{ fontSize: 20, fontWeight: 700 }}>Pyramid Academy</span>
            </a>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginTop: 16, maxWidth: 320 }}>
              Zamonaviy ta'lim markazi. Toshkentda 5 yillik tajriba. IELTS, CEFR, SAT, matematika va mental arifmetika.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <a href="https://www.instagram.com/pyramid_academy_lc/" aria-label="Instagram" style={{
                width: 40, height: 40, borderRadius: "var(--radius-md)",
                background: "rgba(255,255,255,0.08)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "white",
              }}>{IG}</a>
              <a href="https://t.me/PYRAMID_academy" aria-label="Telegram" style={{
                width: 40, height: 40, borderRadius: "var(--radius-md)",
                background: "rgba(255,255,255,0.08)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                color: "white",
              }}>{TG}</a>
            </div>
          </div>

          <div>
            <h4 style={headStyle}>Sahifalar</h4>
            <a href="#home" style={linkStyle}>Bosh sahifa</a>
            <a href="#courses" style={linkStyle}>Kurslar</a>
            <a href="#about" style={linkStyle}>Biz haqimizda</a>
            <a href="#contact" style={linkStyle}>Aloqa</a>
          </div>

          <div>
            <h4 style={headStyle}>Kurslar</h4>
            <a href="#" style={linkStyle}>IELTS</a>
            <a href="#" style={linkStyle}>CEFR</a>
            <a href="#" style={linkStyle}>SAT</a>
            <a href="#" style={linkStyle}>Matematika</a>
            <a href="#" style={linkStyle}>Mental arifmetika</a>
          </div>

          <div>
            <h4 style={headStyle}>Aloqa</h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", margin: "4px 0", lineHeight: 1.6 }}>
              Massiv Uzgarish 1v<br/>Yangihayot, Toshkent
            </p>
            <a href="tel:+998000000000" style={linkStyle}>+998 XX XXX XX XX</a>
          </div>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 16, marginTop: 48, paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          fontSize: 13, color: "rgba(255,255,255,0.55)",
        }}>
          <span>© 2026 Pyramid Academy. Toshkent, Uzbekistan.</span>
          <span>O'zbek · Русский · English</span>
        </div>
      </div>
    </footer>
  );
}
