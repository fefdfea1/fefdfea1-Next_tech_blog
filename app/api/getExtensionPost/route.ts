import { glob } from "glob";
import { NextResponse } from "next/server";
import path from "path";

export function GET() {
  try {
    const dirPath = path.join(process.cwd(), "app", "post", "ExtensionPost");
    const mdxFiles = glob.sync(`${dirPath}/**/*.mdx`); // app/post 폴더 내의 모든 .mdx 파일을 재귀적으로 찾음
    return NextResponse.json(
      { message: "성공", data: mdxFiles },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "유용한 익스텐션 포스트 불러오기 실패" },
      { status: 400 }
    );
  }
}
