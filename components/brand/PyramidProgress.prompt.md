# PyramidProgress

**What & when:** The signature homepage interaction. 5 ascending levels (A1 → C2 / IELTS bands) the user clicks to surface a matching course recommendation. Use exactly once on the marketing site (homepage hero or right under it).

```jsx
<PyramidProgress
  defaultLevel={2}
  onSelect={(lvl) => console.log("user picked", lvl.id)}
/>
```

Levels default to the canonical A1 → C2 ladder; override `levels` only with a complete 5-step list.
