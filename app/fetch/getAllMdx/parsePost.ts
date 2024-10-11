import { getPostUrl } from "@/app/fetch/getAllMdx/lastPost";
import { getPostDetail } from "@/app/fetch/getAllMdx/detailPost";
import { extractContent } from "@/app/page";

export async function parsePost(postPath: string) {
  const basePath = "app\\post";
  const postDetail = await getPostUrl(postPath, basePath);
  const postAbstract = getPostDetail(postPath);
  const desc = extractContent(postAbstract.content);
  return { ...postAbstract, ...postDetail, desc };
}
