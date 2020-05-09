/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"

export default ({ children, ...other }) => (
  <Styled.li sx={{ listStyleType: `none` }} {...other}>
    {children}
  </Styled.li>
)
