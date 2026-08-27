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
        { text: '阶段 1：静态图第一帧', link: '/01-basics/02-flux-prompting' },
        { text: '阶段 2：第一次视频生成', link: '/02-video-basics/06-wan22-t2v' },
        { text: '阶段 3：视频可控生成', link: '/03-video-control/08-first-last-frames' },
        { text: '阶段 7：双机自动化', link: '/07-dual-machine-automation/21-comfyui-api-python-factory' }
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
            { text: '01. 5大核心节点与参数实战', link: '/01-basics/01-core-nodes' }
          ]
        },
        {
          text: '阶段 1：静态图第一帧能力',
          collapsed: false,
          items: [
            { text: '02. FLUX.2 文生图与编辑', link: '/01-basics/02-flux-prompting' },
            { text: '03. 提示词工程与构图', link: '/01-basics/03-prompting-composition' },
            { text: '04. ControlNet 结构控制', link: '/01-basics/04-controlnet-structure' },
            { text: '05. 局部重绘与扩图精修', link: '/01-basics/05-inpaint-outpaint' }
          ]
        },
        {
          text: '阶段 2：第一次视频生成',
          collapsed: false,
          items: [
            { text: '06. Wan 2.2 文生视频', link: '/02-video-basics/06-wan22-t2v' },
            { text: '07. Wan 2.2 图生视频', link: '/02-video-basics/07-wan22-i2v' }
          ]
        },
        {
          text: '阶段 3：视频可控生成',
          collapsed: false,
          items: [
            { text: '08. 首尾帧控制 (FLF2V)', link: '/03-video-control/08-first-last-frames' },
            { text: '09. 运镜控制 (Fun Camera)', link: '/03-video-control/09-fun-camera-control' },
            { text: '10. 姿态控制 (Fun Control)', link: '/03-video-control/10-fun-control-structure' },
            { text: '11. 动作迁移 (Animate)', link: '/03-video-control/11-wan22-animate' }
          ]
        },
        {
          text: '阶段 4：人物一致性与短片实战',
          collapsed: false,
          items: [
            { text: '12. 多镜头人物一致性', link: '/04-consistency-film/12-multi-shot-consistency' },
            { text: '13. 30秒短片大作业实战', link: '/04-consistency-film/13-complete-30s-short-film' }
          ]
        },
        {
          text: '阶段 5：声音驱动与配音',
          collapsed: false,
          items: [
            { text: '14. AI 配音与音效准备', link: '/05-audio-driven/14-ai-voiceover-prep' },
            { text: '15. 音频驱动对白 (S2V)', link: '/05-audio-driven/15-wan22-s2v-audio-driven' },
            { text: '16. 口型同步与对白合成', link: '/05-audio-driven/16-lipsync-dialogue' }
          ]
        },
        {
          text: '阶段 6：影视后期流水线',
          collapsed: false,
          items: [
            { text: '17. SAM 2 视频智能抠像', link: '/06-post-processing/17-sam2-video-matting' },
            { text: '18. RIFE 60fps 智能插帧', link: '/06-post-processing/18-rife-frame-interpolation' },
            { text: '19. 视频超分与画质重塑', link: '/06-post-processing/19-video-upscale' },
            { text: '20. FFmpeg 自动化流水线', link: '/06-post-processing/20-ffmpeg-pipeline' }
          ]
        },
        {
          text: '阶段 7：双机自动化工厂',
          collapsed: false,
          items: [
            { text: '21. 双机无人值守工厂', link: '/07-dual-machine-automation/21-comfyui-api-python-factory' }
          ]
        },
        {
          text: '阶段 8：3D 与高级空间玩法',
          collapsed: false,
          items: [
            { text: '22. Depth 深度图与空间', link: '/08-advanced-3d/22-depth-3d-space' },
            { text: '23. 多视角生成 (MV)', link: '/08-advanced-3d/23-multi-view-generation' },
            { text: '24. 图生 3D Mesh 资产', link: '/08-advanced-3d/24-image-to-3d-mesh' },
            { text: '25. Blender 协同管线', link: '/08-advanced-3d/25-blender-comfyui-hybrid' }
          ]
        },
        {
          text: '附录：经典考古与横向对比',
          collapsed: true,
          items: [
            { text: '26. AnimateDiff 考古', link: '/09-appendix/26-animatediff-archaeology' },
            { text: '27. 混元 1.5 横向对比', link: '/09-appendix/27-hunyuan-video-15-comparison' }
          ]
        }
      ]
    }
  })
)
