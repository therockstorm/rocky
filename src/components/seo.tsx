import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

interface Props {
  description?: string
  image?: string
  title: string
  slug?: string
}

const Seo = ({
  description,
  image,
  title,
  slug,
}: Props): React.ReactElement => {
  const { site }: { site: Site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
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
  const siteTitle = title || site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      {...{ title, titleTemplate: `%s - ${site.siteMetadata.title}` }}
      meta={[
        { name: `description`, content: desc },
        { property: "og:url", content: url },
        { property: `og:title`, content: siteTitle },
        { property: `og:description`, content: desc },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: `@therockstorm` },
        { name: `twitter:title`, content: siteTitle },
        { name: `twitter:description`, content: desc },
      ].concat(
        img
          ? [
              { content: img, property: "og:image" },
              { content: img, name: "twitter:image" },
            ]
          : []
      )}
    />
  )
}

export default Seo
