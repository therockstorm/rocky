/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import isPresent from "is-present"
import NoBullet from "../NoBullet"
import Folder from "../icons/Folder"
import Icon from "../Icon"

const FileList = ({ files, directories }) =>
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
                .map((d) => d.url)
                .sort()
                .map((url) => File(url, url.replace(`/notes/${d}/`, "")))}
            </Styled.ul>
          </NoBullet>
        ))}
      {files
        .filter((f) => f.split("/").length === 3)
        .map((f) => File(f, f.replace("/notes/", "")))}
    </Styled.ul>
  ) : null

export default FileList

const File = (url, name) => (
  <NoBullet key={url} sx={{ mb: 1 }}>
    <Styled.a as={Link} to={`${url}`}>
      {name}
    </Styled.a>
  </NoBullet>
)
