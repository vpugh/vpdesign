import React from 'react';
import Layout from '../components/layout';
import { TextLinkButton } from '../components/styled/button-styles';
import { ColoredBackground } from '../components/styled/colored-background';
import { Container } from '../components/styled/container-styled';
import {
  ServiceCard,
  ServiceTitle,
} from '../components/styled/services-styles';
import {
  LargeTitle,
  TitleSubtext,
} from '../components/styled/text-header-styles';
import { ConsultationIcon } from '../icons/consultation';
import { DesignIcon } from '../icons/design';
import { DevelopmentIcon } from '../icons/development';

const Services = () => {
  return (
    <Layout>
      <ColoredBackground>
        <Container hasMargin>
          <ServiceTitle>
            <LargeTitle style={{}}>Services</LargeTitle>
            <TitleSubtext>
              We are committed to bringing you the best level of our services.
              We build software that makes businesses more efficient and
              customers' lives easier.
            </TitleSubtext>
          </ServiceTitle>
          <ServiceCard>
            <div className='icon'>
              <ConsultationIcon width={125} />
            </div>
            <div className='content'>
              <h3>Consultation</h3>
              <p>
                We'll guide you through our process of problem-solving,
                research, and technical advice to land on a solution for your UX
                challenges.
              </p>
              <p className='tags'>Research & Analysis, Usability</p>
              {/* <TextLinkButton to='/services/consultation'>
                Learn More
              </TextLinkButton> */}
            </div>
          </ServiceCard>
          <ServiceCard>
            <div className='icon'>
              <DesignIcon width={125} />
            </div>
            <div className='content'>
              <h3>Digital Design</h3>
              <p>
                Your website should be more than just beautiful, it should be
                functional. With research and discussion we make sure the design
                is fully functinol and delivers the results your business wants.
              </p>
              <p className='tags'>
                User Interface, Information Architecture, Interaction Design
              </p>
              {/* <TextLinkButton to='/services/design'>Learn More</TextLinkButton> */}
            </div>
          </ServiceCard>
          <ServiceCard>
            <div className='icon'>
              <DevelopmentIcon width={125} />
            </div>
            <div className='content'>
              <h3>Development</h3>
              <p>
                We build solutions, which can be templated or custom, for an
                optimized, high&#8209;quality, and enjoyable site. These
                solutions can be self-managed or static.
              </p>
              <p className='tags'>JavaScript, Node.js, WordPress, Shopify</p>
              {/* <TextLinkButton to='/services/development'>
                Learn More
              </TextLinkButton> */}
            </div>
          </ServiceCard>
        </Container>
      </ColoredBackground>
    </Layout>
  );
};

export default Services;
