import React from 'react';
import { FooterContainer } from './styled/footer-style';

const Footer = () => {
  return (
    <FooterContainer>
      <div className='flex-container'>
        <div className='copyright'>
          © {new Date().getFullYear()} VP—Designs. All Rights Reserved.
        </div>
        <div className='social-container'>
          <a
            className='social-link'
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/vpdesignstudios'
          >
            Facebook
          </a>
          <a
            className='social-link'
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/vpdstudios'
          >
            Twitter
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
