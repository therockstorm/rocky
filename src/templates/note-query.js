import { graphql } from "gatsby"
import Note from "../components/notes/note"

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
