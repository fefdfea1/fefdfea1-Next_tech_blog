import { styled } from "@/styled-system/jsx";
import { postType } from "@/app/page";
import Tag from "@/app/components/tag/Tag";
import { nanoid } from "nanoid";
import { extractContent } from "@/app/page";
import Link from "next/link";
import ReadingTime from "@/app/components/readingTIme/ReadingTime";

type propsType = {
  postType: postType[];
};

export default function SidePost(props: propsType) {
  return (
    <SidePostContainer className="sidePost">
      {props.postType.map((item, index) => {
        if (index === 0 || index >= 4) return null;
        const desc = extractContent(item.content);
        return (
          <Link href={`${item.url}`} key={nanoid()}>
            <SidePostItem key={nanoid()} className="sidePost">
              <SidePostLeft>
                <SidePostTitle>{item.title}</SidePostTitle>
                <SidePostDesc className="text2Line">{desc}</SidePostDesc>
                <SidePostItemBottom>
                  <Tag tag={item.tag} />
                  <ReadingTime readingTime={item.readingMinutes} />
                </SidePostItemBottom>
              </SidePostLeft>
              <SidePostRight>
                <img
                  src={
                    item.thumbnail
                      ? item.thumbnail
                      : "/img/noThumbnail/noImages.png"
                  }
                  alt="썸네일"
                />
              </SidePostRight>
            </SidePostItem>
          </Link>
        );
      })}
    </SidePostContainer>
  );
}

const SidePostContainer = styled("div", {
  base: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: "50px",
  },
});

const SidePostItem = styled("article", {
  base: {
    width: "100%",
    maxWidth: "600px",
    maxHeight: "270px",
    minHeight: "200px",
    position: "relative",
    border: "1px solid black",
    padding: "22px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    backgroundColor: "#fff",
  },
});

const SidePostLeft = styled("div", {
  base: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingRight: "20px",
  },
});

const SidePostRight = styled("figure", {
  base: {
    width: "30%",
    height: "100%",
    display: "inline-block",
    position: "absolute",
    top: "0",
    right: "0",
    overflow: "hidden",
    borderRadius: "30px",
  },
});

const SidePostTitle = styled("p", {
  base: {
    width: "100%",
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "24px",
  },
});

const SidePostDesc = styled("p", {
  base: {
    width: "100%",
    color: "#999",
    marginBottom: "26px",
    fontSize: "19px",
    fontWeight: "500",
    overflow: "hidden",
  },
});

const SidePostItemBottom = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
