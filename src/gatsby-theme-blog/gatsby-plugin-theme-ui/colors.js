import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const whiteSmoke = `#f5f5f5`
const gray9 = `#171717`
const dark = `#282c35`
/* http://www.html-color-names.com/royalblue.php */
const royalBlueDark = `#3b5fcc`
const royalBlueLight = `#6384e6`

export default merge(defaultThemeColors, {
  background: whiteSmoke,
  heading: gray9,
  modes: {
    dark: {
      background: dark,
      heading: whiteSmoke,
      highlight: `hsl(222, 14%, 25%)`,
      primary: royalBlueLight,
      text: whiteSmoke,
    },
  },
  primary: royalBlueDark,
  text: gray9,
})
