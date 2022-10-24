import { MantineProvider } from "@mantine/core";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import DefaultLayout from "./components/layouts/Default";
import useMode from "./hooks/useMode";
import { GlobalStyle, mantineTheme, styledTheme } from "./theme";
import { Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes";

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
        <AppRoutes />
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

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export function NoMatch() {
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
