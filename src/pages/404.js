import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import React from "react"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

const Error = ({ data, location }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="404: Not Found" />
    <Styled.h1>Not Found</Styled.h1>
    <Styled.p>Whoops, this page doesn&#39;t exist.</Styled.p>
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
