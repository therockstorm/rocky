import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { rhythm, scale } from "../utils/typography"

interface IProps {
  data: { site: ISite; markdownRemark: INode }
  location: ILocation
  pageContext: IPageContext
}

export default ({ data, location, pageContext }: IProps) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        slug={post.fields.slug}
      />
      <main>
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <p
              style={{
                ...scale(-0.2),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(-1)
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <hr style={{ marginBottom: rhythm(1) }} />
      <aside>
        <Bio />
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
      }
    }
  }
`
