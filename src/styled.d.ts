import 'styled-components'

interface ThemeColours {
  primary: string
  compliment: string
  lightPrimary: string
  secondary: string
  outline: string
  background: string
  lightGrey: string
  darkGrey: string
  baseText: string
  darkText: string
  mediumText: string
  lightText: string
  border: string
  brand: string
  brandImportant: string
  placeholder: string
  cart: string
  white: string
  user: string
  hint: string
  money: string
  cell: string
  banner1: string
  banner2: string
  navLink: string
  [key: string]: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColours
    fonts: {
      primary: string
      secondary: string
    }
    vars: object
    breakpoints: {
      small: string
      medium: string
      large: string
      xlarge: string
    }
  }
}