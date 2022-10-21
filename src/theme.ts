import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "3px",

  colors: {
    blue_400: "#1e40af",
    blue_300: "#2563eb",
    blue_200: "#60a5fa",
    blue_100: "#bfdbfe",
    blue_50: "#dbeafe",
  },
};

const mantineTheme = {
  fontSizes: {
    xs: 11,
    sm: 13,
    md: 14.5,
    lg: 16,
    xl: 20,
  },
  defaultRadius: "sm",
  radius: {
    xs: 2,
    sm: 3.5,
    md: 5,
    lg: 10,
    xl: 14,
  },
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400,
  },
  shadows: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
    md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
    xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px",
  },
  headings: {
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 34, lineHeight: 1.3, fontWeight: undefined },
      h2: { fontSize: 26, lineHeight: 1.35, fontWeight: undefined },
      h3: { fontSize: 22, lineHeight: 1.4, fontWeight: undefined },
      h4: { fontSize: 18, lineHeight: 1.45, fontWeight: undefined },
      h5: { fontSize: 16, lineHeight: 1.5, fontWeight: undefined },
      h6: { fontSize: 14, lineHeight: 1.5, fontWeight: undefined },
    },
  },
  white: "#fff",
  black: "#000",
  lineHeight: 1.55,
  primaryColor: "blue",
  activeStyles: { transform: "translateY(0)" },
  datesLocale: "en",
};

export { theme, mantineTheme };
