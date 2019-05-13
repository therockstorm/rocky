import { Link } from "gatsby"
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import Svg from "react-inlinesvg"
import { ILocation } from ".."
import moon from "../img/moon.svg"
import sun from "../img/sun.svg"
import { rhythm } from "../utils/typography"
import Toggle from "./Toggle"

// @ts-ignore
const rootPath = `${__PATH_PREFIX__}/`

interface IProps {
  location: ILocation
  title: string
}

export default ({ location, title }: IProps) => (
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
        <Link style={{ color: `inherit` }} to={`/`}>
          {title}
        </Link>
      </h1>
    ) : (
      <h3 style={{ lineHeight: rhythm(2), marginBottom: 0, marginTop: 0 }}>
        <Link to={`/`}>{title}</Link>
      </h3>
    )}
    <ThemeToggler>
      {({
        theme,
        toggleTheme
      }: {
        theme: string
        toggleTheme: (t: string) => void
      }) =>
        theme !== null ? (
          <Toggle
            icons={{
              checked: <Svg src={moon} className={"toggle"} />,
              unchecked: <Svg src={sun} className={"toggle"} />
            }}
            checked={theme === "dark"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              toggleTheme(e.target.checked ? "dark" : "light")
            }
          />
        ) : (
          <div style={{ height: "24px" }} />
        )
      }
    </ThemeToggler>
  </header>
)
