import React from "react"
import Footer from "./home-footer"
import Layout from "./layout"
import PostList from "gatsby-theme-blog/src/components/post-list"
import SEO from "gatsby-theme-blog/src/components/seo"

export default ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Rocky Warren" />
    <main>
      <PostList posts={posts} />
    </main>
    <Footer />
  </Layout>
)
