export interface ILocation {
  pathname: string
}

export interface INode {
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

export interface IEdge {
  node: INode
}

export interface IMarkdown {
  edges: IEdge[]
}

export interface IPageContext {
  previous: INode
  next: INode
}

export interface ISite {
  siteMetadata: {
    author: string
    description: string
    siteUrl: string
    social: { twitter: string }
    title: string
  }
}
