import styled from 'styled-components';
import { theme } from '../theme';

export const TextTitle = styled.h2`
  padding-top: 2rem;
  @media (min-width: 1024px) {
    font-size: 39px;
    line-height: 48px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  text-transform: capitalize;
  color: ${({ textColor }) => textColor || theme.colors.black};
`;

export const LargeTitle = styled.h2`
  @media (min-width: 1024px) {
    font-size: 2.4rem;
    line-height: 1.2;
  }
`;

export const TitleSubtext = styled.p`
  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const ImpactTitle = styled.div`
  background: ${({ bgColor }) => bgColor || null};
  padding: 40px 0;
  @media (min-width: 1024px) {
    padding: 100px 0;
  }
  p {
    @media (min-width: 1024px) {
      max-width: 65%;
      font-size: 1.112rem;
    }
  }
`;
