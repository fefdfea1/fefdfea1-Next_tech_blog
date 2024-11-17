import { styled } from "@/styled-system/jsx";

type propsType = {
  postageTitle: string;
  postageDesc: string;
};

export default function Postage(props: propsType) {
  return (
    <>
      {props.postageDesc && (
        <PostageContainer className="postage">
          <PostFixTitle>포스팅 메모</PostFixTitle>
          <PostageTitle>{props.postageTitle}</PostageTitle>
          <PostBody>{props.postageDesc}</PostBody>
        </PostageContainer>
      )}
    </>
  );
}

const PostageContainer = styled("div", {
  base: {
    minWidth: "250px",
    maxWidth: "300px",
    minHeight: "200px",
    bottom: "250px",
    right: "50px",
    backgroundColor: "#fff44f",
    opacity: "0",
    position: "fixed",
    padding: "10px 15px",
    lineHeight: "25px",
    transition: "opacity 0.3s",
  },
});

const PostFixTitle = styled("p", {
  base: {
    width: "100%",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },
});

const PostageTitle = styled("p", {
  base: {
    fontSize: "16px",
    fontWeight: "bold",
  },
});

const PostBody = styled("p", {
  base: {
    width: "100%",
    display: "block",
    fontSize: "13px",
    fontWeight: "500",
    textDecoration: "underline",
    textUnderlineOffset: "5px",
    color: "#999",
    marginTop: "10px",
  },
});
