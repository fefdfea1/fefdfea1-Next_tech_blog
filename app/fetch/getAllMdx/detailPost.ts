import fs from "fs";
import matter from "gray-matter";
import { postType } from "@/app/page";
import { glob } from "glob";
import path from "path";
import fsExtra from "fs-extra";

export function getPostDetail(postPath: string) {
  const urlSplit = postPath.split("/").splice(0, 4).join("/");
  let thumbnailUrl = glob.sync(`${urlSplit}/thumbnail.*`)[0];
  // 포스트 썸네일을 public 폴더로 복사 하는 로직
  thumbnailUrl = createPublicDir(urlSplit);
  // console.log("thumbnailUrl:", thumbnailUrl);

  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as postType;
  return { ...grayMatter, content, thumbnailUrl };
}

function createPublicDir(postUrl: string) {
  // basePath를 제거하여 pasteUrl을 생성
  const removeBasePathUrl = postUrl.split("/").splice(2).join("/");

  // 붙여넣기할 URL
  const pasteUrl = path.join(
    process.cwd(),
    "public",
    "posts",
    removeBasePathUrl
  );

  // 복사할 URL
  const targetDir = path.join(process.cwd(), postUrl);

  const split = pasteUrl.split("\\").splice(6).join("/");
  // public 폴더안의 썸네일 검색
  let localImageUrl = glob.sync(
    `${process.env.LOCAL_PublicDir}${split}/thumbnail.*`
  )[0];

  if (localImageUrl) {
    localImageUrl = localImageUrl
      .replace(/\\/g, "/")
      .replace("public/posts/", ""); // 수정된 부분
  }

  // 썸네일 이미지 파일 검색
  const thumbnails = glob.sync(`${targetDir}/thumbnail.*`)[0];

  // 붙여넣기할 디렉토리가 존재하지 않으면 생성
  if (!fs.existsSync(pasteUrl)) {
    fsExtra.ensureDirSync(pasteUrl);
  }
  // 썸네일 파일이 존재할 경우 복사
  if (thumbnails) {
    // console.log("썸네일 파일을 복사합니다:", thumbnails);
    const targetFilePath = path.join(pasteUrl, path.basename(thumbnails)); // 파일 이름을 유지하며 경로 설정
    fsExtra.copySync(thumbnails, targetFilePath);
    // console.log("파일 복사 완료:", targetFilePath);
  } else {
    // console.log("썸네일 파일을 찾을 수 없습니다.");
  }
  if (localImageUrl) return `/posts/${localImageUrl}`;
  else return "/img/noThumbnail/noImages.png"; // default thumbnail
}
