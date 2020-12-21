import styled from 'styled-components';
import { theme } from '../theme';

export const CTAContainer = styled.div`
  width: 100%;
  background: ${theme.colors.darkGreen};
  border-bottom: 1px solid ${theme.colors.borderGreen};
  color: #fff;
  .cta-title {
    color: #ffaa01;
    margin-bottom: 0.85rem;
    @media (min-width: 1024px) {
      margin-bottom: 0.5rem;
    }
  }
  .cta-content {
    margin: 0 auto;
    @media (min-width: 1024px) {
      max-width: 60%;
    }
  }
  .cta-button {
    background: ${theme.colors.gold};
    margin-top: 1rem;
    border: none;
    padding: 4px 22px;
    @media (max-width: 480px) {
      width: 100%;
      padding-top: 8px;
      padding-bottom: 8px;
    }
    @media (min-width: 1024px) {
      margin-top: 2rem;
    }
  }
`;
