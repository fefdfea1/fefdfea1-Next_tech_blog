import { styled } from "@/styled-system/jsx";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderSearch from "@/app/components/mainHeader/HeaderSearch";
import Link from "next/link";

export default function HeaderTop() {
  return (
    <HeaderTopContainer>
      <SubTitleContainer>
        <Link href="/">Develop Note</Link>
        <SubTitleIconBox>
          <FontAwesomeIcon icon={faPenNib} />
        </SubTitleIconBox>
      </SubTitleContainer>
      <HeaderSearch />
    </HeaderTopContainer>
  );
}

const HeaderTopContainer = styled("div", {
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
