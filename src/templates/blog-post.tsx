import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

interface IProps {
  data: { site: ISite; markdownRemark: INode }
  location: ILocation
  pageContext: IPageContext
}

export default ({ data, location, pageContext }: IProps) => {
  const post = data.markdownRemark
  const fm = post.frontmatter
  const title = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={title}>
      <SEO
        description={fm.description || post.excerpt}
        image={fm.image.childImageSharp.fixed.src}
        title={fm.title}
        slug={post.fields.slug}
      />
      <main>
        <article>
          <header>
            <h1>{fm.title}</h1>
            <p
              style={{
                ...scale(-0.2),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(-1)
              }}
            >
              {fm.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr style={{ marginBottom: rhythm(1) }} />
          <footer>
            <Bio />
          </footer>
        </article>
      </main>

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
        image {
          childImageSharp {
            fixed(width: 600, height: 600, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
