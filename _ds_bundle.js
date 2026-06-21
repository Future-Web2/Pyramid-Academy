/* @ds-bundle: {"format":3,"namespace":"PyramidAcademyDesignSystem_4db737","components":[{"name":"PyramidMark","sourcePath":"components/brand/PyramidMark.jsx"},{"name":"PyramidProgress","sourcePath":"components/brand/PyramidProgress.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"CourseCard","sourcePath":"components/marketing/CourseCard.jsx"},{"name":"Footer","sourcePath":"components/marketing/Footer.jsx"},{"name":"Navbar","sourcePath":"components/marketing/Navbar.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"}],"sourceHashes":{"components/brand/PyramidMark.jsx":"63afb0b330de","components/brand/PyramidProgress.jsx":"4162c7c7f86f","components/core/Badge.jsx":"949ed4003a52","components/core/Button.jsx":"f27da19917e4","components/core/Card.jsx":"0992a0171038","components/core/Input.jsx":"6352ef4c094e","components/core/SectionHeading.jsx":"51c076e0c6a7","components/core/Stat.jsx":"6c9739a2cb7e","components/marketing/CourseCard.jsx":"da9669d658a9","components/marketing/Footer.jsx":"6d395d5dcb85","components/marketing/Navbar.jsx":"80bdf37cf117","components/marketing/Testimonial.jsx":"a26dabb66417","ui_kits/pyramid-academy-glass/GlassAbout.jsx":"0b182f04a5e7","ui_kits/pyramid-academy-glass/GlassBackground.jsx":"328d618df41f","ui_kits/pyramid-academy-glass/GlassContact.jsx":"e1ecfebe9231","ui_kits/pyramid-academy-glass/GlassCourses.jsx":"fa1ec055d8a4","ui_kits/pyramid-academy-glass/GlassFooter.jsx":"c00a74e41654","ui_kits/pyramid-academy-glass/GlassGallery.jsx":"b67a4b884171","ui_kits/pyramid-academy-glass/GlassHero.jsx":"00f7e08b4a18","ui_kits/pyramid-academy-glass/GlassLogin.jsx":"2920f2331dcb","ui_kits/pyramid-academy-glass/GlassNav.jsx":"3c8c3bf361c6","ui_kits/pyramid-academy-glass/GlassPortal.jsx":"ddd08b8132d5","ui_kits/pyramid-academy-glass/GlassPyramidMark.jsx":"b2c1c4c13bd3","ui_kits/pyramid-academy-glass/GlassPyramidTracker.jsx":"eb2e031d750d","ui_kits/pyramid-academy-glass/GlassTrust.jsx":"31a2017eb808","ui_kits/pyramid-academy-glass/g-icons.jsx":"860926309f1a","ui_kits/pyramid-academy-glass/parallax.js":"8b69c0a422ef","ui_kits/pyramid-academy-web/AboutSection.jsx":"ca9d864149a6","ui_kits/pyramid-academy-web/ContactSection.jsx":"3a15efa68f33","ui_kits/pyramid-academy-web/CoursesSection.jsx":"77fb5b9ff507","ui_kits/pyramid-academy-web/Hero.jsx":"c5aa67e666c6","ui_kits/pyramid-academy-web/TrustSection.jsx":"6afd64a71026","ui_kits/pyramid-academy-web/icons.jsx":"cd538b5d4b75"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PyramidAcademyDesignSystem_4db737 = window.PyramidAcademyDesignSystem_4db737 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/PyramidMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PyramidMark — inline SVG of the brand mark. Color via `color` style.
 */
function PyramidMark({
  size = 32,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 200 180",
    width: size,
    height: size * (180 / 200),
    fill: "currentColor",
    "aria-label": "Pyramid Academy",
    style: {
      color,
      display: "inline-block",
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M10 160 L70 160 L40 60 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 160 L190 160 L160 60 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100 10 L125 90 L100 160 L75 90 Z"
  }));
}
Object.assign(__ds_scope, { PyramidMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PyramidMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/PyramidProgress.jsx
try { (() => {
const {
  useState
} = React;
/**
 * PyramidProgress — the signature interaction.
 * 5 ascending levels of an SVG pyramid; click a level to see the
 * matched course recommendation in the side panel.
 */
function PyramidProgress({
  levels,
  onSelect,
  defaultLevel = 0,
  style
}) {
  const data = levels || [{
    id: "a1",
    title: "A1 — Beginner",
    ielts: "IELTS 3.0",
    recommend: "Ingliz Tili — Beginner",
    meta: "0–2 months"
  }, {
    id: "a2",
    title: "A2 — Elementary",
    ielts: "IELTS 3.5",
    recommend: "Ingliz Tili — Elementary",
    meta: "2–3 months"
  }, {
    id: "b1",
    title: "B1 — Intermediate",
    ielts: "IELTS 4.5",
    recommend: "CEFR B1 + Foundation",
    meta: "2–4 months"
  }, {
    id: "b2",
    title: "B2 — Upper",
    ielts: "IELTS 5.5",
    recommend: "IELTS Foundation",
    meta: "3–4 months"
  }, {
    id: "c1",
    title: "C1 / C2 — Advanced",
    ielts: "IELTS 7.0+",
    recommend: "IELTS Intensive 7.0+",
    meta: "3–6 months"
  }];
  const [active, setActive] = useState(defaultLevel);

  // 5 trapezoidal layers stacked, each narrower than the last.
  // Geometry: total 5 layers across 360 height, 480 base width.
  const W = 480,
    H = 360;
  const layerH = H / 5;
  const layers = data.map((d, i) => {
    const fromTop = data.length - 1 - i; // top layer is last in data
    const yTop = fromTop * layerH;
    const yBot = yTop + layerH;
    const insetTop = yTop / H * (W / 2);
    const insetBot = yBot / H * (W / 2);
    return {
      ...d,
      idx: i,
      points: `${insetTop},${yTop} ${W - insetTop},${yTop} ${W - insetBot},${yBot} ${insetBot},${yBot}`,
      centroidY: (yTop + yBot) / 2
    };
  });
  const cur = data[active];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
      gap: 32,
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H + 28}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "pp-active",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FBBF24"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#D97706"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "pp-idle",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1E40AF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0B1E4A"
  }))), layers.map(l => {
    const isActive = l.idx === active;
    const fromTop = layers.length - 1 - l.idx;
    return /*#__PURE__*/React.createElement("g", {
      key: l.id,
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setActive(l.idx);
        onSelect && onSelect(l);
      },
      onMouseEnter: e => {
        e.currentTarget.style.opacity = "0.92";
      },
      onMouseLeave: e => {
        e.currentTarget.style.opacity = "1";
      }
    }, /*#__PURE__*/React.createElement("polygon", {
      points: l.points,
      fill: isActive ? "url(#pp-active)" : "url(#pp-idle)",
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: "1.5",
      style: {
        transition: "fill 200ms cubic-bezier(.4,0,.2,1)"
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: W / 2,
      y: l.centroidY + 5,
      textAnchor: "middle",
      fill: "white",
      fontSize: fromTop === 0 ? 16 : 18,
      fontWeight: 700,
      letterSpacing: "0.04em"
    }, l.id.toUpperCase()));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      padding: 24,
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--brand-amber-600)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PyramidMark, {
    size: 14,
    color: "var(--brand-amber-600)"
  }), "Sizning darajangiz"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      margin: "8px 0 4px",
      lineHeight: 1.2,
      letterSpacing: "-0.02em"
    }
  }, cur.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: "0 0 18px",
      fontSize: 15
    }
  }, "Tahminiy ", cur.ielts), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-default)",
      margin: "0 0 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-subtle)",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, "Tavsiya etilgan kurs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "var(--text-default)"
    }
  }, cur.recommend), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, cur.meta))));
}
Object.assign(__ds_scope, { PyramidProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PyramidProgress.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status / category capsule.
 */
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--slate-100)",
      fg: "var(--slate-700)"
    },
    navy: {
      bg: "var(--brand-navy-50)",
      fg: "var(--brand-navy-700)"
    },
    accent: {
      bg: "var(--color-accent-soft)",
      fg: "var(--brand-amber-600)"
    },
    success: {
      bg: "var(--success-100)",
      fg: "var(--success-600)"
    },
    danger: {
      bg: "var(--danger-100)",
      fg: "var(--danger-600)"
    },
    info: {
      bg: "var(--info-100)",
      fg: "var(--info-600)"
    },
    inverse: {
      bg: "rgba(255,255,255,0.14)",
      fg: "var(--white)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      lineHeight: 1.4,
      letterSpacing: "0.02em",
      color: tones.fg,
      background: tones.bg,
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary interactive element.
 * Five visual variants on a single shape system.
 */
function Button({
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
      "--btn-shadow": "var(--shadow-brand)"
    },
    secondary: {
      "--btn-bg": "transparent",
      "--btn-bg-hover": "var(--color-primary-soft)",
      "--btn-bg-press": "var(--brand-navy-100)",
      "--btn-fg": "var(--color-primary)",
      "--btn-border": "var(--color-primary)",
      "--btn-shadow": "none"
    },
    accent: {
      "--btn-bg": "var(--color-accent)",
      "--btn-bg-hover": "var(--color-accent-hover)",
      "--btn-bg-press": "var(--color-accent-hover)",
      "--btn-fg": "var(--text-on-accent)",
      "--btn-border": "transparent",
      "--btn-shadow": "0 12px 32px -10px rgba(245,158,11,0.45)"
    },
    ghost: {
      "--btn-bg": "transparent",
      "--btn-bg-hover": "var(--slate-100)",
      "--btn-bg-press": "var(--slate-200)",
      "--btn-fg": "var(--text-default)",
      "--btn-border": "transparent",
      "--btn-shadow": "none"
    },
    inverse: {
      "--btn-bg": "var(--white)",
      "--btn-bg-hover": "var(--slate-100)",
      "--btn-bg-press": "var(--slate-200)",
      "--btn-fg": "var(--brand-navy-700)",
      "--btn-border": "transparent",
      "--btn-shadow": "var(--shadow-md)"
    }
  }[variant];
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: "14px",
      height: "36px",
      gap: "6px"
    },
    md: {
      padding: "12px 20px",
      fontSize: "16px",
      height: "44px",
      gap: "8px"
    },
    lg: {
      padding: "14px 26px",
      fontSize: "18px",
      height: "52px",
      gap: "10px"
    }
  }[size];
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    type: Comp === "button" ? type || "button" : undefined,
    onClick: disabled || loading ? undefined : onClick,
    "aria-disabled": disabled || loading || undefined,
    "data-loading": loading || undefined,
    className: "pa-btn pa-btn--" + variant,
    style: {
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
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && !loading) {
        e.currentTarget.style.background = "var(--btn-bg-hover)";
        e.currentTarget.style.transform = "scale(1.04)";
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--btn-bg)";
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseDown: e => {
      if (!disabled && !loading) {
        e.currentTarget.style.background = "var(--btn-bg-press)";
        e.currentTarget.style.transform = "scale(0.98)";
      }
    },
    onMouseUp: e => {
      if (!disabled && !loading) {
        e.currentTarget.style.background = "var(--btn-bg-hover)";
        e.currentTarget.style.transform = "scale(1.04)";
      }
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — neutral surface container with optional hover lift.
 */
function Card({
  as: Comp = "div",
  padding = "lg",
  interactive = false,
  variant = "surface",
  style,
  children,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  }[padding];
  const variants = {
    surface: {
      background: "var(--bg-surface)",
      color: "var(--text-default)",
      border: "1px solid var(--border-default)"
    },
    muted: {
      background: "var(--bg-surface-muted)",
      color: "var(--text-default)",
      border: "1px solid transparent"
    },
    navy: {
      background: "var(--brand-navy-900)",
      color: "var(--text-inverse)",
      border: "1px solid var(--brand-navy-800)",
      backgroundImage: "var(--gradient-navy-felt)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-default)",
      border: "1px solid var(--border-default)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pad,
      boxShadow: interactive ? "var(--shadow-sm)" : "var(--shadow-xs)",
      transition: interactive ? "transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)" : undefined,
      cursor: interactive ? "pointer" : undefined,
      ...variants,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text/phone/email input with help + error.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-default)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger-600)",
      marginLeft: 4
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--bg-surface)",
      border: "1px solid " + (error ? "var(--danger-600)" : "var(--border-strong)"),
      borderRadius: "var(--radius-sm)",
      padding: "0 12px",
      height: 44,
      transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)"
    },
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = "var(--border-focus)";
      e.currentTarget.style.boxShadow = "var(--ring-focus)";
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = error ? "var(--danger-600)" : "var(--border-strong)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-subtle)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    required: required,
    "aria-invalid": !!error || undefined,
    "aria-describedby": hint || error ? helpId : undefined,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: 16,
      fontFamily: "inherit",
      color: "var(--text-default)",
      height: "100%",
      padding: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    id: helpId,
    style: {
      fontSize: 13,
      color: error ? "var(--danger-600)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — eyebrow + H2 + optional lede. Page section starter.
 */
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "default",
  style
}) {
  const colors = tone === "inverse" ? {
    eyebrow: "var(--brand-amber-400)",
    title: "var(--white)",
    lede: "rgba(255,255,255,0.78)"
  } : {
    eyebrow: "var(--brand-navy-700)",
    title: "var(--text-default)",
    lede: "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      textAlign: align,
      maxWidth: align === "center" ? 720 : undefined,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: colors.eyebrow
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h2)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: colors.title,
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: colors.lede,
      margin: 0,
      textWrap: "pretty"
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Stat — large number with label, used in trust-signal rows.
 */
function Stat({
  value,
  label,
  tone = "navy",
  align = "left",
  style
}) {
  const tones = {
    navy: {
      value: "var(--brand-navy-700)",
      label: "var(--text-muted)"
    },
    accent: {
      value: "var(--brand-amber-600)",
      label: "var(--text-muted)"
    },
    inverse: {
      value: "var(--white)",
      label: "rgba(255,255,255,0.7)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      textAlign: align,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: tones.value
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: tones.label
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CourseCard.jsx
try { (() => {
/**
 * CourseCard — single course tile (icon + title + meta + CTA).
 */
function CourseCard({
  icon,
  title,
  description,
  audience,
  duration,
  level,
  href = "#",
  cta = "Kursni Tanlash",
  highlighted = false,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "lg",
    variant: highlighted ? "navy" : "surface",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      height: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: highlighted ? "rgba(245,158,11,0.18)" : "var(--brand-navy-50)",
      color: highlighted ? "var(--brand-amber-400)" : "var(--brand-navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      margin: 0,
      letterSpacing: "-0.01em",
      lineHeight: 1.25,
      color: highlighted ? "var(--white)" : "var(--text-default)"
    }
  }, title), level && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: highlighted ? "inverse" : "accent"
  }, level)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0,
      color: highlighted ? "rgba(255,255,255,0.78)" : "var(--text-muted)"
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontSize: 13,
      color: highlighted ? "rgba(255,255,255,0.7)" : "var(--text-subtle)"
    }
  }, audience && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: highlighted ? "var(--white)" : "var(--text-default)",
      fontWeight: 600
    }
  }, "Auditoriya:"), " ", audience), duration && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: highlighted ? "var(--white)" : "var(--text-default)",
      fontWeight: 600
    }
  }, "Davomiyligi:"), " ", duration)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: highlighted ? "accent" : "secondary",
    size: "md",
    href: href,
    fullWidth: true
  }, cta));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Footer.jsx
