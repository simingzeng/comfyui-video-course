import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "ComfyUI AI 视频极客教程",
    description: "从零手把手掌握 ComfyUI 视频生成与双机自动化挂机",
    base: '/comfyui-video-course/',
    mermaid: {
      theme: 'dark'
    },
    themeConfig: {
      logo: '/hero-cover.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '第一课：基础节点', link: '/01-basics/01-core-nodes' }
      ],
      sidebar: [
        {
          text: '阶段 0：做图基础与关键帧',
          items: [
            { text: '01. 5大核心节点解析', link: '/01-basics/01-core-nodes' }
          ]
        }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/simingzeng/comfyui-video-course' }
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2026-present simingzeng'
      }
    }
  })
)
