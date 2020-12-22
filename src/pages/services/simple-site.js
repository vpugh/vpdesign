import React from 'react';
import Layout from '../../components/layout';
import { Container } from '../../components/styled/container-styled';

const SimpleSite = () => {
  return (
    <Layout>
      <Container hasMargin={true}>
        <h2>Package - Simple Site</h2>
        <p>
          Simple description of what this package would entail. With more
          explanation of upgrades below in greater detail. Link would be to
          intro packet(???).
        </p>
        <h3>Why you need a simple web site</h3>
        <p>
          In this digital age, it's the least you need for your customers to
          find you and get to know some things about you. It can be used for
          simple things, telling people your location, your hours, discounts or
          sales. This should be the bare minimun that you use it for. A place to
          direct people to.
        </p>
        <p>
          If your just starting out or just converting over to being involved in
          the digital space. This is a good starting point. That can always be
          upgraded or changed at a later date.
        </p>
      </Container>
    </Layout>
  );
};

export default SimpleSite;
