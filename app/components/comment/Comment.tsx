import { styled } from "@/styled-system/jsx";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type propsType = {
  commentCount: string;
};

export default function Comment(props: propsType) {
  return (
    <CommentBox>
      <CommentIcon>
        <FontAwesomeIcon icon={faComments} />
      </CommentIcon>
      <CommentCount>{props.commentCount}</CommentCount>
    </CommentBox>
  );
}

const CommentBox = styled("div", {
  base: {
    width: "100%",
    maxWidth: "96px",
    height: "41px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
    backgroundColor: "#F9FAFC",
  },
});

const CommentIcon = styled("div", {
  base: {
    width: "30px",
    height: "30px",
    display: "flex",
    marginRight: "13px",
  },
});

const CommentCount = styled("span", {
  base: {
    textStyle: "tag",
  },
});
