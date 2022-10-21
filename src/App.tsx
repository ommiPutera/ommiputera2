import { ThemeProvider } from "styled-components";
import { MantineProvider } from "@mantine/core";
import Button from "./components/Button";
import { theme, mantineTheme } from "./theme";
import { IconExternalLink } from "@tabler/icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <Button
          variant="outline"
          color="red"
          leftIcon={<IconExternalLink size={15} />}
        >
          Open in new tab
        </Button>
      </MantineProvider>
    </ThemeProvider>
  );
}

export default App;
