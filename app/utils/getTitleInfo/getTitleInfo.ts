import { indexType } from "@/app/page";
import { Dispatch, SetStateAction } from "react";

export function getTitleInfo(setTitle: Dispatch<SetStateAction<indexType[]>>) {
  const TitleDom = document.querySelectorAll("h2,h3") as NodeList;
  let indexInfo = [] as indexType[];
  TitleDom.forEach((item) => {
    const target = item as HTMLElement;
    const data = {
      text: target.innerText,
      id: target.id,
    };
    indexInfo = [...indexInfo, data];
  });
  setTitle(indexInfo);
}
