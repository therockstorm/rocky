/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default ({ children, ...other }) => (
  <Styled.a rel={"noopener noreferrer"} target={"_blank"} {...other}>
    {children}
  </Styled.a>
)
