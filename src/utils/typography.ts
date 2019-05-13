import Typography from "typography"
// @ts-ignore
import Bootstrap from "typography-theme-bootstrap"
import "../global.css"

Bootstrap.overrideThemeStyles = () => ({
  ".footer-icon": {
    color: "var(--textNormal)"
  },
  a: {
    color: "var(--textLink)",
    textDecoration: "none"
  }
})
const typography = new Typography(Bootstrap)
if (process.env.NODE_ENV !== `production`) typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