try { (() => {
const IG = /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "20",
  rx: "5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17.5",
  y1: "6.5",
  x2: "17.51",
  y2: "6.5"
}));
const TG = /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21.7 3.3a1 1 0 0 0-1.05-.15L2.6 10.6a1 1 0 0 0 .06 1.86l4.55 1.55 2.06 6.46a1 1 0 0 0 1.65.41l3.04-2.79 4.52 3.32a1 1 0 0 0 1.57-.57l3.5-15.7a1 1 0 0 0-.35-1.02zM9.6 14.92l-.93 4.04-1.5-4.7 9.27-7.05-6.84 7.7z"
}));

/**
 * Footer — multi-column footer with quick links, contact, social.
 */
function Footer({
  style
}) {
  const linkStyle = {
    fontSize: 14,
    color: "rgba(255,255,255,0.78)",
    textDecoration: "none",
    display: "block",
    padding: "4px 0"
  };
  const headStyle = {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "var(--brand-amber-400)",
    fontWeight: 600,
    margin: "0 0 14px"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      backgroundImage: "var(--gradient-navy-felt)",
      color: "white",
      padding: "64px 0 28px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: "white",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PyramidMark, {
    size: 32,
    color: "white"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Pyramid Academy")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,0.7)",
      lineHeight: 1.6,
      marginTop: 16,
      maxWidth: 320
    }
  }, "Zamonaviy ta'lim markazi. Toshkentda 5 yillik tajriba. IELTS, CEFR, SAT, matematika va mental arifmetika."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/pyramid_academy_lc/",
    "aria-label": "Instagram",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "rgba(255,255,255,0.08)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }
  }, IG), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/PYRAMID_academy",
    "aria-label": "Telegram",
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "rgba(255,255,255,0.08)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }
  }, TG))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: headStyle
  }, "Sahifalar"), /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: linkStyle
  }, "Bosh sahifa"), /*#__PURE__*/React.createElement("a", {
    href: "#courses",
    style: linkStyle
  }, "Kurslar"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: linkStyle
  }, "Biz haqimizda"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: linkStyle
  }, "Aloqa")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: headStyle
  }, "Kurslar"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle
  }, "IELTS"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle
  }, "CEFR"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle
  }, "SAT"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle
  }, "Matematika"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkStyle
  }, "Mental arifmetika")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: headStyle
  }, "Aloqa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,0.78)",
      margin: "4px 0",
      lineHeight: 1.6
    }
  }, "Massiv Uzgarish 1v", /*#__PURE__*/React.createElement("br", null), "Yangihayot, Toshkent"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+998000000000",
    style: linkStyle
  }, "+998 XX XXX XX XX"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13,
      color: "rgba(255,255,255,0.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Pyramid Academy. Toshkent, Uzbekistan."), /*#__PURE__*/React.createElement("span", null, "O'zbek \xB7 \u0420\u0443\u0441\u0441\u043A\u0438\u0439 \xB7 English"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Navbar.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Navbar — sticky top nav with logo, links, language switcher, primary CTA.
 */
function Navbar({
  links,
  currentLang = "UZ",
  langs = ["UZ", "RU", "EN"],
  onLangChange,
  cta = "Guruhga Qatnish",
  ctaHref = "#register",
  style
}) {
  const defaultLinks = [{
    label: "Bosh sahifa",
    href: "#home"
  }, {
    label: "Kurslar",
    href: "#courses"
  }, {
    label: "Biz haqimizda",
    href: "#about"
  }, {
    label: "Aloqa",
    href: "#contact"
  }];
  const items = links || defaultLinks;
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-default)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      color: "var(--brand-navy-900)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PyramidMark, {
    size: 28,
    color: "var(--brand-navy-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: "-0.01em"
    }
  }, "Pyramid Academy")), /*#__PURE__*/React.createElement("nav", {
    className: "pa-nav-links",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      flex: 1
    }
  }, items.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: "var(--text-default)",
      textDecoration: "none"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      padding: 2,
      fontSize: 12,
      fontWeight: 600
    }
  }, langs.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onLangChange && onLangChange(l),
    style: {
      padding: "5px 10px",
      borderRadius: "var(--radius-pill)",
      border: "none",
      background: l === currentLang ? "var(--brand-navy-700)" : "transparent",
      color: l === currentLang ? "white" : "var(--text-muted)",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 12
    }
  }, l))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: ctaHref
  }, cta))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
/**
 * Testimonial — quote + author block. Photo is optional; falls back to initials.
 */
