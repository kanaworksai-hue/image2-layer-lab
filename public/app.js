const elements = {
  keyStatus: document.querySelector("#keyStatus"),
  languageSelect: document.querySelector("#languageSelect"),
  workspaceButtons: document.querySelectorAll("[data-workspace-view]"),
  workspacePanels: document.querySelectorAll("[data-workspace-panel]"),
  sourceImage: document.querySelector("#sourceImage"),
  uploadBox: document.querySelector(".upload-box"),
  layerName: document.querySelector("#layerName"),
  layerCategory: document.querySelector("#layerCategory"),
  toolButtons: document.querySelectorAll("[data-tool]"),
  brushSize: document.querySelector("#brushSize"),
  brushSizeValue: document.querySelector("#brushSizeValue"),
  roundRadius: document.querySelector("#roundRadius"),
  roundRadiusValue: document.querySelector("#roundRadiusValue"),
  roundRadiusRow: document.querySelector("#roundRadiusRow"),
  magicTolerance: document.querySelector("#magicTolerance"),
  magicToleranceValue: document.querySelector("#magicToleranceValue"),
  magicGrow: document.querySelector("#magicGrow"),
  magicGrowValue: document.querySelector("#magicGrowValue"),
  penToolRow: document.querySelector("#penToolRow"),
  finishPenButton: document.querySelector("#finishPenButton"),
  undoPenPointButton: document.querySelector("#undoPenPointButton"),
  clearPenButton: document.querySelector("#clearPenButton"),
  penPointCount: document.querySelector("#penPointCount"),
  selectionModeRow: document.querySelector("#selectionModeRow"),
  selectionModeButtons: document.querySelectorAll("[data-selection-mode]"),
  undoSelectionButton: document.querySelector("#undoSelectionButton"),
  redoSelectionButton: document.querySelector("#redoSelectionButton"),
  restorePeelStartButton: document.querySelector("#restorePeelStartButton"),
  invertSelectionButton: document.querySelector("#invertSelectionButton"),
  cleanupSelectionButton: document.querySelector("#cleanupSelectionButton"),
  bgPreset: document.querySelector("#bgPreset"),
  bgCustomColor: document.querySelector("#bgCustomColor"),
  bgOutputRatio: document.querySelector("#bgOutputRatio"),
  bgPadding: document.querySelector("#bgPadding"),
  bgTolerance: document.querySelector("#bgTolerance"),
  bgToleranceValue: document.querySelector("#bgToleranceValue"),
  bgFeather: document.querySelector("#bgFeather"),
  bgFeatherValue: document.querySelector("#bgFeatherValue"),
  bgPreviewCanvas: document.querySelector("#bgPreviewCanvas"),
  bgPreviewEmpty: document.querySelector("#bgPreviewEmpty"),
  removeSolidBgButton: document.querySelector("#removeSolidBgButton"),
  applySolidBgButton: document.querySelector("#applySolidBgButton"),
  resetSolidBgButton: document.querySelector("#resetSolidBgButton"),
  downloadTransparentButton: document.querySelector("#downloadTransparentButton"),
  imageModel: document.querySelector("#imageModel"),
  imageQuality: document.querySelector("#imageQuality"),
  inpaintPrompt: document.querySelector("#inpaintPrompt"),
  peelQuickButton: document.querySelector("#peelQuickButton"),
  peelAiButton: document.querySelector("#peelAiButton"),
  peelOnlyButton: document.querySelector("#peelOnlyButton"),
  healButton: document.querySelector("#healButton"),
  exportPsdButton: document.querySelector("#exportPsdButton"),
  exportPngButton: document.querySelector("#exportPngButton"),
  clearMaskButton: document.querySelector("#clearMaskButton"),
  resetButton: document.querySelector("#resetButton"),
  message: document.querySelector("#message"),
  aiProgress: document.querySelector("#aiProgress"),
  aiProgressLabel: document.querySelector("#aiProgressLabel"),
  aiProgressValue: document.querySelector("#aiProgressValue"),
  aiProgressBar: document.querySelector("#aiProgressBar"),
  workbench: document.querySelector("#workbench"),
  canvasStage: document.querySelector("#canvasStage"),
  dropHint: document.querySelector("#dropHint"),
  zoomOutButton: document.querySelector("#zoomOutButton"),
  zoomInButton: document.querySelector("#zoomInButton"),
  zoomFitButton: document.querySelector("#zoomFitButton"),
  zoomSlider: document.querySelector("#zoomSlider"),
  zoomValue: document.querySelector("#zoomValue"),
  panModeButton: document.querySelector("#panModeButton"),
  backgroundCanvas: document.querySelector("#backgroundCanvas"),
  selectionCanvas: document.querySelector("#selectionCanvas"),
  overlayCanvas: document.querySelector("#overlayCanvas"),
  imageTitle: document.querySelector("#imageTitle"),
  canvasMeta: document.querySelector("#canvasMeta"),
  selectionStats: document.querySelector("#selectionStats"),
  layerPanel: document.querySelector(".layer-panel"),
  psdPreviewCanvas: document.querySelector("#psdPreviewCanvas"),
  psdLayerSummary: document.querySelector("#psdLayerSummary"),
  psdLayerDetails: document.querySelector("#psdLayerDetails"),
  layerList: document.querySelector("#layerList"),
  layerCount: document.querySelector("#layerCount")
};

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    eyebrow: "Layer Lab",
    language: "语言",
    sourceImage: "原图",
    chooseImage: "选择或拖入图片",
    imageHint: "PNG / JPG / WebP，建议先用 1K 到 2K 尺寸做分层",
    promo: "Want more? Follow me",
    layerWorkspace: "图层剥离",
    backgroundWorkspace: "背景移除",
    layerName: "图层名",
    semanticLevel: "语义层级",
    catDistractor: "干扰元素",
    catSecondary: "次要物品",
    catPrimary: "人物/主体",
    catText: "文字/标识",
    catScene: "场景结构",
    catBackground: "背景",
    selection: "选择",
    brush: "画笔",
    erase: "擦除",
    rect: "矩形",
    circle: "圆形",
    roundRect: "倒角矩形",
    pen: "钢笔",
    magic: "魔术棒",
    undo: "撤销上一步",
    redo: "重做",
    restorePeelStart: "回到剥离前",
    invert: "反选",
    cleanup: "填洞/平滑",
    brushSize: "画笔大小",
    roundRadius: "倒角半径",
    shapeEditable: "选区形状可继续拖动边框或控制点调整。",
    magicTolerance: "魔术棒容差",
    magicGrow: "魔术棒扩边",
    magicSelectionMode: "魔术棒模式",
    modeReplace: "替换",
    modeAdd: "加选",
    modeSubtract: "减选",
    finishPen: "闭合成选区",
    undoPenPoint: "撤销点",
    clearPenPath: "清空路径",
    penPointCount: "{count} 点",
    penNeedThree: "至少需要 3 个点才能闭合路径。",
    penPointAdded: "已添加 {count} 个点。靠近第一个点或点闭合成选区。",
    penPointRemoved: "已撤销一个路径点。",
    penPathCleared: "钢笔路径已清空。",
    penClosed: "钢笔路径已变成选区。",
    restorePeelStartMissing: "还没有可恢复的剥离前状态。",
    peelStartRestored: "已回到上次剥离前，选区也恢复了。",
    peelAutoRestored: "已恢复上次框选，继续执行 {mode}。",
    peelRecoveryHint: "已用本地快速补洞更新背景。若不满意，可点“回到剥离前”再改用 GPT 补洞。",
    peel: "剥离",
    peelQuick: "剥离 + 快速补洞",
    peelAi: "剥离 + GPT补洞",
    peelOnly: "仅剥离成图层",
    quickHeal: "快速补当前选择",
    solidBgRemove: "纯色背景移除",
    bgColor: "背景颜色",
    bgWhite: "白色",
    bgBlack: "黑色",
    bgGreen: "绿色",
    bgCustom: "自定义",
    customColor: "自定义颜色",
    outputRatio: "输出比例",
    ratioAuto: "自适应",
    ratioOriginal: "原图比例",
    outputPadding: "留白",
    bgTolerance: "颜色容差",
    edgeFeather: "边缘柔化",
    bgPreview: "移除预览",
    bgPreviewEmpty: "调好颜色和容差后点预览，这里会显示透明背景效果。",
    removeSolidBg: "预览移除背景",
    applyPreview: "应用预览",
    retrySolidBg: "重新来做",
    downloadTransparent: "下载透明 PNG",
    inpaintPrompt: "GPT补洞提示词",
    imageModel: "图像模型",
    quality: "质量",
    export: "导出",
    exportPsd: "导出 PSD",
    exportPng: "导出合成 PNG",
    clearSelection: "清空选择",
    resetCanvas: "重置画布",
    waitingImage: "等待图片",
    notLoaded: "未加载",
    dropStart: "拖入图片开始",
    dropHint: "用选择工具圈出人物、物品、文字或场景区域",
    layers: "图层",
    psdPreview: "PSD 预览",
    psdExportPlan: "将导出 {count} 个 PSD 图层",
    psdExportEmpty: "包含填充背景和隐藏原图参考层。",
    psdExportDetails: "顺序：{layers}、填充背景、原图参考（隐藏）。",
    emptyLayer: "剥离后的元素会保留在这里，并在 PSD 中作为独立图层导出。",
    readImage: "读取一张图片后即可开始分层。",
    zoomFit: "适应",
    panMode: "移动",
    zoomedTo: "画布缩放 {zoom}%。",
    fitZoomed: "画布已适应窗口。",
    panModeOn: "移动模式已开启，拖动画布查看细节。",
    panModeOff: "移动模式已关闭。",
    keyReady: "已配置",
    keyMissing: "缺少 Key",
    keyOffline: "离线",
    clientOnly: "本地模式",
    selectionStats: "选择 {count} px",
    topLayer: "顶部",
    layerOrder: "第 {index} 层",
    show: "显示",
    hide: "隐藏",
    moveUp: "上移",
    moveDown: "下移",
    delete: "删除",
    bgRemoved: "已移除 {count} px 背景。",
    bgPreviewReady: "预览已生成，移除 {count} px 背景。满意后可下载或应用。",
    bgPreviewApplied: "已应用预览，移除 {count} px 背景。",
    bgPreviewCleared: "已恢复到上传原图，可以重新调整后预览。",
    bgPreviewMissing: "请先生成背景移除预览。",
    transparentDownloaded: "透明 PNG 已下载。",
    aiProgressPreparing: "准备 GPT 补洞...",
    aiProgressUploading: "上传图片和蒙版...",
    aiProgressWaiting: "等待 GPT 生成补洞...",
    aiProgressMerging: "只合并选中区域...",
    aiProgressDone: "GPT 补洞完成"
  },
  en: {
    htmlLang: "en",
    eyebrow: "Layer Lab",
    language: "Language",
    sourceImage: "Source",
    chooseImage: "Choose or drop an image",
    imageHint: "PNG / JPG / WebP. 1K to 2K images are best for layering.",
    promo: "Want more? Follow me",
    layerWorkspace: "Layer peel",
    backgroundWorkspace: "Background removal",
    layerName: "Layer name",
    semanticLevel: "Semantic level",
    catDistractor: "Distractor",
    catSecondary: "Secondary object",
    catPrimary: "Person / subject",
    catText: "Text / logo",
    catScene: "Scene structure",
    catBackground: "Background",
    selection: "Selection",
    brush: "Brush",
    erase: "Erase",
    rect: "Rectangle",
    circle: "Circle",
    roundRect: "Rounded rect",
    pen: "Pen",
    magic: "Magic wand",
    undo: "Undo",
    redo: "Redo",
    restorePeelStart: "Restore peel start",
    invert: "Invert",
    cleanup: "Fill holes / smooth",
    brushSize: "Brush size",
    roundRadius: "Corner radius",
    shapeEditable: "Shape selections can still be adjusted by dragging the box or handles.",
    magicTolerance: "Magic tolerance",
    magicGrow: "Magic grow",
    magicSelectionMode: "Magic wand mode",
    modeReplace: "Replace",
    modeAdd: "Add",
    modeSubtract: "Subtract",
    finishPen: "Close to selection",
    undoPenPoint: "Undo point",
    clearPenPath: "Clear path",
    penPointCount: "{count} pts",
    penNeedThree: "Add at least 3 points before closing the path.",
    penPointAdded: "{count} points added. Tap near the first point or close to make a selection.",
    penPointRemoved: "Removed one path point.",
    penPathCleared: "Pen path cleared.",
    penClosed: "Pen path converted to a selection.",
    restorePeelStartMissing: "There is no saved peel-start state yet.",
    peelStartRestored: "Restored the last peel-start state and its selection.",
    peelAutoRestored: "Restored the last selection and continued with {mode}.",
    peelRecoveryHint: "Quick fill updated the background. If it is not right, restore the peel start and switch to GPT fill.",
    peel: "Peel",
    peelQuick: "Peel + quick fill",
    peelAi: "Peel + GPT fill",
    peelOnly: "Peel to layer only",
    quickHeal: "Quick fill selection",
    solidBgRemove: "Solid background removal",
    bgColor: "Background color",
    bgWhite: "White",
    bgBlack: "Black",
    bgGreen: "Green",
    bgCustom: "Custom",
    customColor: "Custom color",
    outputRatio: "Output ratio",
    ratioAuto: "Auto fit",
    ratioOriginal: "Original ratio",
    outputPadding: "Padding",
    bgTolerance: "Color tolerance",
    edgeFeather: "Edge feather",
    bgPreview: "Removal preview",
    bgPreviewEmpty: "Tune the color and tolerance, then preview the transparent-background result here.",
    removeSolidBg: "Preview removal",
    applyPreview: "Apply preview",
    retrySolidBg: "Start over",
    downloadTransparent: "Download transparent PNG",
    inpaintPrompt: "GPT fill prompt",
    imageModel: "Image model",
    quality: "Quality",
    export: "Export",
    exportPsd: "Export PSD",
    exportPng: "Export composite PNG",
    clearSelection: "Clear selection",
    resetCanvas: "Reset canvas",
    waitingImage: "Waiting for image",
    notLoaded: "Not loaded",
    dropStart: "Drop an image to start",
    dropHint: "Select people, objects, text, or scene areas with the tools.",
    layers: "Layers",
    psdPreview: "PSD preview",
    psdExportPlan: "Will export {count} PSD layers",
    psdExportEmpty: "Includes filled background and hidden original reference.",
    psdExportDetails: "Order: {layers}, filled background, original reference (hidden).",
    emptyLayer: "Peeled elements stay here and export as independent PSD layers.",
    readImage: "Load an image to start layering.",
    zoomFit: "Fit",
    panMode: "Pan",
    zoomedTo: "Canvas zoom {zoom}%.",
    fitZoomed: "Canvas fit to the window.",
    panModeOn: "Pan mode on. Drag the canvas to inspect details.",
    panModeOff: "Pan mode off.",
    keyReady: "Ready",
    keyMissing: "No key",
    keyOffline: "Offline",
    clientOnly: "Local mode",
    selectionStats: "Selection {count} px",
    topLayer: "Top",
    layerOrder: "Layer {index}",
    show: "Show",
    hide: "Hide",
    moveUp: "Up",
    moveDown: "Down",
    delete: "Delete",
    bgRemoved: "Removed {count} px of background.",
    bgPreviewReady: "Preview ready. Removed {count} px of background. Download or apply it when it looks right.",
    bgPreviewApplied: "Preview applied. Removed {count} px of background.",
    bgPreviewCleared: "Restored the uploaded image. Adjust settings and preview again.",
    bgPreviewMissing: "Generate a background removal preview first.",
    transparentDownloaded: "Transparent PNG downloaded.",
    aiProgressPreparing: "Preparing GPT fill...",
    aiProgressUploading: "Uploading image and mask...",
    aiProgressWaiting: "Waiting for GPT fill...",
    aiProgressMerging: "Merging only the selected area...",
    aiProgressDone: "GPT fill complete"
  },
  ja: {
    htmlLang: "ja",
    eyebrow: "Layer Lab",
    language: "言語",
    sourceImage: "元画像",
    chooseImage: "画像を選択またはドロップ",
    imageHint: "PNG / JPG / WebP。レイヤー作成には 1K から 2K 推奨。",
    promo: "Want more? Follow me",
    layerWorkspace: "レイヤー切り出し",
    backgroundWorkspace: "背景削除",
    layerName: "レイヤー名",
    semanticLevel: "意味レベル",
    catDistractor: "不要要素",
    catSecondary: "補助オブジェクト",
    catPrimary: "人物 / 主役",
    catText: "文字 / ロゴ",
    catScene: "シーン構造",
    catBackground: "背景",
    selection: "選択",
    brush: "ブラシ",
    erase: "消しゴム",
    rect: "矩形",
    circle: "円形",
    roundRect: "角丸矩形",
    pen: "ペン",
    magic: "自動選択",
    undo: "元に戻す",
    redo: "やり直す",
    restorePeelStart: "切り出し前へ",
    invert: "反転",
    cleanup: "穴埋め / 平滑化",
    brushSize: "ブラシサイズ",
    roundRadius: "角丸半径",
    shapeEditable: "選択した形状は枠やハンドルをドラッグして調整できます。",
    magicTolerance: "自動選択の許容差",
    magicGrow: "選択範囲を拡張",
    magicSelectionMode: "自動選択モード",
    modeReplace: "置換",
    modeAdd: "追加",
    modeSubtract: "削除",
    finishPen: "閉じて選択",
    undoPenPoint: "点を戻す",
    clearPenPath: "パスをクリア",
    penPointCount: "{count} 点",
    penNeedThree: "パスを閉じるには 3 点以上必要です。",
    penPointAdded: "{count} 点を追加しました。最初の点付近をタップするか、閉じて選択してください。",
    penPointRemoved: "パス点を 1 つ戻しました。",
    penPathCleared: "ペンパスをクリアしました。",
    penClosed: "ペンパスを選択範囲に変換しました。",
    restorePeelStartMissing: "復元できる切り出し前の状態はまだありません。",
    peelStartRestored: "前回の切り出し前に戻し、選択範囲も復元しました。",
    peelAutoRestored: "前回の選択範囲を復元し、{mode} を続行します。",
    peelRecoveryHint: "簡易補完で背景を更新しました。気に入らない場合は切り出し前へ戻して GPT 補完に切り替えられます。",
    peel: "切り出し",
    peelQuick: "切り出し + 簡易補完",
    peelAi: "切り出し + GPT補完",
    peelOnly: "レイヤー化のみ",
    quickHeal: "選択範囲を簡易補完",
    solidBgRemove: "単色背景削除",
    bgColor: "背景色",
    bgWhite: "白",
    bgBlack: "黒",
    bgGreen: "緑",
    bgCustom: "カスタム",
    customColor: "カスタム色",
    outputRatio: "出力比率",
    ratioAuto: "自動",
    ratioOriginal: "元画像比率",
    outputPadding: "余白",
    bgTolerance: "色の許容差",
    edgeFeather: "エッジぼかし",
    bgPreview: "削除プレビュー",
    bgPreviewEmpty: "色と許容差を調整してプレビューすると、透明背景の結果がここに表示されます。",
    removeSolidBg: "削除をプレビュー",
    applyPreview: "プレビューを適用",
    retrySolidBg: "やり直す",
    downloadTransparent: "透明PNGを保存",
    inpaintPrompt: "GPT補完プロンプト",
    imageModel: "画像モデル",
    quality: "品質",
    export: "書き出し",
    exportPsd: "PSDを書き出し",
    exportPng: "合成PNGを書き出し",
    clearSelection: "選択をクリア",
    resetCanvas: "キャンバスをリセット",
    waitingImage: "画像待ち",
    notLoaded: "未読み込み",
    dropStart: "画像をドロップして開始",
    dropHint: "人物、物、文字、シーン領域をツールで選択します。",
    layers: "レイヤー",
    psdPreview: "PSDプレビュー",
    psdExportPlan: "{count} 個の PSD レイヤーを書き出します",
    psdExportEmpty: "補完背景と非表示の元画像参照レイヤーを含みます。",
    psdExportDetails: "順序：{layers}、補完背景、元画像参照（非表示）。",
    emptyLayer: "切り出した要素はここに残り、PSD の独立レイヤーとして書き出されます。",
    readImage: "画像を読み込むとレイヤー作成を開始できます。",
    zoomFit: "全体",
    panMode: "移動",
    zoomedTo: "キャンバスを {zoom}% に拡大しました。",
    fitZoomed: "キャンバスをウィンドウに合わせました。",
    panModeOn: "移動モードをオンにしました。ドラッグして細部を確認できます。",
    panModeOff: "移動モードをオフにしました。",
    keyReady: "設定済み",
    keyMissing: "キーなし",
    keyOffline: "オフライン",
    clientOnly: "ローカル",
    selectionStats: "選択 {count} px",
    topLayer: "最上部",
    layerOrder: "{index} 番目",
    show: "表示",
    hide: "非表示",
    moveUp: "上へ",
    moveDown: "下へ",
    delete: "削除",
    bgRemoved: "{count} px の背景を削除しました。",
    bgPreviewReady: "プレビューを生成しました。{count} px の背景を削除します。問題なければ保存または適用してください。",
    bgPreviewApplied: "プレビューを適用しました。{count} px の背景を削除しました。",
    bgPreviewCleared: "アップロード時の画像に戻しました。調整して再プレビューできます。",
    bgPreviewMissing: "先に背景削除プレビューを生成してください。",
    transparentDownloaded: "透明PNGを書き出しました。",
    aiProgressPreparing: "GPT補完を準備中...",
    aiProgressUploading: "画像とマスクをアップロード中...",
    aiProgressWaiting: "GPT補完の生成待ち...",
    aiProgressMerging: "選択範囲だけを合成中...",
    aiProgressDone: "GPT補完が完了しました"
  }
};

