import merge from "deepmerge"
import defaultStyles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles"

export default merge(defaultStyles, { a: { textDecoration: "none" } })
