/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostTitle from "../posts/post-title.js"
import SEO from "../posts/seo"
import Layout from "../layout"

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
