# Pyramid Academy — Web UI kit

A high-fidelity recreation of the Pyramid Academy marketing site homepage,
built from the brand spec brief (no codebase or Figma was provided).

## What's here

| File | What |
|---|---|
| `index.html`         | Mounts the whole homepage; sets up sticky nav, scroll reveals, lang switcher state. |
| `icons.jsx`          | Inline Lucide-style icons used across the kit (zero CDN runtime dependency). |
| `Hero.jsx`           | Navy felt hero — H1, sub, dual CTAs, the Pyramid Progress Tracker tile, key stats. |
| `CoursesSection.jsx` | Seven course cards in an auto-fit grid; one highlighted IELTS card. |
| `TrustSection.jsx`   | Three testimonials + a four-stat row. |
| `AboutSection.jsx`   | "Pyramid of Success" panel + three differentiators. |
| `ContactSection.jsx` | Address / phone / hours card, fake map block, registration form. |

The site reuses **every** primitive from `components/core/` and
`components/marketing/` — `Navbar`, `Footer`, `Button`, `Card`, `Badge`,
`Input`, `Stat`, `SectionHeading`, `CourseCard`, `Testimonial`,
`PyramidMark`, `PyramidProgress` — and composes them into the page.

## Real content

All Uzbek copy is from the brief. Real numerals only: 5 yillik tajriba,
1.3K+ Instagram followers. Phone is a placeholder (`+998 XX XXX XX XX`)
until a real number is supplied. The map is a styled placeholder until a
Google Maps embed key is added.
