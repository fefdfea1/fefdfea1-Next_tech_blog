import { NextResponse } from "next/server";
import { getPostList } from "@/app/fetch/getAllMdx/getPostList";
import { extractContent } from "@/app/page";
export const GET = async () => {
  const data = [{ data: "" }];
  try {
    const ReferenceSite = await getPostList("DevelopPost");
    ReferenceSite.forEach((item) => {
      item.desc = extractContent(item.content);
    });
    return NextResponse.json(
      { message: "성공", data: ReferenceSite },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "불러오기 실패", data },
      { status: 400 }
    );
  }
};
