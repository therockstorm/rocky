import { Link } from "gatsby"
import { Theme, ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import Svg from "react-inlinesvg"
import moon from "../img/moon.svg"
import sun from "../img/sun.svg"
import { rhythm } from "../utils/typography"

declare const __PATH_PREFIX__: string
const rootPath = `${__PATH_PREFIX__}/`

interface Props {
  location: Location
  title: string
}

const monospace =
  "Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif"

const Header = ({ location, title }: Props): React.ReactElement => (
  <header
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: rhythm(2)
    }}
  >
    {location.pathname === rootPath ? (
      <h1 style={{ marginBottom: 0, marginTop: 0 }}>
        <Link style={{ color: `inherit`, fontFamily: monospace }} to={`/`}>
          {title}
        </Link>
      </h1>
    ) : (
      <h3
        style={{
          lineHeight: rhythm(2),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: monospace
        }}
      >
        <Link to={`/`}>{title}</Link>
      </h3>
    )}
    <ThemeToggler>
      {({ theme, toggleTheme }: Theme): React.ReactElement => {
        if (theme === null) return <div style={{ height: "20px" }} />
        const isDark = theme === "dark"
        return (
          <div
            style={{ height: "20px", width: "20px", cursor: "pointer" }}
            onClick={(): void => toggleTheme(isDark ? "light" : "dark")}
          >
            <Svg src={isDark ? sun : moon} className={"toggle"} />
          </div>
        )
      }}
    </ThemeToggler>
  </header>
)

export default Header
