import { styled } from "@/styled-system/jsx";
import Tag from "@/app/components/tag/Tag";
import { lastestPostType } from "@/app/components/lastestPost/LastestPost";

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
      </PostDescContainer>
    </LastPost>
  );
}

const LastPost = styled("article", {
  base: {
    width: "50%",
    maxWidth: "704px",
    minHeight: "100%",
    borderRadius: "30px",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

const Thumbnail = styled("figure", {
  base: {
    width: "100%",
    maxHeight: "370px",
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
  },
});
