import { MantineProvider, Container } from "@mantine/core";
import { GlobalStyle, mantineTheme, styledTheme } from "./theme";
import { Button } from "@mantine/core";
import { IconSunHigh, IconMoon } from "@tabler/icons";
import { ThemeProvider } from "styled-components";
import useMode from "./hooks/useMode";
import { Helmet } from "react-helmet";
import { Header } from "./components/layouts";

function App() {
  const { onHandleMode, mode } = useMode();

  const theme = {
    mode: mode,
    ...styledTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <GlobalStyle />
        <AppHelmet mode={mode} />
        <Header />
        <Container size="xl">
          <Button
            color="warning"
            leftIcon={
              mode === "dark" ? (
                <IconSunHigh size={18} />
              ) : (
                <IconMoon size={18} />
              )
            }
            onClick={onHandleMode}
          >
            Toggle Mode
          </Button>
          <h1>Hello</h1>
        </Container>
      </MantineProvider>
    </ThemeProvider>
  );
}

function AppHelmet({ mode }: { mode: string }) {
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
