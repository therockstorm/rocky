import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { rhythm } from "../utils/typography"

const Bio = (): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)
  const { author, social } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          borderRadius: `50%`,
          marginBottom: 0,
          marginRight: rhythm(0.5),
          minWidth: 50
        }}
      />
      <p>
        {" "}
        <a
          href={`https://twitter.com/${social.twitter}`}
          rel="noopener noreferrer"
          target={"_blank"}
        >
          {author}
        </a>
        &#39;s blog. Engineering at Vertex Software and creator of{" "}
        <a
          href={"https://www.watchtower.dev/"}
          rel="noopener noreferrer"
          target={"_blank"}
        >
          Watchtower
        </a>
        . I do other stuff too.
      </p>
    </div>
  )
}

export default Bio
