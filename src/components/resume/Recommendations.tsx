/** @jsx jsx */
import { ReactElement } from "react"
import { jsx, Styled } from "theme-ui"
import NoBullet from "../NoBullet"
import Section from "../Section"

const Recommendations = (): ReactElement => (
  <Section title="Recommendations">
    <Styled.ul sx={{ ml: 0 }}>
      <NoBullet>
        CEO describing a Fortune 100 company's reaction to a demo I created:
        &#34;Slam dunk with [Company]! Thank you for all your efforts on this!
        [Company VP] was visibly and vocally excited. I think his voice cracked
        a little when he exclaimed, &#39;how did you do that!&#39;.&#34;
      </NoBullet>
      <NoBullet>
        VP of Product: &#34;If no one is telling you, it&#39;s appreciated how
        intentional you are with growing our collective knowledge and being a
        champion for training. Thanks for doing this stuff, Rocky. I&#39;ve also
        been hearing great things about your contributions and
        speed-of-delivery. The leadership team is impressed.&#34;
      </NoBullet>
      <NoBullet>
        VP of Engineering: &#34;Rocky is one of our most respected and valuable
        engineers. His contributions are critical to the success of the
        company.&#34;
      </NoBullet>
      <NoBullet>
        Technical Lead and Manager: &#34;He&#39;s a one-man wrecking crew, one
        of the most productive engineers I&#39;ve worked with.&#34;
      </NoBullet>
    </Styled.ul>
  </Section>
)

export default Recommendations
