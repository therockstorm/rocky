import React from 'react'
import Helmet from 'react-helmet'
import './global'

const Head = ({ siteMetadata: { title, description, siteUrl } }) => (
  <Helmet>
    <html lang="en" />
    <meta name="description" content={description} />
    <meta itemprop="name" content={title} />
    <meta itemprop="description" content={description} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <title>{title}</title>

    <link rel="canonical" href={siteUrl} />
  </Helmet>
)

export default Head
