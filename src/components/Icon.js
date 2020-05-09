/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children, ...other }) => (
  <span
    sx={{ color: "text", height: `1.25rem`, width: `1.25rem`, mr: 2 }}
    {...other}
  >
    {children}
  </span>
)
