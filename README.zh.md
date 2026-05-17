# KANA Layer Lab

语言标签：[English](README.md) | [日本語](README.ja.md) | [中文](README.zh.md)

KANA Layer Lab 是一个浏览器工具，用于图层剥离和纯色背景移除。核心流程在浏览器本地运行，不需要 API key，也不会把用户图片上传到服务器。

[KanaWorks_AI on X](https://x.com/kanaworks_ai) · Want more? Follow me.

在线版本：https://kanaworksai-hue.github.io/image2-layer-lab/

## 主要功能

### 图层剥离

可以用画笔、擦除、形状、钢笔路径或魔术棒选中图片里的人物、物品、文字、UI、场景元素。选中的区域可以被剥离成透明图层，原位置可以进行快速补洞。最后可以导出 PNG 或 PSD，方便继续在 Photoshop 等分层工具里编辑。

### 纯色背景移除

可以移除图片和视频里的白底、黑底、绿幕，或自己指定的纯色背景。容差和柔化可以实时调整，如果背景没有去干净，也可以用吸色追加更多背景颜色。图片可以导出透明 PNG，视频可以导出透明 WebM 或 MOV。

## 支持文件

- 图片：PNG、JPG、WebP
- 视频：MP4、WebM、MOV
- 导出：PNG、PSD、WebM、MOV

## 本地运行

1. 启动本地服务器：

```bash
node server.mjs
```

2. 打开：

```text
http://localhost:3000
```

## 注意

- 浏览器工作流不需要 API key。
- 用户文件会在浏览器本地处理。
- 透明 MOV 使用 PNG 帧封装进 QuickTime MOV 容器，所以文件通常会比 WebM 更大。
