/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import isPresent from "is-present"
import NoBullet from "../NoBullet"
import Folder from "../icons/Folder"
import Icon from "../Icon"

export default ({ directories }) =>
  isPresent(directories) ? (
    <Styled.ul sx={{ ml: 0 }}>
      {Object.keys(directories)
        .sort()
        .map((d) => (
          <NoBullet key={d}>
            <Flex sx={{ alignItems: `center` }}>
              <Icon children={<Folder />} sx={{ mr: 1 }} />
              {`${d}/`}
            </Flex>
            <Styled.ul style={{ marginTop: `6px`, marginLeft: `1.6rem` }}>
              {directories[d].map(({ url }) => (
                <NoBullet key={url} sx={{ mb: 1 }}>
                  <Styled.a as={Link} to={`${url}`}>
                    {url.replace(`/notes/${d}/`, "")}
                  </Styled.a>
                </NoBullet>
              ))}
            </Styled.ul>
          </NoBullet>
        ))}
    </Styled.ul>
  ) : null
