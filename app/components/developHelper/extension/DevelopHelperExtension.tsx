import { styled } from "@/styled-system/jsx";
import ExtensionPost from "@/app/components/developHelper/extension/ExtensionPost";

export default function DevelopHelperExtension() {
  return (
    <>
      <ExtensionTitle className="gradation">
        유용한 익스텐션 모음
      </ExtensionTitle>
      <ExtensionPost />
    </>
  );
}

const ExtensionTitle = styled("p", {
  base: {
    textStyle: "postTitle",
    background: "linear-gradient(to right, #7F7FD5, #86A8E7, #91EAE4)",
    color: "transparent",
  },
});
