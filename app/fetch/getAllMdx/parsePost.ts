import { lastPost } from "@/app/fetch/getAllMdx/lastPost";
import { detailPost } from "@/app/fetch/getAllMdx/detailPost";

export async function parsePost(postPath: string) {
  const basePath = "app/post";
  const postDetail = await lastPost(postPath, basePath);
  const postAbstract = detailPost(postPath);
  return { ...postAbstract, ...postDetail };
}
