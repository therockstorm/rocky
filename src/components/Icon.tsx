/** @jsx jsx */
import { ReactElement } from "react"
import { jsx, Styled } from "theme-ui"

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
const Icon = ({ children, sx, ...other }: any): ReactElement => (
  <Styled.div
    sx={{ color: "text", height: `1.25rem`, width: `1.25rem`, mr: 2, ...sx }}
    {...other}
  >
    {children}
  </Styled.div>
)

export default Icon
