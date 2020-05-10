/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default ({ children, ...other }) => (
  <Styled.div
    sx={{ color: "text", height: `1.25rem`, width: `1.25rem`, mr: 2 }}
    {...other}
  >
    {children}
  </Styled.div>
)
