/** @jsx jsx */
import Svg from "react-inlinesvg"
import { css, jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import github from "../../../content/assets/github.svg"
import instagram from "../../../content/assets/instagram.svg"
import linkedIn from "../../../content/assets/linkedin.svg"
import twitter from "../../../content/assets/twitter.svg"

const IconLink = ({ src, ...other }) => (
  <Styled.a
    rel={"noopener noreferrer"}
    css={css({ mr: 3, width: 20 })}
    target={"_blank"}
    {...other}
  >
    <Styled.div sx={{ color: "text" }}>
      <Svg src={src} />
    </Styled.div>
  </Styled.a>
)

export default () => (
  <Fragment>
    Rocky Warren&#39;s blog.
    <br />
    Staff Software Engineer at Vertex Software. I do other stuff too.
    <br />
    <Styled.div css={css({ display: `flex`, mt: 2 })}>
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
    </Styled.div>
  </Fragment>
)
