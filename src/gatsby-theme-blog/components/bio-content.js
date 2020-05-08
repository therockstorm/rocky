/** @jsx jsx */
import { Link } from "gatsby"
import { Fragment } from "react"
import { Flex, jsx, Styled } from "theme-ui"
import ExternalLink from "../../components/ExternalLink"
import GitHub from "../../components/icons/GitHub"
import Instagram from "../../components/icons/Instagram"
import LinkedIn from "../../components/icons/LinkedIn"
import Twitter from "../../components/icons/Twitter"
import Icon from "../../components/Icon"

const IconLink = ({ icon, ...other }) => (
  <ExternalLink {...other}>
    <Icon sx={{ mr: 3 }}>{icon}</Icon>
  </ExternalLink>
)

export default () => (
  <Fragment>
    Rocky Warren&#39;s blog.
    <br />
    Principal Engineer and Architect at Vertex Software.{" "}
    <Styled.a as={Link} to="/photos">
      I do other stuff too
    </Styled.a>
    .
    <br />
    <Flex sx={{ mt: 2 }}>
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
      <Styled.a as={Link} to="/resume">
        Resume
      </Styled.a>
    </Flex>
  </Fragment>
)
