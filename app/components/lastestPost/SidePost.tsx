import { styled } from "@/styled-system/jsx";
import { lastestPostType } from "@/app/components/lastestPost/LastestPost";
import Tag from "@/app/components/tag/Tag";
import Comment from "@/app/components/comment/Comment";

type propsType = {
  postType: lastestPostType[];
};

export default function SidePost(props: propsType) {
  return (
    <SidePostContainer>
      {props.postType.map((item) => (
        <SidePostItem>
          <SidePostLeft>
            <SidePostTitle>{item.title}</SidePostTitle>
            <SidePostDesc className="text2Line">{item.Desc}</SidePostDesc>
            <SidePostItemBottom>
              <Tag tag={item.tag} />
              <Comment commentCount={item.commentCount} />
            </SidePostItemBottom>
          </SidePostLeft>
          <SidePostRight>
            <img src={item.thumbnailUrl} alt="썸네일" />
          </SidePostRight>
        </SidePostItem>
      ))}
    </SidePostContainer>
  );
}

const SidePostContainer = styled("div", {
  base: {
    width: "50%",
    height: "100%",
    maxHeight: "270px",
    display: "flex",
    flexDirection: "column",
    rowGap: "50px",
  },
});

const SidePostItem = styled("article", {
  base: {
    width: "100%",
    maxWidth: "600px",
    maxHeight: "270px",
    position: "relative",
    border: "1px solid black",
    padding: "22px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    backgroundColor: "#fff",
  },
});

const SidePostLeft = styled("div", {
  base: {
    width: "70%",
    display: "inline-block",
    paddingRight: "20px",
  },
});

const SidePostRight = styled("figure", {
  base: {
    width: "30%",
    height: "100%",
    display: "inline-block",
    position: "absolute",
    top: "0",
    right: "0",
    overflow: "hidden",
    borderRadius: "30px",
  },
});

const SidePostTitle = styled("p", {
  base: {
    width: "100%",
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "24px",
  },
});

const SidePostDesc = styled("p", {
  base: {
    width: "100%",
    color: "#999",
    marginBottom: "26px",
    fontSize: "19px",
    fontWeight: "500",
    overflow: "hidden",
  },
});

const SidePostItemBottom = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