function Testimonial({
  quote,
  name,
  role,
  score,
  avatarUrl,
  style
}) {
  const initials = (name || "").split(" ").map(s => s[0]).join("").slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      height: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "22",
    viewBox: "0 0 28 22",
    fill: "none",
    "aria-hidden": true,
    style: {
      color: "var(--brand-amber-500)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 22V13C0 6 4 1 11 0L12 3C8 4 6 7 6 11H11V22H0ZM17 22V13C17 6 21 1 28 0L29 3C25 4 23 7 23 11H28V22H17Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      margin: 0,
      color: "var(--text-default)",
      textWrap: "pretty",
      flex: 1
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, avatarUrl ? /*#__PURE__*/React.createElement("img", {
    src: avatarUrl,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--brand-navy-50)",
      color: "var(--brand-navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 15
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text-default)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, role, score ? " · " + score : ""))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassAbout.jsx
try { (() => {
// About — split layout: text glass panel + image/visual glass panel.
function GlassAbout() {
  const items = [{
    icon: /*#__PURE__*/React.createElement(G_Users, null),
    title: "Professional o'qituvchilar",
    body: "Xalqaro sertifikatlangan o'qituvchilar va aniq metodika."
  }, {
    icon: /*#__PURE__*/React.createElement(G_Globe, null),
    title: "3 tilda ta'lim",
    body: "O'zbek, rus va ingliz tillarida moslashuvchan dars jadvali."
  }, {
    icon: /*#__PURE__*/React.createElement(G_Award, null),
    title: "Tasdiqlangan natijalar",
    body: "IELTS 7.0+, SAT 1400+ — talabalarimizning real natijalari."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      position: "relative",
      padding: "96px 24px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-about-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass glass--xl glass--sheen",
    "data-parallax": true,
    "data-speed": "-0.04",
    style: {
      padding: 18,
      background: "rgba(15,23,42,0.45)",
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sheen-track",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: 480,
      borderRadius: 24,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.18)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== "undefined" && window.__resources && window.__resources.aboutImg || "./assets/pyramid-mark-on-navy.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(5,11,31,0.1) 0%, rgba(5,11,31,0.7) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 24,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 16,
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.6)",
      fontFamily: "var(--font-mono)"
    }
  }, "EST. 2021"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginTop: 4,
      letterSpacing: "-0.01em"
    }
  }, "Yangihayot, Toshkent")), /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--amber"
  }, "5 yil")))), /*#__PURE__*/React.createElement("div", {
    className: "glass glass--xl",
    "data-parallax": true,
    "data-speed": "0.05",
    style: {
      padding: "40px 36px",
      background: "rgba(15,23,42,0.45)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--blue",
    style: {
      marginBottom: 16,
      alignSelf: "flex-start"
    }
  }, "Biz haqimizda"), /*#__PURE__*/React.createElement("h2", {
    className: "glass-text",
    style: {
      fontSize: "clamp(28px, 3.4vw, 40px)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      margin: "0 0 18px",
      color: "var(--glass-text-primary)"
    }
  }, "Pyramid Academy \u2014 Sizning Muvaffaqiyat Piramidangiz"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: "var(--glass-text-secondary)",
      margin: "0 0 28px",
      textWrap: "pretty"
    }
  }, "Pyramid Academy Toshkentda 2021-yildan faoliyat yuritmoqda. Yangihayot filialida (Massiv Uzgarish 1v/1/2) 5 yillik tajriba asosida IELTS, CEFR, SAT, matematika va mental arifmetika kurslarini o'zbek, rus va ingliz tillarida taqdim etamiz."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "glass glass--sm",
    style: {
      padding: 16,
      background: "rgba(255,255,255,0.04)",
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "rgba(59,130,246,0.18)",
      color: "#93C5FD",
      border: "1px solid rgba(96,165,250,0.32)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, it.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--glass-text-primary)"
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-secondary)",
      lineHeight: 1.6,
      marginTop: 2
    }
  }, it.body))))))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 900px) { .g-about-grid { grid-template-columns: 1fr !important; } }`));
}
window.GlassAbout = GlassAbout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassAbout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassBackground.jsx
try { (() => {
// Animated background — fixed mesh + three floating orbs.
// Each orb has an outer parallax wrapper (JS-driven on scroll) and an inner
// element with the CSS keyframe float — so both motions compose cleanly.
function GlassBackground() {
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-bg",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("div", {
    "data-parallax": true,
    "data-speed": "-0.18",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-orb glass-orb--1"
  })), /*#__PURE__*/React.createElement("div", {
    "data-parallax": true,
    "data-speed": "-0.10",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-orb glass-orb--2"
  })), /*#__PURE__*/React.createElement("div", {
    "data-parallax": true,
    "data-speed": "-0.22",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-orb glass-orb--3"
  })));
}
window.GlassBackground = GlassBackground;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassBackground.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassContact.jsx
try { (() => {
// Contact — info column + registration glass form.
function GlassContact() {
  const courses = ["IELTS", "CEFR", "SAT", "Mental Arifmetika", "Matematika", "Ingliz Tili", "Rus Tili"];
  const [picked, setPicked] = React.useState("IELTS");
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: "relative",
      padding: "96px 24px 64px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-contact-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 32,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--blue",
    style: {
      marginBottom: 16
    }
  }, "Aloqa"), /*#__PURE__*/React.createElement("h2", {
    className: "glass-text",
    style: {
      fontSize: "clamp(28px, 3.4vw, 40px)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      margin: "0 0 12px",
      color: "var(--glass-text-primary)"
    }
  }, "Yangi guruhga ro'yxatdan o'ting"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--glass-text-secondary)",
      margin: 0
    }
  }, "Ikkala filialimizda ham yangi guruhlar ochiq. Ariza qoldiring \u2014 biz 24 soat ichida bog'lanamiz.")), /*#__PURE__*/React.createElement("div", {
    className: "g-branch-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BranchCard, {
    tag: "Asosiy filial",
    tagTone: "amber",
    addr: /*#__PURE__*/React.createElement(React.Fragment, null, "Massiv Uzgarish 1v", /*#__PURE__*/React.createElement("br", null), "Yangihayot, Toshkent"),
    phone: "+998 93 576 22 32",
    phoneHref: "tel:+998935762232"
  }), /*#__PURE__*/React.createElement(BranchCard, {
    tag: "2-filial",
    tagTone: "blue",
    addr: /*#__PURE__*/React.createElement(React.Fragment, null, "Massiv Uzgarish 1/2", /*#__PURE__*/React.createElement("br", null), "Yangihayot, Toshkent"),
    phone: "+998 95 797 22 32",
    phoneHref: "tel:+998957972232"
  })), /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(G_Clock, null),
    title: "Ish vaqti",
    body: "Du\u2013Sha: 09:00\u201320:00 \xB7 Yak: 10:00\u201317:00"
  }), /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md",
    style: {
      padding: 14,
      background: "rgba(15,23,42,0.45)",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.14)",
      aspectRatio: "16/9",
      background: "linear-gradient(135deg, #1E293B, #0F172A)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "32px 32px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "38%",
      left: "34%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#FCD34D"
    }
  }, /*#__PURE__*/React.createElement(G_Pin, {
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: "white",
      textShadow: "0 1px 4px #000"
    }
  }, "1v")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "58%",
      left: "62%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#93C5FD"
    }
  }, /*#__PURE__*/React.createElement(G_Pin, {
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: "white",
      textShadow: "0 1px 4px #000"
    }
  }, "1/2")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 10,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 11,
      color: "var(--glass-text-tertiary)"
    }
  }, "2 filial \xB7 Google Maps embed")))), /*#__PURE__*/React.createElement("form", {
    id: "register",
    className: "glass glass--xl",
    onSubmit: e => e.preventDefault(),
    style: {
      padding: "36px 32px",
      background: "rgba(15,23,42,0.55)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--amber",
    style: {
      marginBottom: 14
    }
  }, "Yangi guruhlar \u2014 sentabr 2026"), /*#__PURE__*/React.createElement("h3", {
    className: "glass-text",
    style: {
      fontSize: 30,
      fontWeight: 700,
      margin: "0 0 8px",
      letterSpacing: "-0.02em",
      color: "var(--glass-text-primary)"
    }
  }, "Bepul maslahat oling"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--glass-text-secondary)",
      margin: "0 0 28px"
    }
  }, "Bizning maslahatchi 24 soat ichida siz bilan bog'lanadi va kurs tanlashda yordam beradi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Ism *"
  }, /*#__PURE__*/React.createElement("input", {
    className: "ginput",
    placeholder: "Ismingiz",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Yosh"
  }, /*#__PURE__*/React.createElement("input", {
    className: "ginput",
    type: "number",
    placeholder: "14\u201335",
    min: 5,
    max: 70
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Telefon *"
  }, /*#__PURE__*/React.createElement("input", {
    className: "ginput",
    type: "tel",
    placeholder: "+998 93 576 22 32",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--glass-text-primary)",
      display: "block",
      marginBottom: 8,
      letterSpacing: "0.02em"
    }
  }, "Kurs *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, courses.map(c => {
    const active = picked === c;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      onClick: () => setPicked(c),
      style: {
        padding: "8px 14px",
        fontSize: 13,
        fontWeight: 600,
        borderRadius: 999,
        border: "1px solid " + (active ? "rgba(252,211,77,0.5)" : "rgba(255,255,255,0.18)"),
        background: active ? "linear-gradient(180deg, rgba(251,191,36,0.95), rgba(245,158,11,0.9))" : "rgba(255,255,255,0.06)",
        color: active ? "#1E1606" : "var(--glass-text-primary)",
        cursor: "pointer",
        transition: "all 200ms cubic-bezier(.4,0,.2,1)",
        fontFamily: "var(--font-sans)",
        boxShadow: active ? "0 0 18px rgba(245,158,11,0.45)" : "none"
      }
    }, c);
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "gbtn gbtn--amber gbtn--lg",
    style: {
      marginTop: 28,
      width: "100%"
    }
  }, "Arizani Yuborish", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--glass-text-tertiary)",
      margin: "14px 0 0",
      textAlign: "center"
    }
  }, "Yuborish orqali siz shaxsiy ma'lumotlar siyosatiga roziligingizni bildirasiz."))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 900px) { .g-contact-grid { grid-template-columns: 1fr !important; } .g-branch-grid { grid-template-columns: 1fr 1fr !important; } }`));
}
function BranchCard({
  tag,
  tagTone,
  addr,
  phone,
  phoneHref
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "glass glass--sm glass--interactive",
    style: {
      padding: 16,
      background: "rgba(15,23,42,0.5)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: tagTone === "amber" ? "gbadge gbadge--amber" : "gbadge gbadge--blue",
    style: {
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(G_Pin, {
    size: 12
  }), " ", tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--glass-text-secondary)",
      lineHeight: 1.55
    }
  }, addr), /*#__PURE__*/React.createElement("a", {
    href: phoneHref,
    style: {
      color: "#93C5FD",
      fontFamily: "var(--font-mono)",
      fontSize: 13.5,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(G_Phone, {
    size: 14
  }), " ", phone));
}
function InfoRow({
  icon,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "glass glass--sm",
    style: {
      padding: 16,
      background: "rgba(15,23,42,0.45)",
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "rgba(59,130,246,0.18)",
      color: "#93C5FD",
      border: "1px solid rgba(96,165,250,0.32)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--glass-text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-secondary)",
      lineHeight: 1.6,
      marginTop: 2
    }
  }, body)));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--glass-text-primary)",
      letterSpacing: "0.02em"
    }
  }, label), children);
}
window.GlassContact = GlassContact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassCourses.jsx
try { (() => {
// Courses — an ascending liquid-glass PYRAMID of the flagship English track
// (IELTS at the peak, widening down through IELTS Speaking / CEFR / SAT),
// followed by the remaining banner courses blended in the same glass style.
function GlassCourses() {
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) / r.width * 100 + "%");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) / r.height * 100 + "%");
  }

  // Top → bottom = narrowest → widest. Peak is the flagship (amber).
  const pyramid = [{
    icon: /*#__PURE__*/React.createElement(G_Cap, null),
    title: "IELTS",
    detail: "0 dan 6 oyda IELTS gacha",
    band: "6.0–7.5",
    peak: true,
    width: 420
  }, {
    icon: /*#__PURE__*/React.createElement(G_Mic, null),
    title: "IELTS Speaking",
    detail: "Ravon nutq va yuqori ball",
    band: "7.0+",
    width: 560
  }, {
    icon: /*#__PURE__*/React.createElement(G_FileCheck, null),
    title: "CEFR",
    detail: "3 oyda B2 darajasiga",
    band: "A1 → C2",
    width: 700
  }, {
    icon: /*#__PURE__*/React.createElement(G_Award, null),
    title: "SAT",
    detail: "Amerika universitetlari uchun",
    band: "1400+",
    width: 840
  }];

  // Remaining courses from the banners, grouped.
  const langs = [{
    icon: /*#__PURE__*/React.createElement(G_Languages, null),
    title: "Rus tili",
    note: "3 oyda"
  }, {
    icon: /*#__PURE__*/React.createElement(G_Globe, null),
    title: "Nemis tili",
    note: "3 oyda"
  }, {
    icon: /*#__PURE__*/React.createElement(G_Globe, null),
    title: "Koreys tili",
    note: "Boshlang'ich → suhbat"
  }, {
    icon: /*#__PURE__*/React.createElement(G_Book, null),
    title: "Ona tili",
    note: "Imtihon va savodxonlik"
  }];
  const stem = [{
    icon: /*#__PURE__*/React.createElement(G_Sigma, null),
    title: "Matematika"
  }, {
    icon: /*#__PURE__*/React.createElement(G_Atom, null),
    title: "Fizika"
  }, {
    icon: /*#__PURE__*/React.createElement(G_Flask, null),
    title: "Kimyo"
  }, {
    icon: /*#__PURE__*/React.createElement(G_Leaf, null),
    title: "Biologiya"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "courses",
    style: {
      position: "relative",
      padding: "96px 24px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--blue",
    style: {
      marginBottom: 16
    }
  }, "Kurslar"), /*#__PURE__*/React.createElement("h2", {
    className: "glass-text",
    style: {
      fontSize: "clamp(32px, 4vw, 48px)",
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      margin: "0 auto 12px",
      color: "var(--glass-text-primary)",
      maxWidth: 760
    }
  }, "Bilim piramidasi \u2014 yuqoriga intiling"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--glass-text-secondary)",
      margin: "0 auto",
      maxWidth: 620,
      textWrap: "pretty"
    }
  }, "Ingliz tili yo'nalishimiz cho'qqisi \u2014 IELTS. Har bir qatlam keyingisiga poydevor: pastdan yuqoriga, natijaga qadam-baqadam.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      marginBottom: 16,
      position: "relative"
    },
    className: "g-pyramid"
  }, /*#__PURE__*/React.createElement("div", {
    "data-parallax": true,
    "data-speed": "-0.06",
    style: {
      marginBottom: 4,
      color: "#FCD34D",
      filter: "drop-shadow(0 0 20px rgba(245,158,11,0.7))"
    }
  }, /*#__PURE__*/React.createElement(GlassPyramidMark, {
    size: 46
  })), pyramid.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: "glass glass--md glass--interactive glass--liquid glass--sheen g-pyr-row",
    "data-parallax": true,
    "data-speed": (0.015 * i).toFixed(3),
    onMouseMove: onMove,
    style: {
      width: c.width,
      maxWidth: "100%",
      padding: "18px 28px",
      display: "flex",
      alignItems: "center",
      gap: 18,
      background: c.peak ? "linear-gradient(180deg, rgba(251,191,36,0.30), rgba(245,158,11,0.10))" : "rgba(15,23,42,0.42)",
      borderColor: c.peak ? "rgba(251,191,36,0.55)" : undefined,
      boxShadow: c.peak ? "0 0 44px rgba(245,158,11,0.4), var(--glass-shadow)" : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sheen-track",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      flexShrink: 0,
      background: c.peak ? "rgba(245,158,11,0.28)" : "rgba(59,130,246,0.18)",
      color: c.peak ? "#FCD34D" : "#93C5FD",
      border: "1px solid " + (c.peak ? "rgba(251,191,36,0.5)" : "rgba(96,165,250,0.32)"),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "glass-text",
    style: {
      fontSize: c.peak ? 26 : 22,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: c.peak ? "#FDE68A" : "var(--glass-text-primary)"
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    className: c.peak ? "gbadge gbadge--amber" : "gbadge gbadge--blue",
    style: {
      padding: "3px 9px",
      fontSize: 11
    }
  }, c.band)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--glass-text-secondary)",
      marginTop: 2
    }
  }, c.detail)), /*#__PURE__*/React.createElement("a", {
    className: c.peak ? "gbtn gbtn--amber gbtn--sm" : "gbtn gbtn--ghost gbtn--sm",
    href: "#register",
    style: {
      flexShrink: 0
    }
  }, "Tanlash", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "glass-text",
    style: {
      fontSize: 22,
      fontWeight: 700,
      margin: 0,
      color: "var(--glass-text-primary)"
    }
  }, "Boshqa yo'nalishlar"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-tertiary)"
    }
  }, "Tillar \xB7 Aniq fanlar")), /*#__PURE__*/React.createElement("div", {
    className: "g-rest-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, langs.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: "glass glass--md glass--interactive glass--liquid",
    "data-parallax": true,
    "data-speed": (0.02 + i % 4 * 0.02).toFixed(3),
    onMouseMove: onMove,
    style: {
      padding: 22,
      background: "rgba(15,23,42,0.42)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 168
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 13,
      background: "rgba(59,130,246,0.18)",
      color: "#93C5FD",
      border: "1px solid rgba(96,165,250,0.32)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-text",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--glass-text-primary)"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-secondary)",
      marginTop: 3
    }
  }, c.note)), /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--ghost gbtn--sm",
    href: "#register",
    style: {
      alignSelf: "flex-start"
    }
  }, "Tanlash ", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 13
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md glass--sheen g-stem",
    "data-parallax": true,
    "data-speed": "0.03",
    style: {
      marginTop: 16,
      padding: "24px 28px",
      background: "rgba(15,23,42,0.42)",
      display: "grid",
      gridTemplateColumns: "auto 1px repeat(4, 1fr)",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sheen-track",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-text",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--glass-text-primary)"
    }
  }, "Aniq fanlar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-secondary)",
      marginTop: 4
    }
  }, "Sertifikatlar uchun tez va samarali tanlov")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 56,
      background: "rgba(255,255,255,0.12)"
    },
    className: "g-stem-div"
  }), stem.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 13,
      background: "rgba(96,165,250,0.14)",
      color: "#93C5FD",
      border: "1px solid rgba(96,165,250,0.3)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, c.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--glass-text-primary)"
    }
  }, c.title))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 900px) {
          .g-pyramid .g-pyr-row { width: 100% !important; }
          .g-rest-grid { grid-template-columns: 1fr 1fr !important; }
          .g-stem { grid-template-columns: 1fr 1fr !important; }
          .g-stem .g-stem-div { display: none !important; }
        }
        @media (max-width: 560px) {
          .g-rest-grid { grid-template-columns: 1fr !important; }
        }
      `));
}
window.GlassCourses = GlassCourses;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassCourses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassFooter.jsx
try { (() => {
// Thin glass strip footer.
function GlassFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "32px 24px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md",
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "28px 32px",
      background: "rgba(5,11,31,0.55)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-footer-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr auto",
      gap: 32,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: "white",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(GlassPyramidMark, {
    size: 28,
    style: {
      color: "#93C5FD"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "Pyramid Academy")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-tertiary)",
      margin: "12px 0 0",
      maxWidth: 320,
      lineHeight: 1.6
    }
  }, "Zamonaviy ta'lim markazi. Toshkentda 5 yillik tajriba. IELTS, CEFR, SAT, matematika va mental arifmetika.")), /*#__PURE__*/React.createElement(FooterCol, {
    heading: "Sahifalar",
    items: [{
      label: "Bosh sahifa",
      href: "#home"
    }, {
      label: "Kurslar",
      href: "#courses"
    }, {
      label: "Biz haqimizda",
      href: "#about"
    }, {
      label: "Aloqa",
      href: "#contact"
    }]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    heading: "Kurslar",
    items: [{
      label: "IELTS",
      href: "#courses"
    }, {
      label: "CEFR",
      href: "#courses"
    }, {
      label: "SAT",
      href: "#courses"
    }, {
      label: "Matematika",
      href: "#courses"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/pyramid_academy_lc/",
    "aria-label": "Instagram",
    className: "gbtn gbtn--ghost gbtn--sm",
    style: {
      width: 40,
      padding: 0,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(G_Instagram, {
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/PYRAMID_academy",
    "aria-label": "Telegram",
    className: "gbtn gbtn--ghost gbtn--sm",
    style: {
      width: 40,
      padding: 0,
      height: 40
    }
  }, /*#__PURE__*/React.createElement(G_Telegram, {
    size: 18
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--glass-text-tertiary)",
      fontFamily: "var(--font-mono)"
    }
  }, "O'zbek \xB7 \u0420\u0443\u0441\u0441\u043A\u0438\u0439 \xB7 English"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.08)",
      margin: "24px 0 16px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
      color: "var(--glass-text-tertiary)",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Pyramid Academy. Toshkent, Uzbekistan."), /*#__PURE__*/React.createElement("span", null, "Massiv Uzgarish 1v, Yangihayot"))), /*#__PURE__*/React.createElement("style", null, `@media (max-width: 900px) { .g-footer-grid { grid-template-columns: 1fr 1fr !important; } }`));
}
function FooterCol({
  heading,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "#FCD34D",
      fontWeight: 700,
      margin: "0 0 12px"
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href,
    style: {
      fontSize: 14,
      color: "var(--glass-text-secondary)",
      textDecoration: "none"
    }
  }, it.label))));
}
window.GlassFooter = GlassFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassGallery.jsx
try { (() => {
// Gallery — a draggable, snap-scrolling carousel of lesson & classroom photos
// in glass frames. Arrows, drag-to-scroll, dots, and parallax depth.
// Photo tiles are styled placeholders the user swaps for real photos
// (drop files into ./assets and set the `src` of each item).
function GlassGallery() {
  const trackRef = React.useRef(null);
  const [idx, setIdx] = React.useState(0);
  const items = [{
    label: "IELTS darsi",
    tag: "Asosiy filial",
    tint: "59,130,246",
    icon: /*#__PURE__*/React.createElement(G_Cap, null)
  }, {
    label: "Speaking klubi",
    tag: "Jonli amaliyot",
    tint: "168,85,247",
    icon: /*#__PURE__*/React.createElement(G_Mic, null)
  }, {
    label: "Zamonaviy sinfxona",
    tag: "2-filial",
    tint: "245,158,11",
    icon: /*#__PURE__*/React.createElement(G_Users, null)
  }, {
    label: "Mental arifmetika",
    tag: "Bolalar guruhi",
    tint: "16,185,129",
    icon: /*#__PURE__*/React.createElement(G_Brain, null)
  }, {
    label: "Matematika darsi",
    tag: "Aniq fanlar",
    tint: "59,130,246",
    icon: /*#__PURE__*/React.createElement(G_Sigma, null)
  }, {
    label: "Bitiruv marosimi",
    tag: "Natijalar",
    tint: "245,158,11",
    icon: /*#__PURE__*/React.createElement(G_Award, null)
  }];
  function scrollToCard(i) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const card = track.children[clamped];
    if (card) track.scrollTo({
      left: card.offsetLeft - track.offsetLeft - 4,
      behavior: "smooth"
    });
    setIdx(clamped);
  }

  // Sync active dot with manual scroll.
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cards = [...track.children];
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0,
          bestD = Infinity;
        cards.forEach((c, i) => {
          const cc = c.offsetLeft + c.clientWidth / 2 - track.offsetLeft;
          const d = Math.abs(cc - center);
          if (d < bestD) {
            bestD = d;
            best = i;
          }
        });
        setIdx(best);
      });
    }
    track.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Drag-to-scroll (pointer).
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let down = false,
      startX = 0,
      startLeft = 0,
      moved = false;
    function pd(e) {
      down = true;
      moved = false;
      startX = e.pageX;
      startLeft = track.scrollLeft;
      track.style.cursor = "grabbing";
    }
    function pm(e) {
      if (!down) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startLeft - dx;
    }
    function pu() {
      down = false;
      track.style.cursor = "grab";
    }
    function clickGuard(e) {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
    track.addEventListener("pointerdown", pd);
    window.addEventListener("pointermove", pm);
    window.addEventListener("pointerup", pu);
    track.addEventListener("click", clickGuard, true);
    return () => {
      track.removeEventListener("pointerdown", pd);
      window.removeEventListener("pointermove", pm);
      window.removeEventListener("pointerup", pu);
      track.removeEventListener("click", clickGuard, true);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "gallery",
    style: {
      position: "relative",
      padding: "96px 0 96px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--blue",
    style: {
      marginBottom: 16
    }
  }, "Galereya"), /*#__PURE__*/React.createElement("h2", {
    className: "glass-text",
    style: {
      fontSize: "clamp(32px, 4vw, 44px)",
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "var(--glass-text-primary)",
      maxWidth: 620
    }
  }, "Darslarimiz va o'quv xonalarimiz")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "gbtn gbtn--ghost",
    "aria-label": "Oldingi",
    onClick: () => scrollToCard(idx - 1),
    style: {
      width: 52,
      height: 52,
      padding: 0,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "gbtn gbtn--primary",
    "aria-label": "Keyingi",
    onClick: () => scrollToCard(idx + 1),
    style: {
      width: 52,
      height: 52,
      padding: 0,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    className: "g-gallery-track",
    style: {
      display: "flex",
      gap: 20,
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      padding: "8px max(24px, calc((100vw - 1280px) / 2 + 24px))",
      cursor: "grab",
      scrollbarWidth: "none"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    className: "glass glass--lg glass--interactive glass--liquid g-gallery-card",
    "data-parallax": true,
    "data-speed": (0.015 * (i % 3)).toFixed(3),
    style: {
      flex: "0 0 auto",
      width: 460,
      maxWidth: "82vw",
      scrollSnapAlign: "center",
      margin: 0,
      padding: 12,
      background: "rgba(15,23,42,0.42)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      aspectRatio: "4 / 3",
      border: "1px solid rgba(255,255,255,0.16)",
      background: `linear-gradient(145deg, rgba(${it.tint},0.42), rgba(15,23,42,0.85))`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.5,
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
      backgroundSize: "26px 26px",
      maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-58%)",
      color: "rgba(255,255,255,0.9)",
      filter: `drop-shadow(0 0 24px rgba(${it.tint},0.8))`
    }
  }, React.cloneElement(it.icon, {
    size: 64,
    strokeWidth: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 50%, rgba(5,11,31,0.78) 100%)"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: 18,
      right: 18,
      bottom: 16,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 12,
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "glass-text",
    style: {
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: "-0.01em"
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: "gbadge",
    style: {
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)",
      borderColor: "rgba(255,255,255,0.28)",
      flexShrink: 0
    }
  }, it.tag)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      marginTop: 28
    }
  }, items.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": "Rasm " + (i + 1),
    onClick: () => scrollToCard(i),
    style: {
      width: i === idx ? 28 : 9,
      height: 9,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      padding: 0,
      background: i === idx ? "linear-gradient(90deg,#FCD34D,#F59E0B)" : "rgba(255,255,255,0.25)",
      transition: "all 300ms cubic-bezier(.4,0,.2,1)"
    }
  }))), /*#__PURE__*/React.createElement("style", null, `
        .g-gallery-track::-webkit-scrollbar { display: none; }
        @media (max-width: 560px) { .g-gallery-card { width: 82vw !important; } }
      `));
}
window.GlassGallery = GlassGallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassGallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassHero.jsx
try { (() => {
// Hero — split layout: glass text card on the left, glass-framed video on the right.
function GlassHero() {
  const videoRef = React.useRef(null);

  // Track mouse on the video card for liquid-glass sheen.
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) / r.width * 100 + "%");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) / r.height * 100 + "%");
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      position: "relative",
      padding: "48px 24px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
      gap: 40,
      alignItems: "stretch"
    },
    className: "g-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    "data-parallax": true,
    "data-speed": "0.06",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--amber",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(GlassPyramidMark, {
    size: 12,
    style: {
      color: "#FCD34D"
    }
  }), "Yangihayot filiali \u2014 yangi guruhlar"), /*#__PURE__*/React.createElement("h1", {
    className: "glass-text",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "clamp(40px, 5.2vw, 64px)",
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: "-0.025em",
      margin: 0,
      color: "var(--glass-text-primary)",
      textWrap: "balance"
    }
  }, "Zamonaviy Ta'lim Markazi \u2014", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundImage: "linear-gradient(180deg, #FCD34D 0%, #F59E0B 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      filter: "drop-shadow(0 4px 16px rgba(245,158,11,0.35))"
    }
  }, "Mukammal Natijalar"), " ", "IELTS, CEFR va SAT da"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--glass-text-secondary)",
      fontSize: 19,
      lineHeight: 1.65,
      margin: "24px 0 36px",
      maxWidth: 560,
      textWrap: "pretty"
    },
    className: "glass-text"
  }, "Toshkentda 5 yillik tajriba. Yangihayot filialida yangi guruhlar ochiq. Ingliz, rus va o'zbek tillarda ta'lim."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--amber gbtn--lg",
    href: "#register"
  }, "Guruhga Qatnish", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--ghost gbtn--lg",
    href: "#courses"
  }, "Batafsil Ma'lumot")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginTop: 44,
      paddingTop: 28,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-tertiary)",
      marginTop: 4
    }
  }, "Yillik tajriba")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "1.3K+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-tertiary)",
      marginTop: 4
    }
  }, "Instagram followers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: "#FCD34D"
    }
  }, "7+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-tertiary)",
      marginTop: 4
    }
  }, "Kurs yo'nalishi")))), /*#__PURE__*/React.createElement("div", {
    className: "glass glass--xl glass--liquid glass--sheen",
    "data-parallax": true,
    "data-speed": "-0.08",
    style: {
      padding: 14,
      background: "rgba(15,23,42,0.4)",
      animation: "g-hero-rise 900ms cubic-bezier(.2,.7,.1,1) both",
      minHeight: 480
    },
    onMouseMove: onMove
  }, /*#__PURE__*/React.createElement("span", {
    className: "sheen-track",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 24,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.18)",
      background: "#0B1428",
      aspectRatio: "4 / 5"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    src: typeof window !== "undefined" && window.__resources && window.__resources.heroVideo || "./assets/loader.mp4",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(5,11,31,0.0) 40%, rgba(5,11,31,0.55) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      right: 20,
      bottom: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "white",
      fontSize: 13,
      textShadow: "0 2px 12px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge",
    style: {
      background: "rgba(0,0,0,0.35)",
      borderColor: "rgba(255,255,255,0.3)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "#F87171",
      boxShadow: "0 0 8px #F87171",
      display: "inline-block"
    }
  }), "LIVE \u2014 sentabr guruhi"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.85,
      letterSpacing: "0.04em"
    }
  }, "Pyramid Academy \u2197"))))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes g-hero-rise {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @media (max-width: 900px) {
          .g-hero-grid { grid-template-columns: 1fr !important; }
        }
      `));
}
window.GlassHero = GlassHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassLogin.jsx
try { (() => {
// LMS login — 3 role entries (Administrator / O'qituvchi / Talaba).
// Each role themes the panel and routes to its own destination page.
function GlassLogin() {
  const roles = [{
    id: "admin",
    label: "Administrator",
    icon: /*#__PURE__*/React.createElement(G_Users, null),
    accent: "245,158,11",
    chip: "gbadge gbadge--amber",
    idLabel: "Login yoki email",
    idPlaceholder: "admin@pyramid.uz",
    idType: "text",
    dest: "./lms-admin.html",
    note: "Markaz boshqaruvi — guruhlar, to'lovlar, hisobotlar."
  }, {
    id: "teacher",
    label: "O'qituvchi",
    icon: /*#__PURE__*/React.createElement(G_Cap, null),
    accent: "59,130,246",
    chip: "gbadge gbadge--blue",
    idLabel: "O'qituvchi ID yoki email",
    idPlaceholder: "teacher@pyramid.uz",
    idType: "text",
    dest: "./lms-teacher.html",
    note: "Darslar jadvali, davomat, baholar va materiallar."
  }, {
    id: "student",
    label: "Talaba",
    icon: /*#__PURE__*/React.createElement(G_Book, null),
    accent: "16,185,129",
    chip: "gbadge",
    idLabel: "Talaba ID yoki telefon",
    idPlaceholder: "+998 90 123 45 67",
    idType: "text",
    dest: "./lms-student.html",
    note: "Kurslar, uy vazifalari, natijalar va to'lov holati."
  }];
  const [role, setRole] = React.useState("student");
  const cur = roles.find(r => r.id === role);
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    setLoading(true);
    // Each role lands on its own destination.
    setTimeout(() => {
      window.location.href = cur.dest;
    }, 650);
  }
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) / r.width * 100 + "%");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) / r.height * 100 + "%");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      position: "relative",
      zIndex: 1
    },
    className: "g-login-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "g-login-brand",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px 56px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      color: "white",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(GlassPyramidMark, {
    size: 34,
    style: {
      color: "#93C5FD"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Pyramid Academy"), /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--blue",
    style: {
      marginLeft: 6
    }
  }, "LMS")), /*#__PURE__*/React.createElement("div", {
    "data-parallax": true,
    "data-speed": "0.04"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--amber",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(G_Sparkle, {
    size: 12
  }), " O'quv platformasi"), /*#__PURE__*/React.createElement("h1", {
    className: "glass-text",
    style: {
      fontSize: "clamp(32px, 4vw, 52px)",
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: "-0.025em",
      margin: "0 0 16px",
      color: "white",
      maxWidth: 520
    }
  }, "Bilim piramidangizga kiring"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--glass-text-secondary)",
      margin: 0,
      maxWidth: 460,
      lineHeight: 1.6
    }
  }, "Bir platforma \u2014 uch xil kirish. Administrator, o'qituvchi va talaba o'z shaxsiy kabinetiga ega."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 32,
      maxWidth: 440
    }
  }, roles.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: "glass glass--sm",
    style: {
      padding: "12px 16px",
      background: "rgba(15,23,42,0.4)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      opacity: role === r.id ? 1 : 0.55,
      transition: "opacity 250ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      flexShrink: 0,
      background: `rgba(${r.accent},0.2)`,
      color: `rgb(${r.accent})`,
      border: `1px solid rgba(${r.accent},0.4)`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, r.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "white"
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--glass-text-tertiary)"
    }
  }, r.note)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--glass-text-tertiary)"
    }
  }, "\xA9 2026 Pyramid Academy \xB7 Toshkent")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 48px"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    onMouseMove: onMove,
    className: "glass glass--xl glass--liquid glass--sheen",
    style: {
      width: "100%",
      maxWidth: 440,
      padding: "36px 34px",
      background: "rgba(15,23,42,0.55)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sheen-track",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("h2", {
    className: "glass-text",
    style: {
      fontSize: 26,
      fontWeight: 700,
      margin: "0 0 6px",
      color: "white",
      letterSpacing: "-0.02em"
    }
  }, "Tizimga kirish"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--glass-text-secondary)",
      margin: "0 0 22px"
    }
  }, "Avval qaysi sifatda kirayotganingizni tanlang."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 6,
      padding: 5,
      borderRadius: 16,
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.12)",
      marginBottom: 22
    }
  }, roles.map(r => {
    const active = role === r.id;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      type: "button",
      onClick: () => setRole(r.id),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "12px 6px",
        borderRadius: 12,
        cursor: "pointer",
        border: "1px solid " + (active ? `rgba(${r.accent},0.55)` : "transparent"),
        background: active ? `rgba(${r.accent},0.16)` : "transparent",
        color: active ? `rgb(${r.accent})` : "var(--glass-text-secondary)",
        transition: "all 220ms cubic-bezier(.4,0,.2,1)",
        boxShadow: active ? `0 0 22px rgba(${r.accent},0.28)` : "none"
      }
    }, React.cloneElement(r.icon, {
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: active ? "white" : "var(--glass-text-tertiary)"
      }
    }, r.label));
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "white"
    }
  }, cur.idLabel), /*#__PURE__*/React.createElement("input", {
    className: "ginput",
    type: cur.idType,
    placeholder: cur.idPlaceholder,
    required: true,
    autoComplete: "username"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "white"
    }
  }, "Parol"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "ginput",
    type: show ? "text" : "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    required: true,
    autoComplete: "current-password",
    style: {
      paddingRight: 44
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShow(s => !s),
    "aria-label": "Parolni ko'rsatish",
    style: {
      position: "absolute",
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      width: 30,
      height: 30,
      borderRadius: 8,
      border: "none",
      cursor: "pointer",
      background: "transparent",
      color: "var(--glass-text-tertiary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  }, show ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: "var(--glass-text-secondary)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      width: 16,
      height: 16,
      accentColor: `rgb(${cur.accent})`
    },
    defaultChecked: true
  }), "Meni eslab qol"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      color: "#93C5FD",
      textDecoration: "none"
    }
  }, "Parolni unutdingizmi?")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading,
    className: "gbtn gbtn--lg",
    style: {
      width: "100%",
      background: `linear-gradient(180deg, rgba(${cur.accent},0.95), rgba(${cur.accent},0.78))`,
      color: cur.id === "admin" ? "#1E1606" : "white",
      boxShadow: `0 12px 32px -8px rgba(${cur.accent},0.6), 0 0 0 1px rgba(255,255,255,0.18) inset`,
      opacity: loading ? 0.75 : 1
    }
  }, loading ? "Kirilmoqda…" : /*#__PURE__*/React.createElement(React.Fragment, null, cur.label, " sifatida kirish ", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 18
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--glass-text-tertiary)",
      textAlign: "center",
      margin: "18px 0 0"
    }
  }, "Hisobingiz yo'qmi? ", /*#__PURE__*/React.createElement("a", {
    href: "./index.html#contact",
    style: {
      color: "#93C5FD",
      textDecoration: "none"
    }
  }, "Markaz bilan bog'laning")))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 920px) {
          .g-login-shell { grid-template-columns: 1fr !important; }
          .g-login-brand { padding: 32px 28px !important; gap: 28px; }
        }
      `));
}
window.GlassLogin = GlassLogin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassLogin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassNav.jsx
try { (() => {
// Sticky glass nav. Desktop: logo · links · lang pill · CTAs.
// Mobile (<=860px): logo · lang pill · hamburger → full-screen glass menu.
function GlassNav() {
  const [lang, setLang] = React.useState("UZ");
  const [open, setOpen] = React.useState(false);
  const links = [{
    label: "Bosh sahifa",
    href: "#home"
  }, {
    label: "Kurslar",
    href: "#courses"
  }, {
    label: "Galereya",
    href: "#gallery"
  }, {
    label: "Sharhlar",
    href: "#reviews"
  }, {
    label: "Aloqa",
    href: "#contact"
  }];

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const LangPill = ({
    size = "sm"
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: 999,
      padding: 2,
      background: "rgba(255,255,255,0.05)"
    }
  }, ["UZ", "RU", "EN"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      padding: size === "lg" ? "8px 16px" : "4px 10px",
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: l === lang ? "linear-gradient(180deg, rgba(59,130,246,0.95), rgba(37,99,235,0.95))" : "transparent",
      color: l === lang ? "white" : "var(--glass-text-secondary)",
      fontWeight: 600,
      fontSize: size === "lg" ? 14 : 12,
      fontFamily: "var(--font-sans)",
      boxShadow: l === lang ? "0 4px 12px -2px rgba(37,99,235,0.5)" : "none"
    }
  }, l)));
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 16,
      zIndex: 60,
      padding: "0 16px",
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass glass--sm",
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "10px 12px 10px 18px",
      display: "flex",
      alignItems: "center",
      gap: 16,
      background: "rgba(15,23,42,0.6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: () => setOpen(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: "var(--glass-text-primary)",
      textDecoration: "none",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(GlassPyramidMark, {
    size: 26,
    style: {
      color: "#93C5FD"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "g-brand-name",
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: "-0.01em"
    }
  }, "Pyramid Academy")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      marginLeft: 12,
      flex: 1
    },
    className: "g-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      color: "var(--glass-text-secondary)",
      textDecoration: "none",
      fontSize: 14,
      fontWeight: 500
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "g-nav-actions",
    style: {
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(LangPill, null), /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--ghost gbtn--sm",
    href: "./login.html"
  }, "Kirish"), /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--primary gbtn--sm",
    href: "#register"
  }, "Guruhga Qatnish", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "g-nav-mobile",
    style: {
      marginLeft: "auto",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LangPill, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Menyu",
    "aria-expanded": open,
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      cursor: "pointer",
      border: "1px solid rgba(255,255,255,0.2)",
      background: "rgba(255,255,255,0.06)",
      color: "white",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  }, open ? /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "g-mobile-menu",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 55,
      background: "rgba(5,11,31,0.86)",
      backdropFilter: "blur(22px) saturate(160%)",
      WebkitBackdropFilter: "blur(22px) saturate(160%)",
      display: "flex",
      flexDirection: "column",
      padding: "96px 24px 32px",
      animation: "g-menu-in 280ms cubic-bezier(.2,.7,.1,1) both"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: () => setOpen(false),
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "white",
      textDecoration: "none",
      padding: "16px 4px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      letterSpacing: "-0.01em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, l.label, /*#__PURE__*/React.createElement(G_Arrow, {
    size: 20,
    style: {
      color: "var(--glass-text-tertiary)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--ghost gbtn--lg",
    href: "./login.html",
    onClick: () => setOpen(false),
    style: {
      width: "100%"
    }
  }, "Tizimga kirish"), /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--amber gbtn--lg",
    href: "#register",
    onClick: () => setOpen(false),
    style: {
      width: "100%"
    }
  }, "Guruhga Qatnish", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 18,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    "aria-label": "Instagram",
    href: "https://www.instagram.com/pyramid_academy_lc/",
    style: {
      color: "var(--glass-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(G_Instagram, {
    size: 22
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "Telegram",
    href: "https://t.me/PYRAMID_academy",
    style: {
      color: "var(--glass-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(G_Telegram, {
    size: 22
  }))))), /*#__PURE__*/React.createElement("style", null, `
        .g-nav-actions { display: flex; }
        .g-nav-mobile  { display: none; }
        @keyframes g-menu-in { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 860px) {
          .g-nav-links   { display: none !important; }
          .g-nav-actions { display: none !important; }
          .g-nav-mobile  { display: flex !important; }
        }
        @media (max-width: 380px) {
          .g-brand-name { display: none; }
        }
      `));
}
window.GlassNav = GlassNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassPortal.jsx
try { (() => {
// Role-aware LMS portal shell. Each destination page sets window.__role
// to "admin" | "teacher" | "student"; this renders that role's dashboard.
function GlassPortal() {
  const role = typeof window !== "undefined" && window.__role || "student";
  const CFG = {
    admin: {
      accent: "245,158,11",
      label: "Administrator",
      who: "Sardor Aliyev",
      initials: "SA",
      icon: /*#__PURE__*/React.createElement(G_Users, null),
      nav: ["Boshqaruv paneli", "Guruhlar", "O'qituvchilar", "Talabalar", "To'lovlar", "Hisobotlar"],
      title: "Boshqaruv paneli",
      stats: [{
        v: "412",
        l: "Faol talaba",
        t: "245,158,11"
      }, {
        v: "28",
        l: "Guruh",
        t: "59,130,246"
      }, {
        v: "16",
        l: "O'qituvchi",
        t: "16,185,129"
      }, {
        v: "94M",
        l: "Oylik to'lov (so'm)",
        t: "168,85,247"
      }]
    },
    teacher: {
      accent: "59,130,246",
      label: "O'qituvchi",
      who: "Dilnoza Karimova",
      initials: "DK",
      icon: /*#__PURE__*/React.createElement(G_Cap, null),
      nav: ["Bosh sahifa", "Mening guruhlarim", "Jadval", "Davomat", "Baholar", "Materiallar"],
      title: "Xush kelibsiz, Dilnoza",
      stats: [{
        v: "6",
        l: "Faol guruh",
        t: "59,130,246"
      }, {
        v: "78",
        l: "Talaba",
        t: "16,185,129"
      }, {
        v: "3",
        l: "Bugungi dars",
        t: "245,158,11"
      }, {
        v: "12",
        l: "Tekshirish kutmoqda",
        t: "168,85,247"
      }]
    },
    student: {
      accent: "16,185,129",
      label: "Talaba",
      who: "Jasur Tolipov",
      initials: "JT",
      icon: /*#__PURE__*/React.createElement(G_Book, null),
      nav: ["Bosh sahifa", "Kurslarim", "Vazifalar", "Natijalar", "Jadval", "To'lov"],
      title: "Salom, Jasur",
      stats: [{
        v: "B2",
        l: "Joriy daraja",
        t: "16,185,129"
      }, {
        v: "2",
        l: "Faol kurs",
        t: "59,130,246"
      }, {
        v: "3",
        l: "Vazifa muddati",
        t: "245,158,11"
      }, {
        v: "92%",
        l: "Davomat",
        t: "168,85,247"
      }]
    }
  };
  const cfg = CFG[role];
  const [active, setActive] = React.useState(0);
  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) / r.width * 100 + "%");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) / r.height * 100 + "%");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "264px 1fr"
    },
    className: "g-portal"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "glass g-portal-side",
    style: {
      margin: 16,
      padding: "22px 16px",
      background: "rgba(10,17,38,0.6)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      borderRadius: 24,
      position: "sticky",
      top: 16,
      alignSelf: "start",
      height: "calc(100vh - 32px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: "white",
      textDecoration: "none",
      padding: "4px 8px 16px"
    }
  }, /*#__PURE__*/React.createElement(GlassPyramidMark, {
    size: 26,
    style: {
      color: `rgb(${cfg.accent})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, "Pyramid LMS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1
    }
  }, cfg.nav.map((n, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => setActive(i),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 14px",
        borderRadius: 12,
        cursor: "pointer",
        textAlign: "left",
        border: "1px solid " + (on ? `rgba(${cfg.accent},0.45)` : "transparent"),
        background: on ? `rgba(${cfg.accent},0.16)` : "transparent",
        color: on ? "white" : "var(--glass-text-secondary)",
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        fontFamily: "var(--font-sans)",
        transition: "all 200ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        flexShrink: 0,
        background: on ? `rgb(${cfg.accent})` : "rgba(255,255,255,0.25)"
      }
    }), n);
  })), /*#__PURE__*/React.createElement("a", {
    href: "./login.html",
    className: "gbtn gbtn--ghost gbtn--sm",
    style: {
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  })), "Chiqish")), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "16px 24px 32px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md",
    style: {
      padding: "14px 20px",
      background: "rgba(15,23,42,0.5)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: role === "admin" ? "gbadge gbadge--amber" : role === "teacher" ? "gbadge gbadge--blue" : "gbadge",
    style: {
      marginBottom: 4
    }
  }, React.cloneElement(cfg.icon, {
    size: 12
  }), " ", cfg.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: "0 0 240px",
      maxWidth: "32vw"
    },
    className: "g-portal-search"
  }, /*#__PURE__*/React.createElement("input", {
    className: "ginput",
    placeholder: "Qidirish\u2026",
    style: {
      paddingLeft: 38,
      height: 42
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      position: "absolute",
      left: 13,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--glass-text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: `linear-gradient(135deg, rgba(${cfg.accent},0.6), rgba(${cfg.accent},0.3))`,
      border: "1px solid rgba(255,255,255,0.2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 14,
      color: "white"
    }
  }, cfg.initials), /*#__PURE__*/React.createElement("div", {
    className: "g-portal-who",
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "white"
    }
  }, cfg.who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--glass-text-tertiary)"
    }
  }, cfg.label)))), /*#__PURE__*/React.createElement("h1", {
    className: "glass-text",
    style: {
      fontSize: 28,
      fontWeight: 700,
      margin: "4px 0 20px",
      color: "white",
      letterSpacing: "-0.02em"
    }
  }, cfg.title), /*#__PURE__*/React.createElement("div", {
    className: "g-portal-stats",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, cfg.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "glass glass--md glass--interactive glass--liquid",
    onMouseMove: onMove,
    style: {
      padding: 20,
      background: "rgba(15,23,42,0.45)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      marginBottom: 14,
      background: `rgba(${s.t},0.18)`,
      border: `1px solid rgba(${s.t},0.4)`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: `rgb(${s.t})`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 4,
      background: `rgb(${s.t})`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "glass-text",
    style: {
      fontSize: 30,
      fontWeight: 800,
      color: "white",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-secondary)",
      marginTop: 6
    }
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "g-portal-main",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PortalPrimary, {
    role: role,
    accent: cfg.accent
  }), /*#__PURE__*/React.createElement(PortalSide, {
    role: role,
    accent: cfg.accent
  }))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 920px) {
          .g-portal { grid-template-columns: 1fr !important; }
          .g-portal-side { position: static !important; height: auto !important; flex-direction: row !important; flex-wrap: wrap; }
          .g-portal-stats { grid-template-columns: 1fr 1fr !important; }
          .g-portal-main { grid-template-columns: 1fr !important; }
          .g-portal-who { display: none; }
        }
      `));
}
function Panel({
  title,
  action,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md",
    style: {
      padding: 22,
      background: "rgba(15,23,42,0.45)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "glass-text",
    style: {
      fontSize: 17,
      fontWeight: 700,
      margin: 0,
      color: "white"
    }
  }, title), action && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "#93C5FD"
    }
  }, action)), children);
}
function Row({
  left,
  mid,
  right,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "11px 0",
      borderTop: "1px solid rgba(255,255,255,0.07)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: tone ? `rgb(${tone})` : "rgba(255,255,255,0.3)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "white"
    }
  }, left), mid && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--glass-text-tertiary)"
    }
  }, mid)), right && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--glass-text-secondary)",
      flexShrink: 0
    }
  }, right));
}
function PortalPrimary({
  role,
  accent
}) {
  if (role === "admin") {
    return /*#__PURE__*/React.createElement(Panel, {
      title: "So'nggi ro'yxatdan o'tishlar",
      action: "Barchasi"
    }, /*#__PURE__*/React.createElement(Row, {
      left: "Aziza Karimova",
      mid: "IELTS \xB7 Asosiy filial",
      right: "Bugun",
      tone: "245,158,11"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "Bekzod Ergashev",
      mid: "SAT \xB7 2-filial",
      right: "Kecha",
      tone: "59,130,246"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "Madina Yo'ldosheva",
      mid: "CEFR \xB7 Asosiy filial",
      right: "2 kun",
      tone: "16,185,129"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "Sardor Umarov",
      mid: "Matematika \xB7 2-filial",
      right: "3 kun",
      tone: "168,85,247"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "Nilufar Saidova",
      mid: "Ingliz tili \xB7 Asosiy filial",
      right: "4 kun",
      tone: "59,130,246"
    }));
  }
  if (role === "teacher") {
    return /*#__PURE__*/React.createElement(Panel, {
      title: "Bugungi darslar",
      action: "Jadval"
    }, /*#__PURE__*/React.createElement(Row, {
      left: "IELTS \u2014 Intensive (B2)",
      mid: "09:00 \u2013 10:30 \xB7 12 talaba",
      right: "Xona 3",
      tone: "59,130,246"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "Speaking Club",
      mid: "11:00 \u2013 12:00 \xB7 8 talaba",
      right: "Xona 1",
      tone: "16,185,129"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "CEFR \u2014 B1 guruh",
      mid: "15:00 \u2013 16:30 \xB7 14 talaba",
      right: "Xona 5",
      tone: "245,158,11"
    }));
  }
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Mening kurslarim",
    action: "Hammasi"
  }, /*#__PURE__*/React.createElement(Row, {
    left: "IELTS \u2014 Intensive",
    mid: "O'qituvchi: D. Karimova \xB7 B2",
    right: "68%",
    tone: "16,185,129"
  }), /*#__PURE__*/React.createElement(Row, {
    left: "Speaking Club",
    mid: "Haftada 2 marta \xB7 jonli amaliyot",
    right: "45%",
    tone: "59,130,246"
  }));
}
function PortalSide({
  role,
  accent
}) {
  if (role === "admin") {
    return /*#__PURE__*/React.createElement(Panel, {
      title: "Filiallar bo'yicha"
    }, /*#__PURE__*/React.createElement(Row, {
      left: "Asosiy filial",
      mid: "Massiv Uzgarish 1v",
      right: "248 talaba",
      tone: "245,158,11"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "2-filial",
      mid: "Massiv Uzgarish 1/2",
      right: "164 talaba",
      tone: "59,130,246"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "gbtn gbtn--amber gbtn--sm",
      style: {
        width: "100%"
      }
    }, "Hisobotni yuklab olish")));
  }
  if (role === "teacher") {
    return /*#__PURE__*/React.createElement(Panel, {
      title: "Tekshirish kutmoqda"
    }, /*#__PURE__*/React.createElement(Row, {
      left: "IELTS Writing Task 2",
      mid: "12 ta topshiriq",
      right: "\u2192",
      tone: "245,158,11"
    }), /*#__PURE__*/React.createElement(Row, {
      left: "CEFR Reading test",
      mid: "9 ta topshiriq",
      right: "\u2192",
      tone: "59,130,246"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "gbtn gbtn--primary gbtn--sm",
      style: {
        width: "100%"
      }
    }, "Davomat belgilash")));
  }
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Yaqin vazifalar"
  }, /*#__PURE__*/React.createElement(Row, {
    left: "IELTS Writing Task 2",
    mid: "O'qituvchi: D. Karimova",
    right: "2 kun",
    tone: "245,158,11"
  }), /*#__PURE__*/React.createElement(Row, {
    left: "Vocabulary Unit 7",
    mid: "40 ta so'z",
    right: "4 kun",
    tone: "59,130,246"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      borderRadius: 14,
      background: "rgba(16,185,129,0.12)",
      border: "1px solid rgba(16,185,129,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "white",
      fontWeight: 600,
      marginBottom: 4
    }
  }, "To'lov holati"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--glass-text-secondary)"
    }
  }, "Sentabr \u2014 to'langan \u2713 \xB7 Oktabr \u2014 5 kun qoldi")));
}
window.GlassPortal = GlassPortal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassPyramidMark.jsx
try { (() => {
// Inline brand mark — currentColor SVG.
function GlassPyramidMark({
  size = 36,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 180",
    width: size,
    height: size * 0.9,
    fill: "currentColor",
    style: {
      display: "inline-block",
      flexShrink: 0,
      ...style
    },
    "aria-label": "Pyramid Academy"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 160 L70 160 L40 60 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 160 L190 160 L160 60 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100 10 L125 90 L100 160 L75 90 Z"
  }));
}
window.GlassPyramidMark = GlassPyramidMark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassPyramidMark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassPyramidTracker.jsx
try { (() => {
// Signature: 5-level glass pyramid. Click a level to surface course recs.
function GlassPyramidTracker() {
  const levels = [{
    id: "a1",
    title: "A1 — Beginner",
    ielts: "IELTS 3.0",
    recommend: "Ingliz Tili — Beginner",
    meta: "0–2 oy"
  }, {
    id: "a2",
    title: "A2 — Elementary",
    ielts: "IELTS 3.5",
    recommend: "Ingliz Tili — Elementary",
    meta: "2–3 oy"
  }, {
    id: "b1",
    title: "B1 — Intermediate",
    ielts: "IELTS 4.5",
    recommend: "CEFR B1 + Foundation",
    meta: "2–4 oy"
  }, {
    id: "b2",
    title: "B2 — Upper",
    ielts: "IELTS 5.5",
    recommend: "IELTS Foundation",
    meta: "3–4 oy"
  }, {
    id: "c1",
    title: "C1 / C2 — Advanced",
    ielts: "IELTS 7.0+",
    recommend: "IELTS Intensive 7.0+",
    meta: "3–6 oy"
  }];
  const [active, setActive] = React.useState(3);
  const cur = levels[active];

  // 5 trapezoidal glass layers (top is narrowest).
  const W = 520,
    H = 360;
  const layerH = H / 5;
  const layers = levels.map((d, i) => {
    const fromTop = levels.length - 1 - i;
    const yTop = fromTop * layerH;
    const yBot = yTop + layerH;
    const insetTop = yTop / H * (W / 2);
    const insetBot = yBot / H * (W / 2);
    return {
      ...d,
      idx: i,
      points: `${insetTop + 8},${yTop + 4} ${W - insetTop - 8},${yTop + 4} ${W - insetBot - 8},${yBot - 4} ${insetBot + 8},${yBot - 4}`,
      cy: (yTop + yBot) / 2
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H + 16}`,
    style: {
      width: "100%",
      height: "auto",
      filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.45))"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "gpt-active",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FCD34D",
    stopOpacity: "0.95"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#F59E0B",
    stopOpacity: "0.85"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "gpt-idle",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(255,255,255,0.22)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(255,255,255,0.06)"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "gpt-sheen",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(255,255,255,0.35)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "rgba(255,255,255,0)"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "gpt-blur",
    x: "-10%",
    y: "-10%",
    width: "120%",
    height: "120%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "0.6"
  }))), layers.map(l => {
    const isActive = l.idx === active;
    return /*#__PURE__*/React.createElement("g", {
      key: l.id,
      style: {
        cursor: "pointer",
        transition: "opacity 250ms"
      },
      onClick: () => setActive(l.idx)
    }, /*#__PURE__*/React.createElement("polygon", {
      points: l.points,
      fill: isActive ? "url(#gpt-active)" : "url(#gpt-idle)",
      stroke: isActive ? "rgba(252,211,77,0.85)" : "rgba(255,255,255,0.35)",
      strokeWidth: "1.5",
      style: {
        transition: "all 300ms cubic-bezier(.4,0,.2,1)",
        filter: isActive ? "drop-shadow(0 0 18px rgba(245,158,11,0.65))" : "none"
      }
    }), /*#__PURE__*/React.createElement("polygon", {
      points: l.points,
      fill: "url(#gpt-sheen)",
      opacity: "0.6",
      pointerEvents: "none"
    }), /*#__PURE__*/React.createElement("text", {
      x: W / 2,
      y: l.cy + 5,
      textAnchor: "middle",
      fill: isActive ? "#1E1606" : "white",
      fontSize: "18",
      fontWeight: "700",
      letterSpacing: "0.06em",
      pointerEvents: "none",
      style: {
        textShadow: "0 2px 6px rgba(0,0,0,0.4)"
      }
    }, l.id.toUpperCase()));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md",
    style: {
      padding: 28,
      background: "rgba(15,23,42,0.45)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--amber",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(G_Sparkle, {
    size: 12
  }), "Sizning darajangiz"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      margin: "8px 0 6px",
      color: "var(--glass-text-primary)"
    },
    className: "glass-text"
  }, cur.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--glass-text-secondary)",
      margin: "0 0 22px",
      fontSize: 15
    }
  }, "Tahminiy ", cur.ielts), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,0.12)",
      margin: "0 0 20px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--glass-text-tertiary)",
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, "Tavsiya etilgan kurs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "var(--glass-text-primary)"
    }
  }, cur.recommend), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--glass-text-secondary)"
    }
  }, cur.meta)), /*#__PURE__*/React.createElement("a", {
    className: "gbtn gbtn--amber gbtn--sm",
    style: {
      marginTop: 22
    },
    href: "#register"
  }, "Tanlash", /*#__PURE__*/React.createElement(G_Arrow, {
    size: 14
  }))));
}
window.GlassPyramidTracker = GlassPyramidTracker;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassPyramidTracker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/GlassTrust.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Trust — video-short testimonial cards (parent/student reviews) + stats strip.
// Each card holds a vertical 9:16 short with real play/pause + mute UX,
// a glass frame, and a caption overlay (name, role, result).
function GlassTrust() {
  const reviews = [{
    src: "./assets/loader.mp4",
    name: "Nodira Rahimova",
    role: "Ota-ona",
    result: "Farzandi — IELTS 7.0",
    desc: "«Bolam 5 oyda ravon gapira boshladi. O'qituvchilar har bir dars natijasini bizga yetkazib turishadi.»"
  }, {
    src: "./assets/loader.mp4",
    name: "Jamshid Tursunov",
    role: "Ota-ona",
    result: "Farzandi — SAT 1460",
    desc: "«SAT guruhida tartib va metodika kuchli. Ball haqiqatan ko'tarildi — biz juda mamnunmiz.»"
  }, {
    src: "./assets/loader.mp4",
    name: "Madina Yo'ldosheva",
    role: "Talaba",
    result: "CEFR C1",
    desc: "«Speaking darslar jonli o'tadi. Avval qo'rqardim, hozir erkin suhbatlashaman.»"
  }, {
    src: "./assets/loader.mp4",
    name: "Bekzod Ergashev",
    role: "Ota-ona",
    result: "Farzandi — Matematika",
    desc: "«Mental arifmetikadan keyin hisoblash tezligi sezilarli oshdi. Maktabda eng oldida.»"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: {
      position: "relative",
      padding: "96px 24px",
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--blue",
    style: {
      marginBottom: 16
    }
  }, "Video sharhlar"), /*#__PURE__*/React.createElement("h2", {
    className: "glass-text",
    style: {
      fontSize: "clamp(32px, 4vw, 44px)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      margin: "0 auto 12px",
      color: "var(--glass-text-primary)",
      maxWidth: 720
    }
  }, "Ota-onalar va talabalar o'z so'zlari bilan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--glass-text-secondary)",
      margin: 0
    }
  }, "Real natijalar, real hikoyalar. Kartochkani bosib videoni tomosha qiling.")), /*#__PURE__*/React.createElement("div", {
    className: "g-reviews-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement(VideoReview, _extends({
    key: i
  }, r, {
    delay: i
  })))), /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md g-trust-strip",
    style: {
      marginTop: 32,
      padding: "28px 32px",
      background: "rgba(15,23,42,0.45)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr) auto",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Stat3, {
    v: "5",
    l: "Yillik tajriba"
  }), /*#__PURE__*/React.createElement(Stat3, {
    v: "1.3K+",
    l: "Instagram followers"
  }), /*#__PURE__*/React.createElement(Stat3, {
    v: "2",
    l: "Filial"
  }), /*#__PURE__*/React.createElement(Stat3, {
    v: "3",
    l: "O'qitish tili",
    tone: "amber"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    "aria-label": "Instagram",
    href: "https://www.instagram.com/pyramid_academy_lc/",
    className: "gbtn gbtn--ghost gbtn--sm",
    style: {
      width: 44,
      padding: 0,
      height: 44
    }
  }, /*#__PURE__*/React.createElement(G_Instagram, {
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "Telegram",
    href: "https://t.me/PYRAMID_academy",
    className: "gbtn gbtn--ghost gbtn--sm",
    style: {
      width: 44,
      padding: 0,
      height: 44
    }
  }, /*#__PURE__*/React.createElement(G_Telegram, {
    size: 20
  })))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 1000px) { .g-reviews-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 900px)  { .g-trust-strip { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px)  { .g-reviews-grid { grid-template-columns: 1fr !important; } }
      `));
}

// Single vertical video short with play/pause + mute UX + glass caption.
function VideoReview({
  src,
  name,
  role,
  result,
  desc,
  delay = 0
}) {
  const vref = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [open, setOpen] = React.useState(false); // caption expanded

  function togglePlay(e) {
    e.stopPropagation();
    const v = vref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }
  function toggleMute(e) {
    e.stopPropagation();
    const v = vref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "glass glass--md glass--interactive glass--liquid",
    "data-parallax": true,
    "data-speed": (0.02 + delay * 0.02).toFixed(3),
    onClick: togglePlay,
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    style: {
      padding: 10,
      background: "rgba(15,23,42,0.45)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 18,
      overflow: "hidden",
      aspectRatio: "9 / 16",
      background: "#0B1428",
      border: "1px solid rgba(255,255,255,0.16)"
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: typeof window !== "undefined" && window.__resources && window.__resources.heroVideo || src,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "linear-gradient(180deg, rgba(5,11,31,0.35) 0%, transparent 28%, transparent 52%, rgba(5,11,31,0.85) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      right: 12,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gbadge gbadge--amber",
    style: {
      padding: "4px 9px",
      fontSize: 11,
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)"
    }
  }, /*#__PURE__*/React.createElement(G_Award, {
    size: 11
  }), " ", result), /*#__PURE__*/React.createElement("button", {
    onClick: toggleMute,
    "aria-label": muted ? "Ovozni yoqish" : "Ovozni o'chirish",
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      cursor: "pointer",
      border: "1px solid rgba(255,255,255,0.3)",
      color: "white",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    }
  }, muted ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "23",
    y1: "9",
    x2: "17",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "9",
    x2: "23",
    y2: "15"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
  })))), !playing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "44%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: 60,
      height: 60,
      borderRadius: 999,
      background: "rgba(245,158,11,0.92)",
      boxShadow: "0 0 32px rgba(245,158,11,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "#1E1606"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      right: 14,
      bottom: 12,
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      flexShrink: 0,
      background: "linear-gradient(135deg, rgba(96,165,250,0.6), rgba(37,99,235,0.6))",
      border: "1px solid rgba(255,255,255,0.3)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 12
    }
  }, name.split(" ").map(s => s[0]).join("").slice(0, 2)), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25,
      textShadow: "0 2px 8px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.75)"
    }
  }, role))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 12.5,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.92)",
      textShadow: "0 2px 8px rgba(0,0,0,0.7)",
      maxHeight: open ? 120 : 0,
      overflow: "hidden",
      transition: "max-height 350ms cubic-bezier(.4,0,.2,1)"
    }
  }, desc))));
}
function Stat3({
  v,
  l,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: tone === "amber" ? "#FCD34D" : "var(--glass-text-primary)"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--glass-text-tertiary)",
      marginTop: 6,
      fontWeight: 500
    }
  }, l));
}
window.GlassTrust = GlassTrust;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/GlassTrust.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/g-icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Glass icons — Lucide-style, 2px stroke, currentColor.
function GIcon({
  children,
  size = 24,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), children);
}
const G_Cap = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 10v6M2 10l10-5 10 5-10 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12v5c3 3 9 3 12 0v-5"
}));
const G_Globe = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "2",
  y1: "12",
  x2: "22",
  y2: "12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
}));
const G_FileCheck = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "9 15 11 17 15 13"
}));
const G_Calc = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "6",
  x2: "16",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "18",
  x2: "16",
  y2: "18"
}));
const G_Brain = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"
}));
const G_Languages = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 8h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 8a3 3 0 0 1 6 0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 18l-5-10-5 10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 14h6"
}));
const G_Book = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
}));
const G_Arrow = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));
const G_Pin = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const G_Phone = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));
const G_Clock = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const G_Award = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"
}));
const G_Sparkle = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"
}));
const G_Users = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 21v-2a4 4 0 0 0-3-3.87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
}));
const G_Instagram = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "20",
  rx: "5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17.5",
  y1: "6.5",
  x2: "17.51",
  y2: "6.5"
}));
const G_Telegram = p => /*#__PURE__*/React.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21.7 3.3a1 1 0 0 0-1.05-.15L2.6 10.6a1 1 0 0 0 .06 1.86l4.55 1.55 2.06 6.46a1 1 0 0 0 1.65.41l3.04-2.79 4.52 3.32a1 1 0 0 0 1.57-.57l3.5-15.7a1 1 0 0 0-.35-1.02zM9.6 14.92l-.93 4.04-1.5-4.7 9.27-7.05-6.84 7.7z"
}));
const G_Menu = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
}));
const G_Mic = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 10v2a7 7 0 0 1-14 0v-2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "19",
  x2: "12",
  y2: "23"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "23",
  x2: "16",
  y2: "23"
}));
const G_Atom = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9C11.18 3.8 5.84 1.78 3.8 3.8c-2.03 2.04-.02 7.36 4.5 11.9 4.52 4.52 9.85 6.54 11.9 4.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.8 20.2c-2.04-2.03-.02-7.36 4.5-11.9C12.82 3.8 18.16 1.78 20.2 3.8c2.03 2.04.02 7.36-4.5 11.9-4.52 4.52-9.85 6.54-11.9 4.5z"
}));
const G_Flask = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 3h6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 14h10"
}));
const G_Leaf = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 21c0-3 1.85-5.36 5.08-6"
}));
const G_Sigma = p => /*#__PURE__*/React.createElement(GIcon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 7V5H6l6 7-6 7h12v-2"
}));
Object.assign(window, {
  GIcon,
  G_Cap,
  G_Globe,
  G_FileCheck,
  G_Calc,
  G_Brain,
  G_Languages,
  G_Book,
  G_Arrow,
  G_Pin,
  G_Phone,
  G_Clock,
  G_Award,
  G_Sparkle,
  G_Users,
  G_Instagram,
  G_Telegram,
  G_Menu,
  G_Mic,
  G_Atom,
  G_Flask,
  G_Leaf,
  G_Sigma
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/g-icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-glass/parallax.js
try { (() => {
// Subtle, cinematic parallax engine.
// Listens to scroll once (rAF-throttled), updates transform on any element
// tagged with [data-parallax]. Speed is the fraction of scroll to translate by:
//   data-speed="-0.15"  → drifts UP as the page scrolls (background feel)
//   data-speed="0.08"   → drifts DOWN slightly slower than scroll (midground)
//   data-speed="0.0"    → fixed to scroll (default content)
// Optional data-scale="0.0001" adds a tiny scale change per scrolled px.
// Optional data-origin="center" sets transform-origin.
//
// Honors prefers-reduced-motion (disables all parallax).
// Disables on small screens (<= 720px) where it costs more than it helps.

(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = window.matchMedia("(max-width: 720px)").matches;
  if (reduce || small) return;
  let ticking = false;
  let lastY = window.scrollY;
  function collect() {
    return Array.from(document.querySelectorAll("[data-parallax]")).map(el => {
      const speed = parseFloat(el.dataset.speed || el.dataset.parallax || "0");
      const scale = parseFloat(el.dataset.scale || "0");
      const anchor = el.getBoundingClientRect().top + window.scrollY;
      return {
        el,
        speed,
        scale,
        anchor
      };
    });
  }
  let nodes = [];
  function update() {
    ticking = false;
    const y = lastY;
    for (const n of nodes) {
      const dy = (y - n.anchor) * n.speed;
      const ds = 1 + (y - n.anchor) * n.scale;
      // translate3d keeps it on the compositor
      n.el.style.transform = "translate3d(0," + dy.toFixed(2) + "px,0)" + (n.scale ? " scale(" + ds.toFixed(4) + ")" : "");
    }
  }
  function onScroll() {
    lastY = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }
  function refresh() {
    nodes = collect();
    update();
  }

  // Mount after DOM + React render settle
  function init() {
    refresh();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", () => {
      setTimeout(refresh, 60);
    });
    // React mounts asynchronously; re-collect a beat later
    setTimeout(refresh, 200);
    setTimeout(refresh, 800);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  window.__pa_parallax_refresh = refresh;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-glass/parallax.js", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-web/AboutSection.jsx
try { (() => {
const {
  Card: PA_Card,
  SectionHeading: PA_SectionHeading,
  PyramidMark: PA_PyramidMark2
} = window.PyramidAcademyDesignSystem_4db737;
function AboutSection() {
  const items = [{
    icon: /*#__PURE__*/React.createElement(Users, null),
    title: "Professional o'qituvchilar",
    body: "Xalqaro sertifikatlangan o'qituvchilar va aniq metodika."
  }, {
    icon: /*#__PURE__*/React.createElement(Globe, null),
    title: "3 tilda ta'lim",
    body: "O'zbek, rus va ingliz tillarida moslashuvchan dars jadvali."
  }, {
    icon: /*#__PURE__*/React.createElement(Award, null),
    title: "Tasdiqlangan natijalar",
    body: "IELTS 7.0+, SAT 1400+ — talabalarimizning real natijalari."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: "120px 24px",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "var(--gradient-navy-felt)",
      borderRadius: "var(--radius-xl)",
      aspectRatio: "4 / 5",
      position: "relative",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.1,
      pointerEvents: "none",
      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "32px 32px"
    }
  }), /*#__PURE__*/React.createElement(PA_PyramidMark2, {
    size: 220,
    color: "var(--brand-silver-50)",
    style: {
      filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.3))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 24,
      right: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 13,
      color: "rgba(255,255,255,0.6)",
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "EST. 2021"), /*#__PURE__*/React.createElement("span", null, "Yangihayot, Toshkent"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PA_SectionHeading, {
    eyebrow: "Biz haqimizda",
    title: "Pyramid Academy \u2014 Sizning Muvaffaqiyat Piramidangiz",
    lede: "Pyramid Academy Toshkentda 2021-yildan faoliyat yuritmoqda. Yangihayot filialida (Massiv Uzgarish 1v/1/2) 5 yillik tajriba asosida IELTS, CEFR, SAT, matematika va mental arifmetika kurslarini o'zbek, rus va ingliz tillarida taqdim etamiz."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--text-muted)",
      margin: "20px 0 32px"
    }
  }, "Bizning maqsad \u2014 har bir talabaga mukammal natijaga erishishda yordam berish. Har bir kurs aniq metodologiya, professional o'qituvchilar va real natijalarga asoslangan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(PA_Card, {
    key: i,
    padding: "md",
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-navy-50)",
      color: "var(--brand-navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, it.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 2
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      lineHeight: 1.6
    }
  }, it.body))))))));
}
window.AboutSection = AboutSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-web/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-web/ContactSection.jsx
try { (() => {
const {
  Card: PA_Card3,
  Input: PA_Input,
  Button: PA_Button3,
  SectionHeading: PA_SectionHeading3,
  Badge: PA_Badge3
} = window.PyramidAcademyDesignSystem_4db737;
function ContactSection() {
  const [course, setCourse] = React.useState("IELTS");
  const courses = ["IELTS", "CEFR", "SAT", "Mental Arifmetika", "Matematika", "Ingliz Tili", "Rus Tili"];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "120px 24px",
      background: "white",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PA_SectionHeading, {
    eyebrow: "Aloqa",
    title: "Yangi guruhga ro'yxatdan o'ting",
    lede: "Yangihayot filialida yangi guruhlar ochiq. Ariza qoldiring \u2014 biz 24 soat ichida bog'lanamiz."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-navy-50)",
      color: "var(--brand-navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(MapPin, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Yangihayot filiali"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      lineHeight: 1.6
    }
  }, "Massiv Uzgarish 1v, Toshkent", /*#__PURE__*/React.createElement("br", null), "Massiv Uzgarish 1/2, Toshkent"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-navy-50)",
      color: "var(--brand-navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Phone, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Qo'ng'iroq qiling"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+998000000000",
    style: {
      fontSize: 14,
      color: "var(--text-link)",
      fontFamily: "var(--font-mono)"
    }
  }, "+998 XX XXX XX XX"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-navy-50)",
      color: "var(--brand-navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Clock, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Ish vaqti"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "Du\u2013Sha: 09:00\u201320:00 \xB7 Yak: 10:00\u201317:00")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-default)",
      overflow: "hidden",
      background: "var(--slate-100)",
      aspectRatio: "16 / 9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
      backgroundSize: "32px 32px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      color: "var(--brand-navy-700)"
    }
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "Massiv Uzgarish 1v"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Google Maps embed")))), /*#__PURE__*/React.createElement(PA_Card3, {
    padding: "xl",
    style: {
      alignSelf: "start"
    },
    id: "register"
  }, /*#__PURE__*/React.createElement(PA_Badge3, {
    tone: "accent",
    style: {
      marginBottom: 12
    }
  }, "Yangi guruhlar \u2014 sentabr 2026"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      margin: "0 0 8px",
      letterSpacing: "-0.02em"
    }
  }, "Bepul maslahat oling"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      margin: "0 0 24px"
    }
  }, "Bizning maslahatchi 24 soat ichida siz bilan bog'lanadi va kurs tanlashda yordam beradi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(PA_Input, {
    label: "Ism",
    required: true,
    placeholder: "Ismingiz"
  }), /*#__PURE__*/React.createElement(PA_Input, {
    label: "Yosh",
    type: "number",
    placeholder: "14\u201335"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(PA_Input, {
    label: "Telefon",
    type: "tel",
    required: true,
    iconLeft: /*#__PURE__*/React.createElement(Phone, {
      size: 18
    }),
    placeholder: "+998 XX XXX XX XX"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      display: "block",
      marginBottom: 6
    }
  }, "Kurs *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, courses.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCourse(c),
    style: {
      padding: "8px 14px",
      fontSize: 13,
      fontWeight: 600,
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid " + (course === c ? "var(--brand-navy-700)" : "var(--border-default)"),
      background: course === c ? "var(--brand-navy-700)" : "white",
      color: course === c ? "white" : "var(--text-default)",
      cursor: "pointer",
      transition: "all 150ms cubic-bezier(.4,0,.2,1)",
      fontFamily: "var(--font-sans)"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PA_Button3, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 20
    })
  }, "Arizani Yuborish")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--text-subtle)",
      margin: "12px 0 0",
      textAlign: "center"
    }
  }, "Yuborish orqali siz shaxsiy ma'lumotlar siyosatiga roziligingizni bildirasiz."))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-web/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-web/CoursesSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  CourseCard: PA_CourseCard,
  SectionHeading: PA_SectionHeading
} = window.PyramidAcademyDesignSystem_4db737;
function CoursesSection() {
  const courses = [{
    icon: /*#__PURE__*/React.createElement(GraduationCap, null),
    title: "IELTS Preparation",
    description: "International English Language Testing System — 7.0+ natijaga tayyorgarlik.",
    audience: "Chet elga o'qishga ketuvchilar",
    duration: "3–6 oy",
    level: "B2 → C1",
    highlighted: true
  }, {
    icon: /*#__PURE__*/React.createElement(FileCheck, null),
    title: "CEFR",
    description: "Common European Framework — ingliz tilining barcha darajalari (A1–C2).",
    audience: "Barcha darajalar",
    duration: "2–8 oy",
    level: "A1 → C2"
  }, {
    icon: /*#__PURE__*/React.createElement(Award, null),
    title: "SAT Preparation",
    description: "Scholastic Assessment Test — Amerika universitetlariga kirish.",
    audience: "Maktab o'quvchilari",
    duration: "3–4 oy",
    level: "11–12 sinf"
  }, {
    icon: /*#__PURE__*/React.createElement(Brain, null),
    title: "Mental Arithmetic",
    description: "Bolalar uchun mental arifmetika — tez hisoblash va mantiqiy fikrlash.",
    audience: "6–14 yosh",
    duration: "4–6 oy",
    level: "Beginner"
  }, {
    icon: /*#__PURE__*/React.createElement(Calculator, null),
    title: "Matematika",
    description: "Maktab va universitet imtihonlariga oddiy va oliy matematika.",
    audience: "12–25 yosh",
    duration: "2–6 oy",
    level: "5 → 12 sinf"
  }, {
    icon: /*#__PURE__*/React.createElement(Languages, null),
    title: "Ingliz Tili",
    description: "Ingliz tilining barcha darajalari — boshlang'ich darajadan tortib professional kommunikatsiyagacha.",
    audience: "Barcha yoshlar",
    duration: "2–8 oy",
    level: "A1 → C2"
  }, {
    icon: /*#__PURE__*/React.createElement(BookOpen, null),
    title: "Rus Tili",
    description: "Rus tilining barcha darajalari — kundalik nutq, yozuv va imtihon tayyorgarligi.",
    audience: "Barcha yoshlar",
    duration: "2–8 oy",
    level: "A1 → C2"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "courses",
    style: {
      padding: "120px 24px",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 64,
      alignItems: "end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(PA_SectionHeading, {
    eyebrow: "Kurslar",
    title: "Mukammal natijaga tayyorgarlik",
    lede: "IELTS, CEFR, SAT, matematika va mental arifmetika \u2014 bir markazda. Har bir kurs uchun professional o'qituvchilar va aniq metodika."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--brand-navy-600)"
    }
  }), "7 kurs yo'nalishi"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--brand-amber-500)"
    }
  }), "3 ta til"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 20
    }
  }, courses.map((c, i) => /*#__PURE__*/React.createElement(PA_CourseCard, _extends({
    key: i
  }, c)))));
}
window.CoursesSection = CoursesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-web/CoursesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-web/Hero.jsx
try { (() => {
// Hero — the navy felt environment with H1, subhead, CTAs, and PyramidProgress.
const {
  Button: PA_Button,
  Badge: PA_Badge,
  PyramidMark: PA_PyramidMark,
  PyramidProgress: PA_PyramidProgress
} = window.PyramidAcademyDesignSystem_4db737;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      backgroundImage: "var(--gradient-navy-felt)",
      color: "white",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.08,
      pointerEvents: "none",
      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "32px 32px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "96px 24px 120px",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: 64,
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PA_Badge, {
    tone: "inverse",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(PA_PyramidMark, {
    size: 12,
    color: "var(--brand-amber-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-amber-400)"
    }
  }, "Yangihayot filiali \u2014 yangi guruhlar")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: "-0.025em",
      margin: 0,
      color: "white",
      textWrap: "balance"
    }
  }, "Zamonaviy Ta'lim Markazi \u2014", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "Mukammal Natijalar"), " ", "IELTS, CEFR va SAT da"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.78)",
      margin: "24px 0 36px",
      maxWidth: 540,
      textWrap: "pretty"
    }
  }, "Toshkentda 5 yillik tajriba. Yangihayot filialida yangi guruhlar ochiq. Ingliz, rus va o'zbek tillarda ta'lim."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(PA_Button, {
    variant: "accent",
    size: "lg",
    href: "#register",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 20
    })
  }, "Guruhga Qatnish"), /*#__PURE__*/React.createElement(PA_Button, {
    variant: "inverse",
    size: "lg",
    href: "#courses"
  }, "Batafsil Ma'lumot")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 36,
      marginTop: 48,
      paddingTop: 28,
      borderTop: "1px solid rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: "white",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, "5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.65)",
      marginTop: 4
    }
  }, "Yillik tajriba")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: "white",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, "1.3K+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.65)",
      marginTop: 4
    }
  }, "Instagram followers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color: "var(--brand-amber-400)"
    }
  }, "7+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.65)",
      marginTop: 4
    }
  }, "Kurs yo'nalishi")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "var(--radius-xl)",
      padding: 28,
      boxShadow: "0 32px 64px -16px rgba(0,0,0,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--brand-amber-400)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 14
  }), "Pyramid Progress Tracker"), /*#__PURE__*/React.createElement(PyramidProgressOnDark, null))));
}

// Variant of PyramidProgress styled for dark backgrounds (overrides the
// inner recommendation card to be transparent + white text).
function PyramidProgressOnDark() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      "--bg-surface": "rgba(255,255,255,0.06)",
      "--border-default": "rgba(255,255,255,0.1)",
      "--text-default": "white",
      "--text-muted": "rgba(255,255,255,0.7)",
      "--text-subtle": "rgba(255,255,255,0.55)"
    }
  }, /*#__PURE__*/React.createElement(PA_PyramidProgress, {
    defaultLevel: 3
  }));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-web/TrustSection.jsx
try { (() => {
const {
  Testimonial: PA_Testimonial,
  Stat: PA_Stat,
  SectionHeading: PA_SectionHeading
} = window.PyramidAcademyDesignSystem_4db737;
function TrustSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "white",
      borderTop: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)",
      padding: "96px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(PA_SectionHeading, {
    align: "center",
    eyebrow: "Ishonch",
    title: "Talabalarimiz va ota-onalarimiz fikri",
    lede: "Real natijalar, real hikoyalar. Yangihayot filialida 5 yillik tajriba."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(PA_Testimonial, {
    quote: "O'qituvchilar juda professional. 4 oy ichida IELTS 6.5 dan 7.5 ga ko'tarildim. Hozir Londonda Bachelor's o'qiyman.",
    name: "Aziza Karimova",
    role: "IELTS talabasi",
    score: "IELTS 7.5"
  }), /*#__PURE__*/React.createElement(PA_Testimonial, {
    quote: "Farzandim 8 yoshdan mental arifmetika kursiga qatnashadi. Matematikadan eng yaxshi sinfda. Tezligi juda yuqori.",
    name: "Dilshod Yusupov",
    role: "Ota-ona"
  }), /*#__PURE__*/React.createElement(PA_Testimonial, {
    quote: "SAT tayyorgarligi tizimli va aniq. 1480 ball oldim va Amerikadagi top-50 universitetga qabul qilindim.",
    name: "Sherzod Olimov",
    role: "SAT talabasi",
    score: "SAT 1480"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24,
      marginTop: 64,
      padding: "32px 0",
      borderTop: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(PA_Stat, {
    value: "5",
    label: "Yillik tajriba"
  }), /*#__PURE__*/React.createElement(PA_Stat, {
    value: "1.3K+",
    label: "Instagram followers"
  }), /*#__PURE__*/React.createElement(PA_Stat, {
    value: "7+",
    label: "Kurs yo'nalishi"
  }), /*#__PURE__*/React.createElement(PA_Stat, {
    value: "3",
    label: "O'qitish tili",
    tone: "accent"
  }))));
}
window.TrustSection = TrustSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-web/TrustSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pyramid-academy-web/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Icon set — small Lucide-style inline SVGs used across the UI kit.
// Keeps the kit's external dependencies to zero. 2px stroke, currentColor.

function Icon({
  children,
  size = 24,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), children);
}
const GraduationCap = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 10v6M2 10l10-5 10 5-10 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12v5c3 3 9 3 12 0v-5"
}));
const Globe = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "2",
  y1: "12",
  x2: "22",
  y2: "12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
}));
const FileCheck = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "9 15 11 17 15 13"
}));
const Calculator = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "6",
  x2: "16",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "10",
  x2: "8",
  y2: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "10",
  x2: "12",
  y2: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "10",
  x2: "16",
  y2: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "14",
  x2: "8",
  y2: "14"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "14",
  x2: "12",
  y2: "14"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "14",
  x2: "16",
  y2: "14"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8",
  y1: "18",
  x2: "16",
  y2: "18"
}));
const Brain = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"
}));
const Languages = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 8h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 8a3 3 0 0 1 6 0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 12h6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 18l-5-10-5 10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 14h6"
}));
const BookOpen = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
}));
const ArrowRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));
const MapPin = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Phone = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));
const Clock = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const Mail = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "22,6 12,13 2,6"
}));
const Award = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"
}));
const Sparkles = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"
}));
const Users = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 21v-2a4 4 0 0 0-3-3.87"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
}));
const ChevronDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));
const Instagram = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "20",
  rx: "5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17.5",
  y1: "6.5",
  x2: "17.51",
  y2: "6.5"
}));
Object.assign(window, {
  Icon,
  GraduationCap,
  Globe,
  FileCheck,
  Calculator,
  Brain,
  Languages,
  BookOpen,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  Mail,
  Award,
  Sparkles,
  Users,
  ChevronDown,
  Instagram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pyramid-academy-web/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PyramidMark = __ds_scope.PyramidMark;

__ds_ns.PyramidProgress = __ds_scope.PyramidProgress;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