const state = {
  imageLoaded: false,
  imageName: "image",
  view: "layers",
  tool: "brush",
  selectionMode: "add",
  isDrawing: false,
  startPoint: null,
  lastPoint: null,
  selectionSnapshot: null,
  shapeEdit: null,
  shapeDrag: null,
  pointerPoint: null,
  penPoints: [],
  zoom: 1,
  fitScale: 1,
  panMode: false,
  isPanning: false,
  panStart: null,
  edgeCanvas: document.createElement("canvas"),
  edgeDirty: true,
  selectionPixels: 0,
  originalCanvas: document.createElement("canvas"),
  layers: [],
  history: [],
  redo: [],
  recoverySnapshot: null,
  apiAvailable: false,
  backgroundPreview: null,
  transparentCanvas: null
};

const MASK_COLOR = "rgba(23, 107, 135, 0.46)";
const MASK_THRESHOLD = 18;
const HISTORY_LIMIT = 24;
const ZOOM_MIN = 0.25;
const ZOOM_MAX = 8;
const ZOOM_STEP = 1.25;
const SHAPE_MIN_SIZE = 2;
const SHAPE_HANDLES = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
const SUPPORTED_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);

const backgroundCtx = elements.backgroundCanvas.getContext("2d", { willReadFrequently: true });
const selectionCtx = elements.selectionCanvas.getContext("2d", { willReadFrequently: true });
const overlayCtx = elements.overlayCanvas.getContext("2d");

elements.backgroundCanvas.hidden = true;
elements.selectionCanvas.hidden = true;
elements.overlayCanvas.hidden = true;

checkHealth();
renderLayers();
syncRangeLabels();
syncBackgroundColorControls();
syncWorkspaceView();
syncToolButtons();
syncSelectionModeButtons();
renderBackgroundPreview();
applyLanguage(getInitialLanguage());
setMessage(t("readImage"));

elements.languageSelect.addEventListener("change", () => {
  applyLanguage(elements.languageSelect.value);
  localStorage.setItem("image2:language", elements.languageSelect.value);
  updateSelectionStats();
  renderLayers();
});

elements.sourceImage.addEventListener("change", async () => {
  const file = elements.sourceImage.files?.[0];
  if (file) {
    await loadSourceImage(file);
  }
  elements.sourceImage.value = "";
});

elements.uploadBox.addEventListener("dragover", (event) => {
  event.preventDefault();
  elements.uploadBox.classList.add("dragging");
});

elements.uploadBox.addEventListener("dragleave", () => {
  elements.uploadBox.classList.remove("dragging");
});

elements.uploadBox.addEventListener("drop", async (event) => {
  event.preventDefault();
  elements.uploadBox.classList.remove("dragging");
  await loadFirstImageFromDrop(event.dataTransfer?.files || []);
});

elements.canvasStage.addEventListener("dragover", (event) => {
  event.preventDefault();
  elements.canvasStage.classList.add("dragging");
});

elements.canvasStage.addEventListener("dragleave", () => {
  elements.canvasStage.classList.remove("dragging");
});

elements.canvasStage.addEventListener("drop", async (event) => {
  event.preventDefault();
  elements.canvasStage.classList.remove("dragging");
  await loadFirstImageFromDrop(event.dataTransfer?.files || []);
});

elements.workspaceButtons.forEach((button) => {
  button.addEventListener("click", () => switchWorkspace(button.dataset.workspaceView || "layers"));
});

elements.toolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (state.tool !== button.dataset.tool) {
      clearShapeEdit();
    }
    state.tool = button.dataset.tool || "brush";
    syncToolButtons();
    renderOverlay();
  });
});

elements.selectionModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectionMode = button.dataset.selectionMode || "add";
    syncSelectionModeButtons();
  });
});

elements.brushSize.addEventListener("input", () => {
  syncRangeLabels();
  renderOverlay();
});
elements.roundRadius.addEventListener("input", () => {
  syncRangeLabels();
  if (state.shapeEdit?.tool === "roundRect") {
    state.shapeEdit.radius = Number(elements.roundRadius.value || 0);
    renderEditableShapeSelection();
    updateSelectionStats();
    rebuildSelectionEdgeOverlay();
    renderOverlay();
  }
});
elements.magicTolerance.addEventListener("input", syncRangeLabels);
elements.magicGrow.addEventListener("input", syncRangeLabels);
elements.bgTolerance.addEventListener("input", () => {
  syncRangeLabels();
  invalidateBackgroundPreview();
});
elements.bgFeather.addEventListener("input", () => {
  syncRangeLabels();
  invalidateBackgroundPreview();
});
elements.bgPreset.addEventListener("change", () => {
  syncBackgroundColorControls();
  invalidateBackgroundPreview();
});
elements.bgCustomColor.addEventListener("input", () => {
  elements.bgPreset.value = "custom";
  invalidateBackgroundPreview();
});
elements.bgOutputRatio.addEventListener("change", renderBackgroundPreview);
elements.bgPadding.addEventListener("change", renderBackgroundPreview);
elements.zoomOutButton.addEventListener("click", () => {
  setCanvasZoom(state.zoom / ZOOM_STEP, { announce: true });
});
elements.zoomInButton.addEventListener("click", () => {
  setCanvasZoom(state.zoom * ZOOM_STEP, { announce: true });
});
elements.zoomFitButton.addEventListener("click", () => resetCanvasZoom({ announce: true }));
elements.zoomSlider.addEventListener("input", () => {
  setCanvasZoom(Number(elements.zoomSlider.value) / 100);
});
elements.zoomSlider.addEventListener("change", () => {
  setMessage(t("zoomedTo", { zoom: Math.round(state.zoom * 100) }), false, true);
});
elements.panModeButton.addEventListener("click", togglePanMode);
elements.undoSelectionButton.addEventListener("click", undoStep);
elements.redoSelectionButton.addEventListener("click", redoStep);
elements.restorePeelStartButton.addEventListener("click", () => restorePeelStart({ recordHistory: true }));
elements.invertSelectionButton.addEventListener("click", invertSelection);
elements.cleanupSelectionButton.addEventListener("click", cleanupSelection);
elements.finishPenButton.addEventListener("click", finishPenSelection);
elements.undoPenPointButton.addEventListener("click", undoPenPoint);
elements.clearPenButton.addEventListener("click", () => clearPenPath({ showMessage: true }));
elements.removeSolidBgButton.addEventListener("click", removeSolidBackground);
elements.applySolidBgButton.addEventListener("click", applySolidBackgroundPreview);
elements.resetSolidBgButton.addEventListener("click", resetSolidBackgroundWorkflow);
elements.downloadTransparentButton.addEventListener("click", downloadTransparentPng);
elements.peelQuickButton.addEventListener("click", () => void peelAndQuickHeal());
elements.peelAiButton.addEventListener("click", () => void peelAndAiHeal());
elements.peelOnlyButton.addEventListener("click", () => peelSelection({ clearAfter: false, recordHistory: true }));
elements.healButton.addEventListener("click", () => quickHealSelection({ clearAfter: false, recordHistory: true }));
elements.exportPsdButton.addEventListener("click", exportPsd);
elements.exportPngButton.addEventListener("click", exportCompositePng);
elements.clearMaskButton.addEventListener("click", () => clearSelection({ recordHistory: true }));
elements.resetButton.addEventListener("click", resetCanvas);

