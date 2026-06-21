import React from "react";

/**
 * Button — the primary interactive element.
 * Five visual variants on a single shape system.
 */
export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  as: Comp = "button",
  href,
  fullWidth = false,
  disabled = false,
  loading = false,
  type,
  onClick,
  children,
  style,
  ...rest
}) {
  if (Comp === "button" && href) Comp = "a";

  const palette = {
    primary: {
      "--btn-bg": "var(--color-primary)",
      "--btn-bg-hover": "var(--color-primary-hover)",
      "--btn-bg-press": "var(--color-primary-press)",
      "--btn-fg": "var(--text-on-primary)",
      "--btn-border": "transparent",
      "--btn-shadow": "var(--shadow-brand)",
    },
    secondary: {
      "--btn-bg": "transparent",
      "--btn-bg-hover": "var(--color-primary-soft)",
      "--btn-bg-press": "var(--brand-navy-100)",
      "--btn-fg": "var(--color-primary)",
      "--btn-border": "var(--color-primary)",
      "--btn-shadow": "none",
    },
    accent: {
      "--btn-bg": "var(--color-accent)",
      "--btn-bg-hover": "var(--color-accent-hover)",
      "--btn-bg-press": "var(--color-accent-hover)",
      "--btn-fg": "var(--text-on-accent)",
      "--btn-border": "transparent",
      "--btn-shadow": "0 12px 32px -10px rgba(245,158,11,0.45)",
    },
    ghost: {
      "--btn-bg": "transparent",
      "--btn-bg-hover": "var(--slate-100)",
      "--btn-bg-press": "var(--slate-200)",
      "--btn-fg": "var(--text-default)",
      "--btn-border": "transparent",
      "--btn-shadow": "none",
    },
    inverse: {
      "--btn-bg": "var(--white)",
      "--btn-bg-hover": "var(--slate-100)",
      "--btn-bg-press": "var(--slate-200)",
      "--btn-fg": "var(--brand-navy-700)",
      "--btn-border": "transparent",
      "--btn-shadow": "var(--shadow-md)",
    },
  }[variant];

  const sizes = {
    sm: { padding: "8px 14px", fontSize: "14px", height: "36px", gap: "6px" },
    md: { padding: "12px 20px", fontSize: "16px", height: "44px", gap: "8px" },
    lg: { padding: "14px 26px", fontSize: "18px", height: "52px", gap: "10px" },
  }[size];

  return (
    <Comp
      href={href}
      type={Comp === "button" ? (type || "button") : undefined}
      onClick={disabled || loading ? undefined : onClick}
      aria-disabled={disabled || loading || undefined}
      data-loading={loading || undefined}
      className={"pa-btn pa-btn--" + variant}
      style={{
        ...palette,
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center",
        justifyContent: "center",
        gap: sizes.gap,
        padding: sizes.padding,
        height: sizes.height,
        fontSize: sizes.fontSize,
        fontWeight: 600,
        fontFamily: "var(--font-sans)",
        lineHeight: 1,
        color: "var(--btn-fg)",
        background: "var(--btn-bg)",
        border: "1.5px solid var(--btn-border)",
        borderRadius: "var(--radius-md)",
        boxShadow: variant === "primary" || variant === "accent" || variant === "inverse" ? "var(--btn-shadow)" : undefined,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "transform var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled && !loading) { e.currentTarget.style.background = "var(--btn-bg-hover)"; e.currentTarget.style.transform = "scale(1.04)"; } }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--btn-bg)"; e.currentTarget.style.transform = "scale(1)"; }}
      onMouseDown={(e) => { if (!disabled && !loading) { e.currentTarget.style.background = "var(--btn-bg-press)"; e.currentTarget.style.transform = "scale(0.98)"; } }}
      onMouseUp={(e) => { if (!disabled && !loading) { e.currentTarget.style.background = "var(--btn-bg-hover)"; e.currentTarget.style.transform = "scale(1.04)"; } }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </Comp>
  );
}
