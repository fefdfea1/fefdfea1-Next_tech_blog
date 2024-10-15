import { globSync } from "glob";

export const getPostPaths = (
  POSTS_PATH: string,
  category?: string,
  slug?: string
) => {
  const folder = category || "**";
  const fileName = slug || "**";
  let postPaths = globSync(`${POSTS_PATH}/${folder}/**/${fileName}.mdx`);
  return postPaths;
};
