import React from 'react';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import { Container } from '../components/styled/container-styled';
import InfoCardGrid from '../components/index/info-card-grid';
import HelpYouBlurb from '../components/index/help-you-blurb';
import BlogPeek from '../components/index/blog-peek';

export default function Home() {
  return (
    <Layout style={{ maxWidth: 'auto' }}>
      <div style={{ position: 'relative' }}>
        <Jumbotron />
      </div>
      <Container hasMargin={true}>
        <InfoCardGrid />
      </Container>
      <HelpYouBlurb />
      <Container>
        <BlogPeek />
      </Container>
    </Layout>
  );
}
