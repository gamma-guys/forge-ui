import { createCss } from "@stitches/react";

export const { theme, styled, css } = createCss({
  utils: {
    // @ts-ignore
    m: (config) => (value) => ({
      marginTop: value,
      marginRight: value,
      marginBottom: value,
      marginLeft: value,
    }),
    // @ts-ignore
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    // @ts-ignore
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    // @ts-ignore
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    // @ts-ignore
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    // @ts-ignore
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    // @ts-ignore
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // @ts-ignore
    br: (config) => (value) => ({
      borderRadius: value,
    }),
    // @ts-ignore
    size: (config) => (value) => ({
      width: value,
      height: value,
    }),
  },
  media: {
    xs: "(max-width: 500px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(min-width: 1025px)",
  },
  theme: {
    colors: {
      bg: "#FFF9F6",
      font: "#17080d",

      darkBlueBase: "#242f3d",
      darkBlue50: "#ecf2fb",
      darkBlue100: "#cfd8e3",
      darkBlue200: "#b1bdcd",
      darkBlue300: "#92a3b9",
      darkBlue400: "#7389a5",
      darkBlue500: "#596f8b",
      darkBlue600: "#45566d",
      darkBlue700: "#313e4e",
      darkBlue800: "#1c2530",
      darkBlue900: "#050c15",

      orangeBase: "#f79465",
      orange50: "#ffece0",
      orange100: "#fecbb3",
      orange200: "#faab85",
      orange300: "#f68955",
      orange400: "#f36826",
      orange500: "#d94f0d",
      orange600: "#aa3d09",
      orange700: "#7a2a05",
      orange800: "#4b1900",
      orange900: "#1e0600",

      lightGreyBase: "#999999",
      lightGrey50: "#feeff2",
      lightGrey100: "#ded7d9",
      lightGrey200: "#c2bebf",
      lightGrey300: "#a7a5a6",
      lightGrey400: "#8c8c8c",
      lightGrey500: "#737373",
      lightGrey600: "#5a5959",
      lightGrey700: "#423f40",
      lightGrey800: "#2a2526",
      lightGrey900: "#17080d",
    },
  },
});

export const darkTheme = theme({
  colors: {
    bg: "#17080d",
    font: "#FFF9F6",
  },
});
