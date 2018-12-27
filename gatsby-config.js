const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `https://www.rockywarren.com/`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env

module.exports = {
  siteMetadata: {
    siteUrl:
      NETLIFY_ENV === 'production' ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
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
            //https://csp-evaluator.withgoogle.com/
            `Content-Security-Policy: default-src 'none';script-src 'self' https://www.google-analytics.com 'unsafe-inline' data:;style-src 'unsafe-inline' https://fonts.googleapis.com;img-src 'self' https://www.google-analytics.com data:;font-src 'self' https://fonts.gstatic.com;connect-src 'self';`,
            // https://github.com/WICG/feature-policy/blob/master/features.md
            `Feature-Policy: accelerometer 'none';ambient-light-sensor 'none';autoplay 'none';camera 'none';encrypted-media 'none';fullscreen 'none';geolocation 'none';gyroscope 'none';magnetometer 'none';microphone 'none';midi 'none';payment 'none';picture-in-picture 'none';speaker 'none';usb 'none';vr 'none';`,
            `Referrer-Policy: no-referrer`,
            `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
          ]
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: { policy: [{ userAgent: '*' }] },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`
  ]
}
