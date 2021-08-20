import React from "react";

import { ExternalLink } from "../external-link";
import { Section } from "../section";

export const Certifications = (): JSX.Element => (
  <Section title="Certifications">
    {[
      {
        title: "AWS Certified Solutions Architect - Associate",
        href: "https://www.credly.com/badges/f08cd558-4917-437c-8f3c-4c997d80ddbf/public_url",
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
      <div key={idx}>
        <Certification {...c} />
      </div>
    ))}
  </Section>
);

const Certification = ({
  title,
  href,
  start,
  end,
}: {
  title: string;
  href: string;
  start: string;
  end: string;
}) => (
  <div>
    <div className="flex justify-between">
      <ExternalLink href={href}>{title}</ExternalLink>
      <span className="text-sm text-gray-500">
        {start} - {end}
      </span>
    </div>
  </div>
);
