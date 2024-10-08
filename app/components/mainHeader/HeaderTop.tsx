import { styled } from "@/styled-system/jsx";
import { faMagnifyingGlass, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <HeaderUtil>
        <SearchIconBox>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIconBox>
      </HeaderUtil>
    </HeaderTopContainer>
  );
}

const HeaderTopContainer = styled("div", {
  base: {
    width: "100%",
    height: "100%",
    maxHeight: "110px",
    maxWidth: "55%",
    display: "flex",
    justifyContent: "space-between",
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
      marginRight: "36px",
    },
  },
});

const SubTitleIconBox = styled("div", {
  base: {
    width: "25px",
    height: "25px",
  },
});

const HeaderUtil = styled("div", {
  base: {
    width: "50px",
    height: "50px",
    position: "relative",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "gray.01",
    marginRight: "59px",
  },
});

const SearchIconBox = styled("div", {
  base: {
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "#fff",
  },
});
