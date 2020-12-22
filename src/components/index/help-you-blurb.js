import React from 'react';
import { Container } from '../../components/styled/container-styled';
import { BlurbContainer } from '../styled/index-blurb';

const HelpYouBlurb = () => {
  return (
    <BlurbContainer>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <h2 className='title'>How we help you</h2>
          <div className='container'>
            <div className='img-container'>
              <img
                style={{ width: '100%' }}
                src='https://toripugh.com/images/pic.jpg'
                alt='profile pic'
              />
            </div>
            <div className='text-container'>
              <p>
                Having an online presence is crucial, it's the first encounter
                customers may have with your business. You have only a few
                seconds to get their attention when they visit your site. You
                want them to find your site easy to use and be informative. We
                want your site look great but also function well for your
                customers.
              </p>
              <p>
                Our job is to understand what your needs are and make a site
                that takes all that into account. We can go as simple or complex
                as is dictated by need or budget. Starting simple and then
                getting more complex is never a bad idea.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </BlurbContainer>
  );
};

export default HelpYouBlurb;