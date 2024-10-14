export async function getPostUrl(postPath: string, basePath: string) {
  const filePath = postPath
    .slice(postPath.indexOf(basePath))
    .replace(`${basePath}\\`, "")
    .replace(".mdx", "");

  // category1, title1
  let [category, slug] = filePath.split("\\");

  // /blog/category1/title1
  const url = `detail/${category}/${slug}`;

  return { url, category, slug };
}
