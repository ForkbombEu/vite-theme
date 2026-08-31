# Guide

The fixture consumes the package exactly as another VitePress project would.

## Installation

```sh
npm install @forkbomb/vite-theme vitepress vue
```

## Theme entry

```ts
export { default } from '@forkbomb/vite-theme/vitepress'
```

::: tip Stable contract
Override semantic `--fb-*` custom properties. Avoid copying internal VitePress selectors.
:::

## Content patterns

- Use Barlow Semi Condensed headings for concise hierarchy.
- Let Public Sans carry longer documentation.
- Reserve mint for action, state, and short rules.
- Keep controls square and borders thin.
