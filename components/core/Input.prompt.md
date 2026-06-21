# Input

**What & when:** Form input for the registration form (name, phone, age) and contact fields. Always paired with a label; the asterisk denotes `required`.

```jsx
<Input label="Ism" required placeholder="Ismingiz" />
<Input label="Telefon" type="tel" required hint="+998 XX XXX XX XX" />
<Input label="Email" type="email" error="Notog'ri format" />
```

44px tall, 16px font (the iOS no-zoom threshold), focus ring uses `--ring-focus`.
