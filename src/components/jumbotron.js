import React from 'react';
import { JumbotronStyled } from './styled/jumbotron';
import { LinkButton } from './styled/button-styles';
import { Container } from './styled/container-styled';

const Jumbotron = () => {
  return (
    <div style={{ position: 'relative' }}>
      <JumbotronStyled>
        <Container>
          <h2 className='title'>
            Taking the fear and mystery out of bringing your business online.
          </h2>
          <p className='subtitle'>
            In today's world having a website is a necessity. Having an easy to
            use site that converts customers is even more important. You have a
            short window to get and keep their attention.
          </p>
          <LinkButton hasmargintop='1rem' to='/services'>
            Let's Get Started
          </LinkButton>
        </Container>
      </JumbotronStyled>
    </div>
  );
};

export default Jumbotron;
