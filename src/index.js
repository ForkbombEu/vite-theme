import './theme/index.css'

export {
  FORKBOMB_FOOTER_VIDEO_URL,
  mountFooterVideo,
  mountFooterVideos,
} from './theme/footer-video.js'

export const forkbombTheme = Object.freeze({
  classes: {
    theme: 'fb-theme',
    container: 'fb-container',
    nav: 'fb-nav',
    brand: 'fb-brand',
    hero: 'fb-hero',
    section: 'fb-section',
    button: 'fb-button',
    card: 'fb-card',
    accordion: 'fb-accordion',
    footer: 'fb-footer',
  },
  colors: {
    navy: '#050d30',
    blue: '#0f237c',
    mint: '#2dd8a3',
    cloud: '#f7f7f7',
    white: '#ffffff',
  },
})
