import { styled } from "@/styled-system/jsx";
import Tag from "@/app/components/tag/Tag";
import { postType } from "@/app/page";
import Link from "next/link";
import ReadingTime from "@/app/components/readingTIme/ReadingTime";

type propsType = {
  item: postType;
};

export default function ExtensionPost(props: propsType) {
  return (
    <ExtensionPostContainer className="extension">
      <Link href={`${props.item.url}`}>
        <Thumbnail>
          <img
            src={`${props.item.thumbnail ? props.item.thumbnail : "/img/noThumbnail/noImages.png"}`}
            alt="익스텐션 썸네일"
          />
        </Thumbnail>
        <ExtensionDesc>
          <Tag tag={`${props.item.tag}`} usePost="site" />
          <PostDesc>{props.item.desc}</PostDesc>
          <ReadingTime readingTime={0} />
        </ExtensionDesc>
      </Link>
    </ExtensionPostContainer>
  );
}

const ExtensionPostContainer = styled("article", {
  base: {
    width: "32%",
    borderRadius: "15px",
    overflow: "hidden",

    "& > a": {
      width: "100%",
      height: "100%",
      display: "block",
    },
  },
});

const Thumbnail = styled("figure", {
  base: {
    width: "100%",
    height: "273px",
    maxHeight: "273px",
    backgroundColor: "#fff",
  },
});

const ExtensionDesc = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    padding: "15px 19px",
  },
});

const PostDesc = styled("p", {
  base: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textWrap: "nowrap",
    textStyle: "extension",
    marginTop: "6px",
    marginBottom: "14px",
  },
});
