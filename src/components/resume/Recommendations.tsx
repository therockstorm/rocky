/** @jsx jsx */
import { ReactElement } from "react"
import { jsx, Styled } from "theme-ui"
import NoBullet from "../NoBullet"
import Section from "../Section"

const Recommendations = (): ReactElement => (
  <Section title="Recommendations">
    <Styled.ul sx={{ ml: 0 }}>
      <NoBullet>
        &#34;If no one is telling you, it&#39;s appreciated how intentional you
        are with growing our collective knowledge and being a champion for
        training. Thanks for doing this stuff, Rocky. I&#39;ve also been hearing
        great things about your contributions and speed-of-delivery. The
        leadership team is impressed.&#34; ―VP of Product
      </NoBullet>
      <NoBullet>
        &#34;Rocky is one of our most respected and valuable engineers. His
        contributions are critical to the success of the company.&#34; ―VP of
        Engineering
      </NoBullet>
      <NoBullet>
        &#34;Rocky created projects and libraries that improve all teams using
        Scala, empowering us to collaborate with higher quality, efficiency, and
        consistency. While typically remote, he&#39;s quick to help anyone who
        may need it, whether it&#39;s a code review, questions, or working
        through ideas.&#34; ―Principal Software Engineer
      </NoBullet>
      <NoBullet>
        &#34;He&#39;s a one-man wrecking crew, one of the most productive
        engineers I&#39;ve worked with.&#34; ―Technical Lead and Manager
      </NoBullet>
    </Styled.ul>
  </Section>
)

export default Recommendations
