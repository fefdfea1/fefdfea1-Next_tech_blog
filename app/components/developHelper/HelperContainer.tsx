import { styled } from "@/styled-system/jsx";
import DevelopHelperSite from "@/app/components/developHelper/site/DevelopHelperSite";
import DevelopHelperExtension from "@/app/components/developHelper/extension/DevelopHelperExtension";

export default function HelperContainer() {
  return (
    <Helper>
      <DevelopHelperSite />
      <DevelopHelperExtension />
    </Helper>
  );
}

const Helper = styled("section", {
  base: {
    width: "100%",
    padding: "0 210px",
    backgroundColor: "secondary.01",
    overflow: "hidden",
  },
});
