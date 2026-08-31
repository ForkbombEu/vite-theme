import type { DefaultTheme } from 'vitepress'

export interface ForkbombBrandConfig {
  name?: string
  expression?: string
  home?: string
}

export interface ForkbombFooterConfig {
  message?: string
  copyright?: string
  links?: Array<{ label: string; href: string }>
}

export interface ForkbombThemeConfig extends DefaultTheme.Config {
  forkbomb?: {
    brand?: ForkbombBrandConfig
    footer?: ForkbombFooterConfig
  }
}
