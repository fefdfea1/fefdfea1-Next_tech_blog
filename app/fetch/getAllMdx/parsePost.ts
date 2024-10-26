import { getPostUrl } from "@/app/fetch/getAllMdx/lastPost";
import { getPostDetail } from "@/app/fetch/getAllMdx/detailPost";
import { extractContent } from "@/app/page";
import { calcReadingTime } from "@/app/fetch/readingTime/mdxReadingTime";
import { getThumbnail } from "@/app/fetch/getAllMdx/getThumbnail";
export async function parsePost(postPath: string, defaultPostPath: string) {
  const replacePath = postPath.replace(/\\/g, "/");
  const postDetail = await getPostUrl(defaultPostPath, replacePath);
  const postAbstract = await getPostDetail(replacePath);
  const thumbnail = await getThumbnail(replacePath);
  const desc = extractContent(postAbstract.content);
  const readingMinutes = calcReadingTime(postAbstract.content);
  return { ...postAbstract, ...postDetail, desc, readingMinutes, thumbnail };
}
