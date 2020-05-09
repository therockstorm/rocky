/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Header from "./header"

export default ({ children, maxWidth, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div
      sx={{
        maxWidth: maxWidth || `container`,
        mx: `auto`,
        px: 3,
        mb: 4,
      }}
    >
      {children}
    </div>
  </Styled.root>
)
