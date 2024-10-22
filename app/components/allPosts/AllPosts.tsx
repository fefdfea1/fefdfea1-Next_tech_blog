import Tag from "@/app/components/tag/Tag";
import { getPostList } from "@/app/fetch/getAllMdx/getPostList";
import { styled } from "@/styled-system/jsx";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import ReadingTime from "@/app/components/readingTIme/ReadingTime";

export default async function AllPosts() {
  const postList = await getPostList();
  return (
    <PostsContainer className="allPostContainer">
      {postList.map((post) => (
        <PostContainer key={nanoid()} className="">
          <Link href={post.url}>
            <ImageBox className="postsImage">
              <Image
                src={`${post.thumbnail ? post.thumbnail : "/img/noThumbnail/noImages.png"}`}
                alt="썸네일"
                fill
              />
            </ImageBox>
            <DescAndTimeBox className="DescAndTimeBox">
              <DescBox>
                <Tag tag={post.tag} />
                <Title>{post.title}</Title>
                <PostDesc className="postsText">{post.desc}</PostDesc>
              </DescBox>
              <ReadingTime readingTime={0} mt={"mt10"} />
            </DescAndTimeBox>
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
    justifyItems: "center",
    alignItems: "center",
    gridGap: "50px",
    marginTop: "400px",
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

    "& a": {
      width: "100%",
      height: "100%",
    },
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

const DescAndTimeBox = styled("div", {
  base: {
    padding: "30px 40px",
  },
});

const DescBox = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
});

const PostDesc = styled("p", {
  base: {
    minHeight: "72px",
    color: "#999999",
    overflow: "hidden",
    marginTop: "16px",
  },
});
