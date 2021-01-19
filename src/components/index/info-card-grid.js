import React from 'react';
import { Link } from 'gatsby';
import {
  GridContainer,
  GridSubtitle,
  GridTitle,
  HeroCard,
} from '../../components/styled/info-cards';
import { Container } from '../styled/container-styled';
import projectTypes from '../../data/project-types';
import { TextTitle } from '../styled/text-header-styles';
import { theme } from '../theme';

const InfoCardGrid = () => {
  return (
    <div style={{ background: theme.colors.paleGreen }}>
      <Container>
        <GridContainer>
          <GridTitle>
            <TextTitle textColor={theme.colors.baseGreen1}>
              What we do
            </TextTitle>
            <GridSubtitle>
              We design and build sites that showcase your business. Working
              with you to make the websites as accessible and easy for customers
              as it is to maintain. Every business has a different level of need
              and comfort and we work with you to figure out what your level is.
              All sites are fully customizable but we have some options to help
              get you started.
            </GridSubtitle>
          </GridTitle>
          {projectTypes.map((pt) => (
            <HeroCard key={pt.title}>
              <h3>{pt.title}</h3>
              <p>{pt.description}</p>
              <Link to={pt.to}>{pt.linkText}</Link>
            </HeroCard>
          ))}
        </GridContainer>
      </Container>
    </div>
  );
};

export default InfoCardGrid;
