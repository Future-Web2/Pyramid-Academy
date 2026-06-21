# Pyramid Academy — Design System

A design system for **Pyramid Academy** (Zamonaviy Ta'lim Markazi), an educational center in Tashkent, Uzbekistan, specializing in international exam prep (IELTS, CEFR, SAT), mental arithmetic, mathematics, and English/Russian language courses.

## Brand context

- **Name:** Pyramid Academy / Zamonaviy Ta'lim Markazi
- **Location:** Yangihayot district, Massiv Uzgarish 1v/1/2, Tashkent, Uzbekistan
- **Founded:** 2021 (5 years of experience)
- **Social:** Instagram [@pyramid_academy_lc](https://www.instagram.com/pyramid_academy_lc/) · Telegram [@PYRAMID_academy](https://t.me/PYRAMID_academy)
- **Languages of instruction:** Uzbek, Russian, English
- **Audience:** students aged 12–25 preparing for international exams, plus parents researching quality education for their children (6–14 for mental arithmetic).
- **Brand metaphor:** the *Pyramid of Success* — structured, ascending layers representing progressive learning stages (A1 → C2, IELTS bands 0 → 7+).

## Sources

- `uploads/photo_2025-08-07_23-53-31.jpg` — the brand mark photograph supplied by the user (silver-white pyramid trio on deep navy felt). The source for the mark geometry and the brand backdrop motif.
- Spec brief supplied in the project intro (audience, palette, typography, layout, page architecture, content).
- No codebase, Figma file, or production website was attached.

## Index

```
styles.css                  ← root stylesheet (consumers link this)
tokens/
  colors.css                ← palette + semantic aliases
  typography.css            ← families, weights, scale
  spacing.css               ← 4px scale + layout container
  radii.css                 ← corner radii
  shadows.css               ← lift system + focus rings
  motion.css                ← durations + easings
  fonts.css                 ← Inter + Poppins (Google Fonts)
  base.css                  ← element resets + defaults
assets/
  logos/
    pyramid-mark.svg        ← clean vector of the trio (currentColor)
    pyramid-wordmark.svg    ← lockup with wordmark
    pyramid-mark-on-navy.jpg← the original brand portrait
components/
  core/
    Button.jsx              ← Button (primary / secondary / ghost / accent)
    Badge.jsx               ← Pill labels
    Card.jsx                ← Surface container
    Input.jsx               ← Text input + label
    Stat.jsx                ← Big-number stat block
    SectionHeading.jsx      ← Eyebrow + H2 + lede
  brand/
    PyramidMark.jsx         ← inline SVG mark (currentColor)
    PyramidProgress.jsx     ← signature 5-level Pyramid Progress Tracker
  marketing/
    CourseCard.jsx          ← icon + title + meta + CTA
    Testimonial.jsx         ← quote + author
    Navbar.jsx              ← top nav + lang switcher
    Footer.jsx              ← footer with social + lang
ui_kits/
  pyramid-academy-web/
    index.html              ← homepage recreation (registered as a card)
    Hero.jsx, CoursesSection.jsx, TrustSection.jsx,
    AboutSection.jsx, ContactSection.jsx, icons.jsx
guidelines/                 ← foundation specimen cards (Type, Colors, Spacing, Brand)
SKILL.md                    ← Claude Skill manifest (drop-in for Claude Code)
readme.md                   ← you are here
```

## How consumers use this

```html
<!-- 1. one stylesheet -->
<link rel="stylesheet" href="path/to/styles.css">

<!-- 2. the bundle (auto-built from components) -->
<script src="path/to/_ds_bundle.js"></script>

<script type="text/babel">
  const { Button, CourseCard, PyramidProgress, Navbar, Footer } =
    window.PyramidAcademyDesignSystem;
</script>
```

The Design System tab surfaces every specimen + component card; the **Pyramid Academy Web** group shows the live homepage recreation.

## Content fundamentals

**Voice.** Professional, encouraging, trustworthy, ambitious. Writes for two readers simultaneously — a serious student and a careful parent — so copy avoids slang while staying warm. Always says what the student will achieve, never what the school sells.

**Multilingual.** Uzbek is the primary surface language (Latin script), with Russian and English equal alternates. Headlines often code-switch: Uzbek narrative around capitalized English exam names ("IELTS", "CEFR", "SAT"), which read as proper nouns and signals of seriousness.

**Casing.** Title Case for headlines and CTAs in Uzbek and Russian; sentence case in long body copy. Exam names stay all-caps (IELTS, CEFR, SAT). The school name is "Pyramid Academy" — never all-caps in body.

**Pronouns.** "Biz" (we) when talking about the school; "siz" (formal you) for the reader — never "sen". In Russian: "вы". Parent-facing copy refers to "farzandingiz" (your child) with respectful tone.

**Numbers as proof.** Concrete numerals carry weight: "5 yillik tajriba", "1.3K+ followers", "IELTS 7.0+". We do not invent stats; if a number isn't real, we say "har bir talaba" (every student) instead.

**Emoji.** Not part of the brand. Headlines, CTAs, and section labels never use them. (The Telegram channel may use a few; the website does not.)

**Example tone:**
> H1 — *Zamonaviy Ta'lim Markazi — IELTS, CEFR, SAT va Matematikada Mukammal Natijalar*
> Sub — *Toshkentda 5 yillik tajriba. Yangihayot filialida yangi guruhlar ochiq. Ingliz, rus va o'zbek tillarda ta'lim.*
> CTA — *Guruhga Qatnish*

**Avoid.** Lorem ipsum, generic "Achieve your dreams" English-only filler, exclamation marks, ALL-CAPS body copy, emoji sprinkled in headlines, hype words like "amazing" or "revolutionary".

## Visual foundations

**Color.** A two-color brand — deep navy (`--brand-navy-700` / `--brand-navy-900`) for trust and authority, golden amber (`--brand-amber-500`) reserved for CTAs and achievement moments. Slate neutrals (`--slate-50` through `--slate-900`) carry the rest of the UI. White surfaces sit on a `--slate-50` page so cards have edge presence without shadows working hard. Accent amber is **rationed** — at most one prominent amber element per viewport (the primary CTA, or a single achievement badge).

**Type.** Inter, full stop. One family across display and body removes friction and reads well in Cyrillic and Latin alike. Poppins is available as `--font-display-alt` for occasional display moments. Weights used: 400 body, 500 supporting, 600 buttons + H3, 700 headlines. Tight tracking on display (`-0.02em`), normal on body.

**Imagery.** Two motifs:
1. **The navy felt backdrop** from the brand portrait — used full-bleed for the hero and section headers. Recreated tokens-side as `--gradient-navy-felt`.
2. **Real classroom photography** (cool-tone, natural light, no stock-photo gloss). When photography is unavailable, the pyramid mark on navy felt is the canonical fallback.

No hand-drawn illustrations, no isometric vector scenes, no abstract gradients beyond the navy felt itself.

**Backgrounds.** Page `--bg-page` is `--slate-50`. Cards are pure white. The hero and footer use navy felt. Sections may alternate between page and white-card-strip; never between two saturated colors.

**Animation.** Restrained. Hover on buttons scales `1.04`x with `cubic-bezier(0.4, 0, 0.2, 1)` over 200ms. Scroll reveals: opacity 0 → 1 + 12px translate-up, 320ms. No bounces, no looping decorations, no parallax on mobile.

**Hover states.** Solid buttons darken one step on the palette ramp (`--color-primary` → `--color-primary-hover`). Ghost buttons fill with `--color-primary-soft`. Cards lift one shadow step + 2px translate-up. Links underline on hover.

**Press / active.** A further step darker (`--color-primary-press`) and `scale(0.98)` for tactile feedback. No flash, no ripple.

**Borders.** Hairline `1px solid --border-default` on cards, inputs, dividers. Focus rings are 3px navy at 32% alpha (`--ring-focus`), never the native outline.

**Shadows.** Cool slate-tinted (`rgba(15,23,42,…)`), low-contrast, layered. We use `--shadow-sm` at rest on cards, `--shadow-md` on hover. The brand-tinted `--shadow-brand` is for the floating CTA on the hero only.

**Transparency / blur.** Used sparingly. The sticky navbar uses `backdrop-filter: blur(12px)` on a 92% white surface. No glassmorphism elsewhere.

**Corner radii.** `--radius-md` (8px) on buttons, `--radius-lg` (12px) on cards, `--radius-pill` for badges/tags. No 20px+ marshmallow cards.

**Layout.** 1280px max container, 12-column grid, 80px gutters, 120px side margins on desktop; collapses to a 4-column grid with 20px gutters and 16px margins on mobile. Hero and sections use generous vertical rhythm (96–128px between section starts).

**Fixed elements.** Sticky top nav (72px tall, white/blur), no sticky CTA bar on desktop. Mobile gets a hamburger overlay rather than a docked nav.

## Iconography

Pyramid Academy does not ship a proprietary icon system. We use **Lucide** (lucide.dev) via CDN as the canonical icon set — modern, even 2px stroke weight, rounded line caps, neutral tone — which sits comfortably next to Inter and never competes with the pyramid mark.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="graduation-cap"></i>
<script>lucide.createIcons();</script>
```

In JSX components we render inline SVGs (a small subset of Lucide is inlined in `components/icons/`) so we avoid the runtime dependency.

**Conventions:**
- 20px or 24px nominal; 2px stroke; `currentColor` fill/stroke.
- Used for course categories (one icon per course), nav, social, form affordances, list bullets in features.
- The **pyramid mark** (`assets/logos/pyramid-mark.svg`) is the only "brand glyph" and is reserved for logo placement — never used as a generic decoration.
- Emoji is not used as iconography.
- Flag glyphs in the language switcher are text codes ("UZ · RU · EN"), not flag emoji.

**Flagged substitution.** No native icon files were supplied. Lucide is a stand-in. If the brand owns or commissions a specific set, swap it in here and update this section.

## Font substitution

No `.ttf`/`.woff2` binaries were supplied. We load **Inter** and **Poppins** from Google Fonts via `tokens/fonts.css`. To self-host, replace that `@import url(...)` with `@font-face` rules pointing at the binaries.
