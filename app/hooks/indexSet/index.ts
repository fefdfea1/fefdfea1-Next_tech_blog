import { indexType } from "@/app/page";
import { getTitleInfo } from "@/app/utils/getTitleInfo/getTitleInfo";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useIndex(
  TitleArray: indexType[],
  setTitle: Dispatch<SetStateAction<indexType[]>>
) {
  useEffect(() => {
    getTitleInfo(setTitle);
  }, []);
  if (TitleArray.length === 0) return;
}
