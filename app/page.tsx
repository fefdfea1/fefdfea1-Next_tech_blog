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

export function extractContent(mdxString: string) {
  // 프론트 매터 제거
  let content = mdxString.replace(/---[\s\S]*?---/, "").trim();

  // 제목(#) 제거
  content = content.replace(/(^#{1,6}\s.*(\n|$))/gm, "").trim();

  // 본문 내용 반환
  return content;
}
