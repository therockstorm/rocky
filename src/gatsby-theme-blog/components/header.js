/** @jsx jsx */
import { Link } from "gatsby"
import Svg from "react-inlinesvg"
import { css, jsx, useColorMode, Styled } from "theme-ui"
import moon from "../../../content/assets/moon.svg"
import sun from "../../../content/assets/sun.svg"
import Bio from "../components/bio"

const rootPath = `${__PATH_PREFIX__}/`
const monospace = `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`
const height = 42
const lineHeight = `2.625rem`

const Title = ({ children, location }) =>
  location.pathname === rootPath ? (
    <Styled.h1 css={css({ my: 0, height, lineHeight })}>
      <Styled.a
        as={Link}
        css={css({ color: `inherit`, fontFamily: monospace })}
        to={`/`}
      >
        {children}
      </Styled.a>
    </Styled.h1>
  ) : (
    <Styled.h3 css={css({ my: 0, height, lineHeight })}>
      <Styled.a as={Link} css={css({ fontFamily: monospace })} eade to={`/`}>
        {children}
      </Styled.a>
    </Styled.h3>
  )

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = () => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header>
      <Styled.div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <Styled.div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <Styled.div
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
          </Styled.div>
        </Styled.div>
        {props.location.pathname === rootPath && <Bio />}
      </Styled.div>
    </header>
  )
}
