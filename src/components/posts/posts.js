import React from "react"
import Posts from "../posts"

export default ({ location, data: { site, allBlogPost } }) => (
  <Posts
    location={location}
    posts={allBlogPost.edges}
    siteTitle={site.siteMetadata.title}
    socialLinks={site.siteMetadata.social}
  />
)