elements.selectionCanvas.addEventListener("pointerdown", onPointerDown);
elements.selectionCanvas.addEventListener("pointermove", onPointerMove);
elements.selectionCanvas.addEventListener("pointerup", onPointerUp);
elements.selectionCanvas.addEventListener("pointercancel", onPointerUp);
elements.selectionCanvas.addEventListener("pointerleave", onPointerLeave);

["touchstart", "touchmove", "touchend", "gesturestart"].forEach((eventName) => {
  elements.selectionCanvas.addEventListener(eventName, preventCanvasGesture, { passive: false });
});

window.addEventListener("keydown", (event) => {
  const isTextEntry = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName || "");
  if (state.tool === "pen" && !isTextEntry) {
    if (event.key === "Enter") {
      event.preventDefault();
      finishPenSelection();
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      clearPenPath({ showMessage: true });
      return;
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      undoPenPoint();
      return;
    }
  }

  const isUndoKey = event.key.toLowerCase() === "z" && (event.metaKey || event.ctrlKey);
  if (!isUndoKey) {
    return;
  }

  event.preventDefault();
  if (event.shiftKey) {
    redoStep();
  } else {
    undoStep();
  }
});

window.addEventListener("pagehide", () => {
  state.isDrawing = false;
  state.isPanning = false;
});

window.addEventListener("resize", () => {
  applyCanvasZoom({ preserveCenter: true });
});

elements.canvasStage.addEventListener("wheel", onCanvasWheel, { passive: false });

function getInitialLanguage() {
  const saved = localStorage.getItem("image2:language");
  if (saved && I18N[saved]) {
    return saved;
  }

  const language = navigator.language.toLowerCase();
  if (language.startsWith("ja")) {
    return "ja";
  }
  if (language.startsWith("zh")) {
    return "zh";
  }
  return "en";
}

function t(key, replacements = {}) {
  const lang = elements.languageSelect?.value || "zh";
  let text = I18N[lang]?.[key] || I18N.zh[key] || key;
  for (const [name, value] of Object.entries(replacements)) {
    text = text.replace(`{${name}}`, String(value));
  }
  return text;
}

function applyLanguage(language) {
  const nextLanguage = I18N[language] ? language : "zh";
  elements.languageSelect.value = nextLanguage;
  document.documentElement.lang = I18N[nextLanguage].htmlLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  syncPenButtons();

  if (!state.imageLoaded) {
    elements.imageTitle.textContent = t("waitingImage");
    elements.canvasMeta.textContent = t("notLoaded");
  }

  updatePsdPreview();
  checkHealth();
}

function switchWorkspace(view) {
  state.view = ["layers", "background"].includes(view) ? view : "layers";
  if (state.view !== "layers") {
    clearShapeEdit();
  }
  syncWorkspaceView();
}

function syncWorkspaceView() {
  elements.workspaceButtons.forEach((button) => {
    const isActive = button.dataset.workspaceView === state.view;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  elements.workspacePanels.forEach((panel) => {
    panel.hidden = panel.dataset.workspacePanel !== state.view;
  });

  elements.layerPanel.hidden = state.view === "background";
  elements.selectionStats.hidden = state.view !== "layers";
  elements.workbench.classList.toggle("background-mode", state.view === "background");
  updateCanvasVisibility();
}

function syncToolButtons() {
  elements.toolButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tool === state.tool);
  });
  elements.selectionModeRow.hidden = state.tool !== "magic";
  elements.roundRadiusRow.hidden = state.tool !== "roundRect";
  elements.penToolRow.hidden = state.tool !== "pen";
  syncPenButtons();
}

function updateCanvasVisibility() {
  elements.backgroundCanvas.hidden = !state.imageLoaded;
  elements.selectionCanvas.hidden = !state.imageLoaded || state.view !== "layers";
  elements.overlayCanvas.hidden = !state.imageLoaded || state.view === "background";
  elements.dropHint.hidden = state.imageLoaded;
  updateZoomControls();
  renderOverlay();
}

function syncSelectionModeButtons() {
  elements.selectionModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.selectionMode === state.selectionMode);
  });
}

function computeFitScale() {
  if (!state.imageLoaded || !elements.backgroundCanvas.width || !elements.backgroundCanvas.height) {
    return 1;
  }

  const styles = getComputedStyle(elements.canvasStage);
  const paddingX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  const paddingY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  const availableWidth = Math.max(80, elements.canvasStage.clientWidth - paddingX);
  const availableHeight = Math.max(80, elements.canvasStage.clientHeight - paddingY);
  return Math.min(
    1,
    availableWidth / elements.backgroundCanvas.width,
    availableHeight / elements.backgroundCanvas.height
  );
}

function resetCanvasZoom({ announce = false } = {}) {
  state.zoom = 1;
  state.panMode = false;
  applyCanvasZoom({ preserveCenter: false });
  updateZoomControls();
  elements.canvasStage.scrollLeft = 0;
  elements.canvasStage.scrollTop = 0;
  if (announce) {
    setMessage(t("fitZoomed"), false, true);
  }
}

function setCanvasZoom(nextZoom, { anchorEvent = null, announce = false } = {}) {
  if (!state.imageLoaded) {
    return;
  }

  state.zoom = clamp(nextZoom, ZOOM_MIN, ZOOM_MAX);
  applyCanvasZoom({ anchorEvent, preserveCenter: !anchorEvent });
  updateZoomControls();
  if (announce) {
    setMessage(t("zoomedTo", { zoom: Math.round(state.zoom * 100) }), false, true);
  }
}

function applyCanvasZoom({ anchorEvent = null, preserveCenter = true } = {}) {
  const canvases = [elements.backgroundCanvas, elements.selectionCanvas, elements.overlayCanvas];
  if (!state.imageLoaded || !elements.backgroundCanvas.width || !elements.backgroundCanvas.height) {
    canvases.forEach((canvas) => {
      canvas.style.width = "";
      canvas.style.height = "";
    });
    updateZoomControls();
    return;
  }

  const anchor = getZoomAnchor(anchorEvent, preserveCenter);
  state.fitScale = computeFitScale();
  const displayScale = state.fitScale * state.zoom;
  const displayWidth = Math.max(1, Math.round(elements.backgroundCanvas.width * displayScale));
  const displayHeight = Math.max(1, Math.round(elements.backgroundCanvas.height * displayScale));

  canvases.forEach((canvas) => {
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;
  });

  updateZoomControls();
  if (anchor) {
    requestAnimationFrame(() => restoreZoomAnchor(anchor));
  }
}

function getZoomAnchor(anchorEvent, preserveCenter) {
  const canvasRect = elements.backgroundCanvas.getBoundingClientRect();
  if (!canvasRect.width || !canvasRect.height) {
    return null;
  }

  const stageRect = elements.canvasStage.getBoundingClientRect();
  const clientX = anchorEvent ? anchorEvent.clientX : stageRect.left + stageRect.width / 2;
  const clientY = anchorEvent ? anchorEvent.clientY : stageRect.top + stageRect.height / 2;
  if (!anchorEvent && !preserveCenter) {
    return null;
  }

  return {
    xRatio: clamp((clientX - canvasRect.left) / canvasRect.width, 0, 1),
    yRatio: clamp((clientY - canvasRect.top) / canvasRect.height, 0, 1),
    clientX,
    clientY
  };
}

function restoreZoomAnchor(anchor) {
  const canvasRect = elements.backgroundCanvas.getBoundingClientRect();
  const nextX = canvasRect.left + anchor.xRatio * canvasRect.width;
  const nextY = canvasRect.top + anchor.yRatio * canvasRect.height;
  elements.canvasStage.scrollLeft += nextX - anchor.clientX;
  elements.canvasStage.scrollTop += nextY - anchor.clientY;
}

function updateZoomControls() {
  const disabled = !state.imageLoaded;
  const zoomPercent = Math.round(state.zoom * 100);
  elements.zoomOutButton.disabled = disabled || state.zoom <= ZOOM_MIN;
  elements.zoomInButton.disabled = disabled || state.zoom >= ZOOM_MAX;
  elements.zoomFitButton.disabled = disabled;
  elements.zoomSlider.disabled = disabled;
  elements.panModeButton.disabled = disabled;
  elements.zoomSlider.value = String(zoomPercent);
  elements.zoomValue.textContent = `${zoomPercent}%`;
  elements.panModeButton.classList.toggle("active", state.panMode && !disabled);
  elements.panModeButton.setAttribute("aria-pressed", String(state.panMode && !disabled));
  elements.canvasStage.classList.toggle("pan-mode", state.panMode && !disabled);
}

function togglePanMode() {
  if (!state.imageLoaded) {
    return;
  }

  state.panMode = !state.panMode;
  if (!state.panMode && state.isPanning) {
    stopCanvasPan();
  }
  updateZoomControls();
  setMessage(t(state.panMode ? "panModeOn" : "panModeOff"), false, true);
}

function onCanvasWheel(event) {
  if (!state.imageLoaded || (!event.ctrlKey && !event.metaKey)) {
    return;
  }

  event.preventDefault();
  const factor = event.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP;
  setCanvasZoom(state.zoom * factor, { anchorEvent: event });
}

function syncPenButtons() {
  const count = state.penPoints.length;
  elements.penPointCount.textContent = t("penPointCount", { count });
  elements.finishPenButton.disabled = count < 3;
  elements.undoPenPointButton.disabled = count === 0;
  elements.clearPenButton.disabled = count === 0;
}

async function checkHealth() {
  if (isStaticHosted()) {
    state.apiAvailable = false;
    elements.keyStatus.textContent = t("clientOnly");
    elements.keyStatus.classList.remove("ready");
    elements.keyStatus.classList.add("missing");
    elements.peelAiButton.disabled = true;
    elements.peelAiButton.title = "GPT fill requires running the Node server locally with your own OpenAI API key.";
    return;
  }

  try {
    const response = await fetch("/api/health");
    const data = await response.json();
    state.apiAvailable = Boolean(data.hasApiKey);
    elements.keyStatus.textContent = data.hasApiKey ? t("keyReady") : t("keyMissing");
    elements.keyStatus.classList.toggle("ready", data.hasApiKey);
    elements.keyStatus.classList.toggle("missing", !data.hasApiKey);
    elements.peelAiButton.disabled = !data.hasApiKey;
  } catch {
    state.apiAvailable = false;
    elements.keyStatus.textContent = t("keyOffline");
    elements.keyStatus.classList.add("missing");
    elements.peelAiButton.disabled = true;
  }
}

function isStaticHosted() {
  return location.protocol === "file:" || location.hostname.endsWith("github.io");
}

async function loadFirstImageFromDrop(files) {
  const image = Array.from(files).find((file) => SUPPORTED_TYPES.has(file.type));
  if (!image) {
    setMessage("请拖入 PNG、JPG 或 WebP 图片。", true);
    return;
  }
  await loadSourceImage(image);
}

async function loadSourceImage(file) {
  if (!SUPPORTED_TYPES.has(file.type)) {
    setMessage("只支持 PNG、JPG 或 WebP 图片。", true);
    return;
  }

  try {
    const url = URL.createObjectURL(file);
    const image = await loadImage(url);
    URL.revokeObjectURL(url);

    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    setCanvasSize(width, height);

    state.originalCanvas.width = width;
    state.originalCanvas.height = height;
    state.originalCanvas.getContext("2d").drawImage(image, 0, 0, width, height);

    backgroundCtx.clearRect(0, 0, width, height);
    backgroundCtx.drawImage(image, 0, 0, width, height);
    clearSelection({ recordHistory: false });
    clearPenPath();

    state.layers = [];
    state.history = [];
    state.redo = [];
    state.recoverySnapshot = null;
    state.backgroundPreview = null;
    state.transparentCanvas = null;
    state.imageLoaded = true;
    state.imageName = file.name.replace(/\.[^.]+$/, "") || "image";
    elements.imageTitle.textContent = file.name;
    elements.canvasMeta.textContent = `${width} x ${height}`;
    resetCanvasZoom();
    updateCanvasVisibility();
    elements.layerName.value = "剥离图层 1";
    renderBackgroundPreview();
    renderLayers();
    updatePsdPreview();
    syncHistoryButtons();
    syncRecoveryButton();
    setMessage("图片已加载。", false, true);
  } catch (error) {
    setMessage(error.message || "图片加载失败。", true);
  }
}

function setCanvasSize(width, height) {
  [elements.backgroundCanvas, elements.selectionCanvas, elements.overlayCanvas, state.edgeCanvas].forEach((canvas) => {
    canvas.width = width;
    canvas.height = height;
  });
  state.edgeDirty = true;
  clearOverlay();
  applyCanvasZoom({ preserveCenter: false });
}

function onPointerDown(event) {
  if (!state.imageLoaded) {
    return;
  }

  event.preventDefault();
  if (state.panMode) {
    startCanvasPan(event);
    return;
  }

  const point = getCanvasPoint(event);
  state.pointerPoint = point;
  renderOverlay();

  if (state.tool === "magic") {
    clearShapeEdit();
    const snapshot = captureSnapshot("魔术棒选择");
    const mode = event.altKey ? "subtract" : event.shiftKey ? "add" : state.selectionMode;
    const result = magicSelect(point.x, point.y, { mode });
    if (result.changed) {
      pushSnapshot(snapshot);
      const action = mode === "add" ? "加选" : mode === "subtract" ? "减选" : "选择";
      const hint = result.transparent && result.ratio > 0.2 ? "已选中透明背景；点反选可得到主体。" : `魔术棒已${action} ${formatPixels(result.pixels)} px。`;
      setMessage(hint, false, true);
    }
    return;
  }

  if (state.tool === "pen") {
    clearShapeEdit();
    addPenPoint(point, event);
    return;
  }

  if (isShapeTool(state.tool)) {
    const hit = getShapeEditHit(point);
    if (hit) {
      state.isDrawing = true;
      state.shapeDrag = {
        ...hit,
        startPoint: point,
        startShape: copyShapeGeometry(state.shapeEdit)
      };
      elements.selectionCanvas.setPointerCapture(event.pointerId);
      renderOverlay();
      return;
    }
  } else {
    clearShapeEdit();
  }

  pushHistory(`${toolLabel(state.tool)}选择`);
  state.isDrawing = true;
  state.startPoint = point;
  state.lastPoint = point;
  elements.selectionCanvas.setPointerCapture(event.pointerId);

  if (isShapeTool(state.tool)) {
    state.selectionSnapshot = selectionCtx.getImageData(
      0,
      0,
      elements.selectionCanvas.width,
      elements.selectionCanvas.height
    );
    state.shapeEdit = {
      tool: state.tool,
      base: cloneImageData(state.selectionSnapshot),
      left: point.x,
      top: point.y,
      width: 0,
      height: 0,
      radius: Number(elements.roundRadius.value || 0)
    };
    drawShapeSelection(point);
    return;
  }

  drawBrush(point, point);
}

