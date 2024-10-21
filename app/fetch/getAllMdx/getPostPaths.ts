import { globSync } from "glob";

export const getPostPaths = (
  POSTS_PATH: string,
  category?: string,
  slug?: string,
  folder?: string
) => {
  const categoryName = category || "**";
  const fileName = slug || "**";
  const folderName = folder || "**";
  let postPaths = globSync(
    `${POSTS_PATH}/${categoryName}/${folderName}/${fileName}.mdx`
  );
  console.log(postPaths);
  return postPaths;
};
