/** @jsx jsx */
import { Link } from "gatsby"
import { Flex, jsx, Styled } from "theme-ui"
import NoBullet from "../NoBullet"
import Bio from "../Bio"

const PostFooter = ({ previous, next }) => (
  <footer>
    <Styled.hr sx={{ my: 4 }} />
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

export default PostFooter
