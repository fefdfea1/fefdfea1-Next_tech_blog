"use client";
import { styled } from "@/styled-system/jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { postType } from "@/app/page";
import Link from "next/link";
import { useSearchHook } from "@/app/hooks/search/search";

export default function HeaderSearch() {
  const searchBoxRef = useRef(null);
  const [searchValue, serSearchValue] = useState("");
  const [searchList, setSearchList] = useState<postType[]>([]);
  useSearchHook(searchValue, setSearchList);
  return (
    <HeaderUtil className="active" ref={searchBoxRef}>
      <SearchIconBox>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchIconBox>
      <SearchBox onChange={(event) => serSearchValue(event.target.value)} />
      <SearchResultListContainer>
        {searchList.map((item) => (
          <SearchList>
            <Link href={`${item.url}`}>
              <h4>{item.title}</h4>
            </Link>
          </SearchList>
        ))}
      </SearchResultListContainer>
    </HeaderUtil>
  );
}

const HeaderUtil = styled("div", {
  base: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: "59px",
    cursor: "pointer",
    backgroundColor: "#fff",
    marginRight: "59px",
    padding: "7px 10px",
    transition: "0.3s width",
    borderRadius: "10px",

    "&.active": {
      width: "200px",
    },
    "&.active input": {
      width: "80%",
      display: "block",
    },
  },
});

const SearchResultListContainer = styled("ul", {
  base: {
    width: "100%",
    maxHeight: "150px",
    overflow: "hidden",
    position: "absolute",
    top: "110%",
    left: "0",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
});

const SearchList = styled("li", {
  base: {
    width: "100%",
    height: "30px",
    fontSize: "12px",

    "& > a": {
      width: "100%",
      height: "100%",
      padding: "0px 10px",
      display: "flex",
      alignItems: "center",

      "&:hover": {
        backgroundColor: "#f8f9fa",
      },
    },
  },
});

const SearchIconBox = styled("div", {
  base: {
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    pointerEvents: "none",
  },
});

const SearchBox = styled("input", {
  base: {
    display: "none",
    width: "0",
    height: "100%",
    fontSize: "12px",
  },
});
