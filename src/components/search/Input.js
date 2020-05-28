/** @jsx jsx */
import { connectSearchBox } from "react-instantsearch-dom"
import { Box, jsx, Styled } from "theme-ui"
import Search from "../icons/Search"
import Icon from "../Icon"

const Input = connectSearchBox(({ refine, ...rest }) => (
  <Box
    as={"form"}
    sx={{
      display: ["none", "flex"],
      flexDirection: `row-reverse`,
    }}
  >
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
        mr: 2,
        width: 100,
      }}
      {...rest}
    />
    <Icon>
      <Search />
    </Icon>
  </Box>
))

export default Input
