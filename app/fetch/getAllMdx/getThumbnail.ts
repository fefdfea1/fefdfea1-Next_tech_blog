import { glob } from "glob";
import path from "path";
import fsExtra from "fs-extra";

export async function getThumbnail(postUrl: string) {
  if (process.env.NODE_ENV === "development") {
    const thumbnail = develop(postUrl);
    return thumbnail;
  } else {
    const thumbnail = production(postUrl);
    return thumbnail;
  }
}

function develop(postUrl: string) {
  const fullPath = postUrl.split("/").slice(0, 4).join("/");
  const categorySlug = postUrl.split("/").slice(2, 4).join("/");
  const mdxFolderThumbnail = glob.sync(`${fullPath}/thumbnail.*`)[0];
  const thumbnailsFolderThumbnail = glob.sync(
    `public/mdxImg/${categorySlug}/thumbnail.*`
  )[0];
  if (mdxFolderThumbnail) {
    const pasteDir = `public/mdxImg/${categorySlug}/${path.basename(mdxFolderThumbnail)}`;
    fsExtra.copy(mdxFolderThumbnail, pasteDir, (err) => {
      if (err) console.error(err);
      // 복사후 기존 폴더의 이미지는 삭제
      fsExtra.remove(mdxFolderThumbnail, (err) => {
        if (err) console.error(err);
      });
    });
  }

  if (thumbnailsFolderThumbnail) {
    return `/mdxImg/${categorySlug}/${path.basename(thumbnailsFolderThumbnail)}`;
  } else {
    // 썸네일이 없는 경우 기본 이미지 반환
    return "/img/noThumbnail/noImages.png";
  }
}

function production(postUrl: string) {
  const fullPath = postUrl.split("/").slice(3, 7).join("/");
  const categorySlug = postUrl.split("/").slice(5, 7).join("/");
  const mdxFolderThumbnail = glob.sync(`${fullPath}/thumbnail.*`)[0];
  const thumbnailsFolderThumbnail = glob.sync(
    `${process.cwd()}/public/mdxImg/${categorySlug}/thumbnail.*`
  )[0];
  if (mdxFolderThumbnail) {
    const pasteDir = `${process.cwd()}/public/mdxImg/${categorySlug}/${path.basename(mdxFolderThumbnail)}`;
    fsExtra.copy(mdxFolderThumbnail, pasteDir, (err) => {
      if (err) console.error(err);
      // 복사후 기존 폴더의 이미지는 삭제
      fsExtra.remove(mdxFolderThumbnail, (err) => {
        if (err) console.error(err);
      });
    });
  }

  if (thumbnailsFolderThumbnail) {
    return `/mdxImg/${categorySlug}/${path.basename(thumbnailsFolderThumbnail)}`;
  } else {
    // 썸네일이 없는 경우 기본 이미지 반환
    return "/img/noThumbnail/noImages.png";
  }
}
