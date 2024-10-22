import path from "path";

export async function getPostUrl(defaultPostPath: string, replacePath: string) {
  let relativePath = path.relative(defaultPostPath, replacePath);

  relativePath = relativePath.replace(new RegExp("\\" + path.sep, "g"), "/");
  relativePath = relativePath.replace(/\.mdx$/, "");

  // category1, title1
  let [category, folder, slug] = relativePath.split("/");

  //  /blog/category1/title1
  const url = `detail/${category}/${folder}/${slug}`;

  return { url, category, slug };
}
