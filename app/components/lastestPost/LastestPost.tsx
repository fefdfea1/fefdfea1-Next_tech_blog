import { styled } from "@/styled-system/jsx";
import BigPost from "@/app/components/lastestPost/BigPost";
import SidePost from "@/app/components/lastestPost/SidePost";

export type lastestPostType = {
  title: string;
  Desc: string;
  tag: string;
  commentCount: string;
  thumbnailUrl: string;
};

const ib = [
  {
    title: "sdfd",
    Desc: "sdfsdfsdfssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    tag: "er",
    commentCount: "15",
    thumbnailUrl: "/img/noThumbnail/noImages.png",
  },
  {
    title: "sdfd",
    Desc: "sdfsdfsdf",
    tag: "er",
    commentCount: "15",
    thumbnailUrl: "/img/noThumbnail/noImages.png",
  },
  {
    title: "sdfd",
    Desc: "sdfsdfsdf",
    tag: "er",
    commentCount: "14",
    thumbnailUrl: "/img/noThumbnail/noImages.png",
  },
];

export default function LastestPost() {
  return (
    <LastestContainer>
      <LastestTitle>최신 글 ✨</LastestTitle>
      <PostContainer>
        <BigPost postType={ib[0]} />
        <SidePost postType={ib} />
      </PostContainer>
    </LastestContainer>
  );
}

const LastestContainer = styled("div", {
  base: {
    height: "100%",
    maxHeight: "910px",
    padding: "0 210px",
  },
});

const LastestTitle = styled("p", {
  base: {
    fontSize: "40px",
    fontWeight: "700",
    marginTop: "80px",
    marginBottom: "39px",
  },
});

const PostContainer = styled("section", {
  base: {
    width: "100%",
    columnGap: "148px",
    display: "flex",
  },
});
