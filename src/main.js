import './theme/index.css'

document.querySelector('#year').textContent = String(new Date().getFullYear())

for (const item of document.querySelectorAll('.fb-accordion details')) {
  item.addEventListener('toggle', () => {
    if (!item.open) return

    for (const sibling of item.parentElement.querySelectorAll('details[open]')) {
      if (sibling !== item) sibling.open = false
    }
  })
}
