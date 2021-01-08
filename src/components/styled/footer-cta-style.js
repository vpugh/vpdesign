import styled from 'styled-components';
import { theme } from '../theme';

export const CTAContainer = styled.div`
  width: 100%;
  background: ${theme.colors.baseGreen1};
  border-bottom: 1px solid ${theme.colors.baseGreenBorder};
  color: #fff;
  .cta-title {
    color: #ffaa01;
    margin-bottom: 0.85rem;
    font-size: 2rem;
    @media (min-width: 1024px) {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
  .cta-content {
    margin: 0 auto;
    font-size: 1.112rem;
    @media (min-width: 1024px) {
      max-width: 60%;
    }
  }
  a {
    font-size: 16px;
    border: 1px solid ${theme.colors.baseGold};
    background: transparent;
    color: #fff;
  }
  .cta-button {
    background: ${theme.colors.baseGold};
    margin-top: 1rem;
    border: none;
    padding: 4px 22px;
    text-transform: uppercase;
    letter-spacing: 1px;
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
