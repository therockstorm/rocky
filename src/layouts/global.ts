import { injectGlobal } from 'styled-components'
import 'typeface-open-sans'

injectGlobal`
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

export const siteMetadata = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
`
