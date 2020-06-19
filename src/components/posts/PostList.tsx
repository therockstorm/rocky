import React, { ReactElement } from "react"
import PostLink from "./PostLink"

const PostList = ({
  posts,
}: {
  posts: Array<{ node: { slug: string } }>
}): ReactElement => (
  <>
    {posts.map(({ node }) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
)

export default PostList
