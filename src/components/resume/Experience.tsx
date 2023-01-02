import React from "react";

import { Position } from "./Position";
import { Section } from "./Section";

export const Experience = (): JSX.Element => (
  <Section title="Experience">
    {[
      {
        company: "Brale",
        positions: [
          {
            title: "Principal Software and Security Engineer",
            start: "Aug 2022",
            end: "Present",
            location: "Remote",
            desc: [
              `Authored and maintain SOC2-audited business continuity, disaster recovery, and incident response plans.`,
              `Encrypt sensitive data client-side using 256-bit AES-GCM envelope encryption backed by AWS KMS, random initialization vectors, and tagged ciphertexts to ease quarterly rotation. Searchable fields leverage HMAC SHA-512 hashes.`,
              `Lead regular Threat Model and tabletop exercises to determine risks and create mitigation plans. Leverage NIST SP 800-30 and MITRE ATT&CK frameworks for threat sources and events.`,
              `Set up ingestion of application, CloudTrail, GuardDuty, VPC flow, Route53, and load balancer access logs into Datadog. Over 95% of cloud security posture management (CSPM) rule findings passing for PCI, SOC 2, and GDPR with plans to reach 100%. Use security information and event management (SIEM) to alert on both new findings and anomalous activity.`,
              `Use Nessus, Burp Suite, and Metasploit to scan for vulnerabilities and penetration test applications. Use Slither and Echidna to statically analyze and fuzz smart contracts, reporting on and addressing findings.`,
              `Implemented and maintain Cloudflare Access and Gateway for zero trust application access and internet browsing for both office and remote employees.`,
              `Coordinate company-wide security training and engineering team OWASP Top 10 and SANS Top 25 vulnerability demonstrations.`,
              `Foster security culture by encouraging and, if possible, enforcing secure best practices such as AWS access via only temporary credentials, password managers for employee secrets, AWS Secrets Manager for software secrets, and hardware security keys for Git SSH access.`,
              `Deploy Kandji to company endpoints to gather telemetry, manage software patches, and enforce security rules such as disk encryption and malware protection.`,
            ],
          },
          {
            title: "Founding Principal Engineer",
            start: "Feb 2022",
            end: "Aug 2022",
            location: "Remote",
            desc: [
              `Drive DevOps culture with automated identity and access management (IAM) and resource provisioning across multiple AWS accounts using AWS Organizations and AWS's Infrastructure as Code (IaC) tool, CDK.`,
              `Author ERC-20 compatible Solidity smart contracts, coordinate external code audits, and build automated multi-blockchain deployment infrastructure.`,
              `Architect and build cost-efficient, secure, and performant cloud infrastructure utilizing managed and serverless services running in multi-subnet VPCs protected by WAFs.`,
              `Rolled out SAML single sign-on company-wide with phishing-resistant FIDO hardware security key multi-factor authentication (MFA) and automatic identity provider (IdP) user provisioning.`,
              `Proposed and implemented multi-signature hardware wallet signing process for smart contract and multi-blockchain custodial wallet access control taking care to prevent locked assets.`,
              `Build continuous integration and delivery (CI/CD) pipelines to ship customer features on each two-person controlled software merge.`,
              `Protect against supply chain attacks with Renovate dependency updates and automated Dependabot and Docker container security alerts.`,
              `Maintain employee onboarding and offboarding through scripted application install, SSH configuration, and IAM provisioning/deprovisioning.`,
              `Build secure by default CDK constructs (e.g., least-privilege policies, private S3 buckets, encryption at rest) to ease development.`,
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
              `Search over hundreds of millions of pieces of CAD metadata using combination of Elasticsearch and Postgres full-text search.`,
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
              "Built commodities trading platform from ground up, complete with reactive, real-time market, PDF contract generation, and e-signing. Secured with encryption in transit and at rest, A+ Qualys TLS score, and OWASP Top 10 mitigation.",
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
              "Led code katas of multiple 50+ developer groups teaching keyboard shortcuts, refactoring, test-driven development, pair-programming, and Linux shell commands.",
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
      {
        company: "Collins Aerospace (Raytheon)",
        positions: [
          {
            title: "Software Developer",
            start: "May 2005",
            end: "Aug 2005",
            location: "Cedar Rapids, IA",
            desc: [
              "Design and testing of Airbus A380's three-phase variable frequency power supply.",
            ],
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