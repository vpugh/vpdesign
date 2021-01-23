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
  .content {
    margin-bottom: 50px;
  }
  .content h3 {
    margin-bottom: 0.75rem;
    font-size: 1.6rem;
    span {
      font-weight: normal;
      font-size: 1rem;
      font-family: 'Calluna Sans', sans-serif;
    }
  }
  .content p {
    font-size: 1.2rem;
    line-height: 1.4;
    @media (min-width: 1024px) {
      max-width: 82%;
    }
  }
`;

export const MiniNav = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 40%;
  }
  a {
    color: inherit;
  }
`;
