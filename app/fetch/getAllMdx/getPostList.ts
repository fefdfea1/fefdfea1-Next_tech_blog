import { getPostPaths } from "@/app/fetch/getAllMdx/getPostPaths";
import { parsePost } from "@/app/fetch/getAllMdx/parsePost";
import path from "path";

export const getPostList = async (category?: string) => {
  const BASE_PATH = "/public/mdxPost";
  const defaultPostPath = path.join(process.cwd(), BASE_PATH);
  const paths: string[] = getPostPaths(defaultPostPath, category);
  const posts = await Promise.all(
    paths.map((postPath) => parsePost(postPath, defaultPostPath))
  );
  return posts;
};
