/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Comments from "../components/Comments"
import PostDate from "../components/posts/PostDate"
import PostTitle from "../components/posts/PostTitle"
import SEO from "../components/posts/Seo"
import Layout from "../components/Layout"
import PostFooter from "../components/posts/PostFooter"

const Post = ({
  data: {
    content: { body, date, excerpt, title },
    site: { siteMetadata },
    previous,
    next,
  },
  location,
}) => {
  const [colorMode, setColorMode] = useColorMode()
  const commentBox = React.createRef()

  useEffect(() => {
    const color = colorMode === "default" ? "light" : colorMode
    const script = document.createElement("script")
    script.async = true
    script.src = "https://utteranc.es/client.js"
    script.setAttribute("repo", "therockstorm/rocky")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("label", "blog-comment")
    script.setAttribute("id", "utterances")
    script.setAttribute("theme", `github-${color}`)
    script.setAttribute("crossorigin", "anonymous")
    const node = commentBox.current
    if (commentBox && node) {
      while (node.firstChild) node.removeChild(node.lastChild)
      node.appendChild(script, script)
    } else console.log(`Error adding utterances comments.`)
  }, [colorMode])

  return (
    <Layout location={location} title={siteMetadata.title}>
      <SEO title={title} description={excerpt} />
      <main>
        <article>
          <header>
            <PostTitle>{title}</PostTitle>
            <PostDate sx={{ mt: -2 }}>{date}</PostDate>
          </header>
          <section>
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </article>
        <Comments commentBox={commentBox} />
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        title
      }
    }
    content(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageAlt
    }
    previous: content(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: content(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
