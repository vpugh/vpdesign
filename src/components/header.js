import React from 'react';
import {
  HeaderLinks,
  HeaderNormalLinks,
  HeaderContainer,
  Logo,
  NavContainer,
} from './styled/header-styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to='/'>VP—Designs</Logo>
      <NavContainer>
        <HeaderLinks to='/work'>Work</HeaderLinks>
        <HeaderLinks to='/about'>About</HeaderLinks>
        <HeaderLinks to='/services'>Services</HeaderLinks>
        <HeaderLinks to='/blog'>Blog</HeaderLinks>
        <HeaderNormalLinks
          className='typeform-share link'
          href='https://tori83.typeform.com/to/b6gima'
          data-mode='1'
          rel='noreferrer'
          target='_blank'
        >
          Work With Us
        </HeaderNormalLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
