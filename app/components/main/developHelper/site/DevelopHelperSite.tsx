"use client";
import { styled } from "@/styled-system/jsx";
import Post from "@/app/components/main/developHelper/site/Post";
import { useEffect, useState } from "react";
import { postType } from "@/app/page";

export default function DevelopHelperSite() {
  const [develop, setDevelopSite] = useState<postType[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/developSitePost`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      setDevelopSite(data.data);
      console.log(data);
    };
    dataFetch();
  }, []);
  return (
    <>
      <HelperSiteTitle>
        개발시 도움이 될 <HighlightText>사이트</HighlightText>
      </HelperSiteTitle>
      <Post developSiteItem={develop} />;
    </>
  );
}

const HelperSiteTitle = styled("p", {
  base: {
    marginBottom: "50px",
    textStyle: "postTitle",
    color: "#fff",
  },
});

const HighlightText = styled("span", {
  base: {
    color: "#5694CD",
  },
});
