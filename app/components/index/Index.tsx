import { styled } from "@/styled-system/jsx";
import { nanoid } from "nanoid";

type propsType = {
  IndexItemList: string[];
};

export default function Index(props: propsType) {
  if (props.IndexItemList.length === 0) return;
  return (
    <IndexContainer>
      <IndexTitle>목차</IndexTitle>
      <IndexContent>
        <IndexListContainer>
          {props.IndexItemList.map((item: any) => (
            <IndexList key={nanoid()}>
              <IndexAnchor href="#">{item.text}</IndexAnchor>
            </IndexList>
          ))}
        </IndexListContainer>
      </IndexContent>
    </IndexContainer>
  );
}

const IndexContainer = styled("div", {
  base: {
    width: "100%",
    maxWidth: "960px",
    backgroundColor: "secondary.02",
    borderRadius: "10px",
    padding: "13px 8px",
    overflow: "hidden",
    marginTop: "120px",
    margin: "0 auto",
  },
});

const IndexTitle = styled("p", {
  base: {
    textStyle: "lg",
    marginBottom: "11px",
    padding: "0 10px",
  },
});

const IndexContent = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "#fff",
  },
});

const IndexListContainer = styled("ul", {
  base: {
    width: "100%",
    backgroundColor: "#fff",
  },
});

const IndexList = styled("li", {
  base: {
    width: "100%",
    height: "40px",
    fontSize: "20px",
    borderBottom: "1px solid black",

    "&:last-of-type": {
      borderBottom: "0",
    },
  },
});

const IndexAnchor = styled("a", {
  base: {
    display: "block",
    width: "100%",
    height: "100%",
    padding: "0 10px",
  },
});
