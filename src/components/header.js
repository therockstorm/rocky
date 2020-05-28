/** @jsx jsx */
import { Link } from "gatsby"
import { Flex, jsx, useColorMode, Styled } from "theme-ui"
import Bio from "./bio"
import Search from "./search/index"
import Moon from "./icons/Moon"
import Sun from "./icons/Sun"
import Icon from "./Icon"

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
      <Styled.a as={Link} sx={{ fontFamily: "monospace" }} to={`/`}>
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
    <header sx={{ "@media print": { display: `none` } }}>
      <Styled.div sx={{ maxWidth: `container`, mx: `auto`, px: 3, pt: 4 }}>
        <Flex
          sx={{ justifyContent: `space-between`, alignItems: `center`, mb: 4 }}
        >
          <Title {...props}>{title}</Title>
          {children}
          <Flex>
            <Search
              collapse
              indices={[
                { name: `Posts`, title: `Blog Posts` },
                { name: `Notes`, title: `Notes` },
              ]}
            />
            <Icon
              sx={{ cursor: "pointer", color: `#ffd700`, mr: 0 }}
              onClick={() => toggleColorMode()}
              role="presentation"
            >
              {isDark ? <Sun /> : <Moon />}
            </Icon>
          </Flex>
        </Flex>
        {props.location.pathname === rootPath && <Bio />}
      </Styled.div>
    </header>
  )
}
