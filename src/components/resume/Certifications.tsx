/** @jsx jsx */
import { ReactElement } from "react"
import { Flex, jsx, Styled } from "theme-ui"
import ExternalLink from "../ExternalLink"
import Section from "../Section"

const Certifications = (): ReactElement => (
  <Section title="Certifications">
    {[
      {
        title: "AWS Certified Solutions Architect - Associate",
        href:
          "https://www.credly.com/badges/f08cd558-4917-437c-8f3c-4c997d80ddbf/public_url",
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

const Certification = ({
  title,
  href,
  start,
  end,
}: {
  title: string
  href: string
  start: string
  end: string
}) => (
  <Styled.div sx={{ mb: 2 }}>
    <Flex sx={{ justifyContent: `space-between` }}>
      <ExternalLink href={href}>{title}</ExternalLink>
      <span sx={{ color: "muted" }}>
        {start} - {end}
      </span>
    </Flex>
  </Styled.div>
)

export default Certifications
