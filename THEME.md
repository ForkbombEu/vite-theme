# Forkbomb theme contract

This is the operational visual contract for people and coding agents. It records
the reusable choices observed on the Forkbomb product site without carrying over
WordPress, Elementor selectors, or page content.

## Visual source

The system alternates readable white and cloud content fields with dense navy or
royal-blue bands. Mint is an action and state signal, never a large background.
Large pale forkbomb expressions work as structural watermarks. Rules stay thin,
controls stay square, and elevated white content uses a long horizontal soft
shadow rather than rounded cards. The source white-and-mint vector sequence is
the hero's single authored animation.

## Tokens

| Role | Token | Value |
| --- | --- | --- |
| Deep field | `--fb-color-navy` | `#050d30` |
| Structural field | `--fb-color-blue` | `#0f237c` |
| Signal | `--fb-color-mint` | `#2dd8a3` |
| Reading field | `--fb-color-white` | `#ffffff` |
| Alternate field | `--fb-color-cloud` | `#f7f7f7` |
| Display type | `--fb-font-display` | Barlow Semi Condensed |
| Body type | `--fb-font-body` | Public Sans |
| Content width | `--fb-container` | `75rem` |
| Lateral elevation | `--fb-shadow-card` | `5rem 0 4.375rem -1.25rem rgba(0,0,0,.14)` |

All public tokens live in `src/theme/tokens.css`. Override semantic tokens after
the theme import; do not fork component files for simple palette or spacing changes.

## Component vocabulary

- `fb-theme`: root scope and token host.
- `fb-container`: centered maximum-width content with fluid gutters.
- `fb-nav`: royal-blue brand bar; pair with `fb-nav__inner` and `fb-nav__links`.
- `fb-brand`: two-line name plus forkbomb expression.
- `fb-hero`: two-column navy identity field with copy, watermark, particles, and animation.
- `fb-hero__animation`: source-faithful Lottie mark placed right of the hero copy.
- `fb-section`: standard reading band; add `--muted`, `--dark`, or `--watermark`.
- `fb-section__intro`: title/copy split that stacks responsively.
- `fb-section__title`: Barlow heading with a short mint rule.
- `fb-button`: square outline action; add `--solid` or `--on-dark`.
- `fb-card`: white elevated content with the source-faithful lateral shadow.
- `fb-accordion`: native `<details>` pattern with mint selected state.
- `fb-field`: square text field with blue border and mint focus ring.
- `fb-token-row`: palette/reference strip.
- `fb-footer`: static royal-blue multi-column close with an expression watermark.

## Typography

Use Barlow Semi Condensed for headings, navigation, compact labels, and brand
moments. Use Public Sans for paragraphs, forms, and long documentation. Keep
headings concise enough to benefit from the condensed face. Body copy should
remain between 45 and 72 characters per line where possible.

## Responsive method

Patterns respond to their container when practical and use the source site's
mobile boundary near 48rem for navigation and major compositions. Hero and
footer fields keep their color and identity on small screens; layout compresses,
not the visual language. The hero animation stacks below its copy; reduced-motion
users receive its completed static frame.

## Accessibility

- Mint on white is decorative or large-text only; interactive text remains blue
  or navy unless mint is paired with navy.
- Every custom focus state uses a two-pixel mint outline with offset.
- Native `<details>` retains keyboard and assistive-technology behavior.
- Forced-colors mode removes ghost watermarks and replaces shadows with borders.
- The hero animation starts only in view, pauses offscreen or while the page is
  hidden, and becomes a static completed frame under reduced motion.

## Do / don't

Do alternate navy/blue fields with generous white reading fields. Do use mint
sparingly for rules, focus, selected state, and primary actions. Do preserve
square corners and thin borders.

Do not add rounded pill controls, glass panels, gradient text, pastel substitutes,
or generic dark-mode neon. Do not replace the two font families with a monospace
costume. Do not copy Elementor selectors into consuming projects.
