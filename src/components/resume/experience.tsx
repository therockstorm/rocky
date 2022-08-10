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
            desc: [
              `Automate identity and access management (IAM) and resource provisioning across multiple AWS accounts using AWS Organizations and AWS's Infrastructure as Code (IaC) tool, CDK.`,
              `Build secure by default CDK constructs (e.g., least-privilege policies, private S3 buckets, encryption at rest) to ease development.`,
              `Encrypt sensitive data client-side using AES-GCM envelope encryption backed by AWS KMS, random initialization vectors, and tagged ciphertexts for ease of rotation. Searchable fields leverage salted SHA-512 hashes with key stretching.`,
              `Lead regular Threat Model exercises to determine and create mitigation plans for attack vectors.`,
              `Author ERC-20 compatible Solidity smart contracts, coordinate external code audits, and build automated multi-blockchain deployment infrastructure.`,
              `Set up ingestion of application, CloudTrail, GuardDuty, VPC flow, and load balancer access logs into Datadog. Mitigated 100% of PCI, SOC 2, and GDPR rule findings and use Cloud SIEM to alert on new findings and anomalous activity.`,
              `Encourage and, if possible, enforce best practices such as password managers for employee secrets, AWS Secrets Manager for software secrets, and hardware security keys when using Git over SSH.`,
              `Plan and build cost-efficient, secure, and performant cloud infrastructure utilizing managed and serverless services and VPC endpoints.`,
              `Rolled out SAML single sign-on company-wide with hardware security key multi-factor authentication (MFA) and automatic user provisioning using Google as identity provider.`,
              `Proposed and implemented multi-signature hardware wallet signing process for smart contract and multi-blockchain cryptocurrency custodial wallet access control taking care to prevent locked assets.`,
              `Build continuous integration and delivery (CI/CD) pipelines to ship customer features on each pull request merge.`,
              `Protect against supply chain attacks with Renovate dependency updates and automated Dependabot and Docker container security alerts.`,
              `Coordinate company-wide phishing training and engineering team OWASP Top 10 awareness.`,
              `Maintain developer and InfoSec onboarding, scripting installation of tools, configuring SSH, and optionally adding useful terminal aliases.`,
              // `Deployed CrowdStrike Falcon to enforce endpoint (laptop and mobile device) security.`,
              // `Use Burp Suite to penetration test applications and Slither and Echidna to statically analyze and fuzz smart contracts, reporting on and addressing findings.`,
            ],
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
              `Managed and mentored developers. Team strongly focused on customer satisfaction and ease of on-boarding with regular customer interviews, step-by-step guides, interactive demos, command-line interface (CLI), and automated, always up-to-date API code samples.`,
              `Performed product discovery and regularly prioritized to ensure team quickly delivered the right products at the right time. Furthered this by implementing "No Meeting Wednesday" and asynchronous stand-ups to increase focus time.`,
              `Created uptime and availability tests with automatic rollback and alerting, confidently enabling continuous delivery of services.`,
            ],
          },
          {
            title: "Principal Software Architect",
            start: "Sep 2019",
            end: "Aug 2020",
            location: "Remote",
            desc: [
              `Hired as Principal Engineer responsible for leading public REST APIs. Built it from scratch to OpenAPI, JSON:API, and CloudEvents specifications. Inter-service communication via Kafka and gRPC. Code coverage >90%.`,
              `Created and owned core libraries and build plugins to reduce duplication, improve security, and multiply engineering team's productivity.`,
              `Architected and implemented distributed, streaming, event-driven systems capable of sub-second bill of materials (BOM) and scene updates on CAD models with hundreds of thousands of BOM lines.`,
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
              "Transitioned most business-critical database table from mutable to immutable, enabling point-in-time user balance queries, robust statements, and snapshots. Snapshots led to 200x faster database queries and 75% reduction in overall database deadlocks.",
              "Migrated webhooks to serverless Lambda functions, scaled to millions of daily messages, reduced peak delays from hours to minutes, cut costs by 50%, and launched with zero downtime.",
            ],
          },
          {
            title: "Lead Developer",
            start: "Jul 2014",
            end: "Jun 2016",
            location: "San Francisco, CA",
            desc: [
              `Led development of API responsible for moving billions of dollars per year while decreasing partner "time to first API call" from hours to minutes with step-by-step guides and SDKs.`,
              `Led Instant Bank Verification, cutting account verification times from three days to a few seconds via 3rd party integration. Built as containerized, auto-scaling microservice.`,
            ],
          },
          {
            title: "Senior Software Engineer",
            start: "Jul 2012",
            end: "Jul 2014",
            location: "Des Moines, IA",
            desc: [
              "Led company's foray into microservices with Dwolla Credit, integrating credit provider to inject millions in buying power into network. Mitigated partner downtime with caching and fault-tolerant background processes.",
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
              "Built commodities trading platform from ground up, complete with reactive, real-time market, PDF contract generation, and e-signing.",
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
