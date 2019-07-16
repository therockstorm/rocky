import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

interface IProps {
  description?: string
  image?: string
  title: string
  slug?: string
}

export default ({ description, image, title, slug }: IProps) => {
  const { site }: { site: ISite } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const desc = description || site.siteMetadata.description
  const img = image
    ? `${site.siteMetadata.siteUrl}${image.replace("/", "")}`
    : null
  const url = `${site.siteMetadata.siteUrl}${slug}`
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      {...{ title, titleTemplate: `%s - ${site.siteMetadata.title}` }}
      meta={[
        { name: `description`, content: desc },
        { property: "og:url", content: url },
        { property: `og:title`, content: title || site.siteMetadata.title },
        { property: `og:description`, content: desc },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata.social.twitter },
        { name: `twitter:title`, content: title || site.siteMetadata.title },
        { name: `twitter:description`, content: desc }
      ].concat(
        img
          ? [
              { content: img, property: "og:image" },
              { content: img, name: "twitter:image" }
            ]
          : []
      )}
    />
  )
}