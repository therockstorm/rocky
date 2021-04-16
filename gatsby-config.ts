import queries from "./src/utils/algolia"
import { SiteMetadata, MdxContent } from "./types/index.d"

require("dotenv").config()

const none = `'none'`
const self = `'self'`
const youTube = `https://www.youtube.com`

export const siteMetadata: SiteMetadata = {
  author: `Rocky Warren`,
  description: `Rocky Warren's blog. Principal Architect, Tech Lead, and Product Manager at Vertex Software.`,
  siteUrl: `https://rocky.dev/`,
  social: [
    {
      name: `twitter`,
      url: `https://twitter.com/therockstorm`,
    },
  ],
  title: `sudo README`,
}

export const plugins = [
  `gatsby-plugin-advanced-sitemap`,
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000,
    },
  },
  {
    resolve: `gatsby-plugin-feed-mdx`,
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
          serialize: ({
            query: { site, allMdx },
          }: {
            query: { site: { siteMetadata: SiteMetadata }; allMdx: MdxContent }
          }) => {
            return allMdx.edges.map((edge) => {
              const slug = edge.node.slug
              const siteUrl = site.siteMetadata.siteUrl
              const postUrl = `${siteUrl}/${slug}`
              const postText = `<div style="margin-top=55px; font-style: italic;">(This is an article from my blog at https://rocky.dev. <a href="${postUrl}">Click here</a> to read it.)</div>`
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
                url: postUrl,
                guid: postUrl,
                custom_elements: [{ "content:encoded": html + postText }],
              })
            })
          },
          query: `
              {
                allMdx(
                  limit: 1000,
                  filter: {childMdxContent: {kind: {eq: "post"}}},
                  sort: {order: DESC, fields: [frontmatter___date]}
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      frontmatter {
                        date
                        title
                      }
                      slug
                    }
                  }
                }
              }
            `,
          output: "/rss.xml",
          match: "^blog/",
          title: "Rocky Warren's Blog RSS Feed",
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: { trackingId: `UA-64259036-1` },
  },
  `gatsby-plugin-image`,
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
          options: { maxWidth: 960, linkImagesToOriginal: false },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-embedder`,
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
    resolve: "gatsby-source-instagram",
    options: {
      access_token: process.env.ACCESS_TOKEN,
      instagram_id: process.env.BUSINESS_ID,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: { path: `content/notes`, name: `content/notes` },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: { path: `content/posts`, name: `content/posts` },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: { path: `content/assets`, name: `content/assets` },
  },
  `gatsby-plugin-sharp`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-emotion`,
  `gatsby-plugin-theme-ui`,
  `gatsby-plugin-typescript`,
  `gatsby-transformer-sharp`,
]
