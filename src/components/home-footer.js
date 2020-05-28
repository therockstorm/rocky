/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import ExternalLink from "./ExternalLink"
import GitHub from "./icons/GitHub"
import Instagram from "./icons/Instagram"
import LinkedIn from "./icons/LinkedIn"
import Twitter from "./icons/Twitter"
import Icon from "./Icon"

const IconLink = ({ icon, ...other }) => (
  <ExternalLink {...other}>
    <Icon sx={{ mr: 4 }}>{icon}</Icon>
  </ExternalLink>
)

const HomeFooter = () => (
  <footer>
    <Styled.hr sx={{ my: 4 }} />
    <Flex>
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
    </Flex>
  </footer>
)

export default HomeFooter
