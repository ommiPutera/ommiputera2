import {MantineProvider, Global} from '@mantine/core'
import {Helmet} from 'react-helmet'
import {ThemeProvider} from 'styled-components'
import {DefaultLayout} from './components/layouts'
import useMode from './hooks/useMode'
import {GlobalStyle, mantineTheme, styledTheme} from './theme'
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
        <AppHelmet />
        <AppRoutes />
        <CustomFonts />
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

function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Matter',
            src: `url('/fonts/Matter-Medium.woff') format("woff")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Matter',
            src: `url('/fonts/Matter-Medium.woff2') format("woff2"))`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Matter',
            src: `url('/fonts/Matter-Regular.woff') format("woff")`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Matter',
            src: `url('/fonts/Matter-Regular.woff2') format("woff2")`,
          },
        },
      ]}
    />
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
