/** @jsx jsx */
import { jsx } from "theme-ui"
import FileList from "../components/notes/FileList"
import Layout from "../components/Layout"
import SEO from "../components/posts/Seo"

const Notes = ({ pageContext: { groupedNotes, urls, title }, ...props }) => (
  <Layout {...props} title={title}>
    <SEO title="Notes" />
    <FileList directories={groupedNotes} files={urls.sort((a, b) => a > b)} />
  </Layout>
)

export default Notes
