import merge from "deepmerge"
import defaultIndex from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
import prism from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/prism"
import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"

export default merge(typography, {
  initialColorMode: `light`,
  colors,
  fonts: { monospace: defaultIndex.fonts.monospace },
  sizes: defaultIndex.sizes,
  styles,
  prism,
})
