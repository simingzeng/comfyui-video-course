import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import './custom.css'

let zoomInstance = null

function initMediumZoom() {
  if (typeof window === 'undefined') return
  
  // 延迟确保 DOM 渲染完成
  setTimeout(() => {
    const images = document.querySelectorAll('.vp-doc img')
    if (images.length === 0) return

    if (zoomInstance) {
      zoomInstance.detach()
    }

    zoomInstance = mediumZoom(images, {
      background: 'rgba(10, 15, 30, 0.92)',
      margin: 24
    })
  }, 100)
}

function initSidebarResize() {
  if (typeof window === 'undefined') return

  // 1. 读取并应用历史保存的宽度
  try {
    const savedWidth = localStorage.getItem('comfy_sidebar_width')
    if (savedWidth && Number(savedWidth) >= 200 && Number(savedWidth) <= 700) {
      document.documentElement.style.setProperty('--vp-sidebar-width', `${savedWidth}px`)
    }
  } catch (e) {}

  // 2. 避免重复添加拖拽把手
  if (document.querySelector('.sidebar-resizer')) return

  const resizer = document.createElement('div')
  resizer.className = 'sidebar-resizer'
  resizer.title = '左右按住拖拽可自由调整侧边栏宽度'
  document.body.appendChild(resizer)

  let isDragging = false

  resizer.addEventListener('mousedown', (e) => {
    isDragging = true
    resizer.classList.add('is-resizing')
    document.body.classList.add('is-resizing-sidebar')
    e.preventDefault()
  })

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return
    const newWidth = Math.min(Math.max(e.clientX, 240), 600)
    document.documentElement.style.setProperty('--vp-sidebar-width', `${newWidth}px`)
  })

  window.addEventListener('mouseup', () => {
    if (!isDragging) return
    isDragging = false
    resizer.classList.remove('is-resizing')
    document.body.classList.remove('is-resizing-sidebar')
    
    try {
      const currentWidth = getComputedStyle(document.documentElement)
        .getPropertyValue('--vp-sidebar-width')
        .trim()
        .replace('px', '')
      if (currentWidth) {
        localStorage.setItem('comfy_sidebar_width', currentWidth)
      }
    } catch (e) {}
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      const setup = () => {
        initSidebarResize()
        initMediumZoom()
      }

      window.addEventListener('DOMContentLoaded', setup)
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(setup, 50)
      }

      router.onAfterRouteChanged = () => {
        setTimeout(setup, 120)
      }
    }
  }
}
