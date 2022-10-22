import { ThemeProvider } from "styled-components";
import { MantineProvider } from "@mantine/core";
import { mantineTheme, theme } from "./theme";
import { Button } from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <div style={{ margin: "24px" }}>
          <Button>Settings</Button>
        </div>
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App;
