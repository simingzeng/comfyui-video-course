import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "ComfyUI AI 视频极客教程",
    description: "从零到导演：AI 视频全流程极客教程与双机自动化工厂",
    base: '/comfyui-video-course/',
    ignoreDeadLinks: true,
    mermaid: {
      theme: 'dark'
    },
    themeConfig: {
      logo: '/hero-cover.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '阶段 0：基础与存储', link: '/01-basics/00-desktop-quickstart' },
        { text: '阶段 1：静态图第一帧', link: '/01-basics/04-flux-prompting' },
        { text: '阶段 2：第一次视频生成', link: '/02-video-basics/08-wan22-t2v' },
        { text: '阶段 3：视频可控生成', link: '/03-video-control/10-first-last-frames' },
        { text: '阶段 7：双机自动化', link: '/07-dual-machine-automation/23-comfyui-api-python-factory' }
      ],
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },
      outline: {
        label: '本页大纲',
        level: [2, 3]
      },
      sidebar: [
        {
          text: '阶段 0：真正理解 ComfyUI',
          collapsed: false,
          items: [
            { text: '00. 官网下载与安装启动', link: '/01-basics/00-desktop-quickstart' },
            { text: '01. 5大核心节点拆解', link: '/01-basics/01-core-nodes' },
            { text: '02. 核心参数与机械猫实战', link: '/01-basics/02-seed-and-samplers' }
          ]
        },
        {
          text: '阶段 1：静态图第一帧能力',
          collapsed: false,
          items: [
            { text: '04. FLUX.2 文生图与编辑', link: '/01-basics/04-flux-prompting' },
            { text: '05. 提示词工程与构图', link: '/01-basics/05-lora-consistency' },
            { text: '06. ControlNet 结构控制', link: '/01-basics/06-controlnet-structure' },
            { text: '07. 局部重绘与扩图精修', link: '/01-basics/07-inpaint-outpaint' }
          ]
        },
        {
          text: '阶段 2：第一次视频生成',
          collapsed: false,
          items: [
            { text: '08. Wan 2.2 文生视频', link: '/02-video-basics/08-wan22-t2v' },
            { text: '09. Wan 2.2 图生视频', link: '/02-video-basics/09-wan22-i2v' }
          ]
        },
        {
          text: '阶段 3：视频可控生成',
          collapsed: false,
          items: [
            { text: '10. 首尾帧控制 (FLF2V)', link: '/03-video-control/10-first-last-frames' },
            { text: '11. 运镜控制 (Fun Camera)', link: '/03-video-control/11-fun-camera-control' },
            { text: '12. 姿态控制 (Fun Control)', link: '/03-video-control/12-fun-control-structure' },
            { text: '13. 动作迁移 (Animate)', link: '/03-video-control/13-wan22-animate' }
          ]
        },
        {
          text: '阶段 4：人物一致性与短片实战',
          collapsed: false,
          items: [
            { text: '14. 多镜头人物一致性', link: '/04-consistency-film/14-multi-shot-consistency' },
            { text: '15. 30秒短片大作业实战', link: '/04-consistency-film/15-complete-30s-short-film' }
          ]
        },
        {
          text: '阶段 5：声音驱动与配音',
          collapsed: false,
          items: [
            { text: '16. AI 配音与音效准备', link: '/05-audio-driven/16-ai-voiceover-prep' },
            { text: '17. 音频驱动对白 (S2V)', link: '/05-audio-driven/17-wan22-s2v-audio-driven' },
            { text: '18. 口型同步与对白合成', link: '/05-audio-driven/18-lipsync-dialogue' }
          ]
        },
        {
          text: '阶段 6：影视后期流水线',
          collapsed: false,
          items: [
            { text: '19. SAM 2 视频智能抠像', link: '/06-post-processing/19-sam2-video-matting' },
            { text: '20. RIFE 60fps 智能插帧', link: '/06-post-processing/20-rife-frame-interpolation' },
            { text: '21. 视频超分与画质重塑', link: '/06-post-processing/21-video-upscale' },
            { text: '22. FFmpeg 自动化流水线', link: '/06-post-processing/22-ffmpeg-pipeline' }
          ]
        },
        {
          text: '阶段 7：双机自动化工厂',
          collapsed: false,
          items: [
            { text: '23. 双机无人值守自动化工厂', link: '/07-dual-machine-automation/23-comfyui-api-python-factory' }
          ]
        },
        {
          text: '阶段 8：3D 与空间拓展专题',
          collapsed: true,
          items: [
            { text: '24. Depth 深度与 3D 理解', link: '/08-advanced-3d/24-depth-3d-space' },
            { text: '25. 单图生成多视角环视', link: '/08-advanced-3d/25-multi-view-generation' },
            { text: '26. 3D Mesh 与资产导出', link: '/08-advanced-3d/26-image-to-3d-mesh' },
            { text: '27. Blender 混合空间流', link: '/08-advanced-3d/27-blender-comfyui-hybrid' }
          ]
        },
        {
          text: '附录：经典考古与横向对比',
          collapsed: true,
          items: [
            { text: '28. 经典考古：AnimateDiff', link: '/09-appendix/28-animatediff-archaeology' },
            { text: '29. 横向对比：Hunyuan 1.5', link: '/09-appendix/29-hunyuan-video-15-comparison' }
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
