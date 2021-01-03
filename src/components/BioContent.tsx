/** @jsx jsx */
import { Link } from "gatsby"
import { ReactElement } from "react"
import { Flex, jsx, Styled } from "theme-ui"
import ExternalLink from "../components/ExternalLink"
import Icon from "./Icon"
import GitHub from "./icons/GitHub"
import Instagram from "./icons/Instagram"
import LinkedIn from "./icons/LinkedIn"
import Twitter from "./icons/Twitter"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconLink = ({ icon, mr, ...other }: Record<string, unknown>) => (
  <ExternalLink {...other}>
    <Icon sx={{ mr }}>{icon}</Icon>
  </ExternalLink>
)

const BioContent = (): ReactElement => (
  <Styled.div>
    <Styled.p sx={{ mb: 1 }}>
      Rocky Warren&#39;s blog. Principal Architect, Tech Lead, Product
      Manager. I{" "}
      <ExternalLink href={"https://www.rockywarren.com/"}>
        do other stuff
      </ExternalLink>{" "}
      too.
    </Styled.p>
    <Flex sx={{ flexWrap: `wrap`, mb: 2 }}>
      <Styled.a as={Link} sx={{ mr: 2 }} to="/resume">
        Resume
      </Styled.a>
      <Styled.a as={Link} sx={{ mr: 2 }} to="/notes">
        Notes
      </Styled.a>
      <Styled.a as={Link} sx={{ mr: 0 }} to="/photos">
        Photos
      </Styled.a>
    </Flex>
    <Flex sx={{ flexWrap: `wrap` }}>
      <IconLink
        aria-label="Link to Twitter Profile"
        href={"https://twitter.com/therockstorm"}
        icon={<Twitter />}
        mr={3}
      />
      <IconLink
        aria-label="Link to Instagram Profile"
        href={"https://www.instagram.com/therockstorm/"}
        icon={<Instagram />}
        mr={3}
      />
      <IconLink
        aria-label="Link to LinkedIn Profile"
        href={"https://www.linkedin.com/in/rockywarren"}
        icon={<LinkedIn />}
        mr={3}
      />
      <IconLink
        icon={<GitHub />}
        aria-label="Link to GitHub Profile"
        href={"https://github.com/therockstorm"}
        mr={0}
      />
    </Flex>
  </Styled.div>
)

export default BioContent
