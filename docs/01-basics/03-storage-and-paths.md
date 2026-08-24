# 03. 存储与路径：Shared models、实例与文件落地点

> **新手最常崩溃的硬核避坑课！** 为什么删除实例后模型没丢？一键下载的模型到底落在哪里？本节彻底讲透 ComfyUI Desktop 的存储架构。

---

[⬅️ 上一课：02. 参数透视：Seed、Steps、CFG 与采样器本质](./02-seed-and-samplers.md) | [👉 下一课：04. FLUX.2：文生图、图像编辑与多参考图](./04-flux-prompting.md)

---

## 📂 核心存储架构总览

在 ComfyUI Desktop 官方桌面版中，存储被清晰划分为两大阵营：

```text
D:\ (你的大容量分区)
├── ComfyUI-Shared/              <-- 1. 全局共享大本营（界面下载的所有几十GB大模型全在这里）
│   └── models/
│       ├── text_encoders/       <-- 语言模型 (如 qwen_3_4b)
│       ├── diffusion_models/    <-- 扩散主模型 (如 z_image_turbo / flux-2-klein)
│       └── vae/                 <-- 解码器 (如 ae.safetensors)
│
└── ComfyUI-Installs/MainEnv/ComfyUI/   <-- 2. 你的实例根目录
    ├── custom_nodes/            <-- 插件安装区（所有第三方扩展节点代码）
    └── output/                  <-- 成果产出区（每次点击运行生成的图片和视频）
```

---

## ❓ 常见困惑权威解答

1. **为什么在桌面大厅删除了实例，硬盘空间没有释放？**
   - 官方桌面版为了保护你辛辛苦苦下载的几十 GB 大模型不被误删，物理模型文件默认保留在共享仓中。
2. **如何彻底清理不再需要的模型？**
   - 在【桌面端设置 ➔ 存储 ➔ 共享模型】中查看或直接打开文件管理器清理。

---

### 🚀 学习路径导航

[⬅️ 上一课：02. 参数透视：Seed、Steps、CFG 与采样器本质](./02-seed-and-samplers.md) | [👉 下一课：04. FLUX.2：文生图、图像编辑与多参考图](./04-flux-prompting.md)
