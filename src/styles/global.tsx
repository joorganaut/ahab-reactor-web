import { createGlobalStyle } from 'styled-components/macro'
export const theme = {
  colors: {
    primary: '#4b0082',
    primaryDark: '#0D0C1D',
    primaryLight: '#EFFFFA',
    primaryHover: '#343078',
    compliment: '#FFA500',
    lightPrimary: '#f7f4ff',
    secondary: '#343D4B',
    outline: '#F6F6F9',
    background: '#eff2f7',
    lightGrey: '#eff2f7',
    lightGrey2: '#909DAF',
    darkGrey: '#141418',
    baseText: '#343D4B',
    darkText: '#495361',
    mediumText: '#929DAD',
    lightText: '#343D4B',
    border: 'rgba(216, 221, 230, 0.5)',
    error: '#f13a59',
    brand: '#3dace3',
    brandImportant: '#3dace3',
    placeholder: '#3dace3',
    cart: '#FFA500',
    white: 'white',
    user: 'red',
    hint: 'yellow',
    money: '#85bb65',
    cell: '#cceefa',
    banner1: '#002060',
    banner2: '#4257c5',
    navLink: '#4472C4'
  },
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'serif',
  },
  vars: {

  },
  breakpoints: {
    small: '576px',
    medium: '720px',
    large: '1080px',
    xlarge: '1440px',
  }
}
type ThemeType = typeof theme

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
html, body, #root {
    box-sizing: border-box;
    height: 100%;
    font-size: 18px;
  }

  body {
    overflow-y: hidden;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.baseText};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 16px;
    line-height: 1.4;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1,h2,h3,h4 {
    font-weight: normal;
    line-height: 1.27;
  }

  h1 {
    font-size: 1.625rem;
  }

  h2, h3 {
    font-size: 1.375rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  p, ul, ol {
    line-height: 1.5;
    margin-bottom: 20px;
    font-size: 0.875rem;
  }

  ul {
    list-style: disc inside none;
  }

  strong {
    font-weight: bold;
  }
`