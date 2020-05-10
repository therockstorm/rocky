/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import ExternalLink from "../ExternalLink"
import Section from "../Section"

export default () => (
  <Section title="Certifications">
    {[
      {
        title: "AWS Certified Solutions Architect - Associate",
        href:
          "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2020-04-14&ci=AWS01371544",
        start: "Apr 2020",
        end: "Apr 2023",
      },
      {
        title: "Triplebyte Certified Software Engineer",
        href: "https://triplebyte.com/certificate/TFJ0QbG",
        start: "Jan 2017",
        end: "No Expiration",
      },
    ].map((c, idx) => (
      <Styled.div key={idx}>
        <Certification {...c} />
      </Styled.div>
    ))}
  </Section>
)

const Certification = ({ title, href, start, end }) => (
  <Styled.div sx={{ mb: 2 }}>
    <Flex sx={{ justifyContent: `space-between` }}>
      <ExternalLink href={href}>{title}</ExternalLink>
      <span sx={{ color: "muted" }}>
        {start} - {end}
      </span>
    </Flex>
  </Styled.div>
)
