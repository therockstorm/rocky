/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, useColorMode, Styled } from "theme-ui"
import Moon from "../../components/Moon"
import Sun from "../../components/Sun"
import Bio from "../components/bio"

const rootPath = `${__PATH_PREFIX__}/`
const height = 42
const lineHeight = `2.625rem`

const Title = ({ children, location }) =>
  location.pathname === rootPath ? (
    <Styled.h1 sx={{ my: 0, height, lineHeight }}>
      <Styled.a
        as={Link}
        sx={{ color: `inherit`, fontFamily: "monospace" }}
        to={`/`}
      >
        {children}
      </Styled.a>
    </Styled.h1>
  ) : (
    <Styled.h3 sx={{ my: 0, height, lineHeight }}>
      <Styled.a as={Link} sx={{ fontFamily: "monospace" }} eade to={`/`}>
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
      <Styled.div sx={{ maxWidth: `container`, mx: `auto`, px: 3, pt: 4 }}>
        <Styled.div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          }}
        >
          <Title {...props}>{title}</Title>
          {children}
          <Styled.div
            sx={{
              height: "20px",
              width: "20px",
              cursor: "pointer",
              color: `#ffd700`,
            }}
            onClick={() => toggleColorMode()}
            role="presentation"
          >
            {isDark ? <Sun /> : <Moon />}
          </Styled.div>
        </Styled.div>
        {props.location.pathname === rootPath && <Bio />}
      </Styled.div>
    </header>
  )
}
