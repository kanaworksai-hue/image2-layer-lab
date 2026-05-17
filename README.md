# KANA Layer Lab

Language tags: [English](README.md) | [日本語](README.ja.md)

KANA Layer Lab is a browser-based tool for layer peeling and solid-color background removal. It runs locally in the browser, so the core workflow does not require an API key or upload user images to a server.

[KanaWorks_AI on X](https://x.com/kanaworks_ai) · Want more? Follow me.

Live demo: https://kanaworksai-hue.github.io/image2-layer-lab/

## Main Features

### Layer Peeling

Select people, objects, text, UI, or scene elements in an image with brush, eraser, shapes, pen paths, or a magic wand. The selected area can be peeled into a transparent layer while the original position is quickly filled in the background. Export the result as PNG or PSD for further editing in Photoshop or other layer-based tools.

### Solid Background Removal

Remove white, black, green, or custom-color backgrounds from images and videos. Tolerance and feather can be adjusted live, and extra sampled colors can be added when the background is not fully removed. Images export as transparent PNG, while videos export as transparent WebM or MOV.

## Supported Files

- Images: PNG, JPG, WebP
- Videos: MP4, WebM, MOV
- Exports: PNG, PSD, WebM, MOV

## Run Locally

1. Start the local server:

```bash
node server.mjs
```

2. Open:

```text
http://localhost:3000
```

## Notes

- No API key is required for the browser workflow.
- User files are processed locally in the browser.
- Transparent MOV export uses PNG frames inside a QuickTime MOV container, so files may be larger than WebM.
