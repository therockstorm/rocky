import React from "react";

import { ExternalLink } from "@/components/ExternalLink";

import { Section } from "./Section";

const CERTIFICATIONS = [
  {
    href: "https://www.credly.com/badges/ea061af9-4830-4507-8891-957202d846ec/public_url",
    start: "Dec 2022",
    title: "Certified Information Systems Security Professional (CISSP)",
  },
  {
    href: "https://www.credly.com/badges/e91aed74-17b4-4a6f-bd57-aa1c9c0df267/public_url",
    start: "Dec 2022",
    title: "AWS Certified Security – Specialty",
  },
  {
    href: "https://www.credly.com/badges/f08cd558-4917-437c-8f3c-4c997d80ddbf/public_url",
    start: "Apr 2020",
    title: "AWS Certified Solutions Architect",
  },
  {
    href: "https://triplebyte.com/tb/rocky-warren-0ljjcpj/certificate/track/generalist",
    start: "Jan 2017",
    title: "Triplebyte Certified Software Engineer",
  },
];

export function Certifications(): React.JSX.Element {
  return (
    <Section title="Certifications">
      {CERTIFICATIONS.map((c) => (
        <Certification key={c.title} {...c} />
      ))}
    </Section>
  );
}

type Props = Readonly<{
  href: string;
  start: string;
  title: string;
}>;

const Certification = ({ href, start, title }: Props) => (
  <div className="flex justify-between">
    <ExternalLink className="flex-1 no-underline" href={href}>
      {title}
    </ExternalLink>
    <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400">
      {start}
    </span>
  </div>
);
