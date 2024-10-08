import { styled } from "@/styled-system/jsx";
import Tag from "@/app/components/tag/Tag";
import Comment from "@/app/components/comment/Comment";
export default function ExtensionPost() {
  return (
    <ExtensionPostContainer>
      <Anchor href="#">
        <Thumbnail>
          <img src="/img/noThumbnail/noImages.png" alt="asdasd" />
        </Thumbnail>
        <ExtensionDesc>
          <Tag tag={"태그"} usePost="site" />
          <PostDesc>adasdadasdasssssssssssssssssssssssssssssd</PostDesc>
          <Comment commentCount={"15"} />
        </ExtensionDesc>
      </Anchor>
    </ExtensionPostContainer>
  );
}

const ExtensionPostContainer = styled("article", {
  base: {
    width: "100%",
    maxWidth: "407px",
    borderRadius: "15px",
    overflow: "hidden",
  },
});

const Anchor = styled("a", {
  base: {
    width: "100%",
    height: "100%",
    display: "block",
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
