import React from "react";

import { Section } from "../section";
import { Position } from "./position";

export const Experience = (): JSX.Element => (
  <Section title="Experience">
    {[
      {
        company: "Brale",
        positions: [
          {
            title: "Founding Principal Engineer",
            start: "Feb 2022",
            end: "Present",
            location: "Remote",
            desc: ["Building a company from the ground up."],
          },
        ],
      },
      {
        company: "Vertex Software",
        positions: [
          {
            title: "Principal Technical Lead and Product Manager, APIs & SDKs",
            start: "Aug 2020",
            end: "Feb 2022",
            location: "Remote",
            desc: [
              "Manage and mentor developers. Team has strong focus on customer satisfaction and ease of on-boarding with regular customer interviews, step-by-step guides, interactive demos, a command-line interface (CLI), and automated, always up-to-date API code samples.",
              `Perform product discovery and regularly prioritize to ensure team quickly delivers the right products at the right time. Furthered this by implementing "No Meeting Wednesday" and asynchronous stand-ups to increase focus time.`,
              `Created uptime and availability tests with automatic rollback and alerting, confidently enabling continuous delivery of services.`,
            ],
          },
          {
            title: "Principal Software Architect",
            start: "Sep 2019",
            end: "Aug 2020",
            location: "Remote",
            desc: [
              `Hired as Principal Engineer responsible for leading public REST APIs. Built from the ground up to OpenAPI, JSON:API, and CloudEvents specifications. Inter-service communication via Kafka and gRPC. Code coverage >90%.`,
              `Created and own a platform of core libraries and build plugins to reduce duplication, improve security, and multiply engineering team's productivity.`,
              `Architect and implement distributed, streaming, event-driven systems capable of sub-second bill of materials (BOM) and scene updates on CAD models with hundreds of thousands of BOM lines.`,
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
              "Transitioned most business-critical database table from mutable to immutable, enabling point-in-time user balance queries, robust statements, and snapshots. Snapshots resulted in query speeds up to 200x faster and a 75% reduction in overall database deadlocks.",
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
              "Led company's foray into microservices with Dwolla Credit, integrating a credit provider to inject millions in buying power into the network. Mitigated partner downtime with caching and fault-tolerant background processes.",
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
              "Led fortnightly meeting of 25 tech leads across all guidance displays comprising over 150 developers.",
            ],
          },
          {
            title: "Software Engineer",
            start: "Jan 2008",
            end: "Jan 2010",
            location: "Des Moines, IA",
            desc: [
              "Led coding Katas of multiple 50+ developer groups teaching keyboard shortcuts, refactorings, test-driven development, pair-programming, and Linux shell commands.",
              "Organized company's first Hackathons. After votes from 200+ employees, won both with customer analytics, predictive keyboard, touch screen gestures, and Tetris! Demoed results to CEO and staff.",
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
    ].map((p, idx) => (
      <div key={idx}>
        <Position {...p} />
      </div>
    ))}
  </Section>
);
