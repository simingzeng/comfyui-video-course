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
      sidebar: [
        {
          text: '阶段 0：真正理解 ComfyUI',
          collapsed: false,
          items: [
            { text: '00. 官网下载、安装向导与启动全流程', link: '/01-basics/00-desktop-quickstart' },
            { text: '01. 5大核心节点白话拆解与画手隐喻', link: '/01-basics/01-core-nodes' },
            { text: '02. 参数透视：Seed、Steps、CFG 与机械猫大片实战', link: '/01-basics/02-seed-and-samplers' }
          ]
        },
        {
          text: '阶段 1：静态图——建立视频的第一帧能力',
          collapsed: false,
          items: [
            { text: '04. FLUX.2：文生图、图像编辑与多参考图', link: '/01-basics/04-flux-prompting' },
            { text: '05. 提示词工程、构图、镜头语言与画幅', link: '/01-basics/05-lora-consistency' },
            { text: '06. ControlNet 结构控制：从随机走向可控', link: '/01-basics/06-controlnet-structure' },
            { text: '07. 局部重绘与扩展：Inpaint & Outpaint 精修', link: '/01-basics/07-inpaint-outpaint' }
          ]
        },
        {
          text: '阶段 2：第一次真正生成 AI 视频',
          collapsed: false,
          items: [
            { text: '08. 你的第一条 AI 视频：文生视频 (Wan 2.2 5B)', link: '/02-video-basics/08-wan22-t2v' },
            { text: '09. 让照片真正动起来：图生视频完整工作流 (Wan 2.2 I2V)', link: '/02-video-basics/09-wan22-i2v' }
          ]
        },
        {
          text: '阶段 3：让 AI 听你的——视频可控生成',
          collapsed: false,
          items: [
            { text: '10. 首尾帧控制：让镜头精准起止 (FLF2V)', link: '/03-video-control/10-first-last-frames' },
            { text: '11. 镜头运镜控制：推拉摇移与升降 (Fun Camera)', link: '/03-video-control/11-fun-camera-control' },
            { text: '12. 姿态与结构控制：Depth / Pose / 轨迹 (Fun Control)', link: '/03-video-control/12-fun-control-structure' },
            { text: '13. 人物动作迁移：让角色跟着真人表演 (Wan 2.2 Animate)', link: '/03-video-control/13-wan22-animate' }
          ]
        },
        {
          text: '阶段 4：人物一致性与短片实战',
          collapsed: false,
          items: [
            { text: '14. 多镜头人物一致性控制与角色锁定', link: '/04-consistency-film/14-multi-shot-consistency' },
            { text: '15. 大作业实战：从分镜表到 30 秒完整短片制作', link: '/04-consistency-film/15-complete-30s-short-film' }
          ]
        },
        {
          text: '阶段 5：声音驱动——让人物说话',
          collapsed: false,
          items: [
            { text: '16. AI 配音与音效素材准备', link: '/05-audio-driven/16-ai-voiceover-prep' },
            { text: '17. 音频驱动人物表演：说话与对白生成 (Wan 2.2 S2V)', link: '/05-audio-driven/17-wan22-s2v-audio-driven' },
            { text: '18. 口型同步与影视级对白合成', link: '/05-audio-driven/18-lipsync-dialogue' }
          ]
        },
        {
          text: '阶段 6：影视后期流水线',
          collapsed: false,
          items: [
            { text: '19. SAM 2 视频智能抠像与主体分离', link: '/06-post-processing/19-sam2-video-matting' },
            { text: '20. RIFE 智能插帧：24fps 提升至 60fps 流畅丝滑', link: '/06-post-processing/20-rife-frame-interpolation' },
            { text: '21. 视频超分重塑：720P 跃升 4K 电影画质', link: '/06-post-processing/21-video-upscale' },
            { text: '22. FFmpeg 极客流水线：转码、抽帧与音视频合成', link: '/06-post-processing/22-ffmpeg-pipeline' }
          ]
        },
        {
          text: '阶段 7：双机自动化流水线',
          collapsed: false,
          items: [
            { text: '23. ComfyUI API + Python：打造双机无人值守视频工厂', link: '/07-dual-machine-automation/23-comfyui-api-python-factory' }
          ]
        },
        {
          text: '阶段 8：高级专题——3D 与空间拓展',
          collapsed: true,
          items: [
            { text: '24. Depth 深度图与二维画面的 3D 空间理解', link: '/08-advanced-3d/24-depth-3d-space' },
            { text: '25. 单图生成多视角连续环视', link: '/08-advanced-3d/25-multi-view-generation' },
            { text: '26. 单图生成 3D Mesh 网格与资产导出', link: '/08-advanced-3d/26-image-to-3d-mesh' },
            { text: '27. Blender + ComfyUI 混合空间工作流', link: '/08-advanced-3d/27-blender-comfyui-hybrid' }
          ]
        },
        {
          text: '附录：经典考古与横向体验',
          collapsed: true,
          items: [
            { text: '28. 经典 AI 视频技术考古：AnimateDiff 进化史', link: '/09-appendix/28-animatediff-archaeology' },
            { text: '29. 影视级大模型横向体验：HunyuanVideo 1.5 实测', link: '/09-appendix/29-hunyuan-video-15-comparison' }
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
