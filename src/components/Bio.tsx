/** @jsx jsx */
import { ReactElement } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
          gatsbyImageData(layout: FIXED, width: 100, height: 100)
        }
      }
    }
  `)

  return (
    <Flex sx={{ mb: 4, alignItems: `center` }}>
      {avatar ? (
        <GatsbyImage
          image={avatar.childImageSharp.gatsbyImageData}
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
