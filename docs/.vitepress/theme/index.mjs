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

function initCollapsibleTOC() {
  if (typeof window === 'undefined') return

  // 1. 读取并应用历史保存的折叠状态
  try {
    const isCollapsed = localStorage.getItem('comfy_toc_collapsed') === 'true'
    if (isCollapsed) {
      document.body.classList.add('toc-collapsed')
    } else {
      document.body.classList.remove('toc-collapsed')
    }
  } catch (e) {}

  // 2. 注入浮动唤出胶囊按钮
  let capsule = document.querySelector('.toc-float-capsule')
  if (!capsule) {
    capsule = document.createElement('div')
    capsule.className = 'toc-float-capsule'
    capsule.innerHTML = '<span>📑</span><span>展开大纲</span>'
    capsule.title = '点击重新展开本页大纲'
    document.body.appendChild(capsule)

    capsule.addEventListener('click', () => {
      document.body.classList.remove('toc-collapsed')
      try {
        localStorage.setItem('comfy_toc_collapsed', 'false')
      } catch (e) {}
    })
  }

  // 3. 在右侧大纲容器中注入【收起 ➔】按钮
  setTimeout(() => {
    const aside = document.querySelector('.VPDocAsideOutline .content') || document.querySelector('.VPDocAside')
    if (!aside) return

    if (aside.querySelector('.toc-collapse-btn')) return

    const btn = document.createElement('button')
    btn.className = 'toc-collapse-btn'
    btn.innerHTML = '<span>收起大纲</span> <span>➔</span>'
    btn.title = '收起右侧大纲，释放全部正文空间'
    aside.insertBefore(btn, aside.firstChild)

    btn.addEventListener('click', () => {
      document.body.classList.add('toc-collapsed')
      try {
        localStorage.setItem('comfy_toc_collapsed', 'true')
      } catch (e) {}
    })
  }, 100)
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      const setup = () => {
        initSidebarResize()
        initMediumZoom()
        initCollapsibleTOC()
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

