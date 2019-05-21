import React from "react"
import Svg from "react-inlinesvg"
import github from "../img/github.svg"
import instagram from "../img/instagram.svg"
import linkedIn from "../img/linkedin.svg"
import rss from "../img/rss.svg"
import twitter from "../img/twitter.svg"
import { rhythm } from "../utils/typography"

const icon = { marginRight: rhythm(1), width: 25 }

const IconLink = ({
  src,
  ...other
}: { src: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a rel={"noopener noreferrer"} style={icon} target={"_blank"} {...other}>
    <Svg src={src} className={"footer-icon"} />
  </a>
)

export default () => (
  <footer style={{ display: `flex`, marginTop: rhythm(2.5) }}>
    <IconLink
      aria-label="Link to Twitter Profile"
      href={"https://twitter.com/therockstorm"}
      src={twitter}
    />
    <IconLink
      aria-label="Link to Instagram Profile"
      href={"https://www.instagram.com/therockstorm/"}
      src={instagram}
    />
    <IconLink
      aria-label="Link to LinkedIn Profile"
      href={"https://www.linkedin.com/in/rockywarren"}
      src={linkedIn}
    />
    <IconLink
      aria-label="Link to GitHub Profile"
      href={"https://github.com/therockstorm"}
      src={github}
    />
    <IconLink
      aria-label="Link to RSS Feed"
      href={"/rss.xml"}
      src={rss}
      style={{ ...icon, marginLeft: `auto`, marginRight: 0 }}
    />
  </footer>
)
