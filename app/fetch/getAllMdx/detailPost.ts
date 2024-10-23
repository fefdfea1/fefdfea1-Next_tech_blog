import fs from "fs";
import matter from "gray-matter";
import { postType } from "@/app/page";
import { glob } from "glob";
import path from "path";
import fsExtra from "fs-extra";

export async function getPostDetail(postPath: string) {
  const urlSplit = postPath.split("/").splice(0, 4).join("/");
  let thumbnailUrl = await createPublicDir(urlSplit);

  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as postType;
  return { ...grayMatter, content, thumbnailUrl };
}

async function createPublicDir(postUrl: string) {
  const removeBasePathUrl = postUrl.split("/").splice(2).join("/");
  const pasteUrl = path.join(
    process.cwd(),
    "public",
    "posts",
    removeBasePathUrl
  );
  const targetDir = path.join(process.cwd(), postUrl);

  // 썸네일 이미지 파일 검색
  const thumbnails = glob.sync(`${targetDir}/thumbnail.*`)[0];

  // 붙여넣기할 디렉토리가 존재하지 않으면 생성
  if (!fs.existsSync(pasteUrl)) {
    fsExtra.ensureDirSync(pasteUrl);
  }

  // 썸네일 파일이 존재할 경우 복사
  if (thumbnails) {
    const targetFilePath = path.join(pasteUrl, path.basename(thumbnails)); // 파일 이름을 유지하며 경로 설정
    fsExtra.copySync(thumbnails, targetFilePath);
    return `/posts/${removeBasePathUrl}/${path.basename(thumbnails)}`; // 썸네일 경로 반환
  }

  return "/img/noThumbnail/noImages.png"; // 기본 썸네일 반환
}
