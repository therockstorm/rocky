/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import ExternalLink from "../../components/ExternalLink"
import GitHub from "../../components/icons/GitHub"
import Instagram from "../../components/icons/Instagram"
import LinkedIn from "../../components/icons/LinkedIn"
import Twitter from "../../components/icons/Twitter"
import Icon from "../../components/Icon"

const IconLink = ({ icon, ...other }) => (
  <ExternalLink {...other}>
    <Icon sx={{ mr: 4 }}>{icon}</Icon>
  </ExternalLink>
)

const Footer = () => (
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

export default Footer
