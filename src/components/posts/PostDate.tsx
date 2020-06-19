/** @jsx jsx */
import { ReactElement } from "react"
import { Styled, jsx } from "theme-ui"

const PostDate = (props: unknown): ReactElement => (
  <Styled.p sx={{ fontSize: 1, mt: -3, mb: 3 }} {...props} />
)

export default PostDate
