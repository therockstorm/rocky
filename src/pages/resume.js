/** @jsx jsx */
import { graphql } from "gatsby"
import React from "react"
import { Flex, jsx, Styled } from "theme-ui"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Link from "../components/Link"
import LinkedIn from "../components/LinkedIn"

const positions = [
  {
    company: "Vertex Software",
    positions: [
      {
        title: "Principal Engineer and Architect",
        start: "Feb 2020",
        end: "Present",
        location: "Remote",
        desc: [
          "Architect and implement distributed, streaming, event-driven systems capable of sub-second bill of materials updates on huge CAD models. Exposed through REST APIs built against JSON:API and CloudEvents specifications. Code coverage >90%.",
        ],
      },
      {
        title: "Staff Data Engineer",
        start: "Sep 2019",
        end: "Feb 2020",
        location: "Remote",
        desc: [
          "Created and own Scala core libraries and build plugins to reduce duplication, improve security, and multiply engineering team's productivity.",
          "Regularly audit AWS costs and sped up local development startup times 5x, saving tens of thousands of dollars per year to date.",
        ],
      },
    ],
  },
  {
    company: "Dwolla",
    positions: [
      {
        title: "Principal Software Engineer",
        start: "Jun 2016",
        end: "Sep 2019",
        location: "San Francisco, CA",
        desc: [
          "Transitioned most business-critical database table from mutable to immutable, enabling point-in-time user balance queries, robust statements, and snapshots. Snapshots resulted in query speeds up to 200x faster and a 75% reduction in database deadlocks.",
          "Migrated webhooks to serverless Lambda functions and scaled to millions of messages a day while reducing peak delays from hours to minutes and cutting costs by 50%. Launched with zero downtime (and greater than zero fist pumps).",
        ],
      },
      {
        title: "Lead Developer",
        start: "Jul 2014",
        end: "Jun 2016",
        location: "San Francisco, CA",
        desc: [
          `Led development of API responsible for moving billions of dollars per year while decreasing partner "time to first API call" from hours to minutes with step-by-step guides and SDKs.`,
          "Led Instant Bank Verification, cutting account verification times from three days to a few seconds via 3rd party integration. Built as containerized, auto-scaling microservice.",
        ],
      },
      {
        title: "Senior Software Engineer",
        start: "Jul 2012",
        end: "Jul 2014",
        location: "Des Moines, IA",
        desc: [
          "Led company's foray into microservices with Dwolla Credit, integrating a credit provider to inject millions in buying power into the network. Mitigated partner downtime with caching and fault-tolerant batch jobs.",
          "Won internal hackathons by reducing ACH clearing times and allowing account creation via API. Each influenced what are now best-selling products.",
        ],
      },
    ],
  },
  {
    company: "Crucible Commodities",
    positions: [
      {
        title: "Co-founder",
        start: "Jul 2014",
        end: "Dec 2016",
        location: "San Francisco, CA",
        desc: [
          "Built commodities trading platform from the ground up complete with reactive, real-time market, PDF contract generation, and e-signing.",
          "Secured with encryption in transit and at rest, A+ Qualys TLS score, and OWASP Top 10 mitigations.",
        ],
      },
    ],
  },
  {
    company: "John Deere",
    positions: [
      {
        title: "Technical Lead",
        start: "Jan 2010",
        end: "Jul 2012",
        location: "Des Moines, IA",
        desc: [
          "Led CommandCenter project development, an in-cab self-driving GPS guidance display. Now factory installed in all large-scale John Deere vehicles worldwide. Two million+ lines of code, released on schedule, with all known defects closed.",
          "Led regular meeting of 25 tech leads across all guidance displays comprising over 150 developers.",
        ],
      },
      {
        title: "Software Engineer",
        start: "Jan 2008",
        end: "Jan 2010",
        location: "Des Moines, IA",
        desc: [
          "Led coding Katas of multiple 50+ developer groups teaching keyboard shortcuts, refactorings, test-driven development, pair-programming, and Linux shell commands.",
          "Organized company’s first Hackathons. After votes from 200+ employees, won both with customer analytics, predictive keyboard, touch screen gestures, and Tetris! Demoed results to CEO and staff.",
        ],
      },
      {
        title: "Software Engineer Intern",
        start: "May 2006",
        end: "Jan 2008",
        location: "Des Moines, IA",
        desc: [],
      },
    ],
  },
  {
    company: "University of Iowa",
    positions: [
      {
        title: "Software Developer",
        start: "Aug 2006",
        end: "Dec 2007",
        location: "Iowa City, IA",
        desc: ["Created psychology studies and GUIs in DirectX and GDI+."],
      },
    ],
  },
]

