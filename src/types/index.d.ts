interface ILocation {
  pathname: string
}

interface INode {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
    description: string
  }
  html: string
}

interface IEdge {
  node: INode
}

interface IMarkdown {
  edges: IEdge[]
}

interface IPageContext {
  previous: INode
  next: INode
}

interface ISite {
  siteMetadata: {
    author: string
    description: string
    siteUrl: string
    social: { twitter: string }
    title: string
  }
}
