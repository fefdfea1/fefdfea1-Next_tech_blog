import { styled } from "@/styled-system/jsx";
import React from "react";

type propsType = {
  tag: string;
};

export default function Tag(props: propsType) {
  return <SideTag>{props.tag}</SideTag>;
}

const SideTag = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "102px",
    height: "45px",
    borderRadius: "30px",
    backgroundColor: "primary.01",
    textStyle: "tag",
    color: "#fff",
  },
});
