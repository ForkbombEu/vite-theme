---
name: Forkbomb Vite Theme
description: A reusable technical visual system for Vite and VitePress built from deep fields, mint signals, square geometry, and expression watermarks.
colors:
  deep-navy: "#050d30"
  structural-blue: "#0f237c"
  signal-mint: "#2dd8a3"
  reading-white: "#ffffff"
  alternate-cloud: "#f7f7f7"
  interface-mist: "#eef1f5"
  muted-ink: "#3f4b70"
  invalid-red: "#ad1f3d"
  dark-alt: "#081643"
  dark-soft: "#0a194e"
  rule-blue: "rgba(15, 35, 124, 0.22)"
  rule-blue-soft: "rgba(15, 35, 124, 0.08)"
  rule-mint-dark: "rgba(45, 216, 163, 0.6)"
  mint-soft: "rgba(45, 216, 163, 0.16)"
  mint-dust: "rgba(45, 216, 163, 0.13)"
  navy-muted: "rgba(5, 13, 48, 0.64)"
  white-strong: "rgba(255, 255, 255, 0.92)"
  white-mid: "rgba(255, 255, 255, 0.78)"
  white-soft: "rgba(255, 255, 255, 0.58)"
  white-footer: "rgba(255, 255, 255, 0.84)"
  white-particle: "rgba(255, 255, 255, 0.13)"
  white-border: "rgba(255, 255, 255, 0.18)"
  white-rule: "rgba(255, 255, 255, 0.15)"
  expression-pale: "rgba(255, 255, 255, 0.055)"
  expression-footer: "rgba(255, 255, 255, 0.045)"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 1.7rem + 4.2vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 1.55rem + 1.6vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.08
  body:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.2vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.55
  lead:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1rem + 0.45vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  zero: "0"
spacing:
  "1": "0.5rem"
  "2": "0.75rem"
  "3": "1rem"
  "4": "1.5rem"
  "5": "2rem"
  "6": "3rem"
  "7": "4.5rem"
  section: "clamp(4.5rem, 8vw, 7.5rem)"
  gutter: "clamp(1.25rem, 5vw, 4.5rem)"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.structural-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.zero}"
    padding: "0.75rem 2rem"
    height: "2.75rem"
  button-solid:
    backgroundColor: "{colors.signal-mint}"
    textColor: "{colors.deep-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.zero}"
    padding: "0.75rem 2rem"
    height: "2.75rem"
  card:
    backgroundColor: "{colors.reading-white}"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.zero}"
    padding: "clamp(1.5rem, 4vw, 2.75rem)"
  field:
    backgroundColor: "{colors.reading-white}"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.zero}"
    padding: "0.65rem 0.8rem"
    height: "2.75rem"
  field-invalid:
    backgroundColor: "{colors.reading-white}"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.zero}"
    padding: "0.65rem 0.8rem"
    height: "2.75rem"
  navigation:
    backgroundColor: "{colors.structural-blue}"
    textColor: "{colors.reading-white}"
    height: "4.75rem"
---

# Design System: Forkbomb Vite Theme

## Overview

**Creative North Star: "The Technical Pulse"**

The Forkbomb Vite Theme turns a source-faithful European developer-studio visual language into reusable infrastructure. Dense navy and royal-blue fields establish technical authority; generous white and cloud bands preserve reading comfort; mint appears as a precise pulse for action, focus, selection, and short rules.

The system is expressive without becoming ornamental. Barlow Semi Condensed provides compressed display energy, Public Sans carries sustained reading, and pale forkbomb expressions become structural watermarks rather than logos pasted onto every surface. Plain Vite pages compose the public `fb-` vocabulary, while VitePress maps the same tokens onto its DefaultTheme without replacing native navigation, search, Markdown, sidebar, or accessibility behavior.

**Key Characteristics:**

- Alternating deep technical fields and open reading fields
- Barlow Semi Condensed display type with Public Sans body copy
- Mint used sparingly as a live signal, including the right-hand hero vector sequence
- Square controls, one-pixel rules, and long lateral shadows
- Pale forkbomb-expression watermarks embedded into large fields
- Shared visual behavior across plain Vite and VitePress

## Colors

The palette separates structural depth from reading clarity, then uses exact alpha overlays to keep rules, particles, text hierarchy, and watermarks quiet.

