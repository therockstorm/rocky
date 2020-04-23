module.exports = [
  {
    query: `{
      posts: allMdxBlogPost {
        edges {
          node {
            objectID: id
            title
            tags
            slug
            excerpt(pruneLength: 5000)
            date(formatString: "MMM D, YYYY")
          }
        }
      }
    }`,
    transformer: ({ data }) => data.posts.edges.map(({ node }) => node),
    indexName: `Posts`,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
