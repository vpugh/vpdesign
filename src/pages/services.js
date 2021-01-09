import React from 'react';
import Layout from '../components/layout';
import { TextLinkButton } from '../components/styled/button-styles';
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
      <Container hasMargin>
        <ServiceTitle>
          <LargeTitle style={{}}>Services</LargeTitle>
          <TitleSubtext>
            We are committed to bringing you the best level of our services. We
            build software that makes businesses more efficient and customers'
            lives easier.
          </TitleSubtext>
        </ServiceTitle>
        <ServiceCard>
          <div className='icon'>
            <ConsultationIcon width={125} />
          </div>
          <div className='content'>
            <h3>Consultation</h3>
            <p>
              We'll work with you to better undertand what you are looking for
              and what you need. Walking you through the vast world of technical
              jargon and concepts. This is where our process of (Learn. Define.
              Recommend) comes into play. We'll guide your through our process
              of problem-solving, research, and technical advice to find the
              right solution for you.
            </p>
            <TextLinkButton to='/services/consultation'>
              Learn More
            </TextLinkButton>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className='icon'>
            <DesignIcon width={125} />
          </div>
          <div className='content'>
            <h3>Design</h3>
            <p>
              Design isn't just about looking good. The main question should be
              is it functional, does it have everything your customer/business
              needs. If you cannot get the results you want because of it, it's
              not good. We help you get your message across, get the results
              your business is looking for and take your brand to the next
              level.
            </p>
            <TextLinkButton to='/services/design'>Learn More</TextLinkButton>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div className='icon'>
            <DevelopmentIcon width={125} />
          </div>
          <div className='content'>
            <h3>Development</h3>
            <p>
              Creating a great website takes a lot of factors into
              consideration, ease of use, security, reliability, and
              maintainability. There are many different ways to self manage
              sites now a days, we can work with you to find what fits you best.
              Rest assured knowing that we will put the utmost care into
              crafting a high-quality and performant site.
            </p>
            <TextLinkButton to='/services/development'>
              Learn More
            </TextLinkButton>
          </div>
        </ServiceCard>
      </Container>
    </Layout>
  );
};

export default Services;
