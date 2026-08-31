# Agent guide

This repository is the source for `@forkbomb/vite-theme`.

## Choose the narrowest entry

- Plain Vite page: import `@forkbomb/vite-theme/style.css` once from the app entry.
- Existing design system needing only values: import `@forkbomb/vite-theme/tokens.css`.
- VitePress: export the default theme from `@forkbomb/vite-theme/vitepress`.
- Local docs scaffold: run `./install.sh --dry-run <docs-dir>` before installation.

## Implementation order

1. Read `THEME.md`.
2. Use existing `--fb-*` tokens and `fb-` classes.
3. Override semantic tokens after the theme import when project identity requires it.
4. Add a new reusable pattern only when existing primitives cannot express the content.
5. Verify both the root Vite build and `examples/vitepress` after theme changes.

## Visual invariants

- Fonts: Barlow Semi Condensed for display; Public Sans for reading.
- Colors: navy `#050d30`, blue `#0f237c`, mint `#2dd8a3`, white, cloud `#f7f7f7`.
- Corners: square. Borders: one pixel. Mint: signal, not page fill.
- Depth: the long lateral soft shadow; no generic card shadow or glow.
- Motif: pale forkbomb expression on blue/navy fields and large white sections.
- Motion: the right-hand hero Lottie is the only authored sequence; keep its lazy,
  play-once, visibility-aware, and reduced-motion behavior.

## VitePress rules

Extend the packaged theme instead of copying its internal Vue components. Put
project identity in `themeConfig.forkbomb`. Keep standard VitePress nav, sidebar,
search, Markdown, and accessibility behavior intact.

## Verification

Run `npm run check`. For visual changes, inspect the root Vite fixture and the
VitePress fixture at desktop and mobile widths. Do not report success from a CSS
lint or unit test alone; both production builds must pass.
