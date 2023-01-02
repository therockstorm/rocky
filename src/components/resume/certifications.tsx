import React from "react";

import { ExternalLink } from "../ExternalLink";
import { Section } from "./Section";

export const Certifications = (): JSX.Element => (
  <Section title="Certifications">
    {[
      {
        title: "Certified Information Systems Security Professional (CISSP)",
        href: "https://www.credly.com/badges/ea061af9-4830-4507-8891-957202d846ec/public_url",
        start: "Dec 2022",
      },
      {
        title: "AWS Certified Security – Specialty",
        href: "https://www.credly.com/badges/e91aed74-17b4-4a6f-bd57-aa1c9c0df267/public_url",
        start: "Dec 2022",
      },
      {
        title: "AWS Certified Solutions Architect",
        href: "https://www.credly.com/badges/f08cd558-4917-437c-8f3c-4c997d80ddbf/public_url",
        start: "Apr 2020",
      },
      {
        title: "Triplebyte Certified Software Engineer",
        href: "https://triplebyte.com/tb/rocky-warren-0ljjcpj/certificate/track/generalist",
        start: "Jan 2017",
      },
    ].map((c) => (
      <div key={c.title}>
        <Certification {...c} />
      </div>
    ))}
  </Section>
);

const Certification = ({
  title,
  href,
  start,
}: Readonly<{
  title: string;
  href: string;
  start: string;
}>) => (
  <div>
    <div className="flex flex-wrap justify-between">
      <ExternalLink href={href}>{title}</ExternalLink>
      <span className="text-sm text-gray-500">{start}</span>
    </div>
  </div>
);
