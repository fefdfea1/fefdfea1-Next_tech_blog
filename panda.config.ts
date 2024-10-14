import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            "01": {
              value: "#FF4E4E",
            },
            "02": {
              value: "#1E1E1E",
            },
            "03": {
              value: "#262626",
            },
          },
          secondary: {
            "01": {
              value: "#2D2D2D",
            },
            "02": {
              value: "#FFD382",
            },
            "03": {
              value: "#03A9F5",
            },
          },
          gray: {
            "01": {
              value: "#d9d9d9",
            },
          },
        },
      },
      textStyles: {
        tag: {
          value: {
            fontSize: "15px",
            fontWeight: "700",
          },
        },
        extension: {
          value: {
            fontSize: "19px",
            fontWeight: "500",
          },
        },
        mainTitle: {
          value: {
            fontSize: "140px",
            fontWeight: "700",
          },
        },
        postTitle: {
          value: {
            fontSize: "35px",
            fontWeight: "700",
          },
        },
        md: {
          value: {
            fontSize: "20px",
            fontWeight: "500",
          },
        },
        lg: {
          value: {
            fontSize: "25px",
            fontWeight: "700",
          },
        },
        xl: {
          value: {
            fontSize: "30px",
            fontWeight: "700",
          },
        },
      },
      keyframes: {
        bounce: {
          "0%": {
            top: "1vw",
          },
          "50%": {
            top: "0.7vw",
          },
          "55%": {
            top: "0.65px",
          },
          "100%": {
            top: "1.5vw",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
});
