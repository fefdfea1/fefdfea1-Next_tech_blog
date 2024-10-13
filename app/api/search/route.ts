import { getPostList } from "@/app/fetch/getAllMdx/getPostList";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { searchValue } = await req.json();
    const removeSearchValueBlank = searchValue.replace(/ /g, "");
    const postList = await getPostList();
    const postTitleArray = postList.filter((item) =>
      item.title.replace(/ /g, "").includes(removeSearchValueBlank)
    );

    return NextResponse.json(
      {
        message: "포스트 제목 리스트 받아오기 성공",
        postArray: postTitleArray,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "포스트 제목 리스트 받아오기 실패", postArray: [] },
      { status: 400 }
    );
  }
}
