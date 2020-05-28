const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const { urlResolve, createContentDigest, slash } = require(`gatsby-core-utils`)
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)
const NoteTemplate = require.resolve(`./src/templates/note-query`)
const NotesTemplate = require.resolve(`./src/templates/notes-query`)
const PostTemplate = require.resolve(`./src/templates/post-query`)
const PostsTemplate = require.resolve(`./src/templates/posts-query`)

const basePostsPath = `/`
const baseNotesPath = `/notes`
const assetsPath = `content/assets`
const postsPath = `content/posts`
const notesPath = `content/notes`

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()
  const dirs = [assetsPath, notesPath, postsPath]
  dirs.forEach((dir) => {
    const d = path.join(program.directory, dir)
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

  // Create notes pages
  notes.forEach(({ node }) => {
    createPage({
      path: toNotesPath(node),
      context: {
        ...node,
        title: node.parent.name,
      },
      component: NoteTemplate,
    })
  })

  const notesUrls = notes.map(({ node }) => toNotesPath(node))

  const groupedNotes = notes.reduce((acc, { node }) => {
    const { dir } = path.parse(node.parent.relativePath)

    if (!dir) {
      return acc
    }

    acc[dir] = acc[dir] || []
    acc[dir].push({
      pagePath: urlResolve(baseNotesPath, dir),
      url: toNotesPath(node),
      ...node,
    })

    return acc
  }, {})

  Object.entries(groupedNotes).map(([key, value]) => {
    const breadcrumbs = key.split(path.sep).reduce(
      (acc, dir) => [
        ...acc,
        {
          name: dir,
          url: urlResolve(baseNotesPath, dir),
        },
      ],
      []
    )

    createPage({
      path: urlResolve(baseNotesPath, key),
      context: {
        breadcrumbs,
        siteTitle,
        urls: value.map((v) => v.url),
      },
      component: NotesTemplate,
    })
  })

  createPage({
    path: baseNotesPath,
    context: {
      urls: notesUrls,
      groupedNotes,
      siteTitle,
    },
    component: NotesTemplate,
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

  const { allBlogPost } = result.data
  const posts = allBlogPost.edges
  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    const { slug } = post
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        id: post.id,
        previousId: previous ? previous.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    })
  })

  createPage({
    path: basePostsPath,
    component: PostsTemplate,
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
      socialImage: File
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
            if (source.image___NODE) {
              return context.nodeModel.getNodeById({ id: source.image___NODE })
            } else if (source.image) {
              return processRelativeImage(source, context, "image")
            }
          },
        },
        imageAlt: { type: `String` },
        socialImage: {
          type: "File",
          resolve: async (source, args, context, info) => {
            if (source.socialImage___NODE) {
              return context.nodeModel.getNodeById({
                id: source.socialImage___NODE,
              })
            } else if (source.socialImage) {
              return processRelativeImage(source, context, "socialImage")
            }
          },
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `BlogPost`],
      extensions: { infer: false },
    })
  )
}

const processRelativeImage = (source, context, type) => {
  // Image is a relative path - find a corresponding file
  const mdxFileNode = context.nodeModel.findRootNodeAncestor(
    source,
    (node) => node.internal && node.internal.type === `File`
  )
  if (!mdxFileNode) return

  const imagePath = slash(path.join(mdxFileNode.dir, source[type]))
  const fileNodes = context.nodeModel.getAllNodes({ type: `File` })
  for (let file of fileNodes) {
    if (file.absolutePath === imagePath) {
      return file
    }
  }
}

const validURL = (str) => {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  getNode,
  createNodeId,
  store,
  cache,
}) => {
  if (node.internal.type !== `Mdx`) return

  const fileNode = getNode(node.parent)
  if (fileNode.sourceInstanceName === postsPath) {
    let slug
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePostsPath, node.frontmatter.slug)
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: postsPath,
      })

      slug = urlResolve(basePostsPath, filePath)
    }
    slug = slug.replace(/\/*$/, `/`)

    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug,
      date: node.frontmatter.date,
      keywords: node.frontmatter.keywords || [],
      image: node.frontmatter.image,
      socialImage: node.frontmatter.socialImage,
    }

    if (validURL(node.frontmatter.image)) {
      // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.image,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) fieldData.image___NODE = remoteFileNode.id
    }

    if (validURL(node.frontmatter.socialImage)) {
      // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.socialImage,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) fieldData.socialImage___NODE = remoteFileNode.id
    }

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPost`)
    await createNode({
      ...fieldData,
      id: mdxBlogPostId,
      parent: node.id,
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
}

const mdxResolverPassthrough = (fieldName) => async (
  { source: { parent } },
  args,
  context,
  { info: { schema } }
) => {
  const mdxNode = context.nodeModel.getNodeById({ id: parent })
  const resolver = schema.getType(`Mdx`).getFields()[fieldName].resolve
  return await resolver(mdxNode, args, context, { fieldName })
}
