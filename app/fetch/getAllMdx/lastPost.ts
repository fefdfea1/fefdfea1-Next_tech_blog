export async function lastPost(postPath: string, basePath: string) {
  const filePath = postPath
    .slice(postPath.indexOf(basePath))
    .replace(`${basePath}/`, "")
    .replace(".mdx", "");

  // category1, title1
  const [category, slug] = filePath.split("/");

  // /blog/category1/title1
  const url = `/${category}/${slug}`;

  return { url, category, slug };
}
