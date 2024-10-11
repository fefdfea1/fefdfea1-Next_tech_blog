import { styled } from "@/styled-system/jsx";
import DevelopHelperSite from "@/app/components/main/developHelper/site/DevelopHelperSite";
import DevelopHelperExtension from "@/app/components/main/developHelper/extension/DevelopHelperExtension";
import { getPostList } from "@/app/fetch/getAllMdx/getPostList";

export default async function HelperContainer() {
  const helperExtension = await getPostList("ExtensionPost");
  return (
    <Helper>
      <DevelopHelperSite />
      <DevelopHelperExtension helperExtension={helperExtension} />
    </Helper>
  );
}

const Helper = styled("section", {
  base: {
    width: "100%",
    padding: "67px 210px",
    backgroundColor: "secondary.01",
    overflow: "hidden",
  },
});
