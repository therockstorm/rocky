import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/posts/Seo"

const NotFound = ({ data, location }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="404: Not Found" />
    <Styled.h1>Not Found</Styled.h1>
    <Styled.p>Whoops, this page doesn&#39;t exist.</Styled.p>
  </Layout>
)

export default NotFound

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
