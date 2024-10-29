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
      marginBottom: "10px",

      "&:not(h1)": {
        marginTop: "50px",
      },
    },
    "& h2:first-of-type": {
      marginTop: "0",
    },

    "& h2": {
      fontSize: "26px",
    },

    "& h3": {
      fontSize: "22px",
    },

    "& h4": {
      fontSize: "18px",
    },

    "& h5": {
      fontSize: "14px",
    },

    "& h6": {
      fontSize: "10px",
    },

    // 구분선
    "& hr": {
      margin: "40px 0",
      border: "1px solid #374151;",
    },
    // 이미지
    "& img": {
      marginTop: "30px",
      marginBottom: "30px",
      objectFit: "cover",
      display: "inline-block",
    },
    //  강조구문
    "& mark": {
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

    "& b": {
      base: {
        color: "#ee2323",
        fontWeight: "400",
      },
    },
    // 코드블럭
    "& code": {
      padding: "10px",
    },
    // 강조구문
    "& blockquote": {
      display: "inline-block",
      height: "auto",
      backgroundColor: "rgba(31, 41, 55,1)",
      padding: "20px",
      borderRadius: "5px",
      fontSize: "16px",
      color: "#d1d5db",
      lineHeight: "25px",
    },
    // 리스트

    "& ul,ol": {
      margin: "30px 0",
    },

    "& ul": {
      base: {
        listStyleType: "disc",
        marginLeft: "30px",
      },
    },
    "& ol": {
      base: {
        listStyleType: "decimal",
        marginLeft: "30px",
      },
    },
  },
});
