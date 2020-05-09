import merge from "deepmerge"
import defaultColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const whiteSmoke = `#f5f5f5`
const gray9 = `#171717`
const dark = `#282c35`
const royalBlueDark = `#2f4ca3` // http://www.html-color-names.com/royalblue.php
const royalBlueLight = `#97adee`

export default merge(defaultColors, {
  background: whiteSmoke,
  heading: gray9,
  modes: {
    dark: {
      background: dark,
      heading: whiteSmoke,
      highlight: `hsl(222, 14%, 25%)`,
      muted: `hsla(0, 0%, 100%, 0.5)`,
      primary: royalBlueLight,
      text: whiteSmoke,
    },
  },
  muted: `hsla(0, 0%, 0%, 0.5)`,
  primary: royalBlueDark,
  text: gray9,
})
