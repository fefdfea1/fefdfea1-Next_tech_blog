import { styled } from "@/styled-system/jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import HeaderTop from "@/app/components/mainHeader/HeaderTop";

type propsType = {
  title: string;
  date: string;
};

export default function DetailHeader(props: propsType) {
  return (
    <BackgroundImg>
      <HeaderTop />
      <Title>{props.title}</Title>
      <Date>
        <Icon>
          <FontAwesomeIcon icon={faCalendar} />
        </Icon>
        {props.date}
      </Date>
    </BackgroundImg>
  );
}

const BackgroundImg = styled("figure", {
  base: {
    width: "100%",
    height: "533px",
    backgroundImage: "url('/img/headerBg/bg.jpg')",
    backgroundSize: "cover",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Title = styled("h1", {
  base: {
    textStyle: "postTitle",
  },
});

const Date = styled("p", {
  base: {
    marginTop: "57px",
    fontSize: "25px",
  },
});

const Icon = styled("span", {
  base: {
    display: "inline-block",
    width: "25px",
    height: "25px",
    marginRight: "20px",
  },
});
