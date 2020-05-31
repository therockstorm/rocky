import fs from "fs"
import path from "path"
import mkdirp from "mkdirp"
import { urlResolve, createContentDigest, slash } from "gatsby-core-utils"
import { createFilePath, createRemoteFileNode } from "gatsby-source-filesystem"
import {
  Actions,
  CreateNodeArgs,
  CreatePagesArgs,
  CreateSchemaCustomizationArgs,
  GatsbyNode,
  Node,
  Reporter,
} from "gatsby"
import { Frontmatter, MdxNode, NotesQuery } from "./types/index.d"

// const basePostsPath = "/"
// const postsPath = "content/posts"

interface PathData {
  kind: string
  basePath: string
  filePath: string
}

const pathData = new Map<string, PathData>()
pathData.set("posts", {
  kind: "post",
  basePath: "/",
  filePath: "content/posts",
})
pathData.set("notes", {
  kind: "note",
  basePath: "/notes",
  filePath: "content/notes",
})

export const onPreBootstrap: GatsbyNode["onPreBootstrap"] = ({ store }) => {
  const progDir = store.getState().program.directory
  for (const v of pathData.values()) {
    const d = path.join(progDir, v.filePath)
    if (!fs.existsSync(d)) mkdirp.sync(d)
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const postData = pathData.get("posts") as PathData
  const noteData = pathData.get("notes") as PathData
  await createContentPages(graphql, createPage, reporter, postData)

  const toNotesPath = (node: MdxNode) => {
    const { dir } = path.parse(node.parent.relativePath)
    return urlResolve(noteData.basePath, dir, node.parent.name)
  }
  const result = await graphql<NotesQuery>(`
    {
      site {
        siteMetadata {
          title
        }
      }
      mdxPages: allMdx {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                base
                relativePath
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors || !result.data) return reporter.panic(result.errors)

  const { mdxPages, site } = result.data
  const siteTitle = site.siteMetadata.title
  const notes = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === noteData.filePath
  )

  notes.forEach(({ node }) => {
    createPage({
      path: toNotesPath(node),
      context: {
        ...node,
        title: node.parent.name,
      },
      component: require.resolve(`./src/templates/note-query`),
    })
  })

  const notesUrls = notes.map(({ node }) => toNotesPath(node))
  const groupedNotes = notes.reduce(
    (acc: { [key: string]: MdxNode[] }, { node }) => {
      const { dir } = path.parse(node.parent.relativePath)
      if (!dir) return acc

      acc[dir] = acc[dir] || []
      acc[dir].push({
        pagePath: urlResolve(noteData.basePath, dir),
        url: toNotesPath(node),
        ...node,
      })

      return acc
    },
    {}
  )

  const notesTemplate = require.resolve("./src/templates/notes-query")
  Object.entries(groupedNotes).map(([key, value]) => {
    const breadcrumbs = key
      .split(path.sep)
      .reduce(
        (acc: unknown[], dir) => [
          ...acc,
          { name: dir, url: urlResolve(noteData.basePath, dir) },
        ],
        []
      )

    createPage({
      path: urlResolve(noteData.basePath, key),
      context: { breadcrumbs, siteTitle, urls: value.map((v) => v.url) },
      component: notesTemplate,
    })
  })

  createPage({
    path: noteData.basePath,
    context: { urls: notesUrls, groupedNotes, siteTitle },
    component: notesTemplate,
  })
}

const createContentPages = async (
  graphql: CreatePagesArgs["graphql"],
  createPage: Actions["createPage"],
  reporter: Reporter,
  pathData: PathData
) => {
  const result = await graphql<{
    allMdxContent: { edges: [{ node: { id: string; slug: string } }] }
  }>(`
    {
      allMdxContent(
        sort: { fields: [date, title], order: DESC }
        limit: 1000
        filter: { kind: { eq: "${pathData.kind}" } }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  if (result.errors || !result.data) return reporter.panic(result.errors)

  const content = result.data.allMdxContent.edges
  content.forEach(({ node: { id, slug } }, idx) => {
    const prev = idx === content.length - 1 ? null : content[idx + 1]
    const next = idx === 0 ? null : content[idx - 1]
    createPage({
      path: slug,
      component: require.resolve(`./src/templates/${pathData.kind}-query`),
      context: {
        id,
        previousId: prev ? prev.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    })
  })

  createPage({
    path: pathData.basePath,
    component: require.resolve(`./src/templates/${pathData.kind}s-query`),
    context: {},
  })
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({
  actions: { createTypes },
  schema,
}: CreateSchemaCustomizationArgs) => {
  createTypes(`interface Content @nodeInterface {
      id: ID!
      title: String!
      body: String!
      slug: String!
      date: Date! @dateformat
      tags: [String]!
      keywords: [String]!
      excerpt: String!
      kind: String!
      image: File
      imageAlt: String
  }`)

  createTypes(
    schema.buildObjectType({
      name: `MdxContent`,
      fields: {
        id: { type: `ID!` },
        title: { type: `String!` },
        slug: { type: `String!` },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        keywords: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: { pruneLength: { type: `Int`, defaultValue: 140 } },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        kind: { type: `String!` },
        image: {
          type: `File`,
          resolve: async (source, _args, context) => {
            if (source.image___NODE) {
              return context.nodeModel.getNodeById({ id: source.image___NODE })
            } else if (source.image) {
              return processRelativeImage(source, context, "image")
            }
          },
        },
        imageAlt: { type: `String` },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `Content`],
      extensions: { infer: false },
    })
  )
}

export const onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  getNode,
  createNodeId,
  store,
  cache,
  reporter,
}: CreateNodeArgs<{ frontmatter: Frontmatter }>): Promise<void> => {
  const { id, internal, frontmatter, parent } = node
  if (internal.type !== `Mdx`) return

  const fileNode = getNode(parent)
  if (!pathData.has(fileNode.sourceInstanceName)) return

  const postData = pathData.get("posts") as PathData
  const pd =
    fileNode.sourceInstanceName === postData.filePath
      ? postData
      : (pathData.get("notes") as PathData)
  const fieldData: Frontmatter = {
    title: frontmatter.title,
    tags: frontmatter.tags || [],
    slug: getSlug(
      pd.basePath,
      fileNode.sourceInstanceName,
      getNode,
      fileNode,
      frontmatter.slug
    ),
    date: frontmatter.date,
    keywords: frontmatter.keywords || [],
    image: frontmatter.image,
    kind: pd.kind,
  }
  if (frontmatter.image && validUrl(frontmatter.image)) {
    const remoteFileNode = await createRemoteFileNode({
      url: frontmatter.image,
      parentNodeId: id,
      createNode,
      createNodeId,
      cache,
      store,
      reporter,
    })
    if (remoteFileNode) fieldData.image___NODE = remoteFileNode.id
  }

  const mdxId = createNodeId(`${id} >>> MdxContent`)
  createNode({
    ...fieldData,
    id: mdxId,
    parent: id,
    children: [],
    internal: {
      type: `MdxContent`,
      contentDigest: createContentDigest(fieldData),
      content: JSON.stringify(fieldData),
      description: `Implementation of the MdxContent interface`,
    },
  })
  createParentChildLink({ parent: node, child: getNode(mdxId) })
}

const processRelativeImage = (
  source: Frontmatter,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any,
  type: string
) => {
  const fileNode = context.nodeModel.findRootNodeAncestor(
    source,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (node: any) => node.internal && node.internal.type === `File`
  )
  if (!fileNode) return

  for (const file of context.nodeModel.getAllNodes({ type: `File` })) {
    if (file.absolutePath === slash(path.join(fileNode.dir, source[type]))) {
      return file
    }
  }
}

const mdxResolverPassthrough = (fieldName: string) => async (
  source: Frontmatter,
  args: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: any
) => {
  const mdxNode = context.nodeModel.getNodeById({ id: source.parent })
  const resolver = info.schema.getType(`Mdx`).getFields()[fieldName].resolve
  return await resolver(mdxNode, args, context, { fieldName })
}

const validUrl = (str: string) => {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}

const getSlug = (
  baseUrl: string,
  basePath: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  getNode: Function,
  node: Node,
  slug?: string
) =>
  (slug
    ? path.isAbsolute(slug)
      ? slug
      : urlResolve(baseUrl, slug)
    : urlResolve(baseUrl, createFilePath({ node, getNode, basePath }))
  ).replace(/\/*$/, `/`)
