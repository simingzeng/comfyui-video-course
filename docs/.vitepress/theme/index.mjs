import DefaultTheme from 'vitepress/theme'
import './custom.css'

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
    // 限制拖拽宽度在 240px ~ 600px 之间
    const newWidth = Math.min(Math.max(e.clientX, 240), 600)
    document.documentElement.style.setProperty('--vp-sidebar-width', `${newWidth}px`)
  })

  window.addEventListener('mouseup', () => {
    if (!isDragging) return
    isDragging = false
    resizer.classList.remove('is-resizing')
    document.body.classList.remove('is-resizing-sidebar')
    
    // 保存到 LocalStorage
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
      window.addEventListener('DOMContentLoaded', initSidebarResize)
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(initSidebarResize, 50)
      }
      router.onAfterRouteChanged = () => {
        setTimeout(initSidebarResize, 100)
      }
    }
  }
}
