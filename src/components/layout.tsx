import React from "react"
import { rhythm } from "../utils/typography"
import Footer from "./footer"
import Header from "./header"

interface Props {
  location: Location
  title: string
  children: React.ReactNode
}

const Layout = ({ children, title, location }: Props): React.ReactElement => (
  <div
    style={{
      backgroundColor: "var(--bg)",
      color: "var(--textNormal)",
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(27.5),
      padding: `${rhythm(1.7)} ${rhythm(0.85)}`,
      transition: "color 0.2s ease-out"
    }}
  >
    <Header location={location} title={title} />
    {children}
    <Footer />
  </div>
)

export default Layout
