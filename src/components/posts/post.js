import React from "react"
import Post from "../post"

export default ({ location, data: { blogPost, previous, next } }) => (
  <Post
    data={{ ...data, post: blogPost }}
    location={location}
    previous={previous}
    next={next}
  />
)
