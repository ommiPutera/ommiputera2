import { MantineProvider } from "@mantine/core";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/layouts/Default";
import useMode from "./hooks/useMode";
import { GlobalStyle, mantineTheme, styledTheme } from "./theme";
import { Routes, Route, Link } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
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

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
