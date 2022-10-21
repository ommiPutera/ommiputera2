import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      blue_400: string;
      blue_300: string;
      blue_200: string;
      blue_100: string;
      blue_50: string;
    };
  }
}
