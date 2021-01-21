import styled from 'styled-components';
import { theme } from '../theme';

export const TwoColumnGrid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 30px;
    margin-top: 40px;
    /* max-width: 82%; */
    h3 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: ${theme.colors.baseGreen2};
`;

export const Sections = styled.div`
  padding-top: 40px;
  .content h3 {
    margin-bottom: 0.75rem;
  }
  .content p {
    font-size: 1.2rem;
    line-height: 1.4;
    max-width: 82%;
  }
`;
