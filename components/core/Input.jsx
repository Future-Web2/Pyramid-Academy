import React from "react";

/**
 * Input — labelled text/phone/email input with help + error.
 */
export function Input({
  id,
  label,
  hint,
  error,
  required = false,
  type = "text",
  iconLeft,
  style,
  ...rest
}) {
  const inputId = id || React.useId();
  const helpId = inputId + "-help";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 14, fontWeight: 600, color: "var(--text-default)" }}>
          {label}{required && <span style={{ color: "var(--danger-600)", marginLeft: 4 }}>*</span>}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--bg-surface)",
          border: "1px solid " + (error ? "var(--danger-600)" : "var(--border-strong)"),
          borderRadius: "var(--radius-sm)",
          padding: "0 12px",
          height: 44,
          transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
        }}
        onFocusCapture={(e) => { e.currentTarget.style.borderColor = "var(--border-focus)"; e.currentTarget.style.boxShadow = "var(--ring-focus)"; }}
        onBlurCapture={(e) => { e.currentTarget.style.borderColor = error ? "var(--danger-600)" : "var(--border-strong)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {iconLeft && <span style={{ display: "inline-flex", color: "var(--text-subtle)" }}>{iconLeft}</span>}
        <input
          id={inputId}
          type={type}
          required={required}
          aria-invalid={!!error || undefined}
          aria-describedby={hint || error ? helpId : undefined}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 16,
            fontFamily: "inherit",
            color: "var(--text-default)",
            height: "100%",
            padding: 0,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span id={helpId} style={{ fontSize: 13, color: error ? "var(--danger-600)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
