import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import ForkbombBrand from './components/ForkbombBrand.vue'
import ForkbombFooter from './components/ForkbombFooter.vue'
import ForkbombHeroAnimation from './components/ForkbombHeroAnimation.vue'
import ForkbombSection from './components/ForkbombSection.vue'
import './style.css'

export type {
  ForkbombBrandConfig,
  ForkbombFooterConfig,
  ForkbombThemeConfig,
} from './types'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(ForkbombBrand),
      'home-hero-image': () => h(ForkbombHeroAnimation),
      'layout-bottom': () => h(ForkbombFooter),
    }),
  enhanceApp({ app }) {
    app.component('ForkbombSection', ForkbombSection)
  },
} satisfies Theme
