/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostTitle from "../components/posts/post-title"
import SEO from "../components/posts/seo"
import Layout from "../components/layout"

const Note = ({
  data: {
    note: {
      body,
      excerpt,
      frontmatter: { date, title },
    },
    site: { siteMetadata },
  },
  ...props
}) => (
  <Layout {...props} title={siteMetadata.title}>
    <SEO title={title} description={excerpt} />
    <main>
      <article>
        <header>
          <PostTitle>{title}</PostTitle>
        </header>
        <section>
          <MDXRenderer>{body}</MDXRenderer>
        </section>
      </article>
    </main>
  </Layout>
)

export default Note

export const pageQuery = graphql`
  query($id: String!) {
    note: mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 5000)
      frontmatter {
        date(formatString: "MMM D, YYYY")
        title
      }
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`
