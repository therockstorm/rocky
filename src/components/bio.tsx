import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { rhythm } from "../utils/typography"

const Bio = (): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
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
  `)
  const { author } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
        alignItems: "center"
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          borderRadius: `50%`,
          marginRight: rhythm(1),
          minWidth: 100
        }}
      />
      <p style={{ marginBottom: 0 }}>
        {" "}
        <a
          href={`https://twitter.com/therockstorm`}
          rel="noopener noreferrer"
          target={"_blank"}
        >
          {author}
        </a>
        &#39;s blog.
        <br />
        Data Engineering at Vertex Software.
        <br />I do{" "}
        <a
          href={`https://www.instagram.com/therockstorm/`}
          rel="noopener noreferrer"
          target={"_blank"}
        >
          other stuff
        </a>{" "}
        too.
      </p>
    </div>
  )
}

export default Bio
