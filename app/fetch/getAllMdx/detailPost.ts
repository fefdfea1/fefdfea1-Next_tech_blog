import fs from "fs";
import matter from "gray-matter";
import { postType } from "@/app/page";
import { glob } from "glob";
import path from "path";
import { setImageUrl } from "@/app/utils/setImage/setImageUrl";

export function getPostDetail(defaultPostPath: string, postPath: string) {
  const urlSplit = postPath.split("/").splice(0, 4).join("/");
  let thumbnailUrl = glob.sync(`${urlSplit}/thumbnail.*`)[0];
  if (!thumbnailUrl) {
    thumbnailUrl = "";
  } else {
    const thmbnailUrl = path.relative(defaultPostPath, thumbnailUrl);
    thumbnailUrl = `${defaultPostPath}/${thmbnailUrl}`;
    thumbnailUrl = thumbnailUrl.replace(/\\/g, "/");
    thumbnailUrl = setImageUrl(thumbnailUrl);
  }
  // console.log(thumbnailUrl);
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as postType;
  return { ...grayMatter, content, thumbnailUrl };
}