const position = ({ company, positions }) => (
  <Styled.div>
    <Styled.h3 sx={{ mb: 2 }}>
      <strong>{company}</strong>
    </Styled.h3>
    {positions.map(({ title, start, end, location, desc }) => {
      return (
        <Styled.div sx={{ ml: 2 }}>
          <Styled.h4 sx={{ mb: 1 }}>
            <strong>{title}</strong>
          </Styled.h4>
          <Flex sx={{ justifyContent: `space-between`, color: "muted" }}>
            <Styled.div sx={{ mb: 1 }}>{location}</Styled.div>
            <Styled.div sx={{ mb: 1 }}>
              {start} - {end}
            </Styled.div>
          </Flex>
          <Styled.ul>
            {desc.map((d) => (
              <Styled.li>{d}</Styled.li>
            ))}
          </Styled.ul>
        </Styled.div>
      )
    })}
  </Styled.div>
)

const Section = ({ title, children }) => (
  <section>
    <Styled.h2 sx={{ mb: 2, mt: 4 }}>{title}</Styled.h2>
    <hr sx={{ mb: 3 }} />
    {children}
  </section>
)

const Resume = ({ data, location }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="Rocky Warren's Resume" />
    <Styled.h1>Rocky Warren</Styled.h1>
    <Styled.div>
      <Flex sx={{ justifyContent: `space-between` }}>
        <Flex>
          <Styled.div sx={{ color: "text", mr: 2, width: `1.25rem` }}>
            <LinkedIn />
          </Styled.div>
          <Styled.a
            rel={"noopener noreferrer"}
            target={"_blank"}
            href="https://www.linkedin.com/in/rockywarren"
          >
            linkedin.com/in/rockywarren
          </Styled.a>
        </Flex>
        <Flex>
          <Styled.div sx={{ color: "text", mr: 2, width: `1.25rem` }}>
            <Link />
          </Styled.div>
          <Styled.a
            rel={"noopener noreferrer"}
            target={"_blank"}
            href="https://www.rocky.dev"
          >
            rocky.dev
          </Styled.a>
        </Flex>
      </Flex>
    </Styled.div>

    <Section title="Summary">
      <Styled.div>
        AWS Certified Solutions Architect - Associate with over ten years of
        experience shipping and maintaining tested, distributed, secure systems
        from thousand-line microservices responsible for moving billions of
        dollars each year to multi-million line GPS guidance systems. Utilize
        object-oriented, functional, statically-typed, dynamic, and database
        languages to deliver customer value. Lead teams as Technical Lead,
        Principal Engineer, and Technical Co-founder.
      </Styled.div>
      <br />
      <Styled.div>
        Quotes from co-workers,
        <Styled.ul sx={{ ml: 0 }}>
          <Styled.li sx={{ listStyleType: "none" }}>
            <Styled.blockquote>
              Vice President: "If no one is telling you, it's appreciated how
              intentional you are with growing our collective knowledge and
              being a champion for training. Thanks for doing this stuff Rocky.
              I've also been hearing great things about your contributions and
              speed of delivery. Everyone is really impressed."
            </Styled.blockquote>
          </Styled.li>
          <Styled.li sx={{ listStyleType: "none" }}>
            <Styled.blockquote>
              Tech Lead and Manager: "He's a one man wrecking crew, one of the
              most productive engineers I've worked with."
            </Styled.blockquote>
          </Styled.li>
        </Styled.ul>
      </Styled.div>
    </Section>

    <Section title="Experience">{positions.map(position)}</Section>

    <Section title="Education">
      <Styled.h3 sx={{ mb: 2 }}>
        <strong>University of Iowa</strong>
      </Styled.h3>
      <Styled.div sx={{ ml: 2 }}>
        <Styled.h4 sx={{ mb: 1 }}>
          <strong>Bachelor of Science, Computer Software Engineering</strong>
        </Styled.h4>
        <Flex sx={{ justifyContent: `space-between`, color: "muted" }}>
          <Styled.div sx={{ mb: 1 }}>Iowa City, IA</Styled.div>
          <Styled.div sx={{ mb: 1 }}>Aug 2003 - Dec 2007</Styled.div>
        </Flex>
        <Styled.ul>
          <Styled.li>
            Minors in Computer Science, Mathematics, and Business
          </Styled.li>
        </Styled.ul>
      </Styled.div>
    </Section>

    <Section title="Certifications">
      <Flex sx={{ justifyContent: `space-between` }}>
        <Styled.a
          href={
            "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2020-04-14&ci=AWS01371544"
          }
          rel={"noopener noreferrer"}
          sx={{ mb: 2 }}
          target={"_blank"}
        >
          AWS Certified Solutions Architect - Associate
        </Styled.a>
        <Styled.div sx={{ color: "muted", mb: 2 }}>
          Apr 2020 - Apr 2023
        </Styled.div>
      </Flex>
      <Flex sx={{ justifyContent: `space-between` }}>
        <Styled.a
          href={"https://triplebyte.com/certificate/TFJ0QbG"}
          rel={"noopener noreferrer"}
          sx={{ mb: 2 }}
          target={"_blank"}
        >
          Triplebyte Certified Software Engineer
        </Styled.a>
        <Styled.div sx={{ color: "muted", mb: 2 }}>
          Jan 2017 - No Expiration
        </Styled.div>
      </Flex>
    </Section>
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

export default Resume
