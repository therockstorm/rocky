import merge from "deepmerge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"

export default merge(typography, {
  initialColorMode: `light`,
  colors,
  fonts: {
    heading: `sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  sizes: { container: 760 },
  styles,
  prism,
})
