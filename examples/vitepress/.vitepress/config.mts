import { defineConfigWithTheme } from 'vitepress'
import type { ForkbombThemeConfig } from '@forkbomb/vite-theme/vitepress'

export default defineConfigWithTheme<ForkbombThemeConfig>({
  title: 'Cipherdocs',
  description: 'Example documentation using the Forkbomb theme',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Theme', link: 'https://github.com/ForkbombEu/webpage-test' },
    ],
    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'Guide', link: '/guide' },
    ],
    forkbomb: {
      brand: { name: 'Cipherdocs' },
      footer: {
        message: 'A fixture proving the packaged theme works in VitePress.',
        links: [
          { label: 'Guide', href: '/guide' },
          { label: 'Theme source', href: 'https://github.com/ForkbombEu/webpage-test' },
        ],
      },
    },
  },
})
