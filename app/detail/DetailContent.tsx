import { styled } from "@/styled-system/jsx";
import Index from "@/app/components/index/Index";
import List from "@/app/detail/List";
import ReferenceSite from "@/app/components/referenceSite/ReferenceSite";
import { postType } from "@/app/page";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import { MDXComponents } from "mdx/types";
import Link from "next/link";

type propsType = {
  indexList: string[];
  postContent: postType;
};

const MdxComponents: MDXComponents = {
  a: Link as any,
  img: Image as any,
};

export default function DetailContent(props: propsType) {
  return (
    <ContentContainer className="detailContent">
      <Index />
      <List />
      <PosContent>
        <MDXRemote
          source={props.postContent.content}
          components={MdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkBreaks],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: {
                      dark: "github-dark-dimmed",
                      light: "github-light",
                    },
                  },
                ],
                [
                  rehypeAutolinkHeadings,
                  {
                    properties: {
                      className: ["anchor"],
                    },
                  },
                ],
                rehypeSlug,
              ],
            },
          }}
        />
      </PosContent>
      <ReferenceSite siteRefList={props.indexList} />
    </ContentContainer>
  );
}

const ContentContainer = styled("section", {
  base: {
    width: "100%",
    position: "relative",
  },
});

const PosContent = styled("article", {
  base: {
    width: "100%",
    fontSize: "20px",
    fontWeight: "400",
    marginTop: "137px",
    color: "#fff",

    "& h1,h2,h3,h4,h5,h6": {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#8088B2",
      marginBottom: "40px",
    },

    "& hr": {
      margin: "40px 0",
      border: "1px solid #374151;",
    },

    "& img": {
      marginTop: "30px",
      marginBottom: "30px",
      objectFit: "cover",
    },

    "& b": {
      position: "relative",
      display: "inline-block",
      backgroundColor: "#6944a6",
      fontWeight: "600",
      padding: "0 10px",
      "&::after": {
        content: "''",
        position: "absolute",
        left: "0",
        top: "0",
      },
    },
  },
});