function preventCanvasGesture(event) {
  if (!state.imageLoaded) {
    return;
  }

  event.preventDefault();
}

function onPointerMove(event) {
  if (!state.imageLoaded) {
    return;
  }

  event.preventDefault();
  if (state.isPanning) {
    updateCanvasPan(event);
    return;
  }

  const point = getCanvasPoint(event);
  state.pointerPoint = point;
  if (!state.isDrawing) {
    updateSelectionCursor(point);
    renderOverlay();
    return;
  }

  if (state.shapeDrag) {
    updateShapeEditFromDrag(point);
    return;
  }

  if (isShapeTool(state.tool)) {
    drawShapeSelection(point);
    return;
  }

  drawBrush(state.lastPoint || point, point);
  state.lastPoint = point;
}

function onPointerUp(event) {
  if (state.isPanning) {
    stopCanvasPan(event);
    return;
  }

  if (!state.isDrawing) {
    return;
  }

  event.preventDefault();
  if (elements.selectionCanvas.hasPointerCapture(event.pointerId)) {
    elements.selectionCanvas.releasePointerCapture(event.pointerId);
  }

  state.isDrawing = false;
  state.shapeDrag = null;
  state.selectionSnapshot = null;
  state.startPoint = null;
  state.lastPoint = null;
  updateSelectionStats();
  rebuildSelectionEdgeOverlay();
  if (state.shapeEdit && isShapeTool(state.tool)) {
    const bounds = normalizedShapeBounds(state.shapeEdit);
    if (bounds.width < SHAPE_MIN_SIZE || bounds.height < SHAPE_MIN_SIZE) {
      renderEditableShapeSelection();
      clearShapeEdit();
    }
  }
  renderOverlay();
  if (state.shapeEdit && isShapeTool(state.tool)) {
    setMessage(t("shapeEditable"), false, true);
  }
}

function onPointerLeave(event) {
  if (state.isPanning) {
    stopCanvasPan(event);
    return;
  }

  if (state.isDrawing) {
    onPointerUp(event);
  }
  state.pointerPoint = null;
  elements.selectionCanvas.style.cursor = "";
  renderOverlay();
}

function drawBrush(from, to) {
  const size = Number(elements.brushSize.value || 36);
  selectionCtx.save();
  selectionCtx.lineCap = "round";
  selectionCtx.lineJoin = "round";
  selectionCtx.lineWidth = size;
  selectionCtx.globalCompositeOperation = state.tool === "erase" ? "destination-out" : "source-over";
  selectionCtx.strokeStyle = state.tool === "erase" ? "rgba(0, 0, 0, 1)" : MASK_COLOR;
  selectionCtx.beginPath();
  selectionCtx.moveTo(from.x, from.y);
  selectionCtx.lineTo(to.x, to.y);
  selectionCtx.stroke();
  selectionCtx.restore();
  state.edgeDirty = true;
  renderOverlay();
}

function isShapeTool(tool) {
  return tool === "rect" || tool === "circle" || tool === "roundRect";
}

function drawShapeSelection(currentPoint) {
  if (!state.selectionSnapshot || !state.startPoint) {
    return;
  }

  const left = Math.min(state.startPoint.x, currentPoint.x);
  const top = Math.min(state.startPoint.y, currentPoint.y);
  const width = Math.abs(currentPoint.x - state.startPoint.x);
  const height = Math.abs(currentPoint.y - state.startPoint.y);

  if (!state.shapeEdit) {
    state.shapeEdit = {
      tool: state.tool,
      base: cloneImageData(state.selectionSnapshot),
      left,
      top,
      width,
      height,
      radius: Number(elements.roundRadius.value || 0)
    };
  } else {
    Object.assign(state.shapeEdit, {
      tool: state.tool,
      left,
      top,
      width,
      height,
      radius: state.tool === "roundRect" ? Number(elements.roundRadius.value || 0) : state.shapeEdit.radius
    });
  }

  renderEditableShapeSelection();
  renderOverlay();
}

function renderEditableShapeSelection() {
  const shape = state.shapeEdit;
  if (!shape?.base) {
    return;
  }

  selectionCtx.putImageData(shape.base, 0, 0);
  fillEditableShape(selectionCtx, shape);
  state.edgeDirty = true;
}

function fillEditableShape(ctx, shape) {
  const bounds = normalizedShapeBounds(shape);
  if (bounds.width <= 0 || bounds.height <= 0) {
    return;
  }

  ctx.save();
  ctx.fillStyle = MASK_COLOR;
  if (shape.tool === "circle") {
    ctx.beginPath();
    ctx.ellipse(
      bounds.left + bounds.width / 2,
      bounds.top + bounds.height / 2,
      bounds.width / 2,
      bounds.height / 2,
      0,
      0,
      Math.PI * 2
    );
    ctx.fill();
  } else if (shape.tool === "roundRect") {
    roundedRectPath(ctx, bounds.left, bounds.top, bounds.width, bounds.height, shape.radius || 0);
    ctx.fill();
  } else {
    ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
  }
  ctx.restore();
}

function clearShapeEdit() {
  state.shapeEdit = null;
  state.shapeDrag = null;
  elements.selectionCanvas.style.cursor = "";
}

function copyShapeGeometry(shape) {
  if (!shape) {
    return null;
  }

  return {
    tool: shape.tool,
    left: shape.left,
    top: shape.top,
    width: shape.width,
    height: shape.height,
    radius: shape.radius || 0
  };
}

function cloneImageData(imageData) {
  return new ImageData(new Uint8ClampedArray(imageData.data), imageData.width, imageData.height);
}

function normalizedShapeBounds(shape) {
  const left = Math.min(shape.left, shape.left + shape.width);
  const top = Math.min(shape.top, shape.top + shape.height);
  return {
    left,
    top,
    width: Math.abs(shape.width),
    height: Math.abs(shape.height)
  };
}

function getShapeHandles(shape) {
  const bounds = normalizedShapeBounds(shape);
  const right = bounds.left + bounds.width;
  const bottom = bounds.top + bounds.height;
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  return [
    { name: "nw", x: bounds.left, y: bounds.top },
    { name: "n", x: centerX, y: bounds.top },
    { name: "ne", x: right, y: bounds.top },
    { name: "e", x: right, y: centerY },
    { name: "se", x: right, y: bottom },
    { name: "s", x: centerX, y: bottom },
    { name: "sw", x: bounds.left, y: bottom },
    { name: "w", x: bounds.left, y: centerY }
  ];
}

function getShapeEditHit(point) {
  if (!state.shapeEdit || state.shapeEdit.tool !== state.tool) {
    return null;
  }

  const handleSize = Math.max(8, canvasLineWidth(12));
  for (const handle of getShapeHandles(state.shapeEdit)) {
    if (Math.abs(point.x - handle.x) <= handleSize && Math.abs(point.y - handle.y) <= handleSize) {
      return { mode: "resize", handle: handle.name };
    }
  }

  if (pointInShapeEdit(point)) {
    return { mode: "move", handle: null };
  }
  return null;
}

function pointInShapeEdit(point) {
  const shape = state.shapeEdit;
  if (!shape) {
    return false;
  }

  const bounds = normalizedShapeBounds(shape);
  if (
    point.x < bounds.left ||
    point.x > bounds.left + bounds.width ||
    point.y < bounds.top ||
    point.y > bounds.top + bounds.height
  ) {
    return false;
  }

  if (shape.tool !== "circle") {
    return true;
  }

  const radiusX = bounds.width / 2;
  const radiusY = bounds.height / 2;
  if (radiusX <= 0 || radiusY <= 0) {
    return false;
  }
  const normalizedX = (point.x - (bounds.left + radiusX)) / radiusX;
  const normalizedY = (point.y - (bounds.top + radiusY)) / radiusY;
  return normalizedX * normalizedX + normalizedY * normalizedY <= 1;
}

function updateShapeEditFromDrag(point) {
  const drag = state.shapeDrag;
  const shape = state.shapeEdit;
  if (!drag?.startShape || !shape) {
    return;
  }

  const dx = point.x - drag.startPoint.x;
  const dy = point.y - drag.startPoint.y;
  const canvasWidth = elements.selectionCanvas.width;
  const canvasHeight = elements.selectionCanvas.height;
  const start = normalizedShapeBounds(drag.startShape);
  let left = start.left;
  let top = start.top;
  let right = start.left + start.width;
  let bottom = start.top + start.height;

  if (drag.mode === "move") {
    const moveX = clamp(dx, -left, canvasWidth - right);
    const moveY = clamp(dy, -top, canvasHeight - bottom);
    left += moveX;
    right += moveX;
    top += moveY;
    bottom += moveY;
  } else {
    if (drag.handle.includes("w")) {
      left = clamp(left + dx, 0, right - SHAPE_MIN_SIZE);
    }
    if (drag.handle.includes("e")) {
      right = clamp(right + dx, left + SHAPE_MIN_SIZE, canvasWidth);
    }
    if (drag.handle.includes("n")) {
      top = clamp(top + dy, 0, bottom - SHAPE_MIN_SIZE);
    }
    if (drag.handle.includes("s")) {
      bottom = clamp(bottom + dy, top + SHAPE_MIN_SIZE, canvasHeight);
    }
  }

  Object.assign(shape, {
    left,
    top,
    width: right - left,
    height: bottom - top
  });
  renderEditableShapeSelection();
  renderOverlay();
}

function updateSelectionCursor(point) {
  if (!state.shapeEdit || !isShapeTool(state.tool)) {
    elements.selectionCanvas.style.cursor = "";
    return;
  }

  const hit = getShapeEditHit(point);
  if (!hit) {
    elements.selectionCanvas.style.cursor = "";
    return;
  }

  const resizeCursors = {
    n: "ns-resize",
    s: "ns-resize",
    e: "ew-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    se: "nwse-resize",
    ne: "nesw-resize",
    sw: "nesw-resize"
  };
  elements.selectionCanvas.style.cursor = hit.mode === "move" ? "move" : resizeCursors[hit.handle] || "";
}

function roundedRectPath(ctx, x, y, width, height, radius) {
  const r = clamp(radius, 0, Math.min(width, height) / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function startCanvasPan(event) {
  state.isPanning = true;
  state.panStart = {
    x: event.clientX,
    y: event.clientY,
    left: elements.canvasStage.scrollLeft,
    top: elements.canvasStage.scrollTop
  };
  elements.canvasStage.classList.add("panning");
  elements.selectionCanvas.setPointerCapture(event.pointerId);
}

function updateCanvasPan(event) {
  if (!state.panStart) {
    return;
  }

  const dx = event.clientX - state.panStart.x;
  const dy = event.clientY - state.panStart.y;
  elements.canvasStage.scrollLeft = state.panStart.left - dx;
  elements.canvasStage.scrollTop = state.panStart.top - dy;
}

function stopCanvasPan(event) {
  if (event && elements.selectionCanvas.hasPointerCapture(event.pointerId)) {
    elements.selectionCanvas.releasePointerCapture(event.pointerId);
  }

  state.isPanning = false;
  state.panStart = null;
  elements.canvasStage.classList.remove("panning");
}

function addPenPoint(point, event) {
  if (state.penPoints.length >= 3 && isNearPenStart(point)) {
    finishPenSelection();
    return;
  }

  state.penPoints.push(point);
  syncPenButtons();
  renderOverlay();

  if (event.detail >= 2 && state.penPoints.length >= 3) {
    finishPenSelection();
    return;
  }

  setMessage(t("penPointAdded", { count: state.penPoints.length }), false, true);
}

function finishPenSelection() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  if (state.penPoints.length < 3) {
    setMessage(t("penNeedThree"), true);
    return;
  }

  pushHistory(`${t("pen")}选择`);
  selectionCtx.save();
  selectionCtx.fillStyle = MASK_COLOR;
  selectionCtx.beginPath();
  selectionCtx.moveTo(state.penPoints[0].x, state.penPoints[0].y);
  for (let index = 1; index < state.penPoints.length; index += 1) {
    selectionCtx.lineTo(state.penPoints[index].x, state.penPoints[index].y);
  }
  selectionCtx.closePath();
  selectionCtx.fill();
  selectionCtx.restore();

  clearPenPath();
  updateSelectionStats();
  state.edgeDirty = true;
  rebuildSelectionEdgeOverlay();
  renderOverlay();
  setMessage(t("penClosed"), false, true);
}

function undoPenPoint() {
  if (!state.penPoints.length) {
    return;
  }

  state.penPoints.pop();
  syncPenButtons();
  renderOverlay();
  setMessage(t("penPointRemoved"), false, true);
}

function clearPenPath({ showMessage = false } = {}) {
  state.penPoints = [];
  syncPenButtons();
  renderOverlay();
  if (showMessage) {
    setMessage(t("penPathCleared"), false, true);
  }
}

function isNearPenStart(point) {
  const first = state.penPoints[0];
  if (!first) {
    return false;
  }

  const dx = point.x - first.x;
  const dy = point.y - first.y;
  const closeRadius = Math.max(8, canvasLineWidth(14));
  return Math.sqrt(dx * dx + dy * dy) <= closeRadius;
}

function clearOverlay() {
  overlayCtx.clearRect(0, 0, elements.overlayCanvas.width, elements.overlayCanvas.height);
}

function renderOverlay() {
  clearOverlay();
  if (!state.imageLoaded || elements.overlayCanvas.hidden) {
    return;
  }

  if (state.edgeDirty && !state.isDrawing) {
    rebuildSelectionEdgeOverlay();
  }

  if (!state.edgeDirty && state.edgeCanvas.width && state.edgeCanvas.height) {
    const offset = Math.max(1, Math.round(canvasLineWidth(1.5)));
    overlayCtx.save();
    overlayCtx.globalAlpha = 0.78;
    overlayCtx.drawImage(state.edgeCanvas, -offset, 0);
    overlayCtx.drawImage(state.edgeCanvas, offset, 0);
    overlayCtx.drawImage(state.edgeCanvas, 0, -offset);
    overlayCtx.drawImage(state.edgeCanvas, 0, offset);
    overlayCtx.globalAlpha = 1;
    overlayCtx.drawImage(state.edgeCanvas, 0, 0);
    overlayCtx.restore();
  }

  drawShapeEditOverlay();
  drawBrushCursor();
  drawPenPathOverlay();
}

function drawShapeEditOverlay() {
  const shape = state.shapeEdit;
  if (!shape || state.view !== "layers") {
    return;
  }

  const bounds = normalizedShapeBounds(shape);
  if (bounds.width < SHAPE_MIN_SIZE || bounds.height < SHAPE_MIN_SIZE) {
    return;
  }

  const handleSize = Math.max(8, canvasLineWidth(9));
  overlayCtx.save();
  overlayCtx.lineWidth = canvasLineWidth(1.4);
  overlayCtx.strokeStyle = "rgba(255, 255, 255, 0.96)";
  overlayCtx.setLineDash([canvasLineWidth(7), canvasLineWidth(4)]);
  overlayCtx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
  overlayCtx.strokeStyle = "rgba(37, 99, 235, 0.98)";
  overlayCtx.setLineDash([]);
  overlayCtx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);

  for (const handle of getShapeHandles(shape)) {
    overlayCtx.fillStyle = SHAPE_HANDLES.includes(handle.name)
      ? "rgba(255, 255, 255, 0.96)"
      : "rgba(255, 255, 255, 0.78)";
    overlayCtx.strokeStyle = "rgba(37, 99, 235, 0.98)";
    overlayCtx.lineWidth = canvasLineWidth(1.3);
    overlayCtx.beginPath();
    overlayCtx.rect(handle.x - handleSize / 2, handle.y - handleSize / 2, handleSize, handleSize);
    overlayCtx.fill();
    overlayCtx.stroke();
  }
  overlayCtx.restore();
}

