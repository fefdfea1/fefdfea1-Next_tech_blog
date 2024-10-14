"use client";
import { styled } from "@/styled-system/jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { postType } from "@/app/page";
import Link from "next/link";
import { useSearchHook } from "@/app/hooks/search/search";
import { nanoid } from "nanoid";

export default function HeaderSearch() {
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [searchValue, serSearchValue] = useState("");
  const [searchList, setSearchList] = useState<postType[]>([]);
  const [searchBoxState, setBoxState] = useState<"close" | "active">("close");
  const clickFn = (event: MouseEvent) =>
    clickHandler(event, searchBoxRef, setBoxState);
  useSearchHook(searchValue, setSearchList);
  useEffect(() => {
    document.addEventListener("click", clickFn);

    return () => {
      document.removeEventListener("click", clickFn);
    };
  }, [searchBoxRef]);

  return (
    <HeaderUtil ref={searchBoxRef} state={searchBoxState}>
      <SearchIconBox>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchIconBox>
      <SearchBox onChange={(event) => serSearchValue(event.target.value)} />
      <SearchResultListContainer>
        {searchList.map((item) => (
          <SearchList key={nanoid()}>
            <Link href={`${item.url}`}>
              <h4>{item.title}</h4>
            </Link>
          </SearchList>
        ))}
      </SearchResultListContainer>
    </HeaderUtil>
  );
}

function clickHandler(
  event: MouseEvent,
  searchBox: RefObject<HTMLDivElement>,
  setBoxState: Dispatch<SetStateAction<"close" | "active">>
) {
  const target = event.target as HTMLElement;
  if (searchBox.current && searchBox.current.contains(target)) {
    setBoxState("active");
  } else {
    setBoxState("close");
  }
}

const HeaderUtil = styled("div", {
  base: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: "59px",
    backgroundColor: "#fff",
    marginRight: "59px",
    padding: "7px 10px",
    transition: "0.3s width",
    borderRadius: "10px",
  },

  variants: {
    state: {
      active: {
        width: "200px",
        "& input": {
          width: "80%",
          display: "block",
        },

        "& ul": {
          display: "block",
        },
      },
      close: {
        "& input": {
          width: "0%",
          display: "block",
        },
        "& ul": {
          display: "none",
        },
      },
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
    cursor: "pointer",
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
    cursor: "pointer",

    "& svg": {
      pointerEvents: "none",
    },
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
