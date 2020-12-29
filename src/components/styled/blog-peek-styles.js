import styled from 'styled-components';
import { theme } from '../theme';

export const BlogIndexContainer = styled.div`
  margin: 40px 0;
  text-align: center;
  padding-top: 2rem;
  .title {
    color: ${theme.colors.baseGreen1};
    font-size: 2rem;
    padding-bottom: 2rem;
  }
  .gridContainer {
    display: grid;
    grid-gap: 20px 40px;
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
