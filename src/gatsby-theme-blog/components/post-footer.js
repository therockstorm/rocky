/** @jsx jsx */
import { Link } from "gatsby"
import { Flex, jsx, Styled } from "theme-ui"
import NoBullet from "../../components/NoBullet"

import Bio from "../components/bio"

const Footer = ({ previous, next }) => (
  <footer sx={{ mt: 4 }}>
    <Styled.hr />
    <Bio />
    {(previous || next) && (
      <Flex
        as="ul"
        sx={{
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <NoBullet>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </NoBullet>
        <NoBullet>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </NoBullet>
      </Flex>
    )}
  </footer>
)

export default Footer
