/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { config, animated, useSpring, useTrail } from "react-spring"
import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Heart from "../components/icons/Heart"

export default ({
  data: {
    instagram: { nodes: instagram },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  const pageAnimation = useSpring({
    config: config.default,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const trail = useTrail(instagram.length, {
    config: {
      mass: 1,
      tension: 210,
      friction: 23,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout location={location} maxWidth={1600} title={title}>
      <SEO title="Photos" />
      <main>
        <animated.div
          style={pageAnimation}
          sx={{
            display: `grid`,
            gridTemplateColumns: [`1fr`, `1fr 1fr`, `1fr 1fr 1fr`],
          }}
        >
          {trail.map((style, index) => {
            const post = instagram[index]
            const title = post.caption ? post.caption.split("#")[0] : ""
            const date = new Date(post.timestamp * 1000).toLocaleDateString(
              "en-US"
            )

            return (
              <animated.a
                style={style}
                href={`https://www.instagram.com/p/${post.id}/`}
                key={post.id}
                rel={"noopener noreferrer"}
                sx={{
                  position: `relative`,
                  overflow: `hidden`,
                  "> div img": {
                    transition: `all 0.3s ease 0s !important`,
                  },
                  "&:hover": {
                    div: {
                      transform: `translateY(0)`,
                      opacity: 1,
                    },
                  },
                }}
              >
                <Styled.div
                  sx={{
                    position: `absolute`,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `rgba(0, 0, 0, 0.6)`,
                    zIndex: 2,
                    opacity: 0,
                    transition: `all 0.3s ease 0s`,
                  }}
                />
                <Image fluid={post.localFile.childImageSharp.fluid} />
                <Flex
                  sx={{
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    justifyContent: "space-between",
                    zIndex: 10,
                    position: `absolute`,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    p: 2,
                  }}
                >
                  <Styled.div
                    sx={{
                      color: `white`,
                      fontWeight: 700,
                      opacity: 0,
                      textShadow: `0 1px 3px rgba(0, 0, 0, 0.1)`,
                      transform: `translateY(-45px)`,
                      transition: `all 0.4s ease 0s`,
                    }}
                  >
                    {title}
                  </Styled.div>
                  <Flex
                    sx={{
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      justifyContent: "space-between",
                      color: `white`,
                      opacity: 0,
                      transform: `translateY(45px)`,
                      transition: `all 0.4s ease 0s`,
                    }}
                  >
                    <span>
                      <Heart
                        sx={{
                          position: `relative`,
                          top: `4px`,
                          height: `1.25rem`,
                          width: `1.25rem`,
                        }}
                      />{" "}
                      {post.likes}
                    </span>
                    <span>{date}</span>
                  </Flex>
                </Flex>
              </animated.a>
            )
          })}
        </animated.div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query Photos {
    instagram: allInstaNode(
      sort: { fields: timestamp, order: DESC }
      limit: 60
    ) {
      nodes {
        caption
        id
        timestamp
        likes
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
