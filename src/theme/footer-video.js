export const FORKBOMB_FOOTER_VIDEO_URL =
  'https://forkbomb.solutions/wp-content/uploads/2023/07/forkbomb_bg_new_opt.mp4'

export function mountFooterVideo(video) {
  if (!video || video.dataset.fbFooterVideoMounted === 'true') return () => {}

  video.dataset.fbFooterVideoMounted = 'true'

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const source = video.dataset.src || FORKBOMB_FOOTER_VIDEO_URL
  let visible = false
  let sourceAttached = false

  const attachSource = () => {
    if (sourceAttached || reducedMotion.matches) return

    sourceAttached = true
    video.preload = 'metadata'
    video.src = source
    video.load()
  }

  const syncPlayback = () => {
    if (reducedMotion.matches || !visible || document.hidden) {
      video.pause()
      return
    }

    attachSource()
    void video.play().catch(() => {})
  }

  const prefetchObserver = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return

    attachSource()
    prefetchObserver.disconnect()
  }, { rootMargin: '320px 0px' })

  const playbackObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting && entry.intersectionRatio > 0
    syncPlayback()
  }, { threshold: [0, 0.1] })

  const handleMotionChange = () => {
    syncPlayback()
  }

  reducedMotion.addEventListener('change', handleMotionChange)
  document.addEventListener('visibilitychange', syncPlayback)
  prefetchObserver.observe(video)
  playbackObserver.observe(video)

  return () => {
    prefetchObserver.disconnect()
    playbackObserver.disconnect()
    reducedMotion.removeEventListener('change', handleMotionChange)
    document.removeEventListener('visibilitychange', syncPlayback)
    video.pause()
    delete video.dataset.fbFooterVideoMounted
  }
}

export function mountFooterVideos(root = document) {
  const cleanups = [...root.querySelectorAll('[data-fb-footer-video]')]
    .map(mountFooterVideo)

  return () => cleanups.forEach((cleanup) => cleanup())
}
