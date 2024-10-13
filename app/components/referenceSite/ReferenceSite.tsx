"use client";
import { styled } from "@/styled-system/jsx";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import Link from "next/link";

type propsType = {
  siteRefList: string[];
};

export default function ReferenceSite(props: propsType) {
  if (props.siteRefList.length === 0) return;
  return (
    <RefSiteContainer>
      <RefTitle>
        <RefTitleIcon>
          <FontAwesomeIcon icon={faFile} />
        </RefTitleIcon>
        참고 사이트
      </RefTitle>
      <RefContent>
        {props.siteRefList.map((item, index) => (
          <RefItems key={nanoid()}>
            <Link href={`${item}`}>
              <RefCount>{index + 1}</RefCount>
              <RefUrl>{item}</RefUrl>
            </Link>
          </RefItems>
        ))}
      </RefContent>
    </RefSiteContainer>
  );
}

const RefSiteContainer = styled("article", {
  base: {
    width: "100%",
    backgroundColor: "secondary.03",
    marginTop: "300px",
    borderRadius: "10px",
    padding: "10px 0",
  },
});

const RefTitle = styled("p", {
  base: {
    width: "100%",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "700",
    padding: "0px 25px 10px 13px",
  },
});

const RefContent = styled("ul", {
  base: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});

const RefItems = styled("li", {
  base: {
    width: "100%",
    height: "40px",
    flexGrow: "1",
    display: "flex",
    borderBottom: "1px solid black",
    "&:last-of-type": {
      border: "0",
    },

    "& a": {
      display: "flex",
      width: "100%",
      height: "100%",
    },
  },
});

const RefCount = styled("div", {
  base: {
    width: "40px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid black",
    textStyle: "md",
  },
});

const RefUrl = styled("div", {
  base: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
});

const RefTitleIcon = styled("span", {
  base: {
    width: "25px",
    height: "25px",
    marginRight: "10px",
  },
});
