/** @jsx jsx */
import { jsx, Main } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import SEO from "gatsby-theme-blog/src/components/seo"
import Breadcrumbs from "gatsby-theme-notes/src/components/breadcrumbs"
import Layout from "../../gatsby-theme-blog/components/layout"

export default ({
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
    <Main>
      <Main>
        <article>
          <header>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </header>
          <section>
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </article>
      </Main>
    </Main>
  </Layout>
)
