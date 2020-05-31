/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Footer from "../components/home-footer"
import Layout from "../components/layout"
import PostList from "../components/posts/post-list"
import SEO from "../components/posts/seo"

const Posts = ({
  location,
  data: {
    site: {
      siteMetadata: { title },
    },
    allMdxContent: { edges },
  },
}) => {
  return (
    <Layout location={location} title={title}>
      <SEO title="Rocky Warren" />
      <main>
        <PostList posts={edges} />
      </main>
      <Footer />
    </Layout>
  )
}

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
