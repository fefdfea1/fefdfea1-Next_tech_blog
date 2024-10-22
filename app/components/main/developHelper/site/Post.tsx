import { styled } from "@/styled-system/jsx";
import Tag from "@/app/components/tag/Tag";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/scrollbar";
import { postType } from "@/app/page";
import { Swiper } from "swiper/react";
import { nanoid } from "nanoid";
import { Scrollbar } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { setImageUrl } from "@/app/utils/setImage/setImageUrl";
type propsType = {
  developSiteItem: postType[];
};

export default function Post(props: propsType) {
  const deskTop = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const tablet = useMediaQuery({
    query: "(min-width:764px)",
  });
  const mobile = useMediaQuery({
    query: "(max-width:763px)",
  });

  const defaultSize = 3;
  const currentSize = returnCurrentSize(defaultSize, deskTop, tablet, mobile);
  return (
    <Swiper
      spaceBetween={47}
      slidesPerView={currentSize}
      modules={[Scrollbar]}
      scrollbar
    >
      {props.developSiteItem.map((item) => {
        return (
          <SwiperSlide key={nanoid()}>
            <SitePost center={mobile ? "mobile" : undefined}>
              <Link href={`${item.url}`}>
                <ImgBox>
                  <img
                    src={
                      item.thumbnailUrl
                        ? item.thumbnailUrl
                        : "/img/noThumbnail/noImages.png"
                    }
                    alt="사이트 썸네일"
                  />
                </ImgBox>
                <PostDescContainer>
                  <Tag tag={item.tag} usePost="site" />
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

function returnCurrentSize(
  currentSize: number,
  deskTop: boolean,
  tablet: boolean,
  mobile: boolean
) {
  if (deskTop) currentSize = 3;
  else if (tablet) currentSize = 2;
  else if (mobile) currentSize = 1;
  return currentSize;
}

const SitePost = styled("article", {
  base: {
    width: "100%",
    height: "297px",
    maxWidth: "407px",
    position: "relative",
    borderRadius: "30px",
  },
  variants: {
    center: {
      mobile: {
        margin: "0 auto",
      },
    },
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
