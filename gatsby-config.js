const none = `'none'`
const self = `'self'`
const youTube = `https://www.youtube.com`

module.exports = {
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-64259036-1` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sudo README`,
        short_name: `sudo README`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3b5fcc`,
        display: `minimal-ui`,
        icon: `content/assets/icon-512x512.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 624, linkImagesToOriginal: false },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "noopener noreferrer",
              target: "_blank",
            },
          },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            // https://github.com/WICG/feature-policy/blob/master/features.md
            `Feature-Policy: accelerometer ${youTube};ambient-light-sensor ${none};autoplay ${youTube};camera ${none};encrypted-media ${youTube};fullscreen ${self} ${youTube};geolocation ${none};gyroscope ${youTube};magnetometer ${none};microphone ${none};midi ${none};payment ${none};picture-in-picture ${self} ${youTube};speaker ${none};usb ${none};vr ${none};`,
            `Referrer-Policy: same-origin`,
            `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: { mdxOtherwiseConfigured: true },
    },
  ],
  siteMetadata: {
    author: `Rocky Warren`,
    description: `Rocky Warren's personal blog.`,
    siteUrl: `https://rocky.dev/`,
    social: [],
    title: `sudo README`,
  },
}
