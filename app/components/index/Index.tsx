"use client";
import { styled } from "@/styled-system/jsx";
import { nanoid } from "nanoid";
import { useState } from "react";
import { indexType } from "@/app/page";
import { useIndex } from "@/app/hooks/indexSet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  const [TitleArray, setTitle] = useState<indexType[]>([]);
  useIndex(TitleArray, setTitle);
  if (TitleArray.length === 0) return;
  return (
    <IndexContainer>
      <IndexTitle>목차</IndexTitle>
      <IndexContent>
        <IndexListContainer>
          {TitleArray.map((item) => (
            <IndexList key={nanoid()}>
              <FontAwesomeIcon icon={faChevronDown} />
              <IndexAnchor href={`#${item.id}`}>{item.text}</IndexAnchor>
            </IndexList>
          ))}
        </IndexListContainer>
      </IndexContent>
    </IndexContainer>
  );
}

const IndexContainer = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "secondary.02",
    borderRadius: "10px",
    padding: "13px 8px",
    overflow: "hidden",
    margin: "0 auto",
  },
});

const IndexTitle = styled("p", {
  base: {
    textStyle: "lg",
    marginBottom: "11px",
    padding: "0 10px",
  },
});

const IndexContent = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "#fff",
  },
});

const IndexListContainer = styled("ul", {
  base: {
    width: "100%",
    backgroundColor: "#fff",
  },
});

const IndexList = styled("li", {
  base: {
    width: "100%",
    height: "40px",
    fontSize: "15px",
    fontWeight: "700",
    borderBottom: "1px solid black",
    display: "flex",
    alignItems: "center",
    padding: "0 14px",

    "&:last-of-type": {
      borderBottom: "0",
    },
  },
});

const IndexAnchor = styled("a", {
  base: {
    width: "100%",
    height: "100%",
    padding: "0 10px",
    display: "flex",
    alignItems: "center",
  },
});
