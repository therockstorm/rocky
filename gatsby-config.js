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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocky Warren`,
        start_url: `/`,
        background_color: `#892b00`,
        theme_color: `#892b00`,
        display: `standalone`,
        icon: `src/img/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'Referrer-Policy: strict-origin',
            //https://csp-evaluator.withgoogle.com/
            "Content-Security-Policy: default-src 'none';script-src 'self' https://www.google-analytics.com 'unsafe-inline' data:;style-src 'unsafe-inline';img-src 'self' https://www.google-analytics.com data:;font-src 'self';manifest-src 'self';"
          ]
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`
  ]
}
