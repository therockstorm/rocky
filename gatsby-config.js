module.exports = {
  siteMetadata: {
    title: `Rocky Warren`,
    description: `Rocky Warren's Personal Website.`,
    siteUrl: `https://www.rockywarren.com/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-64259036-1` }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'Referrer-Policy: strict-origin',
            //https://csp-evaluator.withgoogle.com/
            "Content-Security-Policy: default-src 'none';script-src 'self' https://www.google-analytics.com 'unsafe-inline';style-src 'unsafe-inline';img-src 'self' https://www.google-analytics.com data:;font-src 'self';"
          ]
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
}
