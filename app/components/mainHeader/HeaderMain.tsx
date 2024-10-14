import { styled } from "@/styled-system/jsx";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderMain() {
  return (
    <MainContainer>
      <p>I'm Developer</p>
      <Circle>
        <ArrowIconBox>
          <FontAwesomeIcon icon={faChevronDown} />
        </ArrowIconBox>
      </Circle>
    </MainContainer>
  );
}

const MainContainer = styled("div", {
  base: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%)",
    color: "#fff",
    fontSize: "7vw",

    "&::after": {
      content: "''",
      width: "15px",
      height: "9vw",
      maxHeight: "150px",
      position: "absolute",
      left: "50%",
      top: "100%",
      transform: "translateX(-50%)",
      backgroundColor: "#fff",
    },
  },
});

const Circle = styled("div", {
  base: {
    width: "8vw",
    height: "8vw",
    position: "absolute",
    left: "50%",
    top: "21vw",
    transform: "translateX(-50%)",
    border: "1px solid #fff",
    borderRadius: "50%",
  },
});

const ArrowIconBox = styled("div", {
  base: {
    width: "4vw",
    height: "4vw",
    position: "absolute",
    left: "50%",
    top: "1vw",
    transform: "translate(-50%,-50%)",

    "& svg": {
      width: "100%",
      height: "100%",
      animation: "1.4s bounce infinite",
    },
  },
});
