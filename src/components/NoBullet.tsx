/** @jsx jsx */
import { ReactElement } from "react"
import { jsx, Styled } from "theme-ui"

const NoBullet = ({ children, sx, ...other }: any): ReactElement => (
  <Styled.li sx={{ listStyleType: `none`, ...sx }} {...other}>
    {children}
  </Styled.li>
)

export default NoBullet
