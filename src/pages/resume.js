/** @jsx jsx */
import { graphql } from "gatsby"
import React from "react"
import { Flex, jsx, Styled } from "theme-ui"
import SEO from "gatsby-theme-blog/src/components/seo"
import Badge from "../components/Badge"
import Icon from "../components/Icon"
import ExternalLink from "../components/ExternalLink"
import Link from "../components/icons/Link"
import LinkedIn from "../components/icons/LinkedIn"
import Layout from "../gatsby-theme-blog/components/layout"
import positions from "./positions"

const Hr = () => <hr sx={{ mb: 3 }} />

const Section = ({ title, children }) => (
  <section>
    <Styled.h2 sx={{ mb: 2, pt: 2, mt: 2 }}>{title}</Styled.h2>
    <Hr />
    {children}
  </section>
)

const Header = () => (
  <>
    <Styled.h1>Rocky Warren</Styled.h1>
    <Styled.div>
      <Styled.p>
        An AWS Certified Solutions Architect with over ten years of experience
        shipping and maintaining tested, distributed, secure systems from
        thousand-line microservices moving billions of dollars each year to
        multi-million line GPS guidance systems. I deliver customer value
        utilizing object-oriented, functional, statically-typed, dynamic, and
        database languages and lead teams as a Principal Engineer, Architect,
        and Startup Co-founder.
      </Styled.p>
      <Flex sx={{ justifyContent: `space-between` }}>
        <Flex>
          <Icon children={<Link />} />
          <ExternalLink href="https://www.rocky.dev">
            https://rocky.dev
          </ExternalLink>
        </Flex>
        <Flex>
          <Icon children={<LinkedIn />} />
          <ExternalLink href="https://www.linkedin.com/in/rockywarren">
            linkedin.com/in/rockywarren
          </ExternalLink>
        </Flex>
      </Flex>
    </Styled.div>
  </>
)

const Skills = () => (
  <Section title="Skills">
    <Styled.ul sx={{ ml: 0 }}>
      {/* Languages */}
      <Skill>Scala</Skill>
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>C#</Skill>
      <Skill>Bash</Skill>
      <Skill>Python</Skill>
      <Skill>Java</Skill>
      <Skill>Ruby</Skill>
      {/* Data */}
      <Skill>PostgreSQL</Skill>
      <Skill>DynamoDB</Skill>
      <Skill>RDS</Skill>
      <Skill>Lambda</Skill>
      <Skill>SQS</Skill>
      <Skill>Athena</Skill>
      <Skill>Kafka</Skill>
      <Skill>Redis</Skill>
      <Skill>gRPC</Skill>
      {/* Miscellaneous */}
      <Skill>REST APIs</Skill>
      <Skill>React</Skill>
      <Skill>GraphQL</Skill>
      <Skill>Docker</Skill>
      <Skill>Software Architecture</Skill>
      <Skill>Test-Driven Development</Skill>
      <Skill>Continuous Delivery</Skill>
    </Styled.ul>
  </Section>
)

const Recommendations = () => (
  <Section title="Recommendations">
    <Styled.ul sx={{ ml: 0 }}>
      <NoBullet>
        "If no one is telling you, it's appreciated how intentional you are with
        growing our collective knowledge and being a champion for training.
        Thanks for doing this stuff, Rocky. I've also been hearing great things
        about your contributions and speed-of-delivery. The leadership team is
        impressed." ―VP of Product Development
      </NoBullet>
      <NoBullet>
        "Rocky has incredible optimism and intense dedication to effectiveness,
        quality, and performance. Every week Rocky would have delivered not only
        critical changes to our systems but improvements to our workflow and
        general technology." ―Head of Engineering
      </NoBullet>
      <NoBullet>
        "Rocky created projects and libraries that improve all teams using
        Scala, empowering us to collaborate with higher quality, efficiency, and
        consistency. While typically remote, he's quick to help anyone who may
        need it, whether it's a code review, questions, or working through
        ideas." ―Principal Software Engineer
      </NoBullet>
      <NoBullet>
        "He's a one-man wrecking crew, one of the most productive engineers I've
        worked with." ―Technical Lead and Manager
      </NoBullet>
    </Styled.ul>
  </Section>
)

const Experience = () => (
  <Section title="Experience">
    {positions.map(({ company, positions }, idx) => (
      <Styled.div key={idx}>
        <Position company={company} positions={positions} />
      </Styled.div>
    ))}
  </Section>
)

const Education = () => (
  <Section title="Education">
    <Styled.h3 sx={{ fontWeight: "bold", mb: 2 }}>University of Iowa</Styled.h3>
    <Styled.div sx={{ ml: 2 }}>
      <Styled.h4 sx={{ fontWeight: "bold", mb: 1 }}>
        Bachelor of Science, Computer Software Engineering
      </Styled.h4>
      <Flex sx={{ justifyContent: `space-between`, color: "muted" }}>
        <Styled.div sx={{ mb: 1 }}>Iowa City, IA</Styled.div>
        <Styled.div sx={{ mb: 1 }}>Aug 2003 - Dec 2007</Styled.div>
      </Flex>
      <Styled.ul sx={{ ml: 0 }}>
        <NoBullet>
          Minors in Computer Science, Mathematics, and Business
        </NoBullet>
      </Styled.ul>
    </Styled.div>
  </Section>
)

const Certification = () => (
  <Section title="Certifications">
    <Flex sx={{ justifyContent: `space-between` }}>
      <ExternalLink
        href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2020-04-14&ci=AWS01371544"
        sx={{ mb: 2 }}
      >
        AWS Certified Solutions Architect - Associate
      </ExternalLink>
      <Styled.div sx={{ color: "muted", mb: 2 }}>
        Apr 2020 - Apr 2023
      </Styled.div>
    </Flex>
    <Flex sx={{ justifyContent: `space-between` }}>
      <ExternalLink
        href="https://triplebyte.com/certificate/TFJ0QbG"
        sx={{ mb: 2 }}
      >
        Triplebyte Certified Software Engineer
      </ExternalLink>
      <Styled.div sx={{ color: "muted", mb: 2 }}>
        Jan 2017 - No Expiration
      </Styled.div>
    </Flex>
  </Section>
)

const NoBullet = ({ children, ...other }) => (
  <Styled.li sx={{ listStyleType: `none` }} {...other}>
    {children}
  </Styled.li>
)

const Skill = ({ children }) => (
  <NoBullet sx={{ display: `inline`, mr: 2 }}>
    <Badge>{children}</Badge>
  </NoBullet>
)

const Position = ({ company, positions }) => (
  <>
    <Styled.h3 sx={{ fontWeight: "bold", mb: 2 }}>{company}</Styled.h3>
    {positions.map(({ title, start, end, location, desc }, idx) => {
      return (
        <Styled.div key={idx} sx={{ ml: 2 }}>
          <Styled.h4 sx={{ fontWeight: "bold", mb: 1 }}>{title}</Styled.h4>
          <Flex sx={{ justifyContent: `space-between`, color: "muted" }}>
            <Styled.div sx={{ mb: 1 }}>{location}</Styled.div>
            <Styled.div sx={{ mb: 1 }}>
              {start} - {end}
            </Styled.div>
          </Flex>
          <Styled.ul sx={{ ml: 2 }}>
            {desc.map((d, idx) => (
              <NoBullet key={idx}>{d}</NoBullet>
            ))}
          </Styled.ul>
        </Styled.div>
      )
    })}
  </>
)

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
      <Certification />
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
