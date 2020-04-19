/** @jsx jsx */
import Svg from "react-inlinesvg"
import { css, jsx, Styled } from "theme-ui"
import github from "../../../content/assets/github.svg"
import instagram from "../../../content/assets/instagram.svg"
import linkedIn from "../../../content/assets/linkedin.svg"
import rss from "../../../content/assets/rss.svg"
import twitter from "../../../content/assets/twitter.svg"

const icon = { mr: 3, width: 25 }

const IconLink = ({ src, ...other }) => (
  <Styled.a
    rel={"noopener noreferrer"}
    css={css(icon)}
    target={"_blank"}
    {...other}
  >
    <div sx={{ color: "text" }}>
      <Svg src={src} />
    </div>
  </Styled.a>
)

const Footer = () => (
  <footer css={css({ display: `flex`, mt: 4 })}>
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
      css={css({ ...icon, ml: `auto`, mr: 0 })}
    />
  </footer>
)

export default Footer
