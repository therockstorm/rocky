import React from "react"
import { ILocation } from ".."
import { rhythm } from "../utils/typography"
import Footer from "./Footer"
import Header from "./Header"

interface IProps {
  location: ILocation
  title: string
  children: React.ReactNode
}

export default ({ children, title, location }: IProps) => (
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
