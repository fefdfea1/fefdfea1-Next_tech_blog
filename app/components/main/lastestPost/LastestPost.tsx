import { styled } from "@/styled-system/jsx";
import { getPostList } from "@/app/fetch/getAllMdx/getPostList";
import BigPost from "@/app/components/main/lastestPost/BigPost";
import SidePost from "@/app/components/main/lastestPost/SidePost";

export default async function LastestPost() {
  const post = await getPostList();
  const sortData = post.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <LastestContainer className="lastPost">
      <LastestTitle>최신 글 ✨</LastestTitle>
      <PostContainer className="postContainer">
        <BigPost postType={sortData[0]} />
        <SidePost postType={sortData} />
      </PostContainer>
    </LastestContainer>
  );
}

const LastestContainer = styled("section", {
  base: {
    height: "100%",
    padding: "0 210px",
    marginBottom: "80px",
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
    columnGap: "10%",
    display: "flex",
  },
});
