# Button

**What & when:** Pyramid Academy's primary action. Use `primary` (navy) for the one main action on a view, `accent` (amber) for the single highest-value conversion moment (hero enrollment CTA), `secondary` for a navy outlined alternative, `ghost` for tertiary actions, and `inverse` (white-on-navy) when sitting on the navy felt backdrop.

```jsx
<Button variant="primary" size="lg" href="#register">Guruhga Qatnish</Button>
<Button variant="secondary" size="lg">Batafsil Ma'lumot</Button>
<Button variant="accent" size="lg" iconRight={<ArrowRight />}>Boshlash</Button>
```

**Variants:** `primary` · `secondary` · `accent` · `ghost` · `inverse`
**Sizes:** `sm` (36px) · `md` (44px) · `lg` (52px — meets 48px touch target on mobile)
**Notable:** hover scales 1.04, press scales 0.98 with one step darker. Set `href` to render as an `<a>` automatically. `loading` and `disabled` block clicks. Always keep button text Title Case in Uzbek/Russian; never end with a period.
