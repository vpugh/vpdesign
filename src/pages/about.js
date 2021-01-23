import React from 'react';
import Layout from '../components/layout';
import { ColoredBackground } from '../components/styled/colored-background';
import { Container } from '../components/styled/container-styled';
import {
  LargeTitle,
  TitleSubtext,
} from '../components/styled/text-header-styles';
import {
  MiniNav,
  Sections,
  SectionTitle,
  TwoColumnGrid,
} from '../components/styled/about-styles';

const About = () => {
  return (
    <Layout>
      <ColoredBackground>
        <Container hasMargin>
          <div style={{ maxWidth: '82%' }}>
            <LargeTitle>
              Focusing on making websites that take advantage of the growing
              digital market.
            </LargeTitle>
            <TitleSubtext>
              We keep saying it because it's really important — having a website
              is very important. As time goes on this will only be more true,
              don't get left behind or left out. We specialize in working with
              businesses to take the step to going online, while creating
              performant, beautiful, and user-friendly websites.
            </TitleSubtext>
            <MiniNav>
              <a href='#mission'>Mission</a>
              <a href='#values'>Values</a>
              <a href='#process'>Process</a>
            </MiniNav>
          </div>
          <Sections id='mission'>
            <SectionTitle>Our Mission</SectionTitle>
            <div className='content'>
              <p>
                We strive to be partners and teachers. Working together to
                create a solution that best suits your need. Yet, still teaching
                you what you need to do to take the plan and succeed. We can
                make something great for you but will also give you the strategy
                needed to continue and grow.
              </p>
              <p>
                Creating solutions that are led by a understanding of your
                specific circumstance and executed with strategic intent and
                thorough research. These solutions are effective and all
                encompassing, more than just visual.
              </p>
            </div>
          </Sections>
          <img
            style={{ marginTop: '2rem' }}
            src='../desk-topview.jpg'
            alt='gallery layout'
          />
          <Sections id='values'>
            <SectionTitle>Our Values</SectionTitle>
            <TwoColumnGrid>
              <div>
                <h3>Honesty & Transparency</h3>
                <p>
                  The most integral part of the process is the relationship
                  built with our clients. We work very hard to remain
                  transparent and honest with ourselves and our clients. To
                  cultivate this sense of trust. We are working together towards
                  the same goals.
                </p>
              </div>
              <div>
                <h3>Design With Intent</h3>
                <p>
                  When we work on a project with a client, we know that the
                  ultimate goal is to satisfy not just the client but also the
                  end-user. Every step in the process is done with them in mind
                  and always puts them first.
                </p>
              </div>
              <div>
                <h3>Individually Dedicated</h3>
                <p>
                  We work with each client based on their own merit and give
                  each all of our attention and care. Keeping this in mind we
                  keep our, and your, expectations realistic. We work to keep
                  the lines of communication open with you. We are dedicated to
                  your success and it reflects in our work.
                </p>
              </div>
              <div>
                <h3>Eternally Passionate</h3>
                <p>
                  We are doing what we love, solving problems and making
                  solutions. We take great care to make everything to the best
                  of out abilities. We look forward to working with like minded
                  and driven individuals. Those filled with excitement and
                  passion.
                </p>
              </div>
            </TwoColumnGrid>
          </Sections>
          <img
            style={{ marginTop: '3rem' }}
            src='../process.jpg'
            alt='Desk Topview'
          />
          <Sections id='process'>
            <SectionTitle>Our Process</SectionTitle>
            <div style={{ marginTop: 60 }}>
              <div className='content'>
                <h3>
                  Discovery <span>• Learn about you</span>
                </h3>
                <p>
                  The first step in getting started is learning everything about
                  you and your project. You'll answer questions so we can
                  familiarize ourselves with your business. This will include
                  your competition, audience, future desires, and more. **Flesh
                  out more.**
                </p>
              </div>
              <div className='content'>
                <h3>
                  Define <span>• Figure out the problem and a solution</span>
                </h3>
                <p>
                  This is were objectives get fleshed out and we start figuring
                  out specifics. After the discovery session, we'll have a
                  better understanding of what your ambitions are and what your
                  expectations from our working together is. Here we'll figure
                  out a list of what you want to get done and make a plan of how
                  the project will go forward.
                </p>
              </div>
              <div className='content'>
                <h3>
                  Design <span>• Create the solution</span>
                </h3>
                <p>
                  In this phase the level of complexity will have been figured
                  out in the Define session. With design exploration we can go
                  as granular as sketching, wireframing to figure out what is a
                  best fit. When the design direction is agreed upon and
                  approved, the assets will be readied for handoff.
                </p>
              </div>
              <div className='content'>
                <h3>
                  Develop <span>• Build the experience</span>
                </h3>
                <p>
                  Using the agreed upon tools and frameworks to build what the
                  project requires. We would have walked through the tools and
                  frameworks available and the different levels of usability are
                  entailed in each one. After the development is complete,
                  documentation will be transferred that explains and guides.
                  There will be a transfer period where we are available for
                  support afterwards. With options for some ongoing support if
                  that is deemed necessary.
                </p>
              </div>
            </div>
          </Sections>
        </Container>
      </ColoredBackground>
    </Layout>
  );
};

export default About;
