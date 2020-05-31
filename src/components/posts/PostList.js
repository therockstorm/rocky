import React from "react"
import PostLink from "./PostLink"

const PostList = ({ posts }) => (
  <>
    {posts.map(({ node }) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
)

export default PostList
