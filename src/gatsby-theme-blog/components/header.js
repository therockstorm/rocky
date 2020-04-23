/** @jsx jsx */
import { Link } from "gatsby"
import { Flex, jsx, useColorMode, Styled } from "theme-ui"
import Bio from "../components/bio"
import Search from "../../components/search/index"
import Moon from "../../components/Moon"
import Sun from "../../components/Sun"

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
        <Flex
          sx={{ justifyContent: `space-between`, alignItems: `center`, mb: 4 }}
        >
          <Title {...props}>{title}</Title>
          {children}
          <Flex>
            <Search
              collapse
              indices={[{ name: `Posts`, title: `Blog Posts` }]}
            />
            <Styled.div
              sx={{
                height: "1.25em",
                width: "1.25em",
                cursor: "pointer",
                color: `#ffd700`,
              }}
              onClick={() => toggleColorMode()}
              role="presentation"
            >
              {isDark ? <Sun /> : <Moon />}
            </Styled.div>
          </Flex>
        </Flex>
        {props.location.pathname === rootPath && <Bio />}
      </Styled.div>
    </header>
  )
}
