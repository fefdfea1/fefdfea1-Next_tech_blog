"use client";
import { styled } from "@/styled-system/jsx";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderSearch from "@/app/components/mainHeader/HeaderSearch";
import Link from "next/link";
import { useEffect } from "react";
import Hamberger from "@/app/components/hamberger/Hamberger";
import { useMediaQuery } from "react-responsive";

export default function HeaderTop() {
  useEffect(() => {
    if (!location.pathname.includes("/detail")) {
      window.addEventListener("scroll", ScrollHandler);
      return () => {
        window.removeEventListener("scroll", ScrollHandler);
      };
    }
  }, []);

  const deskTop = useMediaQuery({
    query: "(min-width:1024px)",
  });

  return (
    <HeaderTopContainer className="header">
      <SubTitleContainer>
        <Link href="/">Develop Note</Link>
        <SubTitleIconBox>
          <FontAwesomeIcon icon={faPenNib} />
        </SubTitleIconBox>
      </SubTitleContainer>
      <HeaderSearchBox className="headerPost">
        {deskTop && <HeaderSearch />}
        <Link href="/allPosts">POST</Link>
      </HeaderSearchBox>
    </HeaderTopContainer>
  );
}

function ChangePosition(scrollY: number) {
  const HeaderTopContainer = document.querySelector(".header") as HTMLElement;
  if (scrollY > 100) {
    HeaderTopContainer.style.position = "fixed";
    HeaderTopContainer.style.top = "0";
    HeaderTopContainer.style.zIndex = "100";
    HeaderTopContainer.style.backgroundColor = "rgb(0 0 0 / 60%)";
    HeaderTopContainer.style.maxHeight = "66px";
  } else {
    HeaderTopContainer.style.position = "absolute";
    HeaderTopContainer.style.top = "0";
    HeaderTopContainer.style.zIndex = "0";
    HeaderTopContainer.style.backgroundColor = "transparent";
    HeaderTopContainer.style.maxHeight = "110px";
  }
}

export function ScrollHandler() {
  const scroll = window.scrollY;
  ChangePosition(scroll);
}

const HeaderTopContainer = styled("header", {
  base: {
    width: "100%",
    height: "100%",
    maxHeight: "110px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0",
    right: "0",
    transition: "all 0.4s",
  },
});

const SubTitleContainer = styled("div", {
  base: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    "& > svg": {
      fontSize: "10px",
    },

    "& > a": {
      display: "inline-block",
      textStyle: "xl",
      marginRight: "20px",
    },
  },
});

const SubTitleIconBox = styled("div", {
  base: {
    width: "25px",
    height: "25px",
  },
});

const HeaderSearchBox = styled("div", {
  base: {
    position: "absolute",
    right: "59px",
    display: "flex",
    alignItems: "center",

    "& a": {
      color: "#fff",
    },
  },
});
