import { MantineThemeColorsOverride } from "@mantine/core";
import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#18181b" : "#fff"} !important;
    color: ${({ theme }) =>
      theme.mode === "light" ? "#18181b" : "#fff"} !important;
  }
`;

const colors = {
  primary: [
    "#f0f9ff",
    "#e0f2fe",
    "#bae6fd",
    "#7dd3fc",
    "#38bdf8",
    "#0ea5e9",
    "#2563eb",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a",
  ],
  warning: [
    "#fff7ed",
    "#ffedd5",
    "#fed7aa",
    "#fdba74",
    "#fb923c",
    "#f97316",
    "#ea580c",
    "#c2410c",
    "#9a3412",
    "#7c2d12",
  ],
  success: [
    "#f0fdf4",
    "#dcfce7",
    "#bbf7d0",
    "#86efac",
    "#4ade80",
    "#22c55e",
    "#16a34a",
    "#15803d",
    "#166534",
    "#14532d",
  ],
  danger: [
    "#fef2f2",
    "#fee2e2",
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d",
  ],
  dark: [
    "#fafafa",
    "#f4f4f5",
    "#e4e4e7",
    "#d4d4d8",
    "#a1a1aa",
    "#71717a",
    "#52525b",
    "#3f3f46",
    "#27272a",
    "#18181b",
  ],
};

const styledColors = {
  ...colors,
};

const styledTheme: DefaultTheme = {
  colors: styledColors,
};

const Mantinecolors: MantineThemeColorsOverride = {
  ...colors,
};

const mantineTheme = {
  colors: Mantinecolors,
  fontSizes: {
    xs: 11,
    sm: 13,
    md: 14.5,
    lg: 16,
    xl: 20,
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 720,
          sm: 960,
          md: 1140,
          lg: 1320,
          xl: 1600,
        },
      },
    },
  },
  defaultRadius: "sm",
  radius: {
    xs: 2,
    sm: 3.7,
    md: 4.7,
    lg: 14,
    xl: 30,
  },
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400,
  },
  headings: {
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 34, lineHeight: 1.3, fontWeight: 700 },
      h2: { fontSize: 26, lineHeight: 1.35, fontWeight: 700 },
      h3: { fontSize: 22, lineHeight: 1.4, fontWeight: 700 },
      h4: { fontSize: 18, lineHeight: 1.45, fontWeight: 700 },
      h5: { fontSize: 16, lineHeight: 1.5, fontWeight: 700 },
      h6: { fontSize: 14, lineHeight: 1.5, fontWeight: 700 },
    },
  },
  white: "#fff",
  black: "#000",
  lineHeight: 1.55,
  primaryColor: "primary",
  activeStyles: { transform: "translateY(0)" },
  datesLocale: "en",
};

export { styledTheme, mantineTheme, GlobalStyle };
