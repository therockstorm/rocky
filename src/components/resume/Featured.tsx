/** @jsx jsx */
import { ReactElement } from "react"
import { jsx, Styled } from "theme-ui"
import ExternalLink from "../ExternalLink"
import Section from "../Section"

const Featured = (): ReactElement => (
  <Section title="Talks and Publications">
    {[
      {
        title: "Sending Millions of Serverless Webhooks",
        href: "https://www.youtube.com/watch?v=zpPV8lUxPpE",
        desc:
          "Talk at the dsmJS Meetup describing my serverless webhooks architecture.",
      },
      {
        title: "Lessons Learned From Sending Millions of Serverless Webhooks",
        href:
          "https://www.serverless.com/blog/lessons-learned-from-sending-millions-of-serverless-webhooks",
        desc:
          "Blog published on Serverless.com describing faster, lower cost webhooks using my serverless architecture.",
      },
    ].map((c, idx) => (
      <Styled.div key={idx}>
        <Post {...c} />
      </Styled.div>
    ))}
  </Section>
)

const Post = ({
  title,
  href,
  desc,
}: {
  title: string
  href: string
  desc: string
}) => (
  <Styled.div>
    <ExternalLink href={href}>{title}</ExternalLink>
    <Styled.p>{desc}</Styled.p>
  </Styled.div>
)

export default Featured
