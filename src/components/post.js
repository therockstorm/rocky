/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostDate from "../components/posts/post-date"
import PostTitle from "../components/posts/post-title"
import SEO from "../components/posts/seo"
import Layout from "./layout"
import PostFooter from "./posts/post-footer"

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
    <main>
      <article>
        <header>
          <PostTitle>{title}</PostTitle>
          <PostDate sx={{ mt: -2 }}>{date}</PostDate>
        </header>
        <section>
          <MDXRenderer>{body}</MDXRenderer>
        </section>
      </article>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)
