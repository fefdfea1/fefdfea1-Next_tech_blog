import { styled } from "@/styled-system/jsx";
import Tag from "@/app/components/tag/Tag";
import { postType } from "@/app/page";
import Comment from "@/app/components/comment/Comment";
import Link from "next/link";
type propsType = {
  postType: postType;
};

export default function BigPost(props: propsType) {
  return (
    <LastPost className="BigPost">
      <Link href={`${props.postType.url}`}>
        <Thumbnail>
          <img src="/img/noThumbnail/noImages.png" alt="썸네일 없음" />
        </Thumbnail>
        <PostDescContainer>
          <Tag tag={props.postType ? props.postType.tag : "찾을 수 없음"} />
          <BigPostTitle>
            {props.postType ? props.postType.title : "찾을 수 없음"}
          </BigPostTitle>
          <BigPostDesc className="bigPostText">
            {props.postType ? props.postType.desc : "찾을 수 없음"}
          </BigPostDesc>
          {/* <CommentBox>
            <Comment
              commentCount={props.postType ? props.postType.commentCount : "0"}
            />
          </CommentBox> */}
        </PostDescContainer>
      </Link>
    </LastPost>
  );
}

const LastPost = styled("article", {
  base: {
    width: "50%",
    minHeight: "700px",
    position: "relative",
    borderRadius: "30px",
    overflow: "hidden",
    backgroundColor: "#fff",

    "& a": {
      width: "100%",
      height: "100%",
      display: "block",
    },
  },
});

const Thumbnail = styled("figure", {
  base: {
    width: "100%",
    height: "370px",
    overflow: "hidden",
  },
});

const PostDescContainer = styled("div", {
  base: {
    padding: "30px 39px",
  },
});

const BigPostTitle = styled("p", {
  base: {
    width: "100%",
    textStyle: "lg",
    marginTop: "23px",
  },
});

const BigPostDesc = styled("p", {
  base: {
    width: "100%",
    maxHeight: "100%",
    color: "#999",
    marginTop: "26px",
    fontSize: "16px",
    fontWeight: "500",
    overflow: "hidden",
  },
});

const CommentBox = styled("div", {
  base: {
    position: "absolute",
    bottom: "32px",
    left: "30px",
  },
});
