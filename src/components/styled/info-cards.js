import styled from 'styled-components';
import { theme } from '../theme';

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 0 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  @media (min-width: 1024px) {
    padding-bottom: 80px;
    padding-top: 80px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const GridTitle = styled.div`
  @media (min-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
`;

export const HeroCard = styled.div`
  padding: 20px 0 20px 0;
  @media (min-width: 1024px) {
    padding-right: 80px;
  }
  margin-top: 20px;
  h3 {
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  p {
    margin-bottom: 0.75rem;
    color: ${theme.colors.paleLightGreen};
    font-weight: 600;
    font-size: 1.112rem;
  }
  a {
    color: #000;
  }
`;
