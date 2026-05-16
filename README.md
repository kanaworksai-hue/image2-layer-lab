# Image2 Layer Lab

Image2 Layer Lab is a local browser tool for peeling people, objects, text, and scene elements out of an image, filling the background, and exporting the result as a layered PSD. The workflow is inspired by *Progressive Photorealistic Simplification*: select an element, remove it from the background, keep the removed element as its own layer, and export a clean compositing file.

[KanaWorks_AI on X](https://x.com/kanaworks_ai) · Want more? Follow me.

Live static demo: https://kanaworksai-hue.github.io/image2-layer-lab/

The static demo supports local selection, peeling, quick fill, PNG export, and PSD export directly in the browser. GPT fill requires running the Node server locally with your own OpenAI API key.
It also includes a solid background remover for white, black, green, and custom-color backgrounds, with transparent PNG export in auto, original, 16:9, 9:16, 1:1, 2:3, 3:2, 4:5, and 5:4 ratios.

## Languages

The app includes three UI versions:

- English
- 日本語
- 中文

Use the language selector in the left panel to switch versions.

## Features

- Brush, eraser, rectangle, ellipse, rounded-rectangle, AE-style pen path, and Photoshop-style magic wand selection with replace/add/subtract modes for mobile use
- Separate workspaces for layer peeling and solid background removal
- Undo / redo for selection and layer operations
- Peel selected content into transparent layers
- Local quick background fill
- Solid-color background removal with non-destructive preview, start-over recovery, transparent PNG export, and common output ratios
- Optional GPT Image mask fill through the OpenAI Image API
- GPT fill shows progress, sends a transparent edit mask to the API, and merges results back only through the selected mask so unselected pixels stay unchanged
- PSD export preview showing the composite and final layer count before download
- Layer visibility, ordering, single-layer PNG export
- PSD export with peeled layers, filled background, and hidden original reference

## Run Locally

1. Copy the environment file:

```bash
cp .env.example .env
```

2. Add your own OpenAI API key:

```bash
OPENAI_API_KEY=your-api-key
```

3. Start the server:

```bash
node server.mjs
```

4. Open:

```text
http://localhost:3000
```

## 日本語

Image2 Layer Lab は、画像内の人物、物体、文字、シーン要素を選択して切り出し、背景を補完し、PSD レイヤーとして書き出すローカルブラウザツールです。

使い方:

1. `.env.example` を `.env` にコピーします。
2. 自分の OpenAI API キーを `.env` に設定します。
3. `node server.mjs` を実行します。
4. `http://localhost:3000` を開きます。

GPT補完を使う時だけ OpenAI API の費用が発生します。通常の選択、切り出し、PSD 書き出しはローカルで動作します。

## 中文

Image2 Layer Lab 是一个本地浏览器工具，可以把图片中的人物、物品、文字、场景元素选中并剥离，背景可以本地快速补洞，也可以用 OpenAI Image API 进行蒙版补洞，最后导出 PSD 分层文件。

使用方式：

1. 复制 `.env.example` 为 `.env`
2. 在 `.env` 中填入你自己的 OpenAI API Key
3. 运行 `node server.mjs`
4. 打开 `http://localhost:3000`

只有点击 “Peel + GPT fill / 切り出し + GPT補完 / 剥离 + GPT补洞” 时才会调用 OpenAI API 并产生费用。选择、剥离、快速补洞、导出 PSD 都在本地执行。

## Security Notes

- Do not commit `.env`.
- Do not publish generated images or spend logs unless you intentionally want to share them.
- This repository includes only `.env.example`; users must provide their own OpenAI API key.
