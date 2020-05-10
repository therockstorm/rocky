/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostFooter from "./post-footer"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <article>
        <header>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
