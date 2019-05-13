import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import { ISite } from ".."

interface IProps {
  description?: string
  image?: string
  lang?: string
  meta?: Array<{ content: string; property: string; name: undefined }>
  keywords?: string[]
  title: string
  slug?: string
}

export default ({
  image,
  title,
  description,
  slug,
  meta = [],
  keywords = [],
  lang = "en"
}: IProps) => {
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

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image ? `${site.siteMetadata.siteUrl}/${image}` : null
  const url = `${site.siteMetadata.siteUrl}${slug}`
  return (
    <Helmet
      htmlAttributes={{ lang }}
      {...(title
        ? { title, titleTemplate: `%s — ${site.siteMetadata.title}` }
        : { title: `${site.siteMetadata.title} — A blog by Rocky Warren` })}
      meta={[
        { name: `description`, content: metaDescription },
        { property: "og:url", content: url },
        { property: `og:title`, content: title || site.siteMetadata.title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata.social.twitter },
        { name: `twitter:title`, content: title || site.siteMetadata.title },
        { name: `twitter:description`, content: metaDescription }
      ]
        .concat(
          metaImage
            ? [
                { content: metaImage, property: "og:image" },
                { content: metaImage, name: "twitter:image" }
              ]
            : []
        )
        .concat(
          keywords.length > 0
            ? { name: `keywords`, content: keywords.join(`, `) }
            : []
        )
        .concat(meta)}
    />
  )
}
