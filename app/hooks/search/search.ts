import { postType } from "@/app/page";
import { Dispatch, SetStateAction, useEffect } from "react";

type responseType = {
  postArray: postType[];
};

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
      const response = await fetch("http://localhost:3000/api/search", {
        method: "post",
        body: JSON.stringify({
          searchValue: searchValue,
        }),
      });
      const data = (await response.json()) as responseType;
      console.log(data);
      setSearchList(data.postArray);
    };
    Fetch();
  }, [searchValue]);
}