### Primary

- **Structural Blue** (`structural-blue`, #0f237c): Navigation, footer fields, headings, links, borders, and the upper edge of the hero gradient.
- **Signal Mint** (`signal-mint`, #2dd8a3): Primary actions, focus outlines, active accordion rails, section rules, selection, and the hero vector sequence. Pair mint text with navy; do not use it as ordinary text on white.

### Secondary

- **Deep Navy** (`deep-navy`, #050d30): Dark sections, code fields, body ink, and the lower hero gradient.
- **Muted Ink** (`muted-ink`, #3f4b70): Secondary reading text on light surfaces.
- **Invalid Red** (`invalid-red`, #ad1f3d): The dedicated `:user-invalid` field border; it is functional feedback, not a brand accent.

### Neutral

- **Reading White** (`reading-white`, #ffffff): Primary content fields, cards, and high-contrast type on dark fields.
- **Alternate Cloud** (`alternate-cloud`, #f7f7f7): Alternating reading sections and the default VitePress sidebar field.
- **Interface Mist** (`interface-mist`, #eef1f5): Muted VitePress interface surfaces.
- **Dark Alt / Dark Soft** (`dark-alt`, #081643; `dark-soft`, #0a194e): VitePress dark-mode alternate and soft surfaces.

### Alpha Overlays

- **Blue Rule / Soft Blue Rule** (`rule-blue`, rgba(15, 35, 124, 0.22); `rule-blue-soft`, rgba(15, 35, 124, 0.08)): Standard dividers and subdued accordion or VitePress gutters.
- **Mint-on-Dark Rule** (`rule-mint-dark`, rgba(45, 216, 163, 0.6)): Navigation boundary on blue fields.
- **Mint Soft / Mint Dust** (`mint-soft`, rgba(45, 216, 163, 0.16); `mint-dust`, rgba(45, 216, 163, 0.13)): Inline-code/tip tint and one-pixel hero particles.
- **Navy Muted** (`navy-muted`, rgba(5, 13, 48, 0.64)): Tertiary text in light VitePress chrome.
- **White Strong / Mid / Soft / Footer** (`white-strong`, rgba(255, 255, 255, 0.92); `white-mid`, rgba(255, 255, 255, 0.78); `white-soft`, rgba(255, 255, 255, 0.58); `white-footer`, rgba(255, 255, 255, 0.84)): Ordered text hierarchy on dark fields.
- **White Particle / Border / Rule** (`white-particle`, rgba(255, 255, 255, 0.13); `white-border`, rgba(255, 255, 255, 0.18); `white-rule`, rgba(255, 255, 255, 0.15)): Hero particles, dark-mode/code borders, and footer dividers.
- **Expression Pale / Footer** (`expression-pale`, rgba(255, 255, 255, 0.055); `expression-footer`, rgba(255, 255, 255, 0.045)): Large forkbomb-expression watermarks; their low alpha is essential to legibility.

### Named Rules

**The Mint Signal Rule.** Mint marks action, focus, selected state, short rules, and sparse technical particles; it never becomes a large page background.

**The Alpha Hierarchy Rule.** Preserve the intentional overlay alphas. Increasing watermark, particle, or secondary-text opacity makes the technical fields noisy and weakens content contrast.

**The Invalid-Is-Functional Rule.** Invalid Red appears only for validated error state and never joins the decorative palette.

## Typography

**Display Font:** Barlow Semi Condensed (with `Arial Narrow, sans-serif` fallback)

**Body Font:** Public Sans (with `Arial, sans-serif` fallback)

**Label/Mono Font:** Public Sans for controls; `ui-monospace, SFMono-Regular, Consolas, monospace` for code and the compact expression line

**Character:** Barlow Semi Condensed makes headings, navigation, compact labels, and brand moments direct and space-efficient. Public Sans keeps paragraphs, controls, forms, and documentation calm enough for sustained reading; monospace is reserved for code and the forkbomb expression, not used as a developer-themed costume.

### Hierarchy

- **Display** (600, `clamp(2.75rem, 1.7rem + 4.2vw, 5.75rem)`, 0.98): Hero statements, balanced to a maximum of 15 characters per line with tight tracking (`-0.03em`).
- **Title** (600, `clamp(2rem, 1.55rem + 1.6vw, 2.5rem)`, 1.08): Section headings and major documentation landmarks.
- **Headline** (600, `clamp(1.3rem, 1.1rem + 0.7vw, 1.8rem)`, 1.08): Card, feature, and subsection titles.
- **Lead** (400, `clamp(1.1rem, 1rem + 0.45vw, 1.3rem)`, 1.55): Short explanatory copy in heroes and section introductions.
- **Body** (400, `clamp(1rem, 0.95rem + 0.2vw, 1.1rem)`, 1.55): Reading copy held to 72ch maximum and preferably 45–72 characters.
- **Label** (600, 0.875rem, 1.2): Buttons, navigation, and compact interface labels.
- **Micro / Mono** (400, 0.75–0.875rem, 1.55): Token values, code, legal copy, and expression details.

### Named Rules

**The Two-Family Rule.** Use Barlow Semi Condensed for display structure and Public Sans for reading and controls; introduce monospace only for literal code or the expression signature.

**The Condensed Brevity Rule.** Keep display headings concise enough to benefit from the condensed face; long explanations belong in Public Sans.

## Layout

The shared container is centered at a maximum width of 75rem with fluid gutters (`clamp(1.25rem, 5vw, 4.5rem)`). Sections use a generous block rhythm (`clamp(4.5rem, 8vw, 7.5rem)`) and alternate white, cloud, navy, and blue fields. The hero remains a deep identity field at `clamp(31rem, 72dvh, 47rem)`; content and watermarks layer inside it rather than inside a floating panel.

Use container queries for content-owned compositions: the section intro shifts from a `0.8fr / 1.2fr` split to one column at 42rem. At the 48rem viewport boundary, navigation links hide, the hero holds a 34rem minimum, its expression shifts left, token rows become two columns, code grids become one, and the footer becomes two columns. Below 30rem, the footer and legal row stack. The visual identity compresses but does not disappear.

Plain Vite imports the full stylesheet and composes public `fb-` classes. VitePress extends DefaultTheme, maps `--fb-*` values to `--vp-*`, keeps a 76px blue nav, themes the home hero/features/Markdown/custom blocks, and preserves native nav, mobile menu, sidebar, search, color mode, and keyboard behavior.

**The Field Rhythm Rule.** Alternate dense blue/navy identity fields with generous white/cloud reading fields rather than building a uniform card grid.

**The Extend-Default Rule.** VitePress integrations extend the packaged theme and configure identity through `themeConfig.forkbomb`; do not copy or replace internal Vue components.

## Elevation & Depth

Elevation is rare and directional. White cards, open accordion panels, and VitePress feature blocks use one long lateral soft shadow (`5rem 0 4.375rem -1.25rem rgba(0, 0, 0, 0.14)`), echoing the source site’s horizontal depth. Everything else separates through field changes, one-pixel borders, mint rails, and low-alpha watermarks.

### Shadow Vocabulary

- **Lateral Card** (`5rem 0 4.375rem -1.25rem rgba(0, 0, 0, 0.14)`): White elevated content, open details panels, and VitePress features only.
- **Forced-Colors Replacement:** Remove the lateral shadow and restore a one-pixel `CanvasText` border.

### Named Rules

**The Lateral-Only Rule.** Never substitute a generic centered card shadow, glow, or glass blur for the long horizontal shadow.

**The Elevate-the-Active Rule.** Use lateral elevation for selected or genuinely raised reading content, not every section or container.

## Shapes

Corners are square throughout (`border-radius: 0`). Controls have a minimum 2.75rem block size, structural rules are one pixel, section-title and VitePress heading signals are two pixels, and the card signature is a one-pixel vertical mint rail. The hard geometry keeps the expressive typography and watermarks disciplined.

**The Square Infrastructure Rule.** Buttons, fields, code blocks, custom blocks, feature panels, and cards retain zero radius across Vite and VitePress.

## Components

### Navigation and Brand

- **Navigation:** A 4.75rem royal-blue bar with white Barlow links, a translucent mint bottom rule, and a two-pixel mint hover/current underline.
- **Brand:** Uppercase Barlow name above a small mint monospace forkbomb expression; consumers may change the name through project configuration.
- **Responsive:** Plain Vite links hide at 48rem. VitePress keeps its native hamburger and blue mobile menu.

### Hero

- **Field:** A structural-blue-to-deep-navy vertical gradient with sparse one-pixel mint and white particles.
- **Watermark:** The full forkbomb expression in Barlow at 5.5% white, shifted behind content.
- **Composition:** Copy occupies the left side while the source `data-5.json` vector sequence occupies the right. Below 48rem they stack with the animation centered under the copy.
- **Motion:** The white-and-mint mark plays once when at least a quarter visible, pauses offscreen or while the page is hidden, and resolves to its completed static frame under reduced motion.
- **Accessibility:** The animation is decorative and hidden from assistive technology; `forced-colors: active` hides the watermark and adds a structural border.

### Buttons

- **Shape:** Square, minimum 2.75rem high, padded `0.75rem 2rem`, with a one-pixel border and trailing Barlow chevron.
- **Outline:** Blue on light or mint on dark; hover fills mint and uses navy text.
- **Solid:** Mint with navy text; hover becomes blue with white text.
- **Focus / Disabled:** Every button receives the global two-pixel mint focus outline at 4px offset; disabled and `aria-disabled` states use 45% opacity and a not-allowed cursor.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Reading White with Deep Navy content.
- **Shadow Strategy:** Lateral Card only.
- **Internal Padding:** `clamp(1.5rem, 4vw, 2.75rem)`.
- **Signature:** A one-pixel vertical mint rule may lead card content.

### Accordion

- **Semantics:** Native `details` and `summary` preserve keyboard and assistive-technology behavior.
- **Closed:** Blue one-pixel start rail, soft blue bottom rule, blue plus mark.
- **Open:** Mint rail and minus mark, mint summary text, and the Lateral Card shadow.
- **Focus:** The global mint focus outline applies to the summary.

### Inputs / Fields

- **Style:** White field, deep-navy text, one-pixel blue border, zero radius, minimum 2.75rem height.
- **Placeholder:** A 55% blue-to-white mix.
- **Focus:** Two-pixel mint outline at 4px offset.
- **Invalid:** `:user-invalid` changes the border to Invalid Red (#ad1f3d).

### Sections and Watermarks

- **Reading Bands:** White by default, Cloud for muted alternation, Deep Navy for dark sections.
- **Heading Signal:** A 3.5rem by 2px mint rule under section titles and VitePress level-two headings.
- **Watermark:** Optional oversized content-driven symbols use a 4% blue mix on light fields; hero and footer use the pale full expression.
- **Footer:** The source MP4 sits under a navy-to-blue legibility veil, multi-column white copy, and a 4.5% expression watermark. Its source is attached only near view; playback pauses offscreen and in hidden tabs, while reduced-motion retains the static blue fallback without requesting the video.

### VitePress Adaptation

- **Native Structure:** Default navigation, sidebar, search, Markdown, custom blocks, features, and color-mode controls remain operational.
- **Mapping:** Forkbomb fonts, fields, rules, and interaction colors bind through VitePress custom properties.
- **Features:** White square feature panels use a blue start border and the Lateral Card shadow.
- **Markdown:** Barlow headings, mint-underlined links, square code blocks, and two-pixel mint rules after level-two headings.

## Do's and Don'ts

### Do:

- **Do** alternate navy/blue structural fields with generous white/cloud reading fields.
- **Do** use mint sparingly for rules, focus, selected state, primary action, selection, and the hero vector sequence.
- **Do** preserve square corners, one-pixel borders, and the long lateral shadow.
- **Do** use pale forkbomb expressions as low-alpha structural watermarks on large fields.
- **Do** retain the documented responsive, reduced-motion, focus-visible, and forced-colors behavior.
- **Do** extend VitePress DefaultTheme and keep standard navigation, sidebar, search, Markdown, and accessibility behavior intact.

### Don't:

- **Don't** use mint as a large background or as small text on white.
- **Don't** add rounded pills, generic card radii, glass panels, glows, gradient text, pastel substitutes, or dark-mode neon.
- **Don't** replace Barlow Semi Condensed and Public Sans with a monospace costume.
- **Don't** raise every container; reserve the lateral shadow for cards, selected details, and VitePress features.
- **Don't** increase watermark or particle opacity beyond the established alpha overlays.
- **Don't** copy VitePress internals or legacy WordPress and Elementor selectors into consuming projects.
