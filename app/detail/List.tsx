"use client";
import { styled } from "@/styled-system/jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function List() {
  useEffect(() => {
    window.addEventListener("scroll", listScrollPosition);
    return () => window.removeEventListener("scroll", listScrollPosition);
  }, []);
  return (
    <ListContainer className="listContainer">
      <ListClickBox>
        <ListIcon>
          <FontAwesomeIcon icon={faList} />
        </ListIcon>
      </ListClickBox>
      <ItemListContainer>
        <ItemList>
          <Anchor href="#">
            <CaretDownIcon>
              <FontAwesomeIcon icon={faCaretDown} />
            </CaretDownIcon>
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇ
          </Anchor>
        </ItemList>
      </ItemListContainer>
    </ListContainer>
  );
}

function listScrollPosition() {
  const scrollTop = window.scrollY;
  const listContainer = document.querySelector(".listContainer") as HTMLElement;
  if (scrollTop >= 700) {
    listContainer.style.opacity = "1";
  } else {
    listContainer.style.opacity = "0";
  }
}

const ListContainer = styled("aside", {
  base: {
    width: "100%",
    maxWidth: "150px",
    position: "fixed",
    top: "150px",
    right: "200px",
    backgroundColor: "primary.03",
    borderRadius: "20px",
    padding: "25px 20px",
    opacity: "0",
    transition: "0.3s opacity",
  },
});

const ItemListContainer = styled("ul", {
  base: {
    width: "100%",
  },
});

const Anchor = styled("a", {
  base: {
    display: "flex",
    alignItems: "center",
  },
});

const ItemList = styled("li", {
  base: {
    width: "100%",
    fontSize: "12px",
    fontWeight: "500",
    textWrap: "nowrap",
    color: "#fff",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const CaretDownIcon = styled("span", {
  base: {
    width: "8px",
    height: "8px",
    display: "flex",
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
    left: "0",
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
    color: "black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});
