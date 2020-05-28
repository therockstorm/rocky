/** @jsx jsx */
import { Fragment } from "react"
import { Flex, jsx, Styled } from "theme-ui"
import NoBullet from "../NoBullet"

const Position = ({ company, positions }) => (
  <Fragment>
    <Styled.h3 sx={{ fontWeight: "bold", mb: 2 }}>{company}</Styled.h3>
    {positions.map(({ title, start, end, location, desc }, idx) => {
      return (
        <Styled.div key={idx} sx={{ ml: 2 }}>
          <Styled.h4 sx={{ fontWeight: "bold", mb: 1 }}>{title}</Styled.h4>
          <Flex sx={{ justifyContent: `space-between`, color: "muted" }}>
            <Styled.div sx={{ mb: 1 }}>{location}</Styled.div>
            <Styled.div sx={{ mb: 1 }}>
              {start} - {end}
            </Styled.div>
          </Flex>
          <Styled.ul sx={{ ml: 2 }}>
            {desc.map((d, idx) => (
              <NoBullet key={idx}>{d}</NoBullet>
            ))}
          </Styled.ul>
        </Styled.div>
      )
    })}
  </Fragment>
)

export default Position
