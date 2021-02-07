/** @jsx jsx */
import { Link } from "gatsby"
import { ReactElement, ReactNode } from "react"
import { Flex, jsx, useColorMode, Styled } from "theme-ui"
import Bio from "./Bio"
import Search from "./search/index"
import Moon from "./icons/Moon"
import Sun from "./icons/Sun"
import Icon from "./Icon"
import { Location } from "../../types"

declare const __PATH_PREFIX__: string
const rootPath = `${__PATH_PREFIX__}/`
const height = 42
const lineHeight = `2.625rem`

interface Props {
  readonly children: ReactNode
  readonly location: Location
  readonly title: string
}

const Title = ({
  children,
  location,
}: {
  children: ReactNode
  location: Location
}) =>
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

const Header = ({
  children,
  location,
  title,
  ...props
}: Props): ReactElement => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = () => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ "@media print": { display: `none` } }}>
      <Styled.div sx={{ maxWidth: `container`, mx: `auto`, px: 3, pt: 4 }}>
        <Flex
          sx={{
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          }}
        >
          <Title location={location} {...props}>
            {title}
          </Title>
          {children}
          <Flex>
            <Search
              collapse
              indices={[
                { name: `Posts`, title: `Posts` },
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
        {location.pathname === rootPath && <Bio />}
      </Styled.div>
    </header>
  )
}

export default Header
