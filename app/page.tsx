import MainHeader from "@/app/components/mainHeader/MainHeader";
import Main from "@/app/components/main/Main";

export default function page() {
  return (
    <>
      <MainHeader />
      <Main />
    </>
  );
}

export type postType = {
  title: string;
  tag: string;
  commentCount: string;
  thumbnail: string;
  slug: string;
  content: string;
  category: string;
  desc: string;
  url: string;
  date: string;
  reference: string;
  readingMinutes: number;
  postageTitle: string;
  postageDesc: string;
};

export type indexType = {
  text: string;
  id: string;
};

export function extractContent(mdxString: string) {
  // 프론트 매터 제거
  let content = mdxString.replace(/---[\s\S]*?---/, "").trim();

  // 제목(#) 제거
  content = content.replace(/(^#{1,6}\s.*(\n|$))/gm, "").trim();

  content = content.replace(/<[^>]+>/g, "").trim();

  content = content
    .replace(
      /```javascript[\s\S]*?const MdxComponents:\s*MDXComponents\s*=\s*{[^}]*};[\s\S]*?```/g,
      "",
    )
    .trim();

  // 본문 내용 반환
  return content;
}
