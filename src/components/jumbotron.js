import React from 'react';
import { JumbotronStyled } from './styled/jumbotron';
import { LinkButton } from './styled/button-styles';

const Jumbotron = () => {
  return (
    <div style={{ position: 'relative' }}>
      <JumbotronStyled>
        <div className='container'>
          <h2 className='title'>
            Helping to take the fear and mystery out of bringing your business
            online.
          </h2>
          <p className='subtitle'>
            In today's world having a website is a necessity. Having an easy to
            use site that converts customers is even more important. You have a
            short window to get and keep their attention.
          </p>
          <LinkButton hasmargintop='2rem' to='/services'>
            {/* Plan a Project */}
            Get Started
          </LinkButton>
        </div>
      </JumbotronStyled>
    </div>
  );
};

export default Jumbotron;
