# 🎬 ComfyUI AI 视频全流程极客教程

> **Build in Public**：从零到导演——打造影视级 AI 视频生成流水线与 RTX 5080 + 4070 双机自动化工厂。

🌐 **官方在线教程网站**：[https://simingzeng.github.io/comfyui-video-course/](https://simingzeng.github.io/comfyui-video-course/)

---

## 🗺️ 8 大阶段全景能力规划

### 阶段 0：真正理解 ComfyUI
- [x] [00. 官网下载、安装向导与启动全流程](docs/01-basics/00-desktop-quickstart.md)
- [x] [01. 5大核心节点白话拆解与画手隐喻](docs/01-basics/01-core-nodes.md)
- [x] [02. 参数透视：Seed、Steps、CFG 与采样器本质](docs/01-basics/02-seed-and-samplers.md)
- [x] [03. 存储与路径：Shared models、实例与文件落地点](docs/01-basics/03-storage-and-paths.md)

### 阶段 1：静态图——建立视频的第一帧能力
- [x] [04. FLUX.2：文生图、图像编辑与多参考图](docs/01-basics/04-flux-prompting.md)
- [x] [05. 提示词工程、构图、镜头语言与画幅](docs/01-basics/05-lora-consistency.md)
- [x] [06. ControlNet 结构控制：从随机走向可控](docs/01-basics/06-controlnet-structure.md)
- [x] [07. 局部重绘与扩展：Inpaint & Outpaint 精修](docs/01-basics/07-inpaint-outpaint.md)

### 阶段 2：第一次真正生成 AI 视频
- [x] [08. 你的第一条 AI 视频：文生视频 (Wan 2.2 5B)](docs/02-video-basics/08-wan22-t2v.md)
- [x] [09. 让照片真正动起来：图生视频完整工作流 (Wan 2.2 I2V)](docs/02-video-basics/09-wan22-i2v.md)

### 阶段 3：让 AI 听你的——视频可控生成
- [x] [10. 首尾帧控制：让镜头精准起止 (FLF2V)](docs/03-video-control/10-first-last-frames.md)
- [x] [11. 镜头运镜控制：推拉摇移与升降 (Fun Camera)](docs/03-video-control/11-fun-camera-control.md)
- [x] [12. 姿态与结构控制：Depth / Pose / 轨迹 (Fun Control)](docs/03-video-control/12-fun-control-structure.md)
- [x] [13. 人物动作迁移：让角色跟着真人表演 (Wan 2.2 Animate)](docs/03-video-control/13-wan22-animate.md)

### 阶段 4：人物一致性与短片实战
- [x] [14. 多镜头人物一致性控制与角色锁定](docs/04-consistency-film/14-multi-shot-consistency.md)
- [x] [15. 大作业实战：从分镜表到 30 秒完整短片制作](docs/04-consistency-film/15-complete-30s-short-film.md)

### 阶段 5：声音驱动——让人物说话
- [x] [16. AI 配音与音效素材准备](docs/05-audio-driven/16-ai-voiceover-prep.md)
- [x] [17. 音频驱动人物表演：说话与对白生成 (Wan 2.2 S2V)](docs/05-audio-driven/17-wan22-s2v-audio-driven.md)
- [x] [18. 口型同步与影视级对白合成](docs/05-audio-driven/18-lipsync-dialogue.md)

### 阶段 6：影视后期流水线
- [x] [19. SAM 2 视频智能抠像与主体分离](docs/06-post-processing/19-sam2-video-matting.md)
- [x] [20. RIFE 智能插帧：24fps 提升至 60fps 流畅丝滑](docs/06-post-processing/20-rife-frame-interpolation.md)
- [x] [21. 视频超分重塑：720P 跃升 4K 电影画质](docs/06-post-processing/21-video-upscale.md)
- [x] [22. FFmpeg 极客流水线：转码、抽帧与音视频合成](docs/06-post-processing/22-ffmpeg-pipeline.md)

### 阶段 7：双机自动化流水线
- [x] [23. ComfyUI API + Python：打造双机无人值守视频工厂](docs/07-dual-machine-automation/23-comfyui-api-python-factory.md)

### 阶段 8：高级专题——3D 与空间拓展
- [x] [24. Depth 深度图与二维画面的 3D 空间理解](docs/08-advanced-3d/24-depth-3d-space.md)
- [x] [25. 单图生成多视角连续环视](docs/08-advanced-3d/25-multi-view-generation.md)
- [x] [26. 单图生成 3D Mesh 网格与资产导出](docs/08-advanced-3d/26-image-to-3d-mesh.md)
- [x] [27. Blender + ComfyUI 混合空间工作流](docs/08-advanced-3d/27-blender-comfyui-hybrid.md)

### 附录：经典考古与横向体验
- [x] [28. 经典 AI 视频技术考古：AnimateDiff 进化史](docs/09-appendix/28-animatediff-archaeology.md)
- [x] [29. 影视级大模型横向体验：HunyuanVideo 1.5 实测](docs/09-appendix/29-hunyuan-video-15-comparison.md)

---

## 🖥️ 双机硬件实测架构 (Dual-GPU Setup)

```text
【家用主力机 RTX 5080】 (Ryzen 7 9800X3D + 48GB 内存)
   │ 
   │  🥇 静态主力：FLUX.2 / Z-Image-Turbo (6B 极速写实)
   │  🥈 视频主力：Wan 2.2 (5B / 14B / Fun Camera / Animate)
   ▼
【网络共享目录 / UU 远程协同】
   │ 
   ▼
【办公挂机机 RTX 4070 12GB】 (i7-14700KF + 16GB DDR5 + 64GB Pagefile)
   ├─► SAM 2 智能视频抠像
   ├─► RIFE 24➔60fps 丝滑插帧
   ├─► 4K 影视级超分辨率重塑
   └─► FFmpeg 自动化混流导出成片！
```
