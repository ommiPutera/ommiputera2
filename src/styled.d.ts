import "styled-components";
// import { MantineThemeColorsOverride } from "@mantine/core";

declare module "styled-components" {
  export interface DefaultTheme {
    mode?: string;
    colors: {
      primary: string[];
      warning: string[];
      success: string[];
      danger: string[];
      dark: string[];
    };
  }
}
