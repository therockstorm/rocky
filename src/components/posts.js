import React from "react"
import Footer from "./home-footer"
import Layout from "./layout"
import PostList from "./posts/post-list"
import SEO from "./posts/seo"

const Posts = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Rocky Warren" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer />
  </Layout>
)

export default Posts
