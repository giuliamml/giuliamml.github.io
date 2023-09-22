import { Theme } from "@emotion/react";

type CustomTheme = Theme & {
  colors: Record<string, string>;
  fonts: Record<string, string>;
};

const theme: CustomTheme = {
  colors: {
    primary: "#4400ff",
    secondary: "#ffc0cb",
    highlight: "#fa338c",
    lilac: "#d5adfb",
    backgroundColor: "#2b49f4",
    textColor: "#f68790",
    white: "#fcfdfc",
    salmon: "#ff5962",
  },
  fonts: {
    primary: "__Grotesk_7c47f0",
    secondary: "Gerbil",
    tertiary: "__Monument_5e4cc7",
    other: "",
  },
};

export default theme;
