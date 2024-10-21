import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@/styled-system/jsx";

type propsType = {
  readingTime: number;
  mt?: "mt20" | "mt10";
};

export default function ReadingTime(props: propsType) {
  return (
    <TimeContainer marginTop={props.mt}>
      <FontAwesomeIcon icon={faClock} />
      <TimeText>
        {props.readingTime}
        <span>분</span>
      </TimeText>
    </TimeContainer>
  );
}

const TimeContainer = styled("div", {
  base: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  variants: {
    marginTop: {
      mt20: {
        marginTop: "20px",
      },
      mt10: {
        marginTop: "10px",
      },
    },
  },
});

const TimeText = styled("span", {
  base: {
    fontSize: "15px",
    fontWeight: "500",
    marginLeft: "15px",

    "& span": {
      marginLeft: "5px",
    },
  },
});
