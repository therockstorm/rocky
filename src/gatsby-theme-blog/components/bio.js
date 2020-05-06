/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Flex, jsx, Styled } from "theme-ui"
import BioContent from "./bio-content"

const Bio = () => {
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = useStaticQuery(bioQuery)

  return (
    <Flex sx={{ mb: 4, alignItems: `center` }}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          sx={{
            mr: 2,
            mb: 0,
            width: 100,
            minWidth: 100,
            borderRadius: 99999,
          }}
        />
      ) : (
        <Styled.div
          sx={{
            mr: 2,
            mb: 0,
            width: 100,
            minWidth: 100,
            borderRadius: 99999,
          }}
          role="presentation"
        />
      )}
      <Styled.div>
        <BioContent />
      </Styled.div>
    </Flex>
  )
}

const bioQuery = graphql`
  query BioQueryShadowed {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
