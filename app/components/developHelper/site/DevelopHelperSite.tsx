import { styled } from "@/styled-system/jsx";
import Post from "@/app/components/developHelper/site/Post";

export default function DevelopHelperSite() {
  return (
    <>
      <HelperSiteTitle>
        개발시 도움이 될 <HighlightText>사이트</HighlightText>
      </HelperSiteTitle>
      <Post />
    </>
  );
}

const HelperSiteTitle = styled("p", {
  base: {
    paddingTop: "1px",
    marginTop: "67px",
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
