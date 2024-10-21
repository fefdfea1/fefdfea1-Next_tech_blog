"use client";
import { styled } from "@/styled-system/jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useIndex } from "@/app/hooks/indexSet";
import { indexType } from "@/app/page";
import { nanoid } from "nanoid";
import { ScrollHandler } from "@/app/components/mainHeader/HeaderTop";

export default function List() {
  const [TitleArray, setTitle] = useState<indexType[]>([]);
  const ListContainerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", listScrollPosition);
    return () => window.removeEventListener("scroll", listScrollPosition);
  }, []);
  useIndex(TitleArray, setTitle);
  return (
    <ListContainer className="listContainer active" ref={ListContainerRef}>
      <ListClickBox onClick={() => clickHandler(ListContainerRef)}>
        <ListIcon>
          <FontAwesomeIcon icon={faList} />
        </ListIcon>
      </ListClickBox>
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

function clickHandler(ListContainerRef: MutableRefObject<null>) {
  const ListContainer = ListContainerRef.current as unknown as HTMLElement;
  if (ListContainer.classList.contains("active")) {
    ListContainer.classList.remove("active");
  } else {
    ListContainer.classList.add("active");
  }
}

function listScrollPosition() {
  const scrollTop = window.scrollY;
  const listContainer = document.querySelector(".listContainer") as HTMLElement;
  ScrollHandler();

  if (scrollTop >= 400) {
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
    opacity: "0",
    transition: "0.3s opacity",

    "&.active ul": {
      display: "block",
    },
  },
});

const ItemListContainer = styled("ul", {
  base: {
    width: "100%",
    lineHeight: "30px",
    padding: "25px 20px",
    display: "none",
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
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});
