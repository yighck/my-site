const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const COMPRESS_MAX_EDGE = 1600;
const COMPRESS_TARGET_BYTES = 900 * 1024;

export function validateInstrumentationImage(file: File) {
  if (!file.type.startsWith("image/")) {
    return "请上传图片文件。";
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return "图片大小请控制在 5 MB 以内。";
  }

  return null;
}

export async function compressInstrumentationImage(file: File) {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
        return;
      }

      reject(new Error("图片读取失败。"));
    };
    reader.onerror = () => reject(new Error("图片读取失败。"));
    reader.readAsDataURL(file);
  });

  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("图片解码失败。"));
    img.src = dataUrl;
  });

  const scale = Math.min(1, COMPRESS_MAX_EDGE / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("当前环境不支持图片压缩。");
  }

  context.drawImage(image, 0, 0, width, height);

  const attempts = [0.82, 0.72, 0.6, 0.5];
  for (const quality of attempts) {
    const compressed = canvas.toDataURL("image/jpeg", quality);
    const estimatedBytes = Math.ceil((compressed.length * 3) / 4);
    if (estimatedBytes <= COMPRESS_TARGET_BYTES || quality === attempts[attempts.length - 1]) {
      return compressed;
    }
  }

  return canvas.toDataURL("image/jpeg", 0.5);
}
