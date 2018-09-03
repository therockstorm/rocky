import * as React from 'react'
import Head from './Head'

const Template = ({
  children,
  data
}: {
  children: () => any
  data: { site: { siteMetadata: Metadata } }
}) => (
  <div>
    <Head siteMetadata={data.site.siteMetadata} />
    {children()}
  </div>
)

export const query = graphql`
  query LandingLayoutQuery {
    site {
      ...SiteMetadata
    }
  }
`

export default Template
