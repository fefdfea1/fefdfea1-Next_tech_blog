"use client";
import { styled } from "@/styled-system/jsx";
import Post from "@/app/components/main/developHelper/site/Post";
import { Swiper } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { extractContent } from "@/app/page";
import { useEffect, useState } from "react";

export type developSiteItemType = {
  thumbnail: string;
  tag: string;
  content: string;
  slug: string;
  category: string;
};

type propsType = {
  DevelopSiteItem: developSiteItemType[];
};

export default function DevelopHelperSite(props: propsType) {
  const [develop, setDevelopSite] = useState<developSiteItemType[]>([]);
  useEffect(() => {
    const fetch = async () => {};
  }, []);
  return (
    <>
      <HelperSiteTitle>
        개발시 도움이 될 <HighlightText>사이트</HighlightText>
      </HelperSiteTitle>
      <Swiper
        spaceBetween={97}
        slidesPerView={3}
        modules={[Scrollbar]}
        scrollbar
      >
        {props.DevelopSiteItem.map((item) => {
          const desc = extractContent(item.content);
          return <Post developSiteItem={item} desc={desc} />;
        })}
      </Swiper>
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
