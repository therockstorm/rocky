import React from "react"

import PostLink from "./post-link"

export default ({ posts }) => (
  <>
    {posts.map(({ node }) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
)
