import React from "react";

import { ExternalLink } from "../external-link";
import { Section } from "../section";

export const Featured = (): JSX.Element => (
  <Section title="Talks and Publications">
    {[
      {
        title: "3D Digital Twin Example Applications",
        href: "https://developer.vertexvis.com/examples",
        desc: "Open-source examples to get started building interactive 3D applications; no 3D experience required.",
      },
      {
        title: "Sending Millions of Serverless Webhooks",
        href: "https://www.youtube.com/watch?v=zpPV8lUxPpE",
        desc: "Talk at the dsmJS Meetup describing my serverless webhooks architecture.",
      },
      {
        title: "Lessons Learned From Sending Millions of Serverless Webhooks",
        href: "https://www.serverless.com/blog/lessons-learned-from-sending-millions-of-serverless-webhooks",
        desc: "Blog published on Serverless.com describing faster, lower cost webhooks using my serverless architecture.",
      },
    ].map((c, idx) => (
      <div key={idx}>
        <Post {...c} />
      </div>
    ))}
  </Section>
);

const Post = ({
  title,
  href,
  desc,
}: {
  title: string;
  href: string;
  desc: string;
}) => (
  <div>
    <ExternalLink href={href}>{title}</ExternalLink>
    <div>{desc}</div>
  </div>
);
