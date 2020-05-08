/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx } from "theme-ui"
import SEO from "gatsby-theme-blog/src/components/seo"
import Layout from "../gatsby-theme-blog/components/layout"
import Certifications from "../components/resume/Certifications"
import Education from "../components/resume/Education"
import Experience from "../components/resume/Experience"
import Header from "../components/resume/Header"
import Recommendations from "../components/resume/Recommendations"
import Skills from "../components/resume/Skills"

export default ({ data, location }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="Rocky Warren Resume" />
    <main
      sx={{ "@media print": { "*": { color: `black` }, "@page": { m: 4 } } }}
    >
      <Header />
      <Skills />
      <Recommendations />
      <Experience />
      <Education />
      <Certifications />
    </main>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`