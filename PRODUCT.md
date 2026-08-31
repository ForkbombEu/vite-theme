# Product

<!-- impeccable:product-schema 1 -->

## Platform

Reusable web theme package and reference site.

## Stack

Vite 8 for the plain-site fixture and GitHub Pages build; VitePress 1.6 with Vue
for the documentation adapter and fixture. The package ships framework-light CSS,
typed VitePress integration, and a defensive copy-based installer.

## Users

- Coding agents assembling consistent Vite or VitePress sites for other projects.
- Maintainers who need a Forkbomb-branded starting point without inheriting a CMS.
- Project teams that want tokens only, complete components, or a ready VitePress scaffold.

## Product Purpose

Turn the visual language of Forkbomb's public site into a narrow, documented,
reusable theme contract that works in plain Vite and extends VitePress's native
theme behavior.

## Capabilities and Constraints

- Export complete CSS, tokens-only CSS, a small JavaScript manifest, and a
  VitePress DefaultTheme extension.
- Reuse the source footer video through a visibility-aware helper that avoids
  eager transfer, offscreen playback, and motion for reduced-motion users.
- Provide stable `fb-*` composition classes and semantic `--fb-*` custom properties.
- Include a copy-based VitePress scaffold that preserves consumer files unless
  `--force` is explicit.
- Keep VitePress navigation, search, accessibility, and document behavior native.
- Deploy the root Vite showcase through the existing GitHub Pages action.
- Reproduce visual choices, not Forkbomb page copy, WordPress markup, or Elementor selectors.

## Brand Commitments

The canonical source is Forkbomb's public site: navy `#050d30`, blue `#0f237c`,
mint `#2dd8a3`, Barlow Semi Condensed display type, Public Sans body type, square
geometry, thin rules, lateral shadows, and oversized forkbomb-expression watermarks.
The theme must not drift into generic neon-dark UI, pill controls, glass panels,
or monospace-as-brand styling.

## Structural Method

The scaffold methodology follows the accessible `dyne/dyne-vitepress` pattern:
a small theme entry, replaceable starter content, and an installer that avoids
overwriting existing files by default. No source-faithful `dyne/vite-theme`
repository was available during implementation, so its contents were not inferred.

## Evidence on Hand

The public Forkbomb desktop/mobile site and its delivered styles are the visual
reference. The repository does not claim Forkbomb page content, customer proof,
or product data; fixtures use clearly labeled example projects and factual theme copy.

## Product Principles

- Make the visual contract explicit enough that an agent does not need to guess.
- Prefer semantic tokens and native platform behavior over copied implementation detail.
- Let consumers adopt tokens, components, or the full VitePress adapter independently.
- Preserve project-owned files and make destructive replacement opt-in.
- Verify both plain Vite and VitePress output at desktop and mobile widths.
