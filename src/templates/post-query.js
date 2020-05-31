/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostDate from "../components/posts/post-date"
import PostTitle from "../components/posts/post-title"
import SEO from "../components/posts/seo"
import Layout from "../components/layout"
import PostFooter from "../components/posts/post-footer"

const Post = ({
  data: {
    content: { body, date, excerpt, title },
    site: { siteMetadata },
    previous,
    next,
  },
  location,
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

export default Post

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    content(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageAlt
    }
    previous: content(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: content(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
