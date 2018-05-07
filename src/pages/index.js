import React from 'react'
import styled from 'styled-components'
import Svg from 'react-inlinesvg'
import background from '../img/x.jpg'
import instagram from '../img/instagram.svg'
import twitter from '../img/twitter.svg'
import github from '../img/github.svg'
import linkedIn from '../img/linkedin.svg'

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
  padding: 0 0.5rem
  margin: 0.25rem;
  width: 30px;
  height: 30px;
`

export default () => (
  <div>
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
        <NavItem href={'https://twitter.com/therockstorm'} target={'_blank'}>
          <Svg src={twitter} />
        </NavItem>
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
  </div>
)
