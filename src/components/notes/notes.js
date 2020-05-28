/** @jsx jsx */
import { jsx } from "theme-ui"
import FileList from "./file-list"
import Layout from "../layout"
import SEO from "../posts/seo"

const Notes = ({ directories, siteTitle, ...props }) => (
  <Layout title={siteTitle} {...props}>
    <SEO title="Notes" />
    <FileList directories={directories} />
  </Layout>
)

export default Notes
