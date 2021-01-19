import React from 'react';
import Layout from '../components/layout';
import { ColoredBackground } from '../components/styled/colored-background';
import { Container } from '../components/styled/container-styled';

const Portfolio = () => {
  return (
    <Layout>
      <ColoredBackground>
        <Container hasMargin>
          <h2>Portfolio</h2>
        </Container>
      </ColoredBackground>
    </Layout>
  );
};

export default Portfolio;
