import Tag from "@/app/components/tag/Tag";
import { getPostList } from "@/app/fetch/getAllMdx/getPostList";
import { styled } from "@/styled-system/jsx";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

export default async function AllPosts() {
  const postList = await getPostList();
  return (
    <PostsContainer className="allPostContainer">
      {postList.map((post) => (
        <PostContainer key={nanoid()}>
          <Link href={post.url}>
            <ImageBox>
              <Image
                src={`${post.thumbnail ? post.thumbnail : "/img/noThumbnail/noImages.png"}`}
                alt="썸네일"
                fill
              />
            </ImageBox>
            <DescBox>
              <Tag tag={post.tag} />
              <Title>{post.title}</Title>
              <PostDesc className="bigPostText">{post.desc}</PostDesc>
            </DescBox>
          </Link>
        </PostContainer>
      ))}
    </PostsContainer>
  );
}

const PostsContainer = styled("section", {
  base: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,minmax(300px,573px))",
    gridTemplateRows: "repeat(3,minmax(547px,547px))",
    justifyItems: "center",
    alignItems: "center",
    gridGap: "50px",
    marginTop: "200px",
    padding: "0 100px",
  },
});

const PostContainer = styled("article", {
  base: {
    width: "100%",
    height: "100%",
    maxWidth: "527px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: "30px",
    overflow: "hidden",
  },
});

const ImageBox = styled("figure", {
  base: {
    width: "100%",
    height: "277px",
    position: "relative",
  },
});

const Title = styled("p", {
  base: {
    fontSize: "25px",
    fontWeight: "700",
    marginTop: "16px",
  },
});

const DescBox = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: "30px 40px",
  },
});

const PostDesc = styled("p", {
  base: {
    color: "#999999",
    overflow: "hidden",
    marginTop: "16px",
  },
});
