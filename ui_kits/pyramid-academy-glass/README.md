# Pyramid Academy — Glass UI kit

A second visual direction for Pyramid Academy: deep-navy backdrop with
glassmorphism and liquid-glass effects, an animated orb mesh, and a
video-driven hero. Brand content (Uzbek copy, courses, voice rules) is
identical to the light kit — only the visual aesthetic changes.

## What's here

| File | What |
|---|---|
| `index.html`              | Mounts the full glass homepage. |
| `glass.css`               | All glass utilities (panels, orbs, buttons, inputs, badges). Scoped to `html.glass-kit`. |
| `g-icons.jsx`             | Inline Lucide-style icon set (zero CDN runtime dependency). |
| `GlassBackground.jsx`     | Fixed gradient mesh + 3 animated orbs. |
| `GlassNav.jsx`            | Floating sticky glass nav with lang pill + CTA. |
| `GlassHero.jsx`           | Split hero — left text + CTAs, right `loader.mp4` in a liquid-glass frame. |
| `GlassPyramidTracker.jsx` | Signature: 5-layer interactive glass pyramid (A1 → C1/C2). |
| `GlassCourses.jsx`        | 7-course bento grid with one featured (amber) tile. |
| `GlassTrust.jsx`          | 3 glass testimonial cards + a stats strip. |
| `GlassAbout.jsx`          | Two-panel split: visual + text + differentiators. |
| `GlassContact.jsx`        | Info column (address / phone / hours / map) + registration form. |
| `GlassFooter.jsx`         | Thin glass-strip footer. |
| `assets/loader.mp4`       | Hero video supplied by the user. |
| `assets/pyramid-mark-on-navy.jpg` | Brand portrait used in the About visual. |

## Notes

- The kit uses **inline-styled JSX** plus one `glass.css` for the depth/blur primitives. It still consumes the design-system tokens (`var(--font-sans)`, etc.).
- All glass surfaces use `backdrop-filter: blur(28px) saturate(180%)` — reduced to 18px on mobile via media query.
- `prefers-reduced-motion` disables the orb float and liquid sheen.
- Three orbs animated by CSS transforms only (no JS) — keeps it cheap.

## Limitations

- Phone is still `+998 XX XXX XX XX`; map is a styled grid placeholder.
- Testimonials are illustrative placeholders.
- `backdrop-filter` is not supported on Firefox 102 and below — the fallback shows the solid translucent fill but loses the blur.
