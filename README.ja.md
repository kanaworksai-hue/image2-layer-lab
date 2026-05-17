# KANA Layer Lab

言語タグ: [English](README.md) | [日本語](README.ja.md) | [中文](README.zh.md)

KANA Layer Lab は、レイヤー抽出と単色背景削除のためのブラウザツールです。主要な処理はブラウザ内でローカル実行されるため、API key は不要で、ユーザー画像をサーバーへアップロードしません。

[KanaWorks_AI on X](https://x.com/kanaworks_ai) · Want more? Follow me.

ライブ版: https://kanaworksai-hue.github.io/image2-layer-lab/

## 主な機能

### レイヤー抽出

ブラシ、消しゴム、図形、ペンパス、自動選択を使って、画像内の人物、物体、文字、UI、シーン要素を選択できます。選択した範囲は透明レイヤーとして切り出せ、元の位置は簡易補完できます。PNG または PSD として書き出し、Photoshop などのレイヤー対応ツールで続けて編集できます。

### 単色背景削除

画像や動画の白背景、黒背景、グリーンバック、または任意の単色背景を削除できます。許容差とぼかしはリアルタイムで調整でき、背景が残る場合は色追加で削除対象を増やせます。画像は透明 PNG、動画は透明 WebM または MOV として保存できます。

## 対応ファイル

- 画像: PNG、JPG、WebP
- 動画: MP4、WebM、MOV
- 書き出し: PNG、PSD、WebM、MOV

## ローカル実行

1. ローカルサーバーを起動します。

```bash
node server.mjs
```

2. 開きます。

```text
http://localhost:3000
```

## 注意

- ブラウザ上の基本ワークフローに API key は不要です。
- ユーザーファイルはブラウザ内でローカル処理されます。
- 透明 MOV は PNG フレームを QuickTime MOV コンテナに格納するため、WebM よりファイルサイズが大きくなることがあります。
