/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default ({ children, sx, ...other }) => (
  <Styled.li sx={{ listStyleType: `none`, ...sx }} {...other}>
    {children}
  </Styled.li>
)
