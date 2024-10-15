import { getPostPaths } from "@/app/fetch/getAllMdx/getPostPaths";
import { parsePost } from "@/app/fetch/getAllMdx/parsePost";
import path from "path";

export const getPostList = async (category?: string) => {
  const BASE_PATH = "app/post";
  const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
  const paths: string[] = getPostPaths(POSTS_PATH, category);
  const posts = await Promise.all(
    paths.map((postPath) => parsePost(postPath, POSTS_PATH))
  );
  return posts;
};