function rebuildSelectionEdgeOverlay() {
  if (!state.imageLoaded || !elements.selectionCanvas.width || !elements.selectionCanvas.height) {
    return;
  }

  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  if (state.edgeCanvas.width !== width || state.edgeCanvas.height !== height) {
    state.edgeCanvas.width = width;
    state.edgeCanvas.height = height;
  }

  const edgeCtx = state.edgeCanvas.getContext("2d");
  edgeCtx.clearRect(0, 0, width, height);
  if (!state.selectionPixels) {
    state.edgeDirty = false;
    return;
  }

  const source = selectionCtx.getImageData(0, 0, width, height).data;
  const output = edgeCtx.createImageData(width, height);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      if (source[index * 4 + 3] <= MASK_THRESHOLD) {
        continue;
      }

      const left = x === 0 || source[(index - 1) * 4 + 3] <= MASK_THRESHOLD;
      const right = x === width - 1 || source[(index + 1) * 4 + 3] <= MASK_THRESHOLD;
      const top = y === 0 || source[(index - width) * 4 + 3] <= MASK_THRESHOLD;
      const bottom = y === height - 1 || source[(index + width) * 4 + 3] <= MASK_THRESHOLD;
      if (!left && !right && !top && !bottom) {
        continue;
      }

      const pixel = index * 4;
      output.data[pixel] = 255;
      output.data[pixel + 1] = 255;
      output.data[pixel + 2] = 255;
      output.data[pixel + 3] = 245;
    }
  }

  edgeCtx.putImageData(output, 0, 0);
  state.edgeDirty = false;
}

function drawBrushCursor() {
  if (!state.pointerPoint || (state.tool !== "brush" && state.tool !== "erase")) {
    return;
  }

  const radius = Number(elements.brushSize.value || 36) / 2;
  overlayCtx.save();
  overlayCtx.beginPath();
  overlayCtx.arc(state.pointerPoint.x, state.pointerPoint.y, radius, 0, Math.PI * 2);
  overlayCtx.lineWidth = canvasLineWidth(4);
  overlayCtx.strokeStyle = "rgba(0, 0, 0, 0.56)";
  overlayCtx.stroke();
  overlayCtx.beginPath();
  overlayCtx.arc(state.pointerPoint.x, state.pointerPoint.y, radius, 0, Math.PI * 2);
  overlayCtx.lineWidth = canvasLineWidth(2);
  overlayCtx.strokeStyle = state.tool === "erase" ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)";
  overlayCtx.setLineDash([canvasLineWidth(6), canvasLineWidth(4)]);
  overlayCtx.stroke();
  overlayCtx.restore();
}

function drawPenPathOverlay() {
  if (state.tool !== "pen" || !state.penPoints.length) {
    return;
  }

  const first = state.penPoints[0];
  const last = state.penPoints[state.penPoints.length - 1];
  const closePreview = state.pointerPoint && state.penPoints.length >= 3 && isNearPenStart(state.pointerPoint);

  overlayCtx.save();
  overlayCtx.lineJoin = "round";
  overlayCtx.lineCap = "round";
  overlayCtx.lineWidth = canvasLineWidth(2);
  overlayCtx.strokeStyle = "rgba(255, 255, 255, 0.96)";
  overlayCtx.setLineDash([canvasLineWidth(7), canvasLineWidth(5)]);
  drawOpenPenPath();
  overlayCtx.stroke();

  overlayCtx.lineWidth = canvasLineWidth(4);
  overlayCtx.strokeStyle = "rgba(23, 107, 135, 0.9)";
  overlayCtx.setLineDash([]);
  drawOpenPenPath();
  overlayCtx.stroke();

  if (state.pointerPoint && last) {
    overlayCtx.lineWidth = canvasLineWidth(2);
    overlayCtx.strokeStyle = closePreview ? "rgba(255, 191, 71, 0.95)" : "rgba(23, 107, 135, 0.65)";
    overlayCtx.setLineDash([canvasLineWidth(5), canvasLineWidth(4)]);
    overlayCtx.beginPath();
    overlayCtx.moveTo(last.x, last.y);
    overlayCtx.lineTo(closePreview ? first.x : state.pointerPoint.x, closePreview ? first.y : state.pointerPoint.y);
    overlayCtx.stroke();
  }

  state.penPoints.forEach((point, index) => {
    const radius = index === 0 ? canvasLineWidth(6) : canvasLineWidth(5);
    overlayCtx.beginPath();
    overlayCtx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    overlayCtx.fillStyle = index === 0 ? "rgba(255, 191, 71, 0.96)" : "rgba(255, 255, 255, 0.96)";
    overlayCtx.fill();
    overlayCtx.lineWidth = canvasLineWidth(2);
    overlayCtx.strokeStyle = "rgba(23, 107, 135, 0.95)";
    overlayCtx.stroke();
  });

  overlayCtx.restore();

  function drawOpenPenPath() {
    overlayCtx.beginPath();
    overlayCtx.moveTo(first.x, first.y);
    for (let index = 1; index < state.penPoints.length; index += 1) {
      overlayCtx.lineTo(state.penPoints[index].x, state.penPoints[index].y);
    }
  }
}

function canvasLineWidth(cssPixels) {
  const rect = elements.overlayCanvas.getBoundingClientRect();
  const scale = rect.width > 0 ? rect.width / Math.max(1, elements.overlayCanvas.width) : 1;
  return Math.max(1, cssPixels / scale);
}

function magicSelect(x, y, { mode = "replace" } = {}) {
  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const source = backgroundCtx.getImageData(0, 0, width, height).data;
  const existingMask = mode === "replace"
    ? new Uint8Array(width * height)
    : getSelectionMaskArray();
  let deltaMask = new Uint8Array(width * height);
  const seedIndex = (y * width + x) * 4;
  const target = [
    source[seedIndex],
    source[seedIndex + 1],
    source[seedIndex + 2],
    source[seedIndex + 3]
  ];
  const targetProfile = colorProfile(target[0], target[1], target[2]);
  const tolerance = Number(elements.magicTolerance.value || 28);
  const grow = Number(elements.magicGrow.value || 0);
  const localLimit = tolerance * 1.48 + 8;
  const edgeLimit = tolerance * 1.72 + 18;
  const seedTransparent = target[3] < 96;
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;
  let selectedPixels = 0;

  queue[tail++] = y * width + x;
  visited[y * width + x] = 1;

  while (head < tail) {
    const index = queue[head++];
    const px = index % width;
    const py = Math.floor(index / width);
    const colorIndex = index * 4;
    const alpha = source[colorIndex + 3];

    if (seedTransparent) {
      if (alpha >= 96) {
        continue;
      }
    } else if (alpha < 32 || !isMagicColorMatch(source, colorIndex, target, targetProfile, tolerance)) {
      continue;
    }

    deltaMask[index] = 1;
    selectedPixels += 1;

    pushNeighbor(px - 1, py, index);
    pushNeighbor(px + 1, py, index);
    pushNeighbor(px, py - 1, index);
    pushNeighbor(px, py + 1, index);
  }

  if (selectedPixels === 0) {
    setMessage("魔术棒没有找到可选区域，请提高一点容差。", true);
    return { changed: false, pixels: 0 };
  }

  if (!seedTransparent && selectedPixels > width * height * 0.62) {
    setMessage("这次魔术棒会选中大半张图，已取消。请降低容差或点在更明确的颜色区域。", true);
    return { changed: false, pixels: 0 };
  }

  if (grow > 0) {
    deltaMask = dilateMask(deltaMask, width, height, grow);
  }
  deltaMask = smoothMask(deltaMask, width, height, 1);

  for (let index = 0; index < existingMask.length; index += 1) {
    if (mode === "subtract" && deltaMask[index]) {
      existingMask[index] = 0;
    } else if (deltaMask[index]) {
      existingMask[index] = 1;
    }
  }

  applySelectionMaskArray(existingMask);
  const nextPixels = countMaskPixels(deltaMask);
  return {
    changed: true,
    pixels: nextPixels,
    transparent: seedTransparent,
    ratio: nextPixels / (width * height)
  };

  function pushNeighbor(nx, ny, fromIndex) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) {
      return;
    }
    const next = ny * width + nx;
    if (visited[next]) {
      return;
    }

    const nextPixel = next * 4;
    const fromPixel = fromIndex * 4;
    if (!seedTransparent) {
      const localDistance = simpleColorDistance(source, fromPixel, nextPixel);
      if (localDistance > localLimit || localDistance > edgeLimit) {
        return;
      }
    }

    visited[next] = 1;
    queue[tail++] = next;
  }
}

function colorDistance(data, index, target) {
  const dr = data[index] - target[0];
  const dg = data[index + 1] - target[1];
  const db = data[index + 2] - target[2];
  const luminance = 0.2126 * dr + 0.7152 * dg + 0.0722 * db;
  const chromaA = dr - dg;
  const chromaB = db - dg;
  return Math.sqrt(
    0.42 * dr * dr +
    0.68 * dg * dg +
    0.42 * db * db +
    0.38 * luminance * luminance +
    0.16 * chromaA * chromaA +
    0.16 * chromaB * chromaB
  );
}

function colorProfile(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  const saturation = max === 0 ? 0 : chroma / max;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  let hue = 0;

  if (chroma > 0) {
    if (max === r) {
      hue = ((g - b) / chroma) % 6;
    } else if (max === g) {
      hue = (b - r) / chroma + 2;
    } else {
      hue = (r - g) / chroma + 4;
    }
    hue *= 60;
    if (hue < 0) {
      hue += 360;
    }
  }

  return { hue, luminance, saturation };
}

function hueDistance(a, b) {
  const delta = Math.abs(a - b) % 360;
  return Math.min(delta, 360 - delta);
}

function isMagicColorMatch(data, index, target, targetProfile, tolerance) {
  const distance = colorDistance(data, index, target);
  const profile = colorProfile(data[index], data[index + 1], data[index + 2]);
  const luminanceDiff = Math.abs(profile.luminance - targetProfile.luminance);
  const distanceLimit = tolerance * 1.12 + 18;
  const luminanceLimit = tolerance * 1.08 + 14;

  if (distance > distanceLimit || luminanceDiff > luminanceLimit) {
    return false;
  }

  const targetIsNeutral = targetProfile.saturation < 0.12;
  const pixelIsNeutral = profile.saturation < 0.13;

  if (targetIsNeutral) {
    return pixelIsNeutral || (profile.saturation < 0.2 && distance < tolerance * 0.72 + 12);
  }

  if (pixelIsNeutral) {
    return false;
  }

  const hueLimit = Math.max(9, 34 - tolerance * 0.16);
  if (hueDistance(profile.hue, targetProfile.hue) > hueLimit) {
    return false;
  }

  return Math.abs(profile.saturation - targetProfile.saturation) <= 0.34;
}

function simpleColorDistance(data, a, b) {
  const dr = data[a] - data[b];
  const dg = data[a + 1] - data[b + 1];
  const db = data[a + 2] - data[b + 2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function getSelectionMaskArray() {
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  const data = selectionCtx.getImageData(0, 0, width, height).data;
  const mask = new Uint8Array(width * height);

  for (let index = 0; index < mask.length; index += 1) {
    mask[index] = data[index * 4 + 3] > MASK_THRESHOLD ? 1 : 0;
  }

  return mask;
}

function applySelectionMaskArray(mask) {
  clearShapeEdit();
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  const image = selectionCtx.createImageData(width, height);

  for (let index = 0; index < mask.length; index += 1) {
    if (!mask[index]) {
      continue;
    }
    const pixel = index * 4;
    image.data[pixel] = 23;
    image.data[pixel + 1] = 107;
    image.data[pixel + 2] = 135;
    image.data[pixel + 3] = 118;
  }

  selectionCtx.putImageData(image, 0, 0);
  updateSelectionStats();
  state.edgeDirty = true;
  renderOverlay();
  syncRecoveryButton();
}

function dilateMask(mask, width, height, iterations = 1) {
  let current = mask;

  for (let pass = 0; pass < iterations; pass += 1) {
    const next = new Uint8Array(current);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = y * width + x;
        if (current[index]) {
          continue;
        }

        if (
          (x > 0 && current[index - 1]) ||
          (x < width - 1 && current[index + 1]) ||
          (y > 0 && current[index - width]) ||
          (y < height - 1 && current[index + width])
        ) {
          next[index] = 1;
        }
      }
    }
    current = next;
  }

  return current;
}

