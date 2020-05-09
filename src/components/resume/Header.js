/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import ExternalLink from "../ExternalLink"
import Icon from "../Icon"
import Link from "../icons/Link"
import LinkedIn from "../icons/LinkedIn"

export default () => (
  <Fragment>
    <Styled.h1>Rocky Warren</Styled.h1>
    <Styled.div>
      <Styled.p>
        An AWS Certified Solutions Architect with over ten years of experience
        shipping and maintaining tested, distributed, secure systems from
        thousand-line microservices moving billions of dollars each year to
        multi-million line GPS guidance systems. I deliver customer value
        utilizing object-oriented, functional, statically-typed, dynamic, and
        database languages and lead teams as a Principal Engineer, Architect,
        and Startup Co-founder.
      </Styled.p>
      <Flex sx={{ justifyContent: `space-between`, flexWrap: `wrap` }}>
        <Flex sx={{ pb: 1 }}>
          <Icon children={<Link />} />
          <ExternalLink href="https://www.rocky.dev">
            https://rocky.dev
          </ExternalLink>
        </Flex>
        <Flex sx={{ pb: 1 }}>
          <Icon children={<LinkedIn />} />
          <ExternalLink href="https://www.linkedin.com/in/rockywarren">
            linkedin.com/in/rockywarren
          </ExternalLink>
        </Flex>
      </Flex>
    </Styled.div>
  </Fragment>
)
