import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { rhythm } from "../utils/typography"

interface IProps {
  data: { site: ISite; allMarkdownRemark: IMarkdown }
  location: ILocation
}

export default ({ data, location }: IProps) => {
  const siteTitle = data.site.siteMetadata.title
  const posts: IEdge[] = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Rocky Warren"
        keywords={[
          `blog`,
          `typescript`,
          `javascript`,
          `aws`,
          `lambda`,
          `serverless`,
          `dwolla`
        ]}
      />
      <Bio />
      {posts.map(({ node }: IEdge) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3 style={{ marginBottom: rhythm(0.25) }}>
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