function erodeMask(mask, width, height, iterations = 1) {
  let current = mask;

  for (let pass = 0; pass < iterations; pass += 1) {
    const next = new Uint8Array(current);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = y * width + x;
        if (!current[index]) {
          continue;
        }

        if (
          x === 0 ||
          y === 0 ||
          x === width - 1 ||
          y === height - 1 ||
          !current[index - 1] ||
          !current[index + 1] ||
          !current[index - width] ||
          !current[index + width]
        ) {
          next[index] = 0;
        }
      }
    }
    current = next;
  }

  return current;
}

function smoothMask(mask, width, height) {
  return erodeMask(dilateMask(mask, width, height, 1), width, height, 1);
}

function countMaskPixels(mask) {
  let count = 0;
  for (let index = 0; index < mask.length; index += 1) {
    if (mask[index]) {
      count += 1;
    }
  }
  return count;
}

function fillMaskHoles(mask, width, height) {
  const outside = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  for (let x = 0; x < width; x += 1) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    enqueueNeighbor(x - 1, y);
    enqueueNeighbor(x + 1, y);
    enqueueNeighbor(x, y - 1);
    enqueueNeighbor(x, y + 1);
  }

  const filled = new Uint8Array(mask);
  for (let index = 0; index < filled.length; index += 1) {
    if (!mask[index] && !outside[index]) {
      filled[index] = 1;
    }
  }

  return filled;

  function enqueue(index) {
    if (index < 0 || index >= mask.length || mask[index] || outside[index]) {
      return;
    }
    outside[index] = 1;
    queue[tail++] = index;
  }

  function enqueueNeighbor(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return;
    }
    enqueue(y * width + x);
  }
}

function invertSelection() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  pushHistory("反选");
  const mask = getSelectionMaskArray();
  for (let index = 0; index < mask.length; index += 1) {
    mask[index] = mask[index] ? 0 : 1;
  }
  applySelectionMaskArray(mask);
  setMessage("已反选当前选区。", false, true);
}

function cleanupSelection() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  if (!hasSelection()) {
    setMessage("当前没有可清理的选区。", true);
    return;
  }

  pushHistory("填洞/平滑");
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  let mask = getSelectionMaskArray();
  mask = fillMaskHoles(mask, width, height);
  mask = erodeMask(dilateMask(mask, width, height, 1), width, height, 1);
  applySelectionMaskArray(mask);
  setMessage("已填洞并平滑选区边缘。", false, true);
}

async function peelAndQuickHeal() {
  if (!ensureReadyForPeelWorkflow(t("peelQuick"))) {
    return;
  }

  rememberPeelStart();
  pushHistory("剥离 + 快速补洞");
  const layer = peelSelection({ clearAfter: false, recordHistory: false });
  if (!layer) {
    return;
  }
  quickHealSelection({ clearAfter: true, recordHistory: false });
}

async function peelAndAiHeal() {
  if (!ensureReadyForPeelWorkflow(t("peelAi"))) {
    return;
  }

  rememberPeelStart();
  pushHistory("剥离 + GPT补洞");
  const layer = peelSelection({ clearAfter: false, recordHistory: false });
  if (!layer) {
    return;
  }
  await aiHealSelection({ clearAfter: true, recordHistory: false });
}

function peelSelection({ clearAfter, recordHistory = false }) {
  if (!ensureReadyWithSelection()) {
    return null;
  }

  if (recordHistory) {
    pushHistory("剥离成图层");
  }

  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const source = state.originalCanvas.getContext("2d").getImageData(0, 0, width, height);
  const mask = selectionCtx.getImageData(0, 0, width, height);
  const layerCanvas = document.createElement("canvas");
  layerCanvas.width = width;
  layerCanvas.height = height;
  const layerCtx = layerCanvas.getContext("2d");
  const output = layerCtx.createImageData(width, height);
  let selectedPixels = 0;

  for (let index = 0; index < mask.data.length; index += 4) {
    const maskAlpha = mask.data[index + 3];
    if (maskAlpha <= MASK_THRESHOLD) {
      continue;
    }

    const alphaScale = Math.min(1, maskAlpha / 118);
    output.data[index] = source.data[index];
    output.data[index + 1] = source.data[index + 1];
    output.data[index + 2] = source.data[index + 2];
    output.data[index + 3] = Math.round(source.data[index + 3] * alphaScale);
    selectedPixels += 1;
  }

  if (selectedPixels === 0) {
    setMessage("当前选择为空。", true);
    return null;
  }

  layerCtx.putImageData(output, 0, 0);
  const name = uniqueLayerName(elements.layerName.value.trim() || "剥离图层");
  const layer = {
    id: crypto.randomUUID(),
    name,
    category: elements.layerCategory.value,
    canvas: layerCanvas,
    visible: true,
    pixels: selectedPixels,
    createdAt: new Date().toISOString()
  };

  state.backgroundPreview = null;
  state.transparentCanvas = null;
  renderBackgroundPreview();
  state.layers.unshift(layer);
  elements.layerName.value = nextLayerName();
  renderLayers();
  clearShapeEdit();

  if (clearAfter) {
    clearSelection({ recordHistory: false });
  } else {
    updateSelectionStats(selectedPixels);
  }

  setMessage(`已创建图层：${name}。`, false, true);
  return layer;
}

function quickHealSelection({ clearAfter, recordHistory = false }) {
  if (!ensureReadyWithSelection()) {
    return false;
  }

  if (recordHistory) {
    pushHistory("快速补洞");
  }

  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const maskCanvas = createBinaryMaskCanvas();
  const fillCanvas = document.createElement("canvas");
  fillCanvas.width = width;
  fillCanvas.height = height;
  const fillCtx = fillCanvas.getContext("2d");
  const filledImage = buildNearestBackgroundFill();
  fillCtx.putImageData(filledImage, 0, 0);

  const smoothCanvas = document.createElement("canvas");
  smoothCanvas.width = width;
  smoothCanvas.height = height;
  const smoothCtx = smoothCanvas.getContext("2d");
  smoothCtx.filter = "blur(5px)";
  smoothCtx.drawImage(fillCanvas, 0, 0);
  smoothCtx.filter = "none";
  fillCtx.clearRect(0, 0, width, height);
  fillCtx.drawImage(smoothCanvas, 0, 0);

  fillCtx.globalCompositeOperation = "destination-in";
  fillCtx.drawImage(maskCanvas, 0, 0);
  fillCtx.globalCompositeOperation = "source-over";

  state.backgroundPreview = null;
  state.transparentCanvas = null;
  renderBackgroundPreview();
  backgroundCtx.drawImage(fillCanvas, 0, 0);
  updatePsdPreview();

  if (clearAfter) {
    clearSelection({ recordHistory: false });
  }

  setMessage(clearAfter ? t("peelRecoveryHint") : "已用本地快速补洞更新背景。", false, true);
  return true;
}

function buildNearestBackgroundFill() {
  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const total = width * height;
  const image = backgroundCtx.getImageData(0, 0, width, height);
  const mask = selectionCtx.getImageData(0, 0, width, height).data;
  const nearest = new Int32Array(total);
  const distance = new Int32Array(total);
  nearest.fill(-1);
  distance.fill(2147483647);

  for (let index = 0; index < total; index += 1) {
    const alpha = mask[index * 4 + 3];
    if (alpha <= MASK_THRESHOLD) {
      nearest[index] = index;
      distance[index] = 0;
    }
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      considerNearest(index, x, y, index - 1, x > 0);
      considerNearest(index, x, y, index - width, y > 0);
      considerNearest(index, x, y, index - width - 1, x > 0 && y > 0);
      considerNearest(index, x, y, index - width + 1, x < width - 1 && y > 0);
    }
  }

  for (let y = height - 1; y >= 0; y -= 1) {
    for (let x = width - 1; x >= 0; x -= 1) {
      const index = y * width + x;
      considerNearest(index, x, y, index + 1, x < width - 1);
      considerNearest(index, x, y, index + width, y < height - 1);
      considerNearest(index, x, y, index + width - 1, x > 0 && y < height - 1);
      considerNearest(index, x, y, index + width + 1, x < width - 1 && y < height - 1);
    }
  }

  const output = new ImageData(new Uint8ClampedArray(image.data), width, height);
  for (let index = 0; index < total; index += 1) {
    const pixel = index * 4;
    if (mask[pixel + 3] <= MASK_THRESHOLD || nearest[index] < 0) {
      continue;
    }

    const sourcePixel = nearest[index] * 4;
    output.data[pixel] = image.data[sourcePixel];
    output.data[pixel + 1] = image.data[sourcePixel + 1];
    output.data[pixel + 2] = image.data[sourcePixel + 2];
    output.data[pixel + 3] = image.data[pixel + 3];
  }

  return output;

  function considerNearest(index, x, y, candidate, isValid) {
    if (!isValid || nearest[candidate] < 0) {
      return;
    }

    const source = nearest[candidate];
    const sx = source % width;
    const sy = Math.floor(source / width);
    const dx = x - sx;
    const dy = y - sy;
    const nextDistance = dx * dx + dy * dy;
    if (nextDistance < distance[index]) {
      nearest[index] = source;
      distance[index] = nextDistance;
    }
  }
}

async function aiHealSelection({ clearAfter, recordHistory = false }) {
  if (!ensureReadyWithSelection()) {
    return false;
  }

  if (recordHistory) {
    pushHistory("GPT补洞");
  }

  setBusy(true);
  setMessage("正在调用 GPT 图像编辑补洞，复杂图片可能需要一两分钟。");
  setAiProgress(8, "aiProgressPreparing");

  try {
    const baseCanvas = cloneCanvas(elements.backgroundCanvas);
    const selectedMaskCanvas = createBinaryMaskCanvas();
    const openAiMaskCanvas = createOpenAiEditMaskCanvas();
    const imageBlob = await canvasToBlob(baseCanvas);
    const maskBlob = await canvasToBlob(openAiMaskCanvas);
    const formData = new FormData();
    formData.append("image", imageBlob, "source.png");
    formData.append("mask", maskBlob, "mask.png");
    formData.append("prompt", elements.inpaintPrompt.value.trim());
    formData.append("model", elements.imageModel.value);
    formData.append("quality", elements.imageQuality.value);

    setAiProgress(32, "aiProgressUploading");
    await nextPaint();
    setAiProgress(52, "aiProgressWaiting", true);
    const response = await fetch("/api/fill-background", {
      method: "POST",
      body: formData
    });
    setAiProgress(72, "aiProgressWaiting");
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "GPT补洞失败。");
    }

    const image = await loadImage(`data:image/png;base64,${data.image.b64}`);
    setAiProgress(88, "aiProgressMerging");
    const mergedCanvas = mergeMaskedAiResult(baseCanvas, image, selectedMaskCanvas);
    state.backgroundPreview = null;
    state.transparentCanvas = null;
    renderBackgroundPreview();
    backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
    backgroundCtx.drawImage(mergedCanvas, 0, 0);
    updatePsdPreview();

    if (clearAfter) {
      clearSelection({ recordHistory: false });
    }

    const requestId = data.requestId ? ` Request ID: ${data.requestId}` : "";
    setAiProgress(100, "aiProgressDone");
    setMessage(`GPT补洞完成，未选中区域已保留原图。${requestId}`, false, true);
    return true;
  } catch (error) {
    setMessage(error.message || "GPT补洞失败。", true);
    return false;
  } finally {
    setBusy(false);
    window.setTimeout(() => {
      hideAiProgress();
    }, 850);
  }
}

function createBinaryMaskCanvas() {
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  const source = selectionCtx.getImageData(0, 0, width, height);
  const maskCanvas = document.createElement("canvas");
  maskCanvas.width = width;
  maskCanvas.height = height;
  const maskCtx = maskCanvas.getContext("2d");
  const output = maskCtx.createImageData(width, height);

  for (let index = 0; index < source.data.length; index += 4) {
    if (source.data[index + 3] <= MASK_THRESHOLD) {
      continue;
    }
    output.data[index] = 255;
    output.data[index + 1] = 255;
    output.data[index + 2] = 255;
    output.data[index + 3] = 255;
  }

  maskCtx.putImageData(output, 0, 0);
  return maskCanvas;
}

function createOpenAiEditMaskCanvas() {
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  const source = selectionCtx.getImageData(0, 0, width, height);
  const maskCanvas = document.createElement("canvas");
  maskCanvas.width = width;
  maskCanvas.height = height;
  const maskCtx = maskCanvas.getContext("2d");
  const output = maskCtx.createImageData(width, height);

  for (let index = 0; index < source.data.length; index += 4) {
    const selected = source.data[index + 3] > MASK_THRESHOLD;
    output.data[index] = 255;
    output.data[index + 1] = 255;
    output.data[index + 2] = 255;
    output.data[index + 3] = selected ? 0 : 255;
  }

  maskCtx.putImageData(output, 0, 0);
  return maskCanvas;
}

function mergeMaskedAiResult(baseCanvas, generatedImage, maskCanvas) {
  const width = baseCanvas.width;
  const height = baseCanvas.height;
  const result = cloneCanvas(baseCanvas);
  const patchCanvas = document.createElement("canvas");
  patchCanvas.width = width;
  patchCanvas.height = height;
  const patchCtx = patchCanvas.getContext("2d");
  patchCtx.drawImage(generatedImage, 0, 0, width, height);
  patchCtx.globalCompositeOperation = "destination-in";
  patchCtx.drawImage(maskCanvas, 0, 0, width, height);
  patchCtx.globalCompositeOperation = "source-over";
  result.getContext("2d").drawImage(patchCanvas, 0, 0);
  return result;
}

function clearSelection({ recordHistory = false } = {}) {
  if (recordHistory && state.imageLoaded && hasSelection()) {
    pushHistory("清空选择");
  }

  clearShapeEdit();
  selectionCtx.clearRect(0, 0, elements.selectionCanvas.width, elements.selectionCanvas.height);
  updateSelectionStats(0);
  state.edgeDirty = true;
  renderOverlay();
}

