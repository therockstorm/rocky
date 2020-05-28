const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const { urlResolve, createContentDigest, slash } = require(`gatsby-core-utils`)
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)
const notesTemplate = require.resolve(`./src/templates/notes-query`)

const basePostsPath = `/`
const baseNotesPath = `/notes`
const postsPath = `content/posts`
const notesPath = `content/notes`

exports.onPreBootstrap = ({ store }) => {
  const progDir = store.getState().program.directory
  ;[`content/assets`, notesPath, postsPath].forEach((dir) => {
    const d = path.join(progDir, dir)
    if (!fs.existsSync(d)) mkdirp.sync(d)
  })
}

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  await createBlogPages(graphql, createPage, reporter)

  const toNotesPath = (node) => {
    const { dir } = path.parse(node.parent.relativePath)
    return urlResolve(baseNotesPath, dir, node.parent.name)
  }
  const result = await graphql(`
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

  if (result.errors) {
    console.log(result.errors)
    throw new Error(`Could not query notes`, result.errors)
  }

  const { mdxPages, site } = result.data
  const siteTitle = site.siteMetadata.title
  const notes = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === notesPath
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
  const groupedNotes = notes.reduce((acc, { node }) => {
    const { dir } = path.parse(node.parent.relativePath)
    if (!dir) return acc

    acc[dir] = acc[dir] || []
    acc[dir].push({
      pagePath: urlResolve(baseNotesPath, dir),
      url: toNotesPath(node),
      ...node,
    })

    return acc
  }, {})

  Object.entries(groupedNotes).map(([key, value]) => {
    const breadcrumbs = key
      .split(path.sep)
      .reduce(
        (acc, dir) => [
          ...acc,
          { name: dir, url: urlResolve(baseNotesPath, dir) },
        ],
        []
      )

    createPage({
      path: urlResolve(baseNotesPath, key),
      context: { breadcrumbs, siteTitle, urls: value.map((v) => v.url) },
      component: notesTemplate,
    })
  })

  createPage({
    path: baseNotesPath,
    context: { urls: notesUrls, groupedNotes, siteTitle },
    component: notesTemplate,
  })
}

const createBlogPages = async (graphql, createPage, reporter) => {
  const result = await graphql(`
    {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  if (result.errors) reporter.panic(result.errors)

  const posts = result.data.allBlogPost.edges
  posts.forEach(({ node: { id, slug } }, idx) => {
    const prev = idx === posts.length - 1 ? null : posts[idx + 1]
    const next = idx === 0 ? null : posts[idx - 1]
    createPage({
      path: slug,
      component: require.resolve(`./src/templates/post-query`),
      context: {
        id,
        previousId: prev ? prev.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    })
  })

  createPage({
    path: basePostsPath,
    component: require.resolve(`./src/templates/posts-query`),
    context: {},
  })
}

exports.createSchemaCustomization = ({ actions: { createTypes }, schema }) => {
  createTypes(`interface BlogPost @nodeInterface {
      id: ID!
      title: String!
      body: String!
      slug: String!
      date: Date! @dateformat
      tags: [String]!
      keywords: [String]!
      excerpt: String!
      image: File
      imageAlt: String
  }`)

  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPost`,
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
        image: {
          type: `File`,
          resolve: async (source, _args, context) => {
            if (source.image___NODE)
              return context.nodeModel.getNodeById({ id: source.image___NODE })
            else if (source.image)
              return processRelativeImage(source, context, "image")
          },
        },
        imageAlt: { type: `String` },
        body: { type: `String!`, resolve: mdxResolverPassthrough(`body`) },
      },
      interfaces: [`Node`, `BlogPost`],
      extensions: { infer: false },
    })
  )
}

const processRelativeImage = (source, context, type) => {
  const fileNode = context.nodeModel.findRootNodeAncestor(
    source,
    (node) => node.internal && node.internal.type === `File`
  )
  if (!fileNode) return

  for (let file of context.nodeModel.getAllNodes({ type: `File` }))
    if (file.absolutePath === slash(path.join(fileNode.dir, source[type])))
      return file
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  getNode,
  createNodeId,
  store,
  cache,
}) => {
  const { id, internal, frontmatter, parent } = node
  if (internal.type !== `Mdx`) return

  const fileNode = getNode(parent)
  if (fileNode.sourceInstanceName !== postsPath) return

  const fieldData = {
    title: frontmatter.title,
    tags: frontmatter.tags || [],
    slug: getSlug(
      basePostsPath,
      postsPath,
      frontmatter.slug,
      getNode,
      fileNode
    ),
    date: frontmatter.date,
    keywords: frontmatter.keywords || [],
    image: frontmatter.image,
  }
  if (validUrl(frontmatter.image)) {
    const remoteFileNode = await createRemoteFileNode({
      url: frontmatter.image,
      parentNodeId: id,
      createNode,
      createNodeId,
      cache,
      store,
    })
    if (remoteFileNode) fieldData.image___NODE = remoteFileNode.id
  }

  const mdxBlogPostId = createNodeId(`${id} >>> MdxBlogPost`)
  await createNode({
    ...fieldData,
    id: mdxBlogPostId,
    parent: id,
    children: [],
    internal: {
      type: `MdxBlogPost`,
      contentDigest: createContentDigest(fieldData),
      content: JSON.stringify(fieldData),
      description: `Mdx implementation of the BlogPost interface`,
    },
  })
  createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) })
}

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const mdxNode = context.nodeModel.getNodeById({ id: source.parent })
  const resolver = info.schema.getType(`Mdx`).getFields()[fieldName].resolve
  return await resolver(mdxNode, args, context, { fieldName })
}

const validUrl = (str) => {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}

const getSlug = (baseUrl, basePath, slug, getNode, node) =>
  (slug
    ? path.isAbsolute(slug)
      ? slug
      : urlResolve(baseUrl, slug)
    : urlResolve(baseUrl, createFilePath({ node, getNode, basePath }))
  ).replace(/\/*$/, `/`)
