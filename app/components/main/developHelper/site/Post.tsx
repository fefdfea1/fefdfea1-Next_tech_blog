import { styled } from "@/styled-system/jsx";
import Tag from "@/app/components/tag/Tag";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/scrollbar";
import { developSiteItemType } from "@/app/components/main/developHelper/site/DevelopHelperSite";
import { Swiper } from "swiper/react";
import { nanoid } from "nanoid";
import { Scrollbar } from "swiper/modules";
type propsType = {
  developSiteItem: developSiteItemType[];
};

export default function Post(props: propsType) {
  return (
    <Swiper spaceBetween={97} slidesPerView={3} modules={[Scrollbar]} scrollbar>
      {props.developSiteItem.map((item) => {
        return (
          <SwiperSlide key={nanoid()}>
            <SitePost>
              <Link href={`${item.category}/${item.slug}`}>
                <ImgBox>
                  <img
                    src={
                      item.thumbnail
                        ? item.thumbnail
                        : "/img/noThumbnail/noImages.png"
                    }
                    alt="사이트 썸네일"
                  />
                </ImgBox>
                <PostDescContainer>
                  <Tag tag={"태그"} usePost="site" />
                  <PostDesc>{item.desc}</PostDesc>
                </PostDescContainer>
              </Link>
            </SitePost>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const SitePost = styled("article", {
  base: {
    width: "100%",
    height: "297px",
    maxWidth: "407px",
    position: "relative",
    borderRadius: "30px",
    border: "1px solid white",
  },
});

const ImgBox = styled("figure", {
  base: {
    width: "100%",
    height: "100%",
    borderRadius: "30px",
    overflow: "hidden",
  },
});

const PostDescContainer = styled("div", {
  base: {
    width: "100%",
    maxWidth: "364px",
    minHeight: "110px",
    maxHeight: "130px",
    padding: "24px 33px",
    position: "absolute",
    left: "50%",
    bottom: "-35%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "primary.02",
    borderRadius: "30px",
    overflow: "hidden",
  },
});

const PostDesc = styled("p", {
  base: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#fff",
    marginTop: "16px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordBreak: "break-all",
  },
});
