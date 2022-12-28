import {MantineProvider} from '@mantine/core'
import {Helmet} from 'react-helmet'
import {ThemeProvider} from 'styled-components'
import {DefaultLayout} from './components/layouts'
import useMode from './hooks/useMode'
import {CustomFonts, GlobalStyle, mantineTheme, styledTheme} from './theme'
import {Routes, Route} from 'react-router-dom'
import {APP_ROUTES} from './routes'
import NoMatchPage from './routes/NoMatch'

function App() {
  const {mode} = useMode()
  const theme = {
    mode: mode,
    ...styledTheme,
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomFonts />
        <AppHelmet />
        <AppRoutes />
      </ThemeProvider>
    </MantineProvider>
  )
}

function AppHelmet() {
  const {mode} = useMode()
  return (
    <Helmet>
      <title>Ommi Putera</title>
      <meta
        name="theme-color"
        content={mode === 'light' ? '#fff' : '#18181b'}
      />
    </Helmet>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<NoMatchPage />} />
        {APP_ROUTES.map(route => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  )
}

export function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

export default App
