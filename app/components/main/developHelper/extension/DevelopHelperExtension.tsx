import { styled } from "@/styled-system/jsx";
import ExtensionPost from "@/app/components/main/developHelper/extension/ExtensionPost";
import { postType } from "@/app/page";
import { nanoid } from "nanoid";

type propsType = {
  helperExtension: postType[];
};

export default function DevelopHelperExtension(props: propsType) {
  return (
    <ExtensionContainer>
      <ExtensionTitle className="gradation">
        유용한 익스텐션 모음
      </ExtensionTitle>
      <ExtensionPostContainer>
        {props.helperExtension.map((item) => (
          <ExtensionPost item={item} key={nanoid()} />
        ))}
      </ExtensionPostContainer>
    </ExtensionContainer>
  );
}

const ExtensionContainer = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const ExtensionPostContainer = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "2%",
    rowGap: "50px",
  },
});

const ExtensionTitle = styled("p", {
  base: {
    textStyle: "postTitle",
    background: "linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)",
    color: "transparent",
    marginBottom: "78px",
  },
});
