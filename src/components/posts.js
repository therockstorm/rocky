import React from "react"
import Footer from "./home-footer"
import Layout from "./layout"
import PostList from "./posts/post-list"
import SEO from "./posts/seo"

export default ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Rocky Warren" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer />
  </Layout>
)
