declare module "gatsby-plugin-dark-mode" {
  export interface Theme {
    theme: string
    toggleTheme: (t: string) => void
  }

  // eslint-disable-next-line
  export const ThemeToggler: any
}
