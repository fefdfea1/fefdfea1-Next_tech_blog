import { getPostPaths } from "@/app/fetch/getAllMdx/getPostPaths";
import { parsePost } from "@/app/fetch/getAllMdx/parsePost";

export const getPostList = async (category?: string) => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
};
