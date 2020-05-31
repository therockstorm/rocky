import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

const BreadcrumbHome = ({ text }) => (
  <Styled.a as={Link} to="/notes">
    {text}
  </Styled.a>
)

export default BreadcrumbHome
