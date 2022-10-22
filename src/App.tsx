import { MantineProvider } from "@mantine/core";
import { GlobalStyle, mantineTheme } from "./theme";
import { Button } from "@mantine/core";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import { Helmet } from "react-helmet";

function App() {
  const { onHandleTheme, theme } = useTheme();
  const { mode } = theme;

  return (
    <ThemeProvider theme={theme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <GlobalStyle />
        <Helmet>
          <title>Epic Web App by Ommi</title>
          <meta
            name="theme-color"
            content={mode === "light" ? "blue" : "red"}
          />
        </Helmet>
        <Container>
          <Button compact color="warning" onClick={onHandleTheme}>
            Toggle Mode
          </Button>
          <h1>Hello</h1>
        </Container>
      </MantineProvider>
    </ThemeProvider>
  );
}

const Container = styled.div`
  margin: 24px;
`;

export default App;
