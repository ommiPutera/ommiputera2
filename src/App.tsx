import { Container, MantineProvider } from "@mantine/core";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/layouts/Default";
import useMode from "./hooks/useMode";
import { GlobalStyle, mantineTheme, styledTheme } from "./theme";

function App() {
  const { mode } = useMode();

  const theme = {
    mode: mode,
    ...styledTheme,
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppHelmet />
        <DefaultLayout>
          <Container size="xl">
            <h1>Hello</h1>
          </Container>
        </DefaultLayout>
      </ThemeProvider>
    </MantineProvider>
  );
}

function AppHelmet() {
  const { mode } = useMode();
  return (
    <Helmet>
      <title>Epic Web App by Ommi</title>
      <meta
        name="theme-color"
        content={mode === "light" ? "#fff" : "#18181b"}
      />
    </Helmet>
  );
}

export default App;
