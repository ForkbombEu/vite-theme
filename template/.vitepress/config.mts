import { defineConfigWithTheme } from 'vitepress'
import type { ForkbombThemeConfig } from '@forkbomb/vite-theme/vitepress'

export default defineConfigWithTheme<ForkbombThemeConfig>({
  title: 'Project documentation',
  description: 'Documentation powered by the Forkbomb Vite Theme',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Forkbomb', link: 'https://forkbomb.eu' },
    ],
    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'Guide', link: '/guide' },
    ],
    forkbomb: {
      brand: { name: 'Project name' },
      footer: {
        message: 'Replace this sentence with a concise project description.',
        links: [{ label: 'Forkbomb', href: 'https://forkbomb.eu' }],
      },
    },
  },
})
