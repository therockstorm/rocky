import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import BreadcrumbDivider from "./breadcrumb-divider"
import BreadcrumbHome from "./breadcrumb-home"

export default ({ links }) => (
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
