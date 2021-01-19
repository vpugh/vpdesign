import React from 'react';
import Layout from '../components/layout';
import { ColoredBackground } from '../components/styled/colored-background';
import { Container } from '../components/styled/container-styled';
import { LargeTitle } from '../components/styled/text-header-styles';

const About = () => {
  return (
    <Layout>
      <ColoredBackground>
        <Container hasMargin>
          <LargeTitle>About</LargeTitle>
          <div>
            <h3>Our Mission</h3>
            <p>
              Getting people online and making the sites helpful, usable, and
              profitable.
            </p>
            <h3>How We Work</h3>
            <p>Working together, research, perfect solution for the job.</p>
          </div>
        </Container>
      </ColoredBackground>
    </Layout>
  );
};

export default About;
