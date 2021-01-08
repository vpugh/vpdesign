import React from 'react';
import Layout from '../components/layout';
import { Container } from '../components/styled/container-styled';
import {
  LargeTitle,
  TitleSubtext,
} from '../components/styled/text-header-styles';

const Services = () => {
  return (
    <Layout>
      <Container hasMargin>
        <LargeTitle>Services</LargeTitle>
        <TitleSubtext>
          We are committed to bringing you the best level of our services.
        </TitleSubtext>
        <div>
          <h3>Consultation</h3>
          <p>
            Expert advice goes a really long way on a complex project. Let our
            experts help guide the way through technical advice and direction,
            problem solving and infrastructure consulting.
          </p>
          {/* Talk about the discovery process (how to figure out what is needed). How you go about understanding what is needed, being collaborative and working together to figure it out. Not just us telling you things, we need your input and expertise in your field. Figure out problems/needs, define what needs to be done, recommend how to move forward.
          
          Figure out - Identify goals
          Define needs - After understanding goals and requirements, we flesh out what needs to be made and what's the best way to do that.
          Recommend - Have answered the How and What, then move onto budget and timeframe. Break down expected delivarables and hash out terms.
           */}
        </div>
        <div>
          <h3>Design</h3>
          <p>
            Design done well looks good. Design done best gets you results. We
            do more than create a look. We connect with you and help you
            next-level your brand.
          </p>
        </div>
        <div>
          <h3>Development</h3>
          <p>
            Secure, high quality code is just the start. We consider all the
            little details so your site is comprehensive. We take an innovative
            approach to make your site fast, secure, and reliable every step of
            the way.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Services;
