import fs from "fs";
import matter from "gray-matter";
import { postType } from "@/app/page";
import { splitTag } from "@/app/fetch/splitTag/splitTag";

export async function getPostDetail(postPath: string) {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  splitTag(postPath, data);
  const grayMatter = data as postType;
  return { ...grayMatter, content };
}
