/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Footer from "../components/HomeFooter"
import Layout from "../components/Layout"
import PostList from "../components/posts/PostList"
import SEO from "../components/posts/Seo"

const Posts = ({
  location,
  data: {
    site: {
      siteMetadata: { title },
    },
    allMdxContent: { edges },
  },
}) => (
  <Layout location={location} title={title}>
    <SEO title="Rocky Warren" />
    <main>
      <PostList posts={edges} />
    </main>
    <Footer />
  </Layout>
)

export default Posts

export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdxContent(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { kind: { eq: "post" } }
    ) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
`
