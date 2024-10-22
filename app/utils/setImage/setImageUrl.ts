import fs from "fs";
import path from "path";

export function setImageUrl(imageUrl: string) {
  const extname = path.extname(imageUrl).toLowerCase(); // 이미지 확장자 추출
  let mimeType = "";

  // 확장자에 따라 MIME 타입 결정
  switch (extname) {
    case ".jpg":
    case ".jpeg":
      mimeType = "image/jpeg";
      break;
    case ".png":
      mimeType = "image/png";
      break;
    case ".gif":
      mimeType = "image/gif";
      break;
    case ".webp":
      mimeType = "image/webp";
      break;
  }

  const imageBuffer = fs.readFileSync(imageUrl);
  const imageBase64 = imageBuffer.toString("base64");

  // // MIME 타입에 맞춰 데이터 URL 형식 반환
  return `data:${mimeType};base64,${imageBase64}`;
}
