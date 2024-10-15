import path from "path";

export async function getPostUrl(postPath: string, POSTS_PATH: string) {
  let relativePath = path.relative(POSTS_PATH, postPath);
  relativePath = relativePath.replace(new RegExp("\\" + path.sep, "g"), "/");
  relativePath = relativePath.replace(/\.mdx$/, "");

  // category1, title1
  let [category, slug] = relativePath.split("/");

  //  /blog/category1/title1
  const url = `detail/${category}/${slug}`;

  return { url, category, slug };
}
