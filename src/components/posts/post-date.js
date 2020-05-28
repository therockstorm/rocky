/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

export default (props) => (
  <Styled.p
    sx={{
      fontSize: 1,
      mt: -3,
      mb: 3,
    }}
    {...props}
  />
)
