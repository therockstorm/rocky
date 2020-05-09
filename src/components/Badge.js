/** @jsx jsx */
import { Box, jsx, useColorMode } from "theme-ui"
import React from "react"

const Badge = React.forwardRef((props, ref) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`
  return (
    <Box
      ref={ref}
      sx={{
        display: "inline-block",
        verticalAlign: "baseline",
        fontSize: 0,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        px: 1,
        borderRadius: 2,
        color: isDark ? "black" : "white",
        bg: "primary",
      }}
      {...props}
    />
  )
})

export default Badge
