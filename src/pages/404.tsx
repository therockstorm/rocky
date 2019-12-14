import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: { site: Site }
  location: Location
}

const Error = ({ data, location }: Props): React.ReactElement => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="404: Not Found" />
    <h1>Not Found</h1>
    <p>Whoops, this page doesn&#39;t exist.</p>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Error
