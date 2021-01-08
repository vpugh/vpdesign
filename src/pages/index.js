import React from 'react';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import InfoCardGrid from '../components/index/info-card-grid';
import HelpYouBlurb from '../components/index/help-you-blurb';
import BlogPeek from '../components/index/blog-peek';

export default function Home() {
  return (
    <Layout style={{ maxWidth: 'auto' }}>
      <Jumbotron />
      <InfoCardGrid />
      <HelpYouBlurb />
      <BlogPeek />
    </Layout>
  );
}
