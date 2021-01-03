/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostTitle from "../components/posts/PostTitle"
import SEO from "../components/posts/Seo"
import Layout from "../components/Layout"
import PostFooter from "../components/posts/PostFooter"

const Note = ({
  data: {
    content: { body, excerpt, title },
    site: { siteMetadata },
  },
  location,
}) => (
  <Layout location={location} title={siteMetadata.title}>
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
    <PostFooter />
  </Layout>
)

export default Note

export const pageQuery = graphql`
  query($id: String!) {
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
    site: site {
      siteMetadata {
        title
      }
    }
  }
`
