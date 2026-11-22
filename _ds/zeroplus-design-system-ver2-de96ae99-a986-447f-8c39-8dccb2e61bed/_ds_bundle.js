/* @ds-bundle: {"format":4,"namespace":"ZeroPlusDesignSystem_de96ae","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"045485621cb1","components/core/Button.jsx":"237391e825ae","components/core/Card.jsx":"88620f8a5e3a","components/core/Icon.jsx":"23e285b45d37","components/forms/Input.jsx":"0df6b4939a54","ui_kits/website/Cta.jsx":"9590bc0f704e","ui_kits/website/Header.jsx":"e6bfb2420729","ui_kits/website/Sections.jsx":"ff1dfaea2858"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZeroPlusDesignSystem_de96ae = window.ZeroPlusDesignSystem_de96ae || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: {
    soft: ['var(--orange-100)', '#C24E00'],
    solid: ['var(--orange-600)', 'var(--white)']
  },
  accent: {
    soft: ['var(--cyan-100)', '#00788A'],
    solid: ['var(--cyan-500)', 'var(--white)']
  },
  neutral: {
    soft: ['var(--gray-100)', 'var(--gray-700)'],
    solid: ['var(--ink)', 'var(--white)']
  },
  success: {
    soft: ['#DDF3EA', '#157350'],
    solid: ['var(--success)', 'var(--white)']
  }
};
function Badge({
  tone = 'brand',
  variant = 'soft',
  icon,
  children,
  style,
  ...rest
}) {
  const [bg, fg] = (TONES[tone] || TONES.brand)[variant] || TONES.brand.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 26,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.04em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 36,
    padX: 16,
    fontSize: 14,
    radius: 8,
    gap: 6
  },
  md: {
    height: 48,
    padX: 24,
    fontSize: 15,
    radius: 12,
    gap: 8
  },
  lg: {
    height: 60,
    padX: 36,
    fontSize: 17,
    radius: 16,
    gap: 10
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = {
    primary: {
      background: 'var(--gradient-brand)',
      color: 'var(--white)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--gradient-accent)',
      color: 'var(--white)',
      border: '1.5px solid transparent',
      boxShadow: '0 10px 28px rgba(0,168,190,0.24)'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--orange-600)',
      border: '1.5px solid var(--orange-600)',
      boxShadow: 'none'
    },
    ghost: {
      background: hover && !disabled ? 'var(--orange-50)' : 'transparent',
      color: 'var(--orange-600)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    }
  }[variant] || {};
  const lift = hover && !disabled && variant !== 'ghost';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.padX}px`,
      borderRadius: s.radius,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 700,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: lift ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      ...v,
      ...(lift && variant === 'primary' ? {
        boxShadow: '0 14px 34px rgba(255,102,0,0.34)'
      } : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'base',
  hoverable = false,
  padding = 32,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    base: {
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    },
    elevated: {
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-md)'
    },
    outline: {
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    accent: {
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    }
  }[variant] || {};
  const lifted = hoverable && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding,
      transition: 'transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)',
      ...v,
      ...(lifted ? {
        transform: 'translateY(-4px)',
        boxShadow: 'var(--shadow-lg)'
      } : {}),
      ...style
    }
  }, rest), variant === 'accent' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--gradient-brand)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function toPascal(name) {
  return String(name).split(/[-_ ]/).filter(Boolean).map(p => p[0].toUpperCase() + p.slice(1)).join('');
}
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const icons = lib && (lib.icons || lib);
  let node = icons ? icons[toPascal(name)] : null;
  if (node && node[0] === 'svg') node = node[2];
  const children = Array.isArray(node) ? node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })) : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _uid = 0;
function Input({
  label,
  placeholder,
  type = 'text',
  helperText,
  error,
  disabled = false,
  fullWidth = true,
  required = false,
  value,
  defaultValue,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const idRef = React.useRef(id || `zp-input-${++_uid}`);
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--orange-600)' : 'var(--border-strong)';
  const ring = focus ? error ? '0 0 0 4px rgba(229,72,77,0.25)' : '0 0 0 4px var(--focus-ring)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: fullWidth ? '100%' : 320,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: idRef.current,
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--white)',
      background: 'var(--orange-600)',
      borderRadius: 4,
      padding: '2px 6px',
      lineHeight: 1.3
    }
  }, "\u5FC5\u9808")), /*#__PURE__*/React.createElement("input", _extends({
    id: idRef.current,
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": !!error,
    style: {
      height: 52,
      padding: '0 16px',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${borderColor}`,
      boxShadow: ring,
      outline: 'none',
      background: disabled ? 'var(--gray-100)' : 'var(--white)',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      cursor: disabled ? 'not-allowed' : 'text',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest)), (error || helperText) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cta.jsx
try { (() => {
const ZPc = window.ZeroPlusDesignSystem_de96ae;
function CtaSection({
  onConsult
}) {
  const {
    Button,
    Icon
  } = ZPc;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad) 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--gradient-brand)',
      boxShadow: 'var(--shadow-brand)',
      padding: '64px 48px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-h2)'
    }
  }, "\u307E\u305A\u306F\u6C17\u8EFD\u306B\u76F8\u8AC7\u3057\u3066\u307F\u307E\u305B\u3093\u304B\uFF1F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#fff',
      fontSize: 16
    }
  }, "\u30AD\u30E3\u30EA\u30A2\u306E\u60A9\u307F\u3084\u5B66\u7FD2\u306E\u9032\u3081\u65B9\u306A\u3069\u3001\u4E00\u7DD2\u306B\u8003\u3048\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: onConsult,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    }),
    style: {
      border: '1.5px solid #fff'
    }
  }, "\u307E\u305A\u306F\u7121\u6599\u3067\u76F8\u8AC7\u3059\u308B")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--gray-400)'
    }
  }, "\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u7279\u5316\u578B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B9\u30AF\u30FC\u30EB ZeroPlus")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--gray-400)'
    }
  }, "\xA9 \u682A\u5F0F\u4F1A\u793ETOMAP")));
}
function ConsultModal({
  open,
  onClose
}) {
  const {
    Input,
    Button,
    Icon
  } = ZPc;
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    if (open) {
      setSent(false);
      setErr('');
    }
  }, [open]);
  if (!open) return null;
  const submit = e => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErr('正しい形式で入力してください');
      return;
    }
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(31,31,34,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 480,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 40,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      all: 'unset',
      cursor: 'pointer',
      position: 'absolute',
      top: 16,
      right: 16,
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  })), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("h3", null, "\u304A\u7533\u3057\u8FBC\u307F\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15
    }
  }, name || 'あなた', "\u3055\u3093\u3001\u62C5\u5F53\u8005\u3088\u308A2\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u3054\u9023\u7D61\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose,
    style: {
      marginTop: 8
    }
  }, "\u9589\u3058\u308B")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.16em',
      color: 'var(--orange-600)'
    }
  }, "CONTACT"), /*#__PURE__*/React.createElement("h3", null, "\u7121\u6599\u76F8\u8AC7\u306E\u304A\u7533\u3057\u8FBC\u307F")), /*#__PURE__*/React.createElement(Input, {
    label: "\u304A\u540D\u524D",
    placeholder: "\u4F8B\uFF1A\u5C71\u7530 \u592A\u90CE",
    required: true,
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    type: "email",
    placeholder: "example@zeroplus.jp",
    required: true,
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setErr('');
    },
    error: err
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "\u307E\u305A\u306F\u7121\u6599\u3067\u76F8\u8AC7\u3059\u308B"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "\u3057\u3064\u3053\u3044\u52E7\u8A98\u306F\u4E00\u5207\u3042\u308A\u307E\u305B\u3093"))));
}
Object.assign(window, {
  CtaSection,
  Footer,
  ConsultModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const ZP = window.ZeroPlusDesignSystem_de96ae;
function Wordmark({
  inverse
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: inverse ? '#fff' : 'var(--ink)'
    }
  }, "ZeroPlus");
}
function Header({
  onConsult
}) {
  const {
    Button
  } = ZP;
  const links = [['特徴', 'features'], ['カリキュラム', 'curriculum'], ['受講生の声', 'voice']];
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 72,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onConsult
  }, "\u7121\u6599\u76F8\u8AC7")));
}
function Hero({
  onConsult
}) {
  const {
    Button,
    Badge,
    Icon
  } = ZP;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad) 24px',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u7279\u5316\u578B"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B9\u30AF\u30FC\u30EB")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      letterSpacing: '-0.02em',
      textWrap: 'balance'
    }
  }, "\u500B\u306E\u30B9\u30AD\u30EB\u3067", /*#__PURE__*/React.createElement("br", null), "\u751F\u304D\u3066\u3044\u304F", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "\u4EBA\u6750\u3078")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      maxWidth: 480,
      textWrap: 'pretty'
    }
  }, "ZeroPlus\u306F\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u80B2\u6210\u306B\u7279\u5316\u3057\u305F\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B9\u30AF\u30FC\u30EB\u3067\u3059\u3002\u5B9F\u52D9\u30EC\u30D9\u30EB\u306E\u30B9\u30AD\u30EB\u3068\u6848\u4EF6\u7372\u5F97\u306E\u30CE\u30A6\u30CF\u30A6\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onConsult,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })
  }, "\u307E\u305A\u306F\u7121\u6599\u3067\u76F8\u8AC7\u3059\u308B"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => window.scrollTo({
      top: document.getElementById('curriculum').offsetTop - 72,
      behavior: 'smooth'
    })
  }, "\u30AB\u30EA\u30AD\u30E5\u30E9\u30E0\u3092\u898B\u308B")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 16,
    color: "var(--success)"
  }), "\u3057\u3064\u3053\u3044\u52E7\u8A98\u306F\u4E00\u5207\u3042\u308A\u307E\u305B\u3093")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3.4',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--gradient-brand)',
      boxShadow: 'var(--shadow-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 52,
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '-0.02em'
    }
  }, "ZeroPlus"))));
}
Object.assign(window, {
  Header,
  Hero,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const ZPs = window.ZeroPlusDesignSystem_de96ae;
function SectionHead({
  kicker,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.16em',
      color: 'var(--orange-600)'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      textWrap: 'balance'
    }
  }, title));
}
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto'
};
function FeatureGrid() {
  const {
    Card,
    Icon
  } = ZPs;
  const items = [['code', '実務レベルのスキル', '現場で求められる実践的なカリキュラム。'], ['briefcase', '案件獲得のノウハウ', '営業・提案・見積もりまで、独立に必要な知識を学べます。'], ['users', '伴走するサポート', '仲間と講師があなたの学習に伴走し、一緒に考えます。']];
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      padding: 'var(--section-pad) 24px',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "FEATURES",
    title: "ZeroPlus\u304C\u9078\u3070\u308C\u308B\u7406\u7531"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 24
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "accent",
    hoverable: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--orange-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26,
    color: "var(--orange-600)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      marginBottom: 8
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15
    }
  }, d))))));
}
function CurriculumSteps() {
  const {
    Badge,
    Icon
  } = ZPs;
  const steps = [['STEP 1', 'Web制作の基礎', ['HTML/CSS', 'デザインカンプ']], ['STEP 2', 'JavaScript', ['JavaScript', 'jQuery']], ['STEP 3', 'WordPress', ['WordPress', 'PHP']], ['STEP 4', '案件獲得', ['営業', 'ポートフォリオ']]];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "curriculum",
    style: {
      padding: 'var(--section-pad) 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "CURRICULUM",
    title: "\u6848\u4EF6\u7372\u5F97\u307E\u3067\u306E\u30B9\u30C6\u30C3\u30D7"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 16
    }
  }, steps.map(([k, t, tags], i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setActive(i),
      style: {
        all: 'unset',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        background: on ? 'var(--gradient-brand)' : 'var(--white)',
        border: on ? '1px solid transparent' : '1px solid var(--border-subtle)',
        boxShadow: on ? 'var(--shadow-brand)' : 'var(--shadow-sm)',
        color: on ? '#fff' : 'var(--ink)',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.16em',
        color: on ? '#fff' : 'var(--orange-600)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 700
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, tags.map(g => /*#__PURE__*/React.createElement(Badge, {
      key: g,
      tone: on ? 'neutral' : 'brand',
      style: on ? {
        background: 'rgba(255,255,255,0.9)',
        color: 'var(--orange-600)'
      } : null
    }, g))), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: 'flex-end',
        opacity: 0.7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    })));
  }))));
}
function VoiceSection() {
  const {
    Card,
    Badge
  } = ZPs;
  const voices = [['未経験から', '「仲間と一緒に学べたので、最後まで続けられました。」'], ['会社員から独立', '「案件の取り方まで教えてもらえたのが大きかったです。」']];
  return /*#__PURE__*/React.createElement("section", {
    id: "voice",
    style: {
      padding: 'var(--section-pad) 24px',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "VOICE",
    title: "\u53D7\u8B1B\u751F\u306E\u58F0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 24
    }
  }, voices.map(([tag, q]) => /*#__PURE__*/React.createElement(Card, {
    key: tag,
    variant: "elevated",
    padding: 36
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      fontSize: 72,
      lineHeight: 0.8,
      fontWeight: 700,
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      height: 40
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.6,
      margin: '8px 0 20px'
    }
  }, q), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, tag))))));
}
Object.assign(window, {
  SectionHead,
  FeatureGrid,
  CurriculumSteps,
  VoiceSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

})();
