/** @jsx jsx */
import { jsx } from "theme-ui"
import FileList from "../components/notes/FileList"
import Layout from "../components/Layout"
import SEO from "../components/posts/Seo"

const Notes = ({
  pageContext: { groupedNotes, urls, breadcrumbs },
  ...props
}) => (
  <Layout {...props}>
    <SEO title="Notes" />
    <FileList
      breadcrumbs={breadcrumbs}
      directories={groupedNotes}
      files={urls}
    />
  </Layout>
)

export default Notes
