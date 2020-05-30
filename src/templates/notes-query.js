/** @jsx jsx */
import { jsx } from "theme-ui"
import FileList from "../components/notes/file-list"
import Layout from "../components/layout"
import SEO from "../components/posts/seo"

const Notes = ({
  pageContext: { groupedNotes, urls, breadcrumbs, siteTitle },
  ...props
}) => (
  <Layout title={siteTitle} {...props}>
    <SEO title="Notes" />
    <FileList
      breadcrumbs={breadcrumbs}
      directories={groupedNotes}
      files={urls}
    />
  </Layout>
)

export default Notes
