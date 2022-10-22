import { MantineThemeColorsOverride } from "@mantine/core";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#18181b" : "#fffff"};
  }
`;

const colors: MantineThemeColorsOverride = {
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
    "#f9fafb",
    "#f3f4f6",
    "#e5e7eb",
    "#d1d5db",
    "#9ca3af",
    "#6b7280",
    "#4b5563",
    "#374151",
    "#1f2937",
    "#18181b",
  ],
};

const mantineTheme = {
  colors: colors,
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
  white: "#fffff",
  black: "#18181b",
  lineHeight: 1.55,
  primaryColor: "primary",
  activeStyles: { transform: "translateY(0)" },
  datesLocale: "en",
};

export { mantineTheme, GlobalStyle };
