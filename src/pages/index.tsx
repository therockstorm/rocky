import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

interface Props {
  data: { site: Site; allMdx: Mdx }
  location: Location
}

const Index = ({ data, location }: Props): React.ReactElement => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="Rocky Warren" />
    <Bio />
    {data.allMdx.edges.map(({ node }: Edge) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <article key={node.fields.slug}>
          <header>
            <h3 style={{ marginBottom: rhythm(0.25) }}>
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </article>
      )
    })}
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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

export default Index
