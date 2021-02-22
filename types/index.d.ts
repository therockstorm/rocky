export interface SiteMetadata {
  readonly author?: string
  readonly description?: string
  readonly siteUrl?: string
  readonly social?: Array<{ name?: string; url?: string }>
  readonly title?: string
}

export interface MdxNode {
  readonly id: string
  readonly excerpt: string
  readonly fields: { slug: string }
  readonly filename: string
  readonly frontmatter: Frontmatter
  readonly html: string
  readonly relativePath: string
  readonly slug: string
}

export interface MdxContent {
  readonly edges: [{ node: MdxNode }]
}

export interface Frontmatter {
  readonly title?: string
  readonly tags: string[]
  readonly slug: string
  readonly date?: string
  readonly keywords: string[]
  readonly image?: string
  image___NODE?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly [key: string]: any
}

export interface Location {
  readonly pathname: string
}
