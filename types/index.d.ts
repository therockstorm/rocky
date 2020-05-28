export interface SiteMetadata {
  author?: string
  description?: string
  siteUrl?: string
  social?: Array<{ name?: string; url?: string }>
  title?: string
}

export interface MdxNode {
  id: string
  parent: {
    name: string
    base: string
    relativePath: string
    sourceInstanceName: string
  }
  pagePath?: string
  url?: string
}

export interface NotesQuery {
  site: { siteMetadata: SiteMetadata }
  mdxPages: { edges: [{ node: MdxNode }] }
}

export interface Frontmatter {
  title?: string
  tags: string[]
  slug: string
  date?: string
  keywords: string[]
  image?: string
  image___NODE?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface Location {
  pathname: string
}
