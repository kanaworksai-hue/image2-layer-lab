# Layer Lab

Layer Lab is a local browser tool for peeling people, objects, text, and scene elements out of an image, filling the background, and exporting the result as a layered PSD. The workflow is inspired by *Progressive Photorealistic Simplification*: select an element, remove it from the background, keep the removed element as its own layer, and export a clean compositing file.

[KanaWorks_AI on X](https://x.com/kanaworks_ai) · Want more? Follow me.

Live static demo: https://kanaworksai-hue.github.io/image2-layer-lab/

The static demo supports local selection, peeling, quick fill, PNG export, and PSD export directly in the browser.
It also includes a solid background remover for white, black, green, and custom-color backgrounds, with transparent PNG export in auto, original, 16:9, 9:16, 1:1, 2:3, 3:2, 4:5, and 5:4 ratios.

## Languages

The app includes three UI versions:

- English
- 日本語
- 中文

Use the language selector in the left panel to switch versions.

## Features

- Brush, eraser, rectangle, ellipse, rounded-rectangle, AE-style pen path, and Photoshop-style magic wand selection with replace/add/subtract modes for mobile use
- Canvas zoom from fit view up to 800%, with pan mode for inspecting small details while selecting
- Separate workspaces for layer peeling and solid background removal
- Undo / redo for selection and layer operations
- Peel selected content into transparent layers
- Local quick background fill
- Solid-color background removal with non-destructive preview, start-over recovery, transparent PNG export, and common output ratios
- PSD export preview showing the composite and final layer count before download
- Layer visibility, ordering, single-layer PNG export
- PSD export with peeled layers, filled background, and hidden original reference

## Run Locally

1. Start the server:

```bash
node server.mjs
```

2. Open:

```text
http://localhost:3000
```

## 日本語

Layer Lab は、画像内の人物、物体、文字、シーン要素を選択して切り出し、背景を補完し、PSD レイヤーとして書き出すローカルブラウザツールです。

使い方:

1. `node server.mjs` を実行します。
2. `http://localhost:3000` を開きます。

選択、切り出し、簡易補完、PSD 書き出しはブラウザ内で動作します。

## 中文

Layer Lab 是一个本地浏览器工具，可以把图片中的人物、物品、文字、场景元素选中并剥离，背景可以本地快速补洞，最后导出 PSD 分层文件。

使用方式：

1. 运行 `node server.mjs`
2. 打开 `http://localhost:3000`

选择、剥离、快速补洞、背景移除、导出 PSD 都在浏览器里完成。

## Security Notes

- No API key is required for the browser workflow.
- Do not publish user images unless you intentionally want to share them.
