export interface SiteMetadata {
  author?: string
  description?: string
  siteUrl?: string
  social?: Array<{ name?: string; url?: string }>
  title?: string
}

export interface MdxNode {
  id: string
  slug: string
  filename: string
  relativePath: string
  pagePath?: string
  url?: string
}

export interface MdxContent {
  edges: [{ node: MdxNode }]
}

export interface NotesQuery {
  site: { siteMetadata: SiteMetadata }
  mdxContent: MdxContent
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
