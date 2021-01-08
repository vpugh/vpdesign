import React from 'react';
import { Link } from 'gatsby';
import {
  GridContainer,
  GridTitle,
  HeroCard,
} from '../../components/styled/info-cards';
import { Container } from '../styled/container-styled';
import projectTypes from '../../data/project-types';
import { TextTitle } from '../styled/text-header-styles';
import { theme } from '../theme';

const InfoCardGrid = () => {
  return (
    <div style={{ background: '#b4c1c3' }}>
      <Container>
        <GridContainer>
          <GridTitle>
            <TextTitle textColor={theme.colors.baseGreen1}>
              What we can do for you
            </TextTitle>
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
