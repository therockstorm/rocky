/** @jsx jsx */
import { css, jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import GitHub from "../../components/GitHub"
import Instagram from "../../components/Instagram"
import LinkedIn from "../../components/LinkedIn"
import Twitter from "../../components/Twitter"

const IconLink = ({ icon, ...other }) => (
  <Styled.a
    rel={"noopener noreferrer"}
    sx={{ color: "text", mr: 3, width: 20 }}
    target={"_blank"}
    {...other}
  >
    {icon}
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
        icon={<Twitter />}
      />
      <IconLink
        aria-label="Link to Instagram Profile"
        href={"https://www.instagram.com/therockstorm/"}
        icon={<Instagram />}
      />
      <IconLink
        aria-label="Link to LinkedIn Profile"
        href={"https://www.linkedin.com/in/rockywarren"}
        icon={<LinkedIn />}
      />
      <IconLink
        icon={<GitHub />}
        aria-label="Link to GitHub Profile"
        href={"https://github.com/therockstorm"}
      />
    </Styled.div>
  </Fragment>
)
