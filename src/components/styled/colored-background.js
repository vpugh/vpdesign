import styled from 'styled-components';
import { theme } from '../theme';

export const ColoredBackground = styled.div`
  background: ${({ bgcolor }) => bgcolor || theme.colors.paleGreen};
  padding-top: 40px;
  padding-bottom: 60px;
  @media (min-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;
