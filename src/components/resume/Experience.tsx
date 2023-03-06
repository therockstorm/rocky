import dayjs from "dayjs";
import React from "react";

import brale from "@/images/logos/brale.png";
import clipboardHealth from "@/images/logos/clipboard-health.jpg";
import collins from "@/images/logos/collins.png";
import crucible from "@/images/logos/crucible.png";
import deere from "@/images/logos/deere.png";
import dwolla from "@/images/logos/dwolla.png";
import iowa from "@/images/logos/iowa.png";
import vertex from "@/images/logos/vertex.png";

import { Role, RoleProps } from "./Role";
import { Section } from "./Section";

const EXPERIENCE: readonly RoleProps[] = [
  {
    company: "Clipboard Health",
    logo: clipboardHealth,
    roles: [
      {
        desc: [],
        end: "Present",
        location: "Remote",
        start: dayjs("2023-03"),
        title: "Engineering",
      },
    ],
  },
  {
    company: "Brale",
    logo: brale,
    roles: [
      {
        desc: [
          `Foster security culture by encouraging and, if possible, enforcing secure best practices such as AWS access via only temporary credentials, password managers for employee secrets, AWS Secrets Manager for software secrets, and hardware security keys for Git SSH access.`,
          `Encrypt sensitive data using 256-bit AES-GCM envelope encryption backed by AWS KMS, random initialization vectors, and tagged ciphertexts to ease quarterly rotation. Searchable fields leverage HMAC SHA-512 hashes.`,
          `Lead regular Threat Model and tabletop exercises to determine risks and create mitigation plans. Leverage NIST SP 800-30 and MITRE ATT&CK frameworks for threat sources and events.`,
          `Set up ingestion of application, CloudTrail, GuardDuty, VPC flow, Route53, and load balancer access logs into Datadog. Over 95% of cloud security posture management (CSPM) rule findings passing for PCI, SOC 2, and GDPR with plans to reach 100%. Use security information and event management (SIEM) to alert on both new findings and anomalous activity.`,
          `Use Nessus and Burp Suite to scan for vulnerabilities and penetration test applications. Use Slither and Echidna to statically analyze and fuzz smart contracts, reporting on and addressing findings.`,
          `Coordinate company-wide security training and engineering team OWASP Top 10 and SANS Top 25 vulnerability demonstrations.`,
          `Deploy Kandji to company endpoints to gather telemetry, manage software patches, and enforce security rules such as disk encryption and malware protection.`,
        ],
        end: dayjs("2023-03"),
        location: "Remote",
        start: dayjs("2022-08"),
        title: "Principal Software and Security Engineer",
      },
      {
        desc: [
          `Proposed and implemented multi-party computation (MPC) asset custody solution enabling multi-blockchain custodial wallets.`,
          `Drive DevOps culture with automated identity and access management (IAM) and resource provisioning across multiple AWS accounts using AWS Organizations and AWS's Infrastructure as Code (IaC) tool, CDK.`,
          `Architect and build cost-efficient, secure, and performant cloud infrastructure utilizing managed and serverless services running in multi-account, multi-region,multi-subnet VPCs protected by WAFs.`,
          `Author ERC-20 compatible Solidity smart contracts, coordinate external code audits, and build automated multi-blockchain deployment infrastructure.`,
          `Rolled out SAML single sign-on company-wide with phishing-resistant FIDO hardware security key multi-factor authentication (MFA) and automatic identity provider (IdP) user provisioning.`,
          `Build continuous integration and delivery (CI/CD) pipelines to ship customer features on each two-person controlled software merge.`,
          `Protect against supply chain attacks with Renovate dependency updates and automated Dependabot and Docker container security alerts.`,
          `Maintain employee onboarding and offboarding through scripted application install, SSH configuration, and IAM provisioning/deprovisioning.`,
          `Built secure by default CDK constructs (e.g., least-privilege policies, private S3 buckets, encryption at rest) to ease development.`,
        ],
        end: dayjs("2022-08"),
        location: "Remote",
        start: dayjs("2022-01"),
        title: "Founding Principal Engineer",
      },
    ],
  },
  {
    company: "Vertex Software",
    logo: vertex,
    roles: [
      {
        desc: [
          `Managed and mentored developers. Team strongly focused on customer satisfaction and ease of on-boarding with regular customer interviews, step-by-step guides, interactive demos, command-line interface (CLI), and automated, always up-to-date API code samples.`,
          `Performed product discovery and regularly prioritized to ensure team quickly delivered the right products at the right time. Furthered this by implementing "No Meeting Wednesday" and asynchronous stand-ups to increase focus time.`,
          `Created uptime and availability tests with automatic rollback and alerting, confidently enabling continuous delivery of services.`,
        ],
        end: dayjs("2022-01"),
        location: "Remote",
        start: dayjs("2020-08"),
        title: "Principal Technical Lead and Product Manager, APIs & SDKs",
      },
      {
        desc: [
          `Hired as Principal Engineer responsible for leading public REST APIs. Built it from scratch to OpenAPI, JSON:API, and CloudEvents specifications. Inter-service communication via Kafka and gRPC. Code coverage >90%.`,
          `Created and owned core libraries and build plugins to reduce duplication, improve security, and multiply engineering team's productivity.`,
          `Architected and implemented distributed, streaming, event-driven systems capable of sub-second bill of materials (BOM) and scene updates on CAD models with hundreds of thousands of BOM lines.`,
          `Search over hundreds of millions of pieces of CAD metadata using combination of Elasticsearch and Postgres full-text search.`,
        ],
        end: dayjs("2020-08"),
        location: "Remote",
        start: dayjs("2019-09"),
        title: "Principal Software Architect",
      },
    ],
  },
  {
    company: "Dwolla",
    logo: dwolla,
    roles: [
      {
        desc: [
          "Transitioned most business-critical database table from mutable to immutable, enabling point-in-time user balance queries, robust statements, and snapshots. Snapshots led to 200x faster database queries and 75% reduction in overall database deadlocks.",
          "Migrated webhooks to serverless Lambda functions, scaled to millions of daily messages, reduced peak delays from hours to minutes, cut costs by 50%, and launched with zero downtime.",
        ],
        end: dayjs("2019-09"),
        location: "San Francisco, CA",
        start: dayjs("2016-06"),
        title: "Principal Software Engineer",
      },
      {
        desc: [
          `Led development of API responsible for moving billions of dollars per year while decreasing partner "time to first API call" from hours to minutes with step-by-step guides and SDKs.`,
          `Led Instant Bank Verification, cutting account verification times from three days to a few seconds via 3rd party integration. Built as containerized, auto-scaling microservice.`,
        ],
        end: dayjs("2016-06"),
        location: "San Francisco, CA",
        start: dayjs("2014-07"),
        title: "Lead Developer",
      },
      {
        desc: [
          "Led company's foray into microservices with Dwolla Credit, integrating credit provider to inject millions in buying power into network. Mitigated partner downtime with caching and fault-tolerant background processes.",
          "Won internal hackathons by reducing ACH clearing times and allowing account creation via API. Each influenced what are now best-selling products.",
        ],
        end: dayjs("2014-07"),
        location: "Des Moines, IA",
        start: dayjs("2012-07"),
        title: "Senior Software Engineer",
      },
    ],
  },
  {
    company: "Crucible Commodities",
    logo: crucible,
    roles: [
      {
        desc: [],
        end: dayjs("2016-12"),
        location: "San Francisco, CA",
        start: dayjs("2014-07"),
        title: "Co-founder",
      },
    ],
  },
  {
    company: "John Deere",
    logo: deere,
    roles: [
      {
        desc: [
          "Led CommandCenter project development, an in-cab self-driving GPS guidance display. Now factory installed in all large-scale John Deere vehicles worldwide. Two million+ lines of code, released on schedule, with all known defects closed.",
          "Led fortnightly meeting of 25 tech leads across all guidance displays comprising over 150 developers.",
          "Organized company's first Hackathons. After votes from 200+ employees, won both with customer analytics, predictive keyboard, touch screen gestures, and Tetris! Demoed results to CEO and staff.",
        ],
        end: dayjs("2012-07"),
        location: "Des Moines, IA",
        start: dayjs("2008-01"),
        title: "Technical Lead",
      },
      {
        desc: [],
        end: dayjs("2008-01"),
        location: "Des Moines, IA",
        printHidden: true,
        start: dayjs("2006-05"),
        title: "Software Engineer Intern",
      },
    ],
  },
  {
    company: "University of Iowa",
    logo: iowa,
    printHidden: true,
    roles: [
      {
        desc: [],
        end: dayjs("2007-12"),
        location: "Iowa City, IA",
        start: dayjs("2006-08"),
        title: "Software Developer",
      },
    ],
  },
  {
    company: "Collins Aerospace/Raytheon",
    logo: collins,
    printHidden: true,
    roles: [
      {
        desc: [],
        end: dayjs("2005-08"),
        location: "Cedar Rapids, IA",
        start: dayjs("2005-05"),
        title: "Software Engineer Intern",
      },
    ],
  },
];

export function Experience(): JSX.Element {
  return (
    <Section title="Experience">
      {EXPERIENCE.map((e) => (
        <Role key={e.company} {...e} showDuration />
      ))}
    </Section>
  );
}
