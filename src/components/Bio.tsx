/** @jsx jsx */
import { ReactElement } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Flex, jsx, Styled } from "theme-ui"
import BioContent from "./BioContent"

const Bio = (): ReactElement => {
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = useStaticQuery(graphql`
    query BioQuery {
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
  `)

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
      <BioContent />
    </Flex>
  )
}

export default Bio
