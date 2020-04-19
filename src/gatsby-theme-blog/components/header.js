import React from "react"
import { Link } from "gatsby"
import Svg from "react-inlinesvg"
import { css, useColorMode, Styled } from "theme-ui"
import moon from "../../../content/assets/moon.svg"
import sun from "../../../content/assets/sun.svg"
import Bio from "../components/bio"

const rootPath = `${__PATH_PREFIX__}/`
const monospace = `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1 css={css({ my: 0 })}>
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            fontFamily: monospace,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3 as="p" css={css({ my: 0 })}>
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
            fontFamily: monospace,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <div
            css={css({
              height: "20px",
              width: "20px",
              cursor: "pointer",
              color: `#ffd700`,
            })}
            onClick={() => toggleColorMode()}
            role="presentation"
          >
            <Svg src={isDark ? sun : moon} />
          </div>
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  )
}
