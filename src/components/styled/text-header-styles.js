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
    font-size: 3rem;
  }
`;

export const TitleSubtext = styled.p`
  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;
