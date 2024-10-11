"use client";
import { styled } from "@/styled-system/jsx";
import Post from "@/app/components/main/developHelper/site/Post";
import { useEffect, useState } from "react";

export type developSiteItemType = {
  thumbnail: string;
  tag: string;
  content: string;
  slug: string;
  category: string;
  desc: string;
};

export default function DevelopHelperSite() {
  const [develop, setDevelopSite] = useState<developSiteItemType[]>([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(
        "http://localhost:3000/api/developSitePost",
        {
          method: "get",
        }
      );
      const data = await response.json();
      setDevelopSite(data.data);
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
