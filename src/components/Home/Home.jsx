import React from 'react';
import styled from 'styled-components';
import Intro from './page/Intro';
import ProfileInro from './page/ProfileInto';
import Project from './page/Project';
import Contact from '../Contact/Contact';
import { Element } from 'react-scroll';

const Container = styled.main`
  height: auto;
  width: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Intro />
      <Element name="profile">
        <ProfileInro />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Project />
    </Container>
  );
}