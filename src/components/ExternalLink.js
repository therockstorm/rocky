/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const ExternalLink = ({ children, ...other }) => (
  <Styled.a rel={"noopener noreferrer"} target={"_blank"} {...other}>
    {children}
  </Styled.a>
)

export default ExternalLink
