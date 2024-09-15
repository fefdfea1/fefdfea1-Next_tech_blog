import { styled } from "@/styled-system/jsx";
import Tag from "@/app/components/tag/Tag";
import { lastestPostType } from "@/app/components/lastestPost/LastestPost";
import Comment from "@/app/components/comment/Comment";

type propsType = {
  postType: lastestPostType;
};

export default function BigPost(props: propsType) {
  return (
    <LastPost>
      <Thumbnail>
        <img src="/img/noThumbnail/noImages.png" alt="썸네일 없음" />
      </Thumbnail>
      <PostDescContainer>
        <Tag tag={props.postType.tag} />
        <BigPostTitle>{props.postType.title}</BigPostTitle>
        <BigPostDesc className="bigPostText">{props.postType.Desc}</BigPostDesc>
        <CommentBox>
          <Comment commentCount={props.postType.commentCount} />
        </CommentBox>
      </PostDescContainer>
    </LastPost>
  );
}

const LastPost = styled("article", {
  base: {
    width: "50%",
    maxHeight: "910px",
    position: "relative",
    borderRadius: "30px",
    overflow: "hidden",
    backgroundColor: "#fff",
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
