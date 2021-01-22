import styled from 'styled-components';
import { theme } from '../theme';

export const ServiceTitle = styled.div`
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    margin-bottom: 40px;
    padding-top: 40px;
  }
  p[class*='TitleSubtext'] {
    @media (min-width: 1024px) {
      border-left: 2px solid;
      margin-left: 30px;
      padding-left: 20px;
    }
  }
`;

export const ServiceCard = styled.div`
  font-size: 1.112rem;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 1px solid ${theme.colors.paleGreen};
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .icon {
    max-width: 100;
    @media (min-width: 1024px) {
      margin-left: 40px;
      margin-right: 120px;
    }
  }
  h3 {
    font-size: 1.75rem;
    color: ${theme.colors.baseGreen1};
    @media (max-width: 480px) {
      margin-top: 1.5rem;
    }
    @media (min-width: 1024px) {
      margin-bottom: 0.75rem;
    }
  }
  p {
    font-size: 1.2rem;
  }
  .tags {
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;
