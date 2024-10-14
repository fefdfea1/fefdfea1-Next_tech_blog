import { styled } from "@/styled-system/jsx";
import React from "react";

type propsType = {
  tag: string;
  usePost?: "site";
};

export default function Tag(props: propsType) {
  return (
    <SideTag {...(props.usePost && { usePost: props.usePost })} className="tag">
      {props.tag}
    </SideTag>
  );
}

const SideTag = styled("div", {
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    height: "45px",
    padding: "0 20px",
    borderRadius: "30px",
    backgroundColor: "primary.01",
    textStyle: "tag",
    color: "#fff",
  },
  variants: {
    usePost: {
      site: {
        width: "auto",
        height: "28px",
        display: "inline-flex",
        padding: "10px 20px",
      },
    },
  },
});
