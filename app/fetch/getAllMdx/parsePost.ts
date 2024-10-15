import { getPostUrl } from "@/app/fetch/getAllMdx/lastPost";
import { getPostDetail } from "@/app/fetch/getAllMdx/detailPost";
import { extractContent } from "@/app/page";

export async function parsePost(postPath: string, POSTS_PATH: string) {
  const replacePath = postPath.replace(/\\/g, "/");
  const postDetail = await getPostUrl(replacePath, POSTS_PATH);
  const postAbstract = getPostDetail(replacePath);
  const desc = extractContent(postAbstract.content);
  return { ...postAbstract, ...postDetail, desc };
}
