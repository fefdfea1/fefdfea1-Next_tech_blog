import { styled } from "@/styled-system/jsx";
import Index from "@/app/components/index/Index";
import List from "@/app/detail/List";
import ReferenceSite from "@/app/components/referenceSite/ReferenceSite";

type propsType = {
  indexList: string[];
  postContent: string;
};

export default function DetailContent(props: propsType) {
  return (
    <ContentContainer>
      <Index IndexItemList={[]} />
      <List />
      <PosContent>{props.postContent}</PosContent>
      <ReferenceSite siteRefList={[]} />
    </ContentContainer>
  );
}

const ContentContainer = styled("section", {
  base: {
    width: "100%",
    height: "1500px",
    padding: "0 339px",
    position: "relative",
  },
});

const PosContent = styled("article", {
  base: {
    width: "100%",
    fontSize: "20px",
    fontWeight: "700",
  },
});
