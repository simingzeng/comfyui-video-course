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
        { text: '00课：下载安装与大厅', link: '/01-basics/00-desktop-quickstart' },
        { text: '01课：5大核心节点', link: '/01-basics/01-core-nodes' }
      ],
      sidebar: [
        {
          text: '阶段 0：软件安装与界面基础',
          items: [
            { text: '00. 官网下载、安装向导与启动全流程', link: '/01-basics/00-desktop-quickstart' },
            { text: '01. 5大核心节点白话拆解', link: '/01-basics/01-core-nodes' }
          ]
        },
        {
          text: '阶段 1：静态做图与关键帧控制',
          items: [
            { text: '02. FLUX.1 原生大模型与提示词工程', link: '#' }
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
