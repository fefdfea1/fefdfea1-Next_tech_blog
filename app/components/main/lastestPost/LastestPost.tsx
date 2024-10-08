import { styled } from "@/styled-system/jsx";
import { getPostList } from "@/app/fetch/getAllMdx/getPostList";
import BigPost from "@/app/components/main/lastestPost/BigPost";
import SidePost from "@/app/components/main/lastestPost/SidePost";

export type lastestPostType = {
  title: string;
  tag: string;
  commentCount: string;
  thumbnail: string;
  slug: string;
  content: string;
  category: string;
};

export default async function LastestPost() {
  const post = await getPostList();

  return (
    <LastestContainer>
      <LastestTitle>최신 글 ✨</LastestTitle>
      <PostContainer>
        <BigPost postType={post[0]} />
        <SidePost postType={post} />
      </PostContainer>
    </LastestContainer>
  );
}

const LastestContainer = styled("div", {
  base: {
    height: "100%",
    padding: "0 210px",
  },
});

const LastestTitle = styled("p", {
  base: {
    fontSize: "40px",
    fontWeight: "700",
    marginTop: "80px",
    marginBottom: "39px",
    color: "#fff",
  },
});

const PostContainer = styled("section", {
  base: {
    width: "100%",
    columnGap: "148px",
    display: "flex",
  },
});
