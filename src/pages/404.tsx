import { graphql } from "gatsby"
import React from "react"
import { ILocation, ISite } from ".."
import Layout from "../components/Layout"
import SEO from "../components/Seo"

interface IProps {
  data: { site: ISite }
  location: ILocation
}

export default ({ data, location }: IProps) => (
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