function resetCanvas() {
  if (!state.imageLoaded) {
    return;
  }

  pushHistory("重置画布");
  backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
  backgroundCtx.drawImage(state.originalCanvas, 0, 0);
  clearSelection({ recordHistory: false });
  clearPenPath();
  clearShapeEdit();
  state.layers = [];
  state.recoverySnapshot = null;
  state.backgroundPreview = null;
  state.transparentCanvas = null;
  renderBackgroundPreview();
  renderLayers();
  syncRecoveryButton();
  elements.layerName.value = "剥离图层 1";
  setMessage("画布已重置到原图。");
}

function removeSolidBackground() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  const source = cloneCanvas(state.originalCanvas);
  const result = createSolidBackgroundRemovedCanvas(source);
  if (!result.removedPixels) {
    setMessage("没有检测到匹配的连通纯色背景，请调高颜色容差或选择自定义颜色。", true);
    return;
  }

  state.backgroundPreview = {
    canvas: cloneCanvas(result.canvas),
    removedPixels: result.removedPixels
  };
  state.transparentCanvas = cloneCanvas(result.canvas);
  renderBackgroundPreview();
  setMessage(t("bgPreviewReady", { count: formatPixels(result.removedPixels) }), false, true);
}

function applySolidBackgroundPreview() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  if (!state.backgroundPreview) {
    setMessage(t("bgPreviewMissing"), true);
    return;
  }

  pushHistory("应用背景移除预览");
  backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
  backgroundCtx.drawImage(state.backgroundPreview.canvas, 0, 0);
  state.layers = [];
  state.transparentCanvas = cloneCanvas(state.backgroundPreview.canvas);
  const removedPixels = state.backgroundPreview.removedPixels;
  state.backgroundPreview = null;
  clearSelection({ recordHistory: false });
  renderBackgroundPreview();
  renderLayers();
  setMessage(t("bgPreviewApplied", { count: formatPixels(removedPixels) }), false, true);
}

function resetSolidBackgroundWorkflow() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
  backgroundCtx.drawImage(state.originalCanvas, 0, 0);
  clearSelection({ recordHistory: false });
  state.layers = [];
  state.backgroundPreview = null;
  state.transparentCanvas = null;
  renderBackgroundPreview();
  renderLayers();
  setMessage(t("bgPreviewCleared"), false, true);
}

function downloadTransparentPng() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  const source = state.backgroundPreview?.canvas || state.transparentCanvas;
  if (!source) {
    setMessage(t("bgPreviewMissing"), true);
    return;
  }

  const output = buildRatioOutputCanvas(source, elements.bgOutputRatio.value, Number(elements.bgPadding.value || 0.06));
  output.toBlob((blob) => {
    if (!blob) {
      setMessage("透明 PNG 下载失败。", true);
      return;
    }
    downloadBlob(blob, `${safeBaseName(state.imageName)}-transparent-${safeRatioName(elements.bgOutputRatio.value)}.png`);
    setMessage(t("transparentDownloaded"), false, true);
  }, "image/png");
}

function createSolidBackgroundRemovedCanvas(sourceCanvas) {
  const width = sourceCanvas.width;
  const height = sourceCanvas.height;
  const ctx = sourceCanvas.getContext("2d", { willReadFrequently: true });
  const image = ctx.getImageData(0, 0, width, height);
  const target = selectedBackgroundColor();
  const tolerance = Number(elements.bgTolerance.value || 36);
  const feather = Number(elements.bgFeather.value || 1);
  const mask = findConnectedSolidBackgroundMask(image.data, width, height, target, tolerance);
  softenBackgroundMask(mask, image.data, width, height, target, tolerance, feather);

  let removedPixels = 0;
  for (let index = 0; index < mask.length; index += 1) {
    const alpha = mask[index];
    if (alpha <= 0) {
      continue;
    }

    const pixel = index * 4;
    const nextAlpha = Math.max(0, image.data[pixel + 3] - alpha);
    image.data[pixel + 3] = nextAlpha;
    if (nextAlpha === 0) {
      image.data[pixel] = 0;
      image.data[pixel + 1] = 0;
      image.data[pixel + 2] = 0;
      removedPixels += 1;
    }
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d").putImageData(image, 0, 0);
  return { canvas, removedPixels };
}

function selectedBackgroundColor() {
  const preset = elements.bgPreset.value;
  if (preset === "black") {
    return [0, 0, 0];
  }
  if (preset === "green") {
    return [0, 255, 0];
  }
  if (preset === "custom") {
    return hexToRgb(elements.bgCustomColor.value);
  }
  return [255, 255, 255];
}

function syncBackgroundColorControls() {
  const preset = elements.bgPreset.value;
  const presetColors = {
    white: "#ffffff",
    black: "#000000",
    green: "#00ff00"
  };

  if (presetColors[preset]) {
    elements.bgCustomColor.value = presetColors[preset];
  }
}

function invalidateBackgroundPreview() {
  if (!state.backgroundPreview && !state.transparentCanvas) {
    renderBackgroundPreview();
    return;
  }

  state.backgroundPreview = null;
  state.transparentCanvas = null;
  renderBackgroundPreview();
}

function renderBackgroundPreview() {
  const source = state.backgroundPreview?.canvas || state.transparentCanvas;
  elements.applySolidBgButton.disabled = !state.backgroundPreview;
  elements.downloadTransparentButton.disabled = !source;

  if (!source) {
    elements.bgPreviewCanvas.hidden = true;
    elements.bgPreviewEmpty.hidden = false;
    const previewCtx = elements.bgPreviewCanvas.getContext("2d");
    previewCtx.clearRect(0, 0, elements.bgPreviewCanvas.width, elements.bgPreviewCanvas.height);
    return;
  }

  const preview = buildRatioOutputCanvas(source, elements.bgOutputRatio.value, Number(elements.bgPadding.value || 0.06));
  elements.bgPreviewCanvas.width = preview.width;
  elements.bgPreviewCanvas.height = preview.height;
  const previewCtx = elements.bgPreviewCanvas.getContext("2d");
  previewCtx.clearRect(0, 0, preview.width, preview.height);
  previewCtx.drawImage(preview, 0, 0);
  elements.bgPreviewCanvas.hidden = false;
  elements.bgPreviewEmpty.hidden = true;
}

function findConnectedSolidBackgroundMask(data, width, height, target, tolerance) {
  const total = width * height;
  const visited = new Uint8Array(total);
  const mask = new Uint8ClampedArray(total);
  const queue = new Int32Array(total);
  let head = 0;
  let tail = 0;

  for (let x = 0; x < width; x += 1) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const index = queue[head++];
    mask[index] = 255;
    const x = index % width;
    const y = Math.floor(index / width);
    enqueueNeighbor(x - 1, y);
    enqueueNeighbor(x + 1, y);
    enqueueNeighbor(x, y - 1);
    enqueueNeighbor(x, y + 1);
  }

  return mask;

  function enqueue(index) {
    if (index < 0 || index >= total || visited[index]) {
      return;
    }
    visited[index] = 1;
    if (isBackgroundLike(data, index * 4, target, tolerance)) {
      queue[tail++] = index;
    }
  }

  function enqueueNeighbor(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return;
    }
    enqueue(y * width + x);
  }
}

function softenBackgroundMask(mask, data, width, height, target, tolerance, feather) {
  if (feather <= 0) {
    return;
  }

  for (let pass = 0; pass < feather; pass += 1) {
    const next = new Uint8ClampedArray(mask);
    for (let y = 1; y < height - 1; y += 1) {
      for (let x = 1; x < width - 1; x += 1) {
        const index = y * width + x;
        if (mask[index] === 255) {
          continue;
        }

        const pixel = index * 4;
        const close = isBackgroundLike(data, pixel, target, tolerance + 36 + feather * 8);
        if (!close) {
          continue;
        }

        const neighborAlpha = Math.max(
          mask[index - 1],
          mask[index + 1],
          mask[index - width],
          mask[index + width]
        );
        if (neighborAlpha > 0) {
          next[index] = Math.max(next[index], Math.round(neighborAlpha * 0.45));
        }
      }
    }
    mask.set(next);
  }
}

function isBackgroundLike(data, pixel, target, tolerance) {
  const alpha = data[pixel + 3];
  if (alpha === 0) {
    return true;
  }

  const dr = data[pixel] - target[0];
  const dg = data[pixel + 1] - target[1];
  const db = data[pixel + 2] - target[2];
  const luminance = Math.abs(0.2126 * dr + 0.7152 * dg + 0.0722 * db);
  const distance = Math.sqrt(dr * dr + dg * dg + db * db);
  return distance <= tolerance * 1.75 + 8 && luminance <= tolerance * 1.9 + 12;
}

function buildRatioOutputCanvas(sourceCanvas, ratioValue, padding) {
  const bounds = findAlphaBounds(sourceCanvas);
  if (!bounds) {
    return cloneCanvas(sourceCanvas);
  }

  const sourceRatio = sourceCanvas.width / sourceCanvas.height;
  const contentWidth = bounds.right - bounds.left + 1;
  const contentHeight = bounds.bottom - bounds.top + 1;
  const contentRatio = contentWidth / contentHeight;
  const targetRatio = ratioValue === "original"
    ? sourceRatio
    : ratioValue === "auto"
      ? contentRatio
      : parseRatio(ratioValue) || contentRatio;
  const contentScale = 1 + Math.max(0, padding) * 2;
  let outputWidth = Math.ceil(contentWidth * contentScale);
  let outputHeight = Math.ceil(outputWidth / targetRatio);

  if (outputHeight < contentHeight * contentScale) {
    outputHeight = Math.ceil(contentHeight * contentScale);
    outputWidth = Math.ceil(outputHeight * targetRatio);
  }

  outputWidth = Math.max(1, outputWidth);
  outputHeight = Math.max(1, outputHeight);

  const canvas = document.createElement("canvas");
  canvas.width = outputWidth;
  canvas.height = outputHeight;
  const ctx = canvas.getContext("2d");
  const dx = Math.round((outputWidth - contentWidth) / 2);
  const dy = Math.round((outputHeight - contentHeight) / 2);
  ctx.drawImage(
    sourceCanvas,
    bounds.left,
    bounds.top,
    contentWidth,
    contentHeight,
    dx,
    dy,
    contentWidth,
    contentHeight
  );
  return canvas;
}

function findAlphaBounds(canvas) {
  const width = canvas.width;
  const height = canvas.height;
  const data = canvas.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, width, height).data;
  let left = width;
  let top = height;
  let right = -1;
  let bottom = -1;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha <= 8) {
        continue;
      }
      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
    }
  }

  return right >= left && bottom >= top ? { left, top, right, bottom } : null;
}

function parseRatio(value) {
  const match = String(value || "").match(/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?)$/);
  if (!match) {
    return null;
  }
  const width = Number(match[1]);
  const height = Number(match[2]);
  return width > 0 && height > 0 ? width / height : null;
}

function exportCompositePng() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  const composite = renderCompositeCanvas();
  composite.toBlob((blob) => {
    if (!blob) {
      setMessage("合成 PNG 导出失败。", true);
      return;
    }
    downloadBlob(blob, `${safeBaseName(state.imageName)}-composite.png`);
    setMessage("合成 PNG 已导出。", false, true);
  }, "image/png");
}

function exportPsd() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  if (!window.agPsd?.writePsd) {
    setMessage("PSD 写入库未加载。", true);
    return;
  }

  try {
    const children = [
      ...state.layers.map((layer) => ({
        name: `${layer.category} - ${layer.name}`,
        canvas: cloneCanvas(layer.canvas),
        opacity: 255,
        hidden: !layer.visible
      })),
      {
        name: "Filled background",
        canvas: cloneCanvas(elements.backgroundCanvas),
        opacity: 255,
        hidden: false
      },
      {
        name: "Original reference",
        canvas: cloneCanvas(state.originalCanvas),
        opacity: 255,
        hidden: true
      }
    ];

    const psd = {
      width: elements.backgroundCanvas.width,
      height: elements.backgroundCanvas.height,
      canvas: renderCompositeCanvas(),
      children
    };
    const buffer = window.agPsd.writePsd(psd, {
      generateThumbnail: true,
      trimImageData: false
    });
    const blob = new Blob([buffer], { type: "image/vnd.adobe.photoshop" });
    downloadBlob(blob, `${safeBaseName(state.imageName)}-layers.psd`);
    setMessage(`PSD 已导出，包含 ${state.layers.length + 2} 个图层。`, false, true);
  } catch (error) {
    setMessage(error.message || "PSD 导出失败。", true);
  }
}

function renderCompositeCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = elements.backgroundCanvas.width;
  canvas.height = elements.backgroundCanvas.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(elements.backgroundCanvas, 0, 0);

  [...state.layers].reverse().forEach((layer) => {
    if (layer.visible) {
      ctx.drawImage(layer.canvas, 0, 0);
    }
  });

  return canvas;
}

function renderLayers() {
  elements.layerList.replaceChildren();
  elements.layerCount.textContent = String(state.layers.length);
  updatePsdPreview();

  if (state.layers.length === 0) {
    const empty = document.createElement("p");
    empty.className = "layer-empty";
    empty.textContent = t("emptyLayer");
    elements.layerList.append(empty);
    return;
  }

  state.layers.forEach((layer, index) => {
    const card = document.createElement("article");
    card.className = "layer-card";
    card.classList.toggle("hidden-layer", !layer.visible);

    const thumb = document.createElement("canvas");
    thumb.width = 64;
    thumb.height = 64;
    const thumbCtx = thumb.getContext("2d");
    thumbCtx.clearRect(0, 0, 64, 64);
    drawCanvasContained(thumbCtx, layer.canvas, 64, 64);

    const info = document.createElement("div");
    info.className = "layer-info";

    const title = document.createElement("strong");
    title.textContent = layer.name;

    const meta = document.createElement("span");
    const orderText = index === 0 ? t("topLayer") : t("layerOrder", { index: index + 1 });
    meta.textContent = `${categoryLabel(layer.category)} · ${formatPixels(layer.pixels)} px · ${orderText}`;

    const actions = document.createElement("div");
    actions.className = "layer-actions";

    const toggle = createMiniButton(layer.visible ? t("hide") : t("show"), () => {
      pushHistory(layer.visible ? "隐藏图层" : "显示图层");
      state.backgroundPreview = null;
      state.transparentCanvas = null;
      renderBackgroundPreview();
      layer.visible = !layer.visible;
      renderLayers();
    });
    const up = createMiniButton(t("moveUp"), () => moveLayer(index, -1));
    const down = createMiniButton(t("moveDown"), () => moveLayer(index, 1));
    const save = createMiniButton("PNG", () => downloadLayerPng(layer));
    const remove = createMiniButton(t("delete"), () => removeLayer(layer.id), "warn");

    up.disabled = index === 0;
    down.disabled = index === state.layers.length - 1;

    actions.append(toggle, up, down, save, remove);
    info.append(title, meta, actions);
    card.append(thumb, info);
    elements.layerList.append(card);
  });
}

