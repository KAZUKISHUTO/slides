# ZeroPlus Design System (Ver2)

Design system for **ZeroPlus** — a freelance-focused programming school（フリーランス特化型プログラミングスクール）operated by **株式会社TOMAP**. The brand moves learners「個のスキルで生きていく人材へ」. Warm, encouraging, community-driven; human and trustworthy, not corporate.

**Product surfaces:** the marketing website / LP (UI kit in `ui_kits/website/`). Slide decks exist in the original project (title / section / content / quote / closing) but no template was supplied here, so none are built.

## Sources
- `ZeroPlus Design System.pdf` v1.1 ("Generated for Figma") — colors, type scale, Button / Input / Card. Not attached here; values arrived via the uploaded `uploads/tokens.css`, `uploads/brand.md`, `uploads/components.md`, `uploads/SKILL.md`.
- `講義資料.pdf` — 17-page ZeroPlus lecture deck (voice reference). Not attached.
- No Figma link, codebase or logo files were provided. Logo files referenced upstream (`zeroplus_logo.png`, `zeroplus_white_logo.png`, `bg_zeroplus.png`) are **missing** — the wordmark is rendered in plain type ("ZeroPlus", Inter 700) wherever a mark would go.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core/` — Button, Card, Badge, Icon · `components/forms/` — Input
- `ui_kits/website/` — marketing LP recreation (index.html + JSX)
- `SKILL.md` — Agent Skill entry point
- `uploads/` — original source files

## Components
- **Button** — primary (orange gradient + glow) / secondary (cyan) / outline / ghost; sm · md · lg
- **Card** — base / elevated / outline / accent (4px orange top bar); `hoverable`
- **Input** — label, helper, error, disabled, 必須 pill; orange focus ring
- **Badge** — pill tag; brand / accent / neutral / success; soft / solid
- **Icon** — Lucide by name, 2px stroke

### Intentional additions
- **Badge** — not in the PDF; pill tags are used throughout the LP.
- **Icon** — wrapper that keeps every glyph on one 2px-stroke Lucide system.

## UI kits
- `ui_kits/website/` — Header, Hero, FeatureGrid, CurriculumSteps, VoiceSection, CtaSection, Footer, ConsultModal.

---


## CONTENT FUNDAMENTALS

**Language.** Primary language is Japanese. English appears as short labels/kickers
(`CURRICULUM`, `STEP 1`) and the product name (ZeroPlus, ZeroPlus ACADEMY).

**Voice.** Warm, direct, encouraging — a mentor who believes in you. It sells a
**transformation**（「個のスキルで生きていく人材へ」）, not features. Copy leads with the
learner's outcome, then the support that gets them there.

**Person.** Addresses the reader as あなた; the school「伴走する」(runs alongside).
Community warmth is explicit（「仲間」「一緒に考えます」）.

**Casing & punctuation.** Sentence-style Japanese. English kickers are UPPERCASE with
wide tracking. Keeps a「堅すぎない」(not-too-stiff) tone. Reassurance lines are common
（「しつこい勧誘は一切ありません」）.

**Sample copy (verbatim / spec):**
- H1:「個のスキルで生きていく人材へ」
- Body:「ZeroPlusはフリーランス育成に特化したプログラミングスクールです。実務レベルのスキルと案件獲得のノウハウを提供します。」
- Primary CTA:「まずは無料で相談する」· Secondary CTA:「カリキュラムを見る」
- Input placeholder:「例：山田 太郎」

**Emoji.** Very sparingly — a single celebratory 🎉 on a success/confirmation state is
acceptable. Never decorative in headings or marketing copy.

---

## VISUAL FOUNDATIONS

### Color
Orange is the service color and does the heavy lifting. The signature element is the
**orange→amber gradient** `linear-gradient(135deg,#FF6600,#FFBB1F)`, used on the logo
dash, primary CTAs, hero panels and section accents. Cyan (`#43CFE8→#00A8BE`) is the
supporting accent for secondary actions and highlights. Cream `#FFF5EB` is the
alternate section surface. Text is ink `#333333` on white.

Use **one or two background tones per view** (white + cream, or a single gradient
block) — never a rainbow.

### Type
Inter (Latin) + Noto Sans JP (Japanese). Headings **Bold (700)**; body **Medium (500)**
per the brand note. Scale: Display 56 / H1 40 / H2 32 / H3 24 / Body 16; line-height
1.4 for headings, 1.6 for body. Gradient-clipped text is used for **a single emphasis
word** in a heading — not whole paragraphs.

### Spacing & layout
Generous whitespace（「余白は広め」）. 4px base scale; sections pad
`clamp(56px, 8vw, 96px)`. Content max width 1120px, centered.

### Corner radii
Slightly rounded（「角は少し丸め」）: cards 12px (spec), buttons 8–16px by size,
pills 999px. Nothing sharp; nothing overly bubbly.

### Cards
White surface, 12px radius, soft shadow + 1px subtle border. Feature cards add a 4px
orange top accent bar. Hover = 4px lift + larger shadow.

### Shadows
Soft and warm-tinted (rgba of ink `#333`), never harsh black. Ladder sm→md→lg.
A dedicated **brand glow** `0 10px 28px rgba(255,102,0,.28)` sits under primary CTAs
and gradient panels.

### Backgrounds
Solid white, cream `#FFF5EB` sections, or full-bleed brand gradient blocks.
No photographic textures, no noise, no patterns.

### Motion
Restrained. `cubic-bezier(0.22,1,0.36,1)` ease-out, 120–320ms. Buttons lift 2px on
hover; cards lift 4px. No bounce, no infinite loops.

### Hover / press
Hover = subtle upward translate + shadow growth (buttons/cards). Inputs on focus get
an orange border + 4px `rgba(255,102,0,.35)` ring. Links darken orange on hover
(`#FF6600` → `#E45A00`).

### Borders
1px `#E7E7E9` subtle dividers; 1.5px for interactive outlines and input fields.
Brand outline buttons use a 1.5px orange border on white.

### Transparency / blur
Sticky header is `rgba(255,255,255,0.88)` + 10px backdrop blur. Otherwise surfaces
are opaque.

### Imagery vibe
Warm. No imagery was supplied to this project. Where photos would go, use the brand
gradient panel with the white type wordmark as a placeholder (as in the hero).

---

## ICONOGRAPHY

No icon assets ship in the source PDFs. Lucide is loaded from CDN (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) and rendered through the `Icon` component. This system standardizes on **Lucide** —
thin, rounded, **2px stroke**, matching the friendly-but-clean brand feel.
Prefer `currentColor` or `--orange-600` for accent glyphs; keep stroke at 2px.

- **SVG vs PNG:** icons are inline SVG (Lucide); brand logos are PNG.
- **Unicode as icon:** the decorative quote mark “ is used as a typographic device on
  quote slides / testimonials.
- **Emoji as icon:** avoided except the one celebratory 🎉 success state.

> ⚠️ **Lucide is a substitution.** The brand did not supply an icon set. If ZeroPlus
> has an official icon library, it should replace Lucide.

---

## Font substitution note

Inter and Noto Sans JP are both Google Fonts, loaded via the Google Fonts CDN (not
self-hosted binaries). JetBrains Mono is used for monospace/labels. If ZeroPlus
self-hosts specific weights, swap in the `@font-face` rules.
