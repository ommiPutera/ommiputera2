import {MantineThemeColorsOverride} from '@mantine/core'
import {createGlobalStyle, DefaultTheme} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    transition: none !important;
    background-color: ${({theme}) =>
      theme.mode === 'dark' ? '#0f0f15' : '#f4f4f5'} !important;
    color: ${({theme}) =>
      theme.mode === 'light' ? '#232333' : '#f4f4f5'} !important;
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
    '#fafafa',
    '#f4f4f5',
    '#e4e4e7',
    '#d4d4d8',
    '#a1a1aa',
    '#383851',
    '#2e2e42',
    '#232333',
    '#191924',
    '#0f0f15',
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
  fontFamily: 'Inter, sans-serif',
  fontSizes: {
    xs: 11,
    sm: 13,
    md: 14.5,
    lg: 16,
    xl: 20,
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 720,
          sm: 960,
          md: 1140,
          lg: 1380,
          xl: 1500,
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
    lg: 1200,
    xl: 1400,
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: {fontSize: 31, lineHeight: 1.2, fontWeight: 700},
      h2: {fontSize: 26, lineHeight: 1.1, fontWeight: 700},
      h3: {fontSize: 23, lineHeight: 1.4, fontWeight: 700},
      h4: {fontSize: 19, lineHeight: 1.45, fontWeight: 700},
      h5: {fontSize: 15, lineHeight: 1.5, fontWeight: 700},
      h6: {fontSize: 13, lineHeight: 1.5, fontWeight: 700},
    },
  },
  white: '#fff',
  black: '#000',
  lineHeight: 1.55,
  primaryColor: 'primary',
  activeStyles: {transform: 'translateY(0)'},
  datesLocale: 'en',
}

export {styledTheme, mantineTheme, GlobalStyle}
