/** @jsx jsx */
import { ReactElement } from "react"
import { Flex, jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
// @ts-ignore
import isPresent from "is-present"
import NoBullet from "../NoBullet"
import Folder from "../icons/Folder"
import Icon from "../Icon"

const FileList = ({
  files,
  directories,
}: {
  files: string[]
  directories: { [k: string]: Array<{ slug: string }> }
}): ReactElement | null =>
  isPresent(directories) ? (
    <Styled.ul sx={{ ml: 0 }}>
      {Object.keys(directories)
        .sort()
        .map((d) => (
          <NoBullet key={d}>
            <Flex sx={{ alignItems: `center` }}>
              <Icon sx={{ mr: 1 }}>
                <Folder />
              </Icon>
              {`${d}/`}
            </Flex>
            <Styled.ul style={{ marginTop: `6px`, marginLeft: `1.6rem` }}>
              {directories[d]
                .map((d) => d.slug)
                .sort()
                .map((slug) => File(slug, slug.replace(`/notes/${d}/`, "")))}
            </Styled.ul>
          </NoBullet>
        ))}
      {files
        .filter((f) => f.split("/").length === 3)
        .map((f) => File(f, f.replace("/notes/", "")))}
    </Styled.ul>
  ) : null

export default FileList

const File = (slug: string, name: string) => (
  <NoBullet key={slug} sx={{ mb: 1 }}>
    <Styled.a as={Link} to={`${slug}`}>
      {name}
    </Styled.a>
  </NoBullet>
)
