/** @jsx jsx */
import { jsx } from "theme-ui"
import FileList from "./file-list"
import Layout from "../../gatsby-theme-blog/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

export default ({ directories, siteTitle, ...props }) => (
  <Layout title={siteTitle} {...props}>
    <SEO title="Notes" />
    <FileList directories={directories} />
  </Layout>
)
