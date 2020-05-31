import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"
import BreadcrumbDivider from "./BreadcrumbDivider"
import BreadcrumbHome from "./BreadcrumbHome"

const Breadcrumbs = ({ links }) => (
  <nav
    css={css({
      mb: 3,
      "& a": {
        textDecoration: `none`,
        fontWeight: `bold`,
      },
    })}
  >
    <BreadcrumbHome text="~" />
    {links.map((link) => (
      <>
        <BreadcrumbDivider text="/" />
        <Styled.a as={Link} to={`/${link.url}`} key={link.url}>
          {link.name}
        </Styled.a>
      </>
    ))}
  </nav>
)

export default Breadcrumbs
