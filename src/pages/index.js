import React from 'react';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import { Container } from '../components/styled/container-styled';
import InfoCardGrid from '../components/index/info-card-grid';
import HelpYouBlurb from '../components/index/help-you-blurb';

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
        <div
          style={{
            margin: '40px 0',
            textAlign: 'center',
            fontSize: '2rem',
            paddingTop: '2rem',
          }}
        >
          <h2>Blog Posts</h2>
          <p>Blog posts...</p>
        </div>
      </Container>
    </Layout>
  );
}
