import React from 'react';
import Layout from '../components/layout';
import { Container } from '../components/styled/container-styled';
import { LargeTitle } from '../components/styled/text-header-styles';

const About = () => {
  return (
    <Layout>
      <Container hasMargin>
        <LargeTitle>About</LargeTitle>
      </Container>
    </Layout>
  );
};

export default About;
