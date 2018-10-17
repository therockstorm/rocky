import * as React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import 'typeface-open-sans'

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  position: relative;
  min-height: 100%;
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  background-color: #F2F2F2;
}

a {
  text-decoration: none;
  color: #892b00;
}

a:active,
a:hover {
  color: #ff4f00;
}
`

export default ({ children }: { children: any }) => {
  const title = `Rocky Warren`
  const description = `Rocky Warren's Personal Website.`
  const siteUrl = `https://www.rockywarren.com/`
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <meta name="description" content={description} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <title>{title}</title>

        <link rel="canonical" href={siteUrl} />
      </Helmet>
      {children}
    </div>
  )
}
