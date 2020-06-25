/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import { ReactElement } from "react"
import ExternalLink from "./ExternalLink"
import GitHub from "./icons/GitHub"
import Instagram from "./icons/Instagram"
import LinkedIn from "./icons/LinkedIn"
import Twitter from "./icons/Twitter"
import Icon from "./Icon"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconLink = ({ icon, mr, ...other }: any) => (
  <ExternalLink {...other}>
    <Icon sx={{ mr }}>{icon}</Icon>
  </ExternalLink>
)

const HomeFooter = (): ReactElement => (
  <footer>
    <Styled.hr sx={{ my: 4 }} />
    <Flex sx={{ justifyContent: "center" }}>
      <IconLink
        aria-label="Link to Twitter Profile"
        href={"https://twitter.com/therockstorm"}
        icon={<Twitter />}
        mr={4}
      />
      <IconLink
        aria-label="Link to Instagram Profile"
        href={"https://www.instagram.com/therockstorm/"}
        icon={<Instagram />}
        mr={4}
      />
      <IconLink
        aria-label="Link to LinkedIn Profile"
        href={"https://www.linkedin.com/in/rockywarren"}
        icon={<LinkedIn />}
        mr={4}
      />
      <IconLink
        icon={<GitHub />}
        aria-label="Link to GitHub Profile"
        href={"https://github.com/therockstorm"}
        mr={0}
      />
    </Flex>
  </footer>
)

export default HomeFooter
