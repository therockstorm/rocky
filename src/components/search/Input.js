/** @jsx jsx */
import { connectSearchBox } from "react-instantsearch-dom"
import { Flex, jsx, Styled } from "theme-ui"
import Search from "../Search"

export const Input = connectSearchBox(({ refine, ...rest }) => (
  <Flex as={"form"} sx={{ flexDirection: `row-reverse` }}>
    <Styled.div
      as="input"
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={(e) => refine(e.target.value)}
      sx={{
        outline: "none",
        border: "none",
        fontSize: "0.9em",
        color: "text",
        background: "transparent",
      }}
      {...rest}
    />
    <Search sx={{ width: "1.25em", mr: 2 }} />
  </Flex>
))
