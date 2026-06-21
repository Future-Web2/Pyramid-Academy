import React, { useState } from "react";
import { Button } from "../core/Button.jsx";
import { PyramidMark } from "../brand/PyramidMark.jsx";

/**
 * Navbar — sticky top nav with logo, links, language switcher, primary CTA.
 */
export function Navbar({
  links,
  currentLang = "UZ",
  langs = ["UZ", "RU", "EN"],
  onLangChange,
  cta = "Guruhga Qatnish",
  ctaHref = "#register",
  style,
}) {
  const defaultLinks = [
    { label: "Bosh sahifa", href: "#home" },
    { label: "Kurslar", href: "#courses" },
    { label: "Biz haqimizda", href: "#about" },
    { label: "Aloqa", href: "#contact" },
  ];
  const items = links || defaultLinks;
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-default)",
      fontFamily: "var(--font-sans)",
      ...style,
    }}>
      <div style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 24px",
        height: 72,
        display: "flex",
        alignItems: "center",
        gap: 32,
      }}>
        <a href="#home" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          textDecoration: "none", color: "var(--brand-navy-900)",
          flexShrink: 0,
        }}>
          <PyramidMark size={28} color="var(--brand-navy-700)" />
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>Pyramid Academy</span>
        </a>

        <nav className="pa-nav-links" style={{
          display: "flex", alignItems: "center", gap: 28, flex: 1,
        }}>
          {items.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontSize: 15, fontWeight: 500,
              color: "var(--text-default)",
              textDecoration: "none",
            }}>{l.label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            display: "inline-flex", alignItems: "center",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-pill)",
            padding: 2,
            fontSize: 12, fontWeight: 600,
          }}>
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => onLangChange && onLangChange(l)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  background: l === currentLang ? "var(--brand-navy-700)" : "transparent",
                  color: l === currentLang ? "white" : "var(--text-muted)",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 12,
                }}
              >{l}</button>
            ))}
          </div>
          <Button variant="primary" size="sm" href={ctaHref}>{cta}</Button>
        </div>
      </div>
    </header>
  );
}
