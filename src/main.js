import './theme/index.css'
import { mountFooterVideos } from './theme/footer-video.js'
import { mountHeroAnimations } from './theme/hero-animation.js'

document.querySelector('#year').textContent = String(new Date().getFullYear())
mountHeroAnimations()
mountFooterVideos()

for (const item of document.querySelectorAll('.fb-accordion details')) {
  item.addEventListener('toggle', () => {
    if (!item.open) return

    for (const sibling of item.parentElement.querySelectorAll('details[open]')) {
      if (sibling !== item) sibling.open = false
    }
  })
}
