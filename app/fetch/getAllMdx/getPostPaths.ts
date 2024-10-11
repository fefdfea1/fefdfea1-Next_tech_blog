import { sync } from "glob";
import path from "path";

export const getPostPaths = (category?: string, slug?: string) => {
  const BASE_PATH = "/app/post";
  const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
  const folder = category || "**";
  const fileName = slug || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/${fileName}.mdx`);
  return paths;
};
