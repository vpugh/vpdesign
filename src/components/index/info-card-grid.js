import React from 'react';
import { Link } from 'gatsby';
import {
  GridContainer,
  GridTitle,
  HeroCard,
} from '../../components/styled/info-cards';

const InfoCardGrid = () => {
  return (
    <GridContainer>
      <GridTitle>Web Design &amp; Development</GridTitle>
      <HeroCard>
        <h3>Simple Website</h3>
        <p>
          This would be the bare minimum necessary to get up and running and
          have a presence online. Something customers can find and happily start
          using.
        </p>
        <Link to='/package/simple-site'>View Simple Details</Link>
      </HeroCard>
      <HeroCard>
        <h3>Blog</h3>
        <p>
          Mostly content focused, otherwise known as blogging. This is coming up
          with a design that best suits your blogging needs.
        </p>
        <Link to='/package/blog'>View Blog Details</Link>
      </HeroCard>
      <HeroCard>
        <h3>Ecommerce</h3>
        <p>
          This package is for people who sell products and are looking to move
          that process online.
        </p>
        <Link to='/package/ecommerce'>View Ecommerce Details</Link>
      </HeroCard>
      <HeroCard>
        <h3>Something Custom</h3>
        <p>
          None of these packages solve the problem your having? Reach out and
          we’ll see what we can make for you.
        </p>
        <Link to='/package/fully-custom'>See What We Can Do</Link>
      </HeroCard>
    </GridContainer>
  );
};

export default InfoCardGrid;
