/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const NoBullet = ({ children, sx, ...other }) => (
  <Styled.li sx={{ listStyleType: `none`, ...sx }} {...other}>
    {children}
  </Styled.li>
)

export default NoBullet
