/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Header from "./header"

export default ({ children, hideHeader, maxWidth, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div>
      <div
        sx={{
          maxWidth: maxWidth || `container`,
          mx: `auto`,
          px: 3,
        }}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)
