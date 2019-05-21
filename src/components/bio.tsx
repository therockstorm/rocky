import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { rhythm } from "../utils/typography"

const rel = "noopener noreferrer"

export default () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author } = data.site.siteMetadata
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
              href="https://twitter.com/therockstorm"
              rel={rel}
              target={"_blank"}
            >
              {author}
            </a>
            's blog. Principal Engineer at Dwolla and creator of{" "}
            <a href={"https://www.watchtower.dev/"} rel={rel} target={"_blank"}>
              Watchtower
            </a>
            . I do other stuff too.
          </p>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
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
      }
    }
  }
`
