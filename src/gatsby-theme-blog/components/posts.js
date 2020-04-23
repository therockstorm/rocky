import React from "react"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import Layout from "gatsby-theme-blog/src/components/layout"
import PostList from "gatsby-theme-blog/src/components/post-list"
import SEO from "gatsby-theme-blog/src/components/seo"

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
