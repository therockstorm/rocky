module.exports = {
  siteMetadata: {
    author: `Rocky Warren`,
    description: `Rocky Warren's personal blog.`,
    siteUrl: `https://rocky.dev/`,
    social: { twitter: "@therockstorm" },
    title: `really rocky`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 624 }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-64259036-1` }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl
                const postText = `<div style="margin-top=55px; font-style: italic;">(This is an article from my blog at https://rocky.dev. <a href="${siteUrl}${
                  edge.node.fields.slug
                }">Click here</a> to read it.)</div>`
                let html = edge.node.html
                // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${siteUrl}${edge.node.fields.slug}`,
                  guid: `${siteUrl}${edge.node.fields.slug}`,
                  custom_elements: [{ "content:encoded": html + postText }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Rocky Warren's Blog RSS Feed"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            //https://csp-evaluator.withgoogle.com/
            `Content-Security-Policy: default-src 'none';script-src 'self' https://www.google-analytics.com 'unsafe-inline' data:;style-src 'unsafe-inline';img-src 'self' https://www.google-analytics.com data:;font-src 'self' https://fonts.gstatic.com;connect-src 'self' https://www.google-analytics.com;manifest-src 'self';frame-src https://player.vimeo.com;prefetch-src 'self' https://*.google.com https://www.google-analytics.com;`,
            // https://github.com/WICG/feature-policy/blob/master/features.md
            `Feature-Policy: accelerometer 'none';ambient-light-sensor 'none';autoplay 'none';camera 'none';encrypted-media 'none';fullscreen 'self' https://player.vimeo.com;geolocation 'none';gyroscope 'none';magnetometer 'none';microphone 'none';midi 'none';payment 'none';picture-in-picture 'self' https://player.vimeo.com;speaker 'none';usb 'none';vr 'none';`,
            `Referrer-Policy: same-origin`,
            `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `really rocky`,
        short_name: `really rocky`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3b5fcc`,
        display: `minimal-ui`,
        icon: `content/assets/icon-512x512.png`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
}
