# Guide

Use normal VitePress Markdown. The Forkbomb theme styles headings, links, code,
navigation, sidebars, custom blocks, the hero, and the page footer.

## A Forkbomb section

The theme also registers a global `ForkbombSection` component:

```md
<ForkbombSection title="Protocol" tone="muted" watermark="{}">
  Markdown or Vue content belongs here.
</ForkbombSection>
```

::: tip Agent rule
Prefer semantic `--fb-*` tokens and existing `fb-` patterns before adding new CSS.
:::
