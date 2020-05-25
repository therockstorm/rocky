/** @jsx jsx */
import { jsx, Main } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import SEO from "gatsby-theme-blog/src/components/seo"
import Layout from "./layout"
import PostFooter from "./post-footer"

export default ({
  data: {
    post: { body, date, excerpt, title },
    site: { siteMetadata },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={siteMetadata.title}>
    <SEO title={title} description={excerpt} />
    <Main>
      <article>
        <header>
          <PostTitle>{title}</PostTitle>
          <PostDate sx={{ mt: -2 }}>{date}</PostDate>
        </header>
        <section>
          <MDXRenderer>{body}</MDXRenderer>
        </section>
      </article>
    </Main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)
