# Forkbomb Vite Theme

A reusable visual system for Vite and VitePress projects, extracted from the
Forkbomb website and packaged as semantic CSS, layout patterns, and a VitePress
DefaultTheme extension.

The visual source is Forkbomb: deep navy and royal blue fields, mint rules,
Barlow Semi Condensed headings, Public Sans body copy, square controls, pale
forkbomb-expression watermarks, and long lateral card shadows. The structure
follows Dyne's scaffold methodology: a small theme entry, replaceable starter
content, and an installer that preserves existing files unless forced.

## Plain Vite

```sh
npm install @forkbomb/vite-theme
```

```js
// src/main.js
import '@forkbomb/vite-theme/style.css'
```

Add `fb-theme` to the document body and compose with the public class vocabulary:

```html
<body class="fb-theme">
  <section class="fb-hero">
    <div class="fb-container fb-hero__content">
      <h1>Project statement</h1>
      <a class="fb-button fb-button--solid" href="/docs">Read the docs</a>
    </div>
  </section>
</body>
```

Import only tokens when an existing interface should keep its own components:

```css
@import '@forkbomb/vite-theme/tokens.css';
```

## VitePress

```sh
npm install @forkbomb/vite-theme vitepress vue
```

```ts
// .vitepress/theme/index.ts
export { default } from '@forkbomb/vite-theme/vitepress'
```

The package extends VitePress's default theme, injects the responsive Forkbomb
brand and footer, registers `<ForkbombSection>`, and maps the visual tokens onto
VitePress variables. Configure project-specific identity under
`themeConfig.forkbomb`:

```ts
import { defineConfigWithTheme } from 'vitepress'
import type { ForkbombThemeConfig } from '@forkbomb/vite-theme/vitepress'

export default defineConfigWithTheme<ForkbombThemeConfig>({
  title: 'Project name',
  themeConfig: {
    forkbomb: {
      brand: { name: 'Project name' },
      footer: {
        message: 'One factual project sentence.',
        links: [{ label: 'Source', href: 'https://github.com/example/project' }],
      },
    },
  },
})
```

## Scaffold installer

Use the copy-based workflow when a project should own a local VitePress setup:

```sh
./install.sh --dry-run /path/to/project/docs
./install.sh --install /path/to/project/docs
```

The installer keeps existing package, config, theme entry, and content files.
Pass `--force` only when those starter files should be replaced.

## Public contracts

- `@forkbomb/vite-theme` — CSS side effect plus a small class/color manifest
- `@forkbomb/vite-theme/style.css` — complete Vite theme
- `@forkbomb/vite-theme/tokens.css` — semantic custom properties only
- `@forkbomb/vite-theme/vitepress` — VitePress theme and config types
- [`THEME.md`](./THEME.md) — visual decisions and component vocabulary
- [`AGENTS.md`](./AGENTS.md) — concise implementation rules for coding agents

## Development

```sh
npm install
npm run dev
npm run build:docs
npm run check
```

The root Vite page is the plain-theme fixture. `examples/vitepress` exercises
the package through its public VitePress export.
