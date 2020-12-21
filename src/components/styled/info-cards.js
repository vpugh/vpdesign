import styled from 'styled-components';
import { theme } from '../theme';

const darkGreen = theme.colors.darkGreen;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 0 20px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GridTitle = styled.h2`
  @media (min-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  text-align: center;
  font-size: 2rem;
  padding-top: 2rem;
  color: ${darkGreen};
`;

export const HeroCard = styled.div`
  background: #cad8ca;
  padding: 20px 30px;
  margin-top: 20px;
  border: 1px solid #afcaaf;
  border-radius: 3px;
  h3 {
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  p {
    margin-bottom: 0.75rem;
  }
  a {
    color: #000;
  }
`;
