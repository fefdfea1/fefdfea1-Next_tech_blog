import { postType } from "@/app/page";
import { Dispatch, SetStateAction, useEffect } from "react";

export function useSearchHook(
  searchValue: string,
  setSearchList: Dispatch<SetStateAction<postType[]>>
) {
  useEffect(() => {
    const Fetch = async () => {
      if (searchValue === "") {
        setSearchList([]);
        return;
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/search`,
        {
          method: "post",
          body: JSON.stringify({
            searchValue: searchValue,
          }),
        }
      );
      const data = await response.json();
      setSearchList(data.postArray);
    };
    Fetch();
  }, [searchValue]);
}
