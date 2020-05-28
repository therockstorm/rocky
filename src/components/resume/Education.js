/** @jsx jsx */
import { jsx } from "theme-ui"
import Position from "./Position"
import Section from "../Section"

const Education = () => (
  <Section title="Education">
    <Position
      company={"University of Iowa"}
      positions={[
        {
          title: "Bachelor of Science, Computer Software Engineering",
          start: "Aug 2003",
          end: "Dec 2007",
          location: "Iowa City, IA",
          desc: ["Minors in Computer Science, Mathematics, and Business"],
        },
      ]}
    />
  </Section>
)

export default Education
