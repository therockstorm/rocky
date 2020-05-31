const settings = { attributesToSnippet: [`excerpt:20`] }

export default [
  {
    query: `{
      items: allMdxContent(filter: {kind: {eq: "note"}}) {
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
    indexName: `Notes`,
    settings,
  },
  {
    query: `{
      items: allMdxContent(filter: {kind: {eq: "post"}}) {
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
