import { glob } from "glob";
import path from "path";
import fsExtra from "fs-extra";

// 각 태그별로 따로 폴더를 분리시키는 함수
export function splitTag(postPath: string, data: { [key: string]: any }) {
  try {
    if (data.tag) {
      if (postPath.includes("group")) {
        throw new Error("group에 속한 포스트입니다");
      } else {
        const mdxFolder = glob.sync(`${postPath}`)[0];
        const pasteDir = `app/mdxPost/group/${data.tag}/${path.basename(mdxFolder)}`;

        // 동일한 파일이 있는지 확인
        if (fsExtra.pathExistsSync(pasteDir)) {
          console.warn(`동일한 파일이 이미 존재합니다: ${pasteDir}`);
          return;
        }

        // 파일 복사
        fsExtra.copy(mdxFolder, pasteDir, (err) => {
          if (err) console.error(err);
        });
      }
    } else {
      console.error("태그가 존재하지 않습니다", data.title + "포스트");
    }
  } catch (error) {
    console.error(error);
  }
}
