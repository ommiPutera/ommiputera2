import {MantineThemeColorsOverride, Global} from '@mantine/core'
import {createGlobalStyle, DefaultTheme} from 'styled-components'

const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Matter',
            src: `url('/fonts/Matter-SemiBold.woff') format('woff'),
                  url('/fonts/Matter-SemiBold.woff2') format('woff2')`,
            fontWeight: 600,
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Matter',
            src: `url('/fonts/Matter-Medium.woff') format('woff'),
                  url('/fonts/Matter-Medium.woff2') format('woff2')`,
            fontWeight: 500,
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Matter',
            src: `url('/fonts/Matter-Regular.woff') format('woff'),
                  url('/fonts/Matter-Regular.woff2') format('woff2')`,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        },
      ]}
    />
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[9] : colors.dark[0]} !important;
    color: ${({theme: {colors, mode}}) =>
      mode === 'light' ? colors.dark[9] : colors.dark[0]} !important;
  }
`

const colors = {
  primary: [
    '#f0f9ff',
    '#e0f2fe',
    '#bae6fd',
    '#7dd3fc',
    '#38bdf8',
    '#0ea5e9',
    '#2563eb',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
  ],
  warning: [
    '#fff7ed',
    '#ffedd5',
    '#fed7aa',
    '#fdba74',
    '#fb923c',
    '#f97316',
    '#ea580c',
    '#c2410c',
    '#9a3412',
    '#7c2d12',
  ],
  success: [
    '#f0fdf4',
    '#dcfce7',
    '#bbf7d0',
    '#86efac',
    '#4ade80',
    '#22c55e',
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d',
  ],
  danger: [
    '#ffe5e5',
    '#ffcccc',
    '#ffb2b2',
    '#ff9999',
    '#ff7f7f',
    '#ff6666',
    '#ff4c4c',
    '#ff3232',
    '#ff1919',
    '#ff0000',
  ],
  dark: [
    '#FFFFFF',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#a1a1aa',
    '#383851',
    '#606060',
    '#313131',
    '#1d1d1d',
    '#161513',
  ],
}

const styledColors = {
  ...colors,
}

const styledTheme: DefaultTheme = {
  colors: styledColors,
}

const Mantinecolors: MantineThemeColorsOverride = {
  ...colors,
}

const mantineTheme = {
  colors: Mantinecolors,
  fontFamily: 'Matter, sans-serif',
  fontSizes: {
    xs: 11,
    sm: 13,
    md: 17,
    lg: 19,
    xl: 22,
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 620,
          sm: 920,
          md: 1100,
          lg: 1320,
          xl: 1530,
        },
      },
    },
  },
  defaultRadius: 'sm',
  radius: {
    xs: 2,
    sm: 6,
    md: 9,
    lg: 14,
    xl: 30,
  },
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1100,
    xl: 1400,
  },
  headings: {
    fontFamily: 'Matter, sans-serif',
    sizes: {
      h1: {fontSize: 30, lineHeight: 1.2, fontWeight: 500},
      h2: {fontSize: 24, lineHeight: 1.3, fontWeight: 500},
      h3: {fontSize: 22, lineHeight: 1.3, fontWeight: 500},
      h4: {fontSize: 20, lineHeight: 1.3, fontWeight: 500},
      h5: {fontSize: 16, lineHeight: 1.3, fontWeight: 500},
      h6: {fontSize: 16, lineHeight: 1.5, fontWeight: 500},
    },
  },
  white: '#FFFFFF',
  black: '#161513',
  lineHeight: 1.55,
  primaryColor: 'primary',
  activeStyles: {transform: 'translateY(0)'},
  datesLocale: 'en',
}

export {styledTheme, mantineTheme, GlobalStyle, CustomFonts}
