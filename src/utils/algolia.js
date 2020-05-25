const settings = { attributesToSnippet: [`excerpt:20`] }

module.exports = [
  {
    query: `{
      items: allMdx(filter: {fileAbsolutePath: {regex: "/notes/"}}) {
        edges {
          node {
            excerpt(pruneLength: 5000)
            frontmatter {
              date(formatString: "MMM D, YYYY")
              title
            }
            objectID: id
            parent {
              ... on File {
                relativePath
              }
            }
          }
        }
      }
    }`,
    transformer: ({ data }) =>
      data.items.edges.map(({ node }) => ({
        date: node.frontmatter.date,
        excerpt: node.excerpt,
        objectID: node.objectID,
        slug: `notes/${node.parent.relativePath.split(".")[0]}`,
        title: node.frontmatter.title,
      })),
    indexName: `Notes`,
    settings,
  },
  {
    query: `{
      items: allMdxBlogPost {
        edges {
          node {
            date(formatString: "MMM D, YYYY")
            excerpt(pruneLength: 5000)
            objectID: id
            slug
            title
          }
        }
      }
    }`,
    transformer: ({ data }) => data.items.edges.map(({ node }) => node),
    indexName: `Posts`,
    settings,
  },
]
