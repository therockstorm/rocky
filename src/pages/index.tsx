import * as React from 'react'
import styled from 'styled-components'
import Svg from 'react-inlinesvg'
import Layout from '../components/Layout'
const background = require('../img/x.jpg') as string
const instagram = require('../img/instagram.svg') as string
const github = require('../img/github.svg') as string
const linkedIn = require('../img/linkedin.svg') as string

const Image = styled.div`
  background-size: cover;
  background-image: url(${background});
  background-position: 50% 0%;
  min-height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Rocky = styled.h1`
  font-size: 2.5rem;
  margin-top: 2.5rem;
`

const Lead = styled.h2`
  font-size: 1.4em;
  font-weight: 300;
  line-height: 2rem;
  max-width: 480px;
`

const Nav = styled.nav`
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
`

const NavItem = styled.a`
  fill: currentColor;
  opacity: 0.8;
  padding: 0 0.5rem;
  margin: 0.25rem;
  width: 30px;
  height: 30px;
`

export default () => (
  <Layout>
    <Image />
    <Container>
      <Rocky>Rocky Warren</Rocky>
      <Lead>
        Software engineer at{' '}
        <a href="https://www.dwolla.com/" target="_blank">
          Dwolla
        </a>{' '}
        and co-founder of Crucible Commodities. I do other stuff too.
      </Lead>
      <Nav>
        <NavItem href={'https://github.com/therockstorm'} target={'_blank'}>
          <Svg src={github} />
        </NavItem>
        <NavItem
          href={'https://www.instagram.com/therockstorm/'}
          target={'_blank'}
        >
          <Svg src={instagram} />
        </NavItem>
        <NavItem
          href={'https://www.linkedin.com/in/rockywarren'}
          target={'_blank'}
        >
          <Svg src={linkedIn} />
        </NavItem>
      </Nav>
    </Container>
  </Layout>
)
