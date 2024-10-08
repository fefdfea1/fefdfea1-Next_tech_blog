import fs from "fs";
import matter from "gray-matter";
import { lastestPostType } from "@/app/components/main/lastestPost/LastestPost";

export function detailPost(postPath: string) {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as lastestPostType;
  return { ...grayMatter, content };
}
