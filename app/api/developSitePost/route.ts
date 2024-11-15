import { NextResponse } from "next/server";
import { getPostList } from "@/app/fetch/getAllMdx/getPostList";
import { extractContent } from "@/app/page";
export const GET = async () => {
  const data = [{ data: "" }];
  try {
    const ReferenceSite = await getPostList("DevelopSite");
    ReferenceSite.forEach((item) => {
      item.desc = extractContent(item.content);
    });

    return NextResponse.json(
      { message: "성공", data: ReferenceSite },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0", // 캐시를 무시하도록 설정"
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "불러오기 실패", data },
      { status: 400 },
    );
  }
};
