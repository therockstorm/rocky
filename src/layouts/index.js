import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Head from './Head'

const Template = ({ children, data }) => (
  <div>
    <Head siteMetadata={data.site.siteMetadata} />
    {children()}
  </div>
)

Template.propTypes = {
  children: PropTypes.func
}

export const query = graphql`
  query LandingLayoutQuery {
    site {
      ...SiteMetadata
    }
  }
`

export default Template
