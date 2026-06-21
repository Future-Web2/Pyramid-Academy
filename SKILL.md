---
name: pyramid-academy-design
description: Use this skill to generate well-branded interfaces and assets for Pyramid Academy (Zamonaviy Ta'lim Markazi, Tashkent), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, typography, fonts, assets, and UI kit components for prototyping with the brand.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

- **Token entry:** `styles.css` (root) — link this single file from any HTML; everything is `@import`-reachable from there.
- **Brand mark:** `assets/logos/pyramid-mark.svg` (clean vector) and `assets/logos/pyramid-mark-on-navy.jpg` (the canonical portrait).
- **Components:** `components/core/`, `components/brand/`, `components/marketing/` — each has a `.d.ts` props contract, a sibling `.jsx`, a `.prompt.md` usage cheat-sheet, and a card HTML.
- **Site recreation:** `ui_kits/pyramid-academy-web/index.html` — full homepage built from the primitives. Read it for layout patterns.
- **Specimens:** the `guidelines/` folder has small spec cards for color ramps, typography, spacing, radii, shadows, and motion.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the assets you need out of `assets/` and create static HTML files that link `styles.css`. If working on production code, copy the relevant token CSS and `.jsx` components, and follow the visual + content rules in `readme.md`.

If the user invokes this skill without further guidance, ask what they want to build (a landing page, a campaign asset, a course flyer, an enrollment form, a slide for an investor pitch), ask a few clarifying questions about audience and channel, and act as an expert designer who outputs either polished HTML artifacts or production-ready code.

## Voice & content rules (do not violate)

- Uzbek is the primary surface language. Russian and English are equal alternates; never English-only.
- Exam names stay all-caps: IELTS, CEFR, SAT.
- Formal "siz" / "вы" — never the informal forms.
- No emoji in headlines, CTAs, or section labels.
- No invented stats. If a number isn't real, replace it with "har bir talaba" or omit.
- The amber accent (`--color-accent`) appears at most once per viewport.
