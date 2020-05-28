/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/posts/seo"
import Section from "../components/Section"
import ExternalLink from "../components/ExternalLink"

export default ({ data, location }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <SEO title="Using" />
    <Styled.h1>Using</Styled.h1>
    <Section title="Hardware">
      <Styled.ul>
        <Styled.li>MacBook Pro 15", 2.4 GHz 8-Core i9, 32 GB RAM</Styled.li>
        <Styled.li>LG 27" 4K UHD LED Monitor</Styled.li>
        <Styled.li>
          Das Keyboard 4 Professional, Cherry MX Blue Clicky Keys
        </Styled.li>
        <Styled.li>Logitech MX Master 3 Mouse</Styled.li>
      </Styled.ul>
    </Section>
    <Section title="Software">
      <Styled.ul>
        <Styled.li>
          <ExternalLink href="https://github.com/tonsky/FiraCode">
            Fira Code
          </ExternalLink>{" "}
          with ligatures
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://draculatheme.com/">Dracula</ExternalLink>{" "}
          theme
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://www.jetbrains.com/idea/">
            IntelliJ
          </ExternalLink>{" "}
          for Scala
          <Styled.ul>
            <Styled.li>Rainbow Brackets</Styled.li>
          </Styled.ul>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://code.visualstudio.com/">
            VS Code
          </ExternalLink>{" "}
          for everything else
          <Styled.ul>
            <Styled.li>Bookmarks</Styled.li>
            <Styled.li>Bracket Pair Colorizer</Styled.li>
            <Styled.li>Indent Rainbow</Styled.li>
            <Styled.li>TabNine</Styled.li>
          </Styled.ul>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://iterm2.com/">iTerm2</ExternalLink>
          <Styled.ul>
            <Styled.li>
              <ExternalLink href="https://github.com/ohmyzsh/ohmyzsh">
                Oh My Zsh
              </ExternalLink>
            </Styled.li>
            <Styled.li>
              <ExternalLink href="https://starship.rs/">Starship</ExternalLink>{" "}
              theme
            </Styled.li>
            <Styled.li>
              <ExternalLink href="https://github.com/sharkdp/bat">
                bat
              </ExternalLink>
            </Styled.li>
            <Styled.li>
              <ExternalLink href="https://github.com/dandavison/delta">
                delta
              </ExternalLink>
            </Styled.li>
          </Styled.ul>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://insomnia.rest/">Insomnia</ExternalLink>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://github.com/beekeeper-studio/beekeeper-studio">
            Beekeeper Studio
          </ExternalLink>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://github.com/uw-labs/bloomrpc">
            BloomRPC
          </ExternalLink>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://apprywhere.com/copy-em-paste.html">
            Copy 'Em Paste
          </ExternalLink>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://github.com/lra/mackup">
            Mackup
          </ExternalLink>
        </Styled.li>
        <Styled.li>
          <ExternalLink href="https://github.com/rxhanson/Rectangle">
            Rectangle
          </ExternalLink>
        </Styled.li>
      </Styled.ul>
    </Section>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
