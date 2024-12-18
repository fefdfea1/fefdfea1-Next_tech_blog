"use client";
import { styled } from "@/styled-system/jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useIndex } from "@/app/hooks/indexSet";
import { indexType } from "@/app/page";
import { nanoid } from "nanoid";
import { ScrollHandler } from "@/app/components/mainHeader/HeaderTop";

export default function List() {
  const [TitleArray, setTitle] = useState<indexType[]>([]);
  const ListContainerRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", listScrollPosition);
      return () => window.removeEventListener("scroll", listScrollPosition);
    }
  }, []);
  useIndex(TitleArray, setTitle);
  return (
    <ListContainer className="listContainer active" ref={ListContainerRef}>
      <ItemListContainer>
        {TitleArray.map((item) => (
          <ItemList key={nanoid()}>
            <Anchor href={`#${item.id}`}>
              <CaretDownIcon>
                <FontAwesomeIcon icon={faCaretDown} />
              </CaretDownIcon>
              {item.text}
            </Anchor>
          </ItemList>
        ))}
      </ItemListContainer>
    </ListContainer>
  );
}

function listScrollPosition() {
  const scrollTop = window.scrollY;
  const listContainer = document.querySelector(".listContainer") as HTMLElement;
  const postageContainer = document.querySelector(".postage") as HTMLElement;
  ScrollHandler();

  if (scrollTop >= 400) {
    if (listContainer) listContainer.style.opacity = "1";
    if (postageContainer) postageContainer.style.opacity = "1";
  } else {
    if (listContainer) listContainer.style.opacity = "0";
    if (postageContainer) postageContainer.style.opacity = "0";
  }
}

const ListContainer = styled("aside", {
  base: {
    minWidth: "200px",
    maxWidth: "300px",
    position: "fixed",
    top: "150px",
    right: "50px",
    backgroundColor: "primary.03",
    borderRadius: "20px",
    opacity: "0",
    transition: "0.3s opacity",
  },
});

const ItemListContainer = styled("ul", {
  base: {
    width: "100%",
    lineHeight: "25px",
    padding: "15px 20px",
  },
});

const ItemList = styled("li", {
  base: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#fff",
    display: "flex", // 추가된 스타일
    alignItems: "center", // 추가된 스타일
    marginBottom: "5px",
  },
});

const Anchor = styled("a", {
  base: {
    maxWidth: "250px",
    height: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block",
  },
});

const CaretDownIcon = styled("span", {
  base: {
    width: "8px",
    height: "8px",
    display: "inline-block",
    alignItems: "center",
    flexShrink: "0",
    marginRight: "5px",
  },
});

const ListClickBox = styled("div", {
  base: {
    width: "70px",
    height: "50px",
    position: "absolute",
    top: "-35px",
    left: "0px",
    backgroundColor: "primary.03",
    borderRadius: "5px",
    cursor: "pointer",
  },
});

const ListIcon = styled("span", {
  base: {
    width: "25px",
    height: "25px",
    display: "inline-block",
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});
