interface Location {
  pathname: string
}

interface Node {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    updated: string
    title: string
    description: string
    image: {
      childImageSharp: {
        resize: {
          src: string
        }
        fixed: {
          src: string
        }
      }
    }
  }
  html: string
}

interface Edge {
  node: Node
}

interface Markdown {
  edges: Edge[]
}

interface PageContext {
  previous: Node
  next: Node
}

interface Site {
  siteMetadata: {
    author: string
    description: string
    siteUrl: string
    title: string
  }
}
