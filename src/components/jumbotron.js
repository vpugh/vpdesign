import React from 'react';
import { JumbotronStyled } from './styled/jumbotron';
import { Link } from 'gatsby';

const Jumbotron = () => {
  return (
    <JumbotronStyled>
      <div className='container'>
        <h2 className='title'>
          Take the fear and mystery out of taking your business online.
        </h2>
        <p className='subtitle'>
          In today’s world a website is a necessity. This can be followed by a
          lot of questions, What do I need on it?, What results do I want?, How
          do I get started? We’re here to help you figure that out.
        </p>
        <Link className='cta-button' to='/fyf'>
          What do you need
        </Link>
      </div>
    </JumbotronStyled>
  );
};

export default Jumbotron;
