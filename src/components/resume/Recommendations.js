/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import NoBullet from "../NoBullet"
import Section from "../Section"

const Recommendations = () => (
  <Section title="Recommendations">
    <Styled.ul sx={{ ml: 0 }}>
      <NoBullet>
        "If no one is telling you, it's appreciated how intentional you are with
        growing our collective knowledge and being a champion for training.
        Thanks for doing this stuff, Rocky. I've also been hearing great things
        about your contributions and speed-of-delivery. The leadership team is
        impressed." ―VP of Product Development
      </NoBullet>
      <NoBullet>
        "Rocky has incredible optimism and intense dedication to effectiveness,
        quality, and performance. Every week Rocky would have delivered not only
        critical changes to our systems but improvements to our workflow and
        general technology." ―Head of Engineering
      </NoBullet>
      <NoBullet>
        "Rocky created projects and libraries that improve all teams using
        Scala, empowering us to collaborate with higher quality, efficiency, and
        consistency. While typically remote, he's quick to help anyone who may
        need it, whether it's a code review, questions, or working through
        ideas." ―Principal Software Engineer
      </NoBullet>
      <NoBullet>
        "He's a one-man wrecking crew, one of the most productive engineers I've
        worked with." ―Technical Lead and Manager
      </NoBullet>
    </Styled.ul>
  </Section>
)

export default Recommendations