function createMiniButton(label, onClick, modifier = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = modifier ? `mini-button ${modifier}` : "mini-button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function updatePsdPreview() {
  const canvas = elements.psdPreviewCanvas;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCheckerboard(ctx, canvas.width, canvas.height, 10);

  const exportedLayerCount = state.layers.length + 2;
  elements.psdLayerSummary.textContent = t("psdExportPlan", { count: exportedLayerCount });
  elements.psdLayerDetails.textContent = state.layers.length
    ? t("psdExportDetails", { layers: formatPsdLayerNames() })
    : t("psdExportEmpty");

  if (!state.imageLoaded) {
    return;
  }

  drawCanvasContained(ctx, renderCompositeCanvas(), canvas.width, canvas.height);
}

function formatPsdLayerNames() {
  const names = state.layers.map((layer) => layer.name);
  const visibleNames = names.slice(0, 4);
  const remaining = names.length - visibleNames.length;
  return remaining > 0 ? `${visibleNames.join(" / ")} / +${remaining}` : visibleNames.join(" / ");
}

function drawCheckerboard(ctx, width, height, size) {
  ctx.save();
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#edf0f4";
  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      if (((x / size) + (y / size)) % 2 === 0) {
        ctx.fillRect(x, y, size, size);
      }
    }
  }
  ctx.restore();
}

function moveLayer(index, direction) {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= state.layers.length) {
    return;
  }

  pushHistory("移动图层");
  state.backgroundPreview = null;
  state.transparentCanvas = null;
  renderBackgroundPreview();
  const [layer] = state.layers.splice(index, 1);
  state.layers.splice(nextIndex, 0, layer);
  renderLayers();
}

function removeLayer(id) {
  pushHistory("删除图层");
  state.backgroundPreview = null;
  state.transparentCanvas = null;
  renderBackgroundPreview();
  state.layers = state.layers.filter((layer) => layer.id !== id);
  renderLayers();
}

function downloadLayerPng(layer) {
  layer.canvas.toBlob((blob) => {
    if (!blob) {
      setMessage("图层 PNG 导出失败。", true);
      return;
    }
    downloadBlob(blob, `${safeBaseName(layer.name)}.png`);
  }, "image/png");
}

function pushHistory(label) {
  if (!state.imageLoaded) {
    return;
  }

  pushSnapshot(captureSnapshot(label));
}

function pushSnapshot(snapshot) {
  if (!snapshot) {
    return;
  }

  state.history.push(snapshot);
  if (state.history.length > HISTORY_LIMIT) {
    state.history.shift();
  }
  state.redo = [];
  syncHistoryButtons();
}

function undoStep() {
  if (!state.history.length) {
    setMessage("没有可撤销的步骤。");
    return;
  }

  state.redo.push(captureSnapshot("重做点"));
  const snapshot = state.history.pop();
  restoreSnapshot(snapshot);
  syncHistoryButtons();
  setMessage(`已撤销：${snapshot.label || "上一步"}。`, false, true);
}

function redoStep() {
  if (!state.redo.length) {
    setMessage("没有可重做的步骤。");
    return;
  }

  state.history.push(captureSnapshot("撤销点"));
  const snapshot = state.redo.pop();
  restoreSnapshot(snapshot);
  syncHistoryButtons();
  setMessage("已重做。", false, true);
}

function captureSnapshot(label) {
  return {
    label,
    background: cloneCanvas(elements.backgroundCanvas),
    selection: cloneCanvas(elements.selectionCanvas),
    layers: cloneLayers(state.layers),
    backgroundPreview: state.backgroundPreview
      ? {
          canvas: cloneCanvas(state.backgroundPreview.canvas),
          removedPixels: state.backgroundPreview.removedPixels
        }
      : null,
    transparentCanvas: state.transparentCanvas ? cloneCanvas(state.transparentCanvas) : null,
    layerName: elements.layerName.value,
    imageLoaded: state.imageLoaded,
    imageName: state.imageName,
    imageTitle: elements.imageTitle.textContent,
    canvasMeta: elements.canvasMeta.textContent
  };
}

function restoreSnapshot(snapshot) {
  if (!snapshot) {
    return;
  }

  state.imageLoaded = snapshot.imageLoaded;
  state.imageName = snapshot.imageName;
  elements.imageTitle.textContent = snapshot.imageTitle;
  elements.canvasMeta.textContent = snapshot.canvasMeta;
  elements.layerName.value = snapshot.layerName;

  setCanvasSize(snapshot.background.width, snapshot.background.height);
  backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
  backgroundCtx.drawImage(snapshot.background, 0, 0);
  selectionCtx.clearRect(0, 0, elements.selectionCanvas.width, elements.selectionCanvas.height);
  selectionCtx.drawImage(snapshot.selection, 0, 0);

  state.layers = cloneLayers(snapshot.layers);
  state.backgroundPreview = snapshot.backgroundPreview
    ? {
        canvas: cloneCanvas(snapshot.backgroundPreview.canvas),
        removedPixels: snapshot.backgroundPreview.removedPixels
      }
    : null;
  state.transparentCanvas = snapshot.transparentCanvas ? cloneCanvas(snapshot.transparentCanvas) : null;
  clearPenPath();
  clearShapeEdit();
  updateCanvasVisibility();
  renderBackgroundPreview();
  renderLayers();
  updateSelectionStats();
  state.edgeDirty = true;
  renderOverlay();
  syncRecoveryButton();
}

function cloneLayers(layers) {
  return layers.map((layer) => ({
    ...layer,
    canvas: cloneCanvas(layer.canvas)
  }));
}

function syncHistoryButtons() {
  elements.undoSelectionButton.disabled = !state.history.length;
  elements.redoSelectionButton.disabled = !state.redo.length;
  syncRecoveryButton();
}

function syncRecoveryButton() {
  elements.restorePeelStartButton.disabled = !hasRecoverySelection();
}

function ensureReadyForPeelWorkflow(modeLabel) {
  if (ensureReadyWithSelection()) {
    return true;
  }

  if (!state.imageLoaded || !hasRecoverySelection()) {
    return false;
  }

  restorePeelStart({ recordHistory: true, showMessage: false });
  setMessage(t("peelAutoRestored", { mode: modeLabel }), false, true);
  return true;
}

function rememberPeelStart() {
  if (!state.imageLoaded || !hasSelection()) {
    return;
  }

  state.recoverySnapshot = captureSnapshot("剥离前状态");
  syncRecoveryButton();
}

function restorePeelStart({ recordHistory = false, showMessage = true } = {}) {
  if (!hasRecoverySelection()) {
    if (showMessage) {
      setMessage(t("restorePeelStartMissing"), true);
    }
    return false;
  }

  if (recordHistory && state.imageLoaded) {
    pushHistory("恢复剥离前状态");
  }

  restoreSnapshot(state.recoverySnapshot);
  syncRecoveryButton();
  if (showMessage) {
    setMessage(t("peelStartRestored"), false, true);
  }
  return true;
}

function hasRecoverySelection() {
  return Boolean(state.recoverySnapshot?.selection && canvasHasSelection(state.recoverySnapshot.selection));
}

function canvasHasSelection(canvas) {
  if (!canvas?.width || !canvas?.height) {
    return false;
  }

  const data = canvas.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, canvas.width, canvas.height).data;
  for (let index = 3; index < data.length; index += 4) {
    if (data[index] > MASK_THRESHOLD) {
      return true;
    }
  }
  return false;
}

function ensureReadyWithSelection() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return false;
  }

  if (!hasSelection()) {
    setMessage("请先选中需要剥离或补洞的区域。", true);
    return false;
  }

  return true;
}

function hasSelection() {
  const data = selectionCtx.getImageData(
    0,
    0,
    elements.selectionCanvas.width,
    elements.selectionCanvas.height
  ).data;

  for (let index = 3; index < data.length; index += 4) {
    if (data[index] > MASK_THRESHOLD) {
      return true;
    }
  }

  return false;
}

function updateSelectionStats(knownCount = null) {
  if (!state.imageLoaded) {
    state.selectionPixels = 0;
    elements.selectionStats.textContent = t("selectionStats", { count: "0" });
    return;
  }

  const count = knownCount ?? countSelectionPixels();
  state.selectionPixels = count;
  elements.selectionStats.textContent = t("selectionStats", { count: formatPixels(count) });
}

function countSelectionPixels() {
  const data = selectionCtx.getImageData(
    0,
    0,
    elements.selectionCanvas.width,
    elements.selectionCanvas.height
  ).data;
  let count = 0;

  for (let index = 3; index < data.length; index += 4) {
    if (data[index] > MASK_THRESHOLD) {
      count += 1;
    }
  }

  return count;
}

function getCanvasPoint(event) {
  const rect = elements.selectionCanvas.getBoundingClientRect();
  const x = Math.round(((event.clientX - rect.left) / rect.width) * elements.selectionCanvas.width);
  const y = Math.round(((event.clientY - rect.top) / rect.height) * elements.selectionCanvas.height);
  return {
    x: clamp(x, 0, elements.selectionCanvas.width - 1),
    y: clamp(y, 0, elements.selectionCanvas.height - 1)
  };
}

function uniqueLayerName(base) {
  const names = new Set(state.layers.map((layer) => layer.name.toLowerCase()));
  let candidate = base;
  let suffix = 2;

  while (names.has(candidate.toLowerCase())) {
    candidate = `${base} ${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function nextLayerName() {
  let index = state.layers.length + 1;
  let candidate = `剥离图层 ${index}`;
  const names = new Set(state.layers.map((layer) => layer.name.toLowerCase()));

  while (names.has(candidate.toLowerCase())) {
    index += 1;
    candidate = `剥离图层 ${index}`;
  }

  return candidate;
}

function setBusy(isBusy) {
  [
    elements.peelQuickButton,
    elements.peelAiButton,
    elements.peelOnlyButton,
    elements.healButton,
    elements.exportPsdButton,
    elements.exportPngButton,
    elements.clearMaskButton,
    elements.resetButton,
    elements.invertSelectionButton,
    elements.cleanupSelectionButton,
    elements.restorePeelStartButton,
    elements.finishPenButton,
    elements.undoPenPointButton,
    elements.clearPenButton,
    elements.removeSolidBgButton,
    elements.applySolidBgButton,
    elements.resetSolidBgButton,
    elements.downloadTransparentButton
  ].forEach((button) => {
    button.disabled = isBusy;
  });

  if (!isBusy) {
    syncHistoryButtons();
    syncPenButtons();
    syncRecoveryButton();
    renderBackgroundPreview();
    elements.peelAiButton.disabled = !state.apiAvailable;
  }
}

function setMessage(text, isError = false, isGood = false) {
  elements.message.textContent = text;
  elements.message.classList.toggle("error", Boolean(isError));
  elements.message.classList.toggle("good", Boolean(isGood) && !isError);
}

function setAiProgress(percent, labelKey, indeterminate = false) {
  const value = clamp(Math.round(percent), 0, 100);
  elements.aiProgress.hidden = false;
  elements.aiProgress.classList.toggle("indeterminate", Boolean(indeterminate));
  elements.aiProgressLabel.textContent = t(labelKey);
  elements.aiProgressValue.textContent = `${value}%`;
  elements.aiProgressBar.style.width = `${value}%`;
}

function hideAiProgress() {
  elements.aiProgress.hidden = true;
  elements.aiProgress.classList.remove("indeterminate");
  elements.aiProgressBar.style.width = "0%";
  elements.aiProgressValue.textContent = "0%";
}

function syncRangeLabels() {
  elements.brushSizeValue.textContent = elements.brushSize.value;
  elements.roundRadiusValue.textContent = elements.roundRadius.value;
  elements.magicToleranceValue.textContent = elements.magicTolerance.value;
  elements.magicGrowValue.textContent = elements.magicGrow.value;
  elements.bgToleranceValue.textContent = elements.bgTolerance.value;
  elements.bgFeatherValue.textContent = elements.bgFeather.value;
}

function toolLabel(tool) {
  const labels = {
    brush: t("brush"),
    erase: t("erase"),
    rect: t("rect"),
    circle: t("circle"),
    roundRect: t("roundRect"),
    pen: t("pen"),
    magic: t("magic")
  };
  return labels[tool] || "选区";
}

function categoryLabel(category) {
  const keys = {
    Distractor: "catDistractor",
    Secondary: "catSecondary",
    Primary: "catPrimary",
    Text: "catText",
    Scene: "catScene",
    Background: "catBackground"
  };
  return t(keys[category] || "catDistractor");
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("图片无法读取。"));
    image.src = url;
  });
}

function nextPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("画布转换失败。"));
      }
    }, "image/png");
  });
}

function cloneCanvas(source) {
  const canvas = document.createElement("canvas");
  canvas.width = source.width;
  canvas.height = source.height;
  canvas.getContext("2d").drawImage(source, 0, 0);
  return canvas;
}

function drawCanvasContained(ctx, source, width, height) {
  const scale = Math.min(width / source.width, height / source.height);
  const drawWidth = source.width * scale;
  const drawHeight = source.height * scale;
  const left = (width - drawWidth) / 2;
  const top = (height - drawHeight) / 2;
  ctx.drawImage(source, left, top, drawWidth, drawHeight);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function safeBaseName(value) {
  return String(value || "image")
    .replace(/\.[^.]+$/, "")
    .replace(/[^\p{L}\p{N}._-]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "image";
}

function safeRatioName(value) {
  return String(value || "auto")
    .replace(/:/g, "x")
    .replace(/[^a-z0-9._-]+/gi, "-")
    .replace(/^-+|-+$/g, "") || "auto";
}

function hexToRgb(hex) {
  const normalized = String(hex || "#ffffff").trim();
  const match = normalized.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i);
  if (!match) {
    return [255, 255, 255];
  }

  const value = match[1].length === 3
    ? match[1].split("").map((char) => `${char}${char}`).join("")
    : match[1];
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16)
  ];
}

function formatPixels(value) {
  return new Intl.NumberFormat("zh-CN").format(value || 0);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
