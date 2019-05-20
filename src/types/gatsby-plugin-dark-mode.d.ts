declare module "gatsby-plugin-dark-mode" {
  export interface ITheme {
    theme: string
    toggleTheme: (t: string) => void
  }

  export const ThemeToggler: any
}
