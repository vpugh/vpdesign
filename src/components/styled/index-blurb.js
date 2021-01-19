import styled from 'styled-components';
import { theme } from '../theme';

export const BlurbContainer = styled.div`
  background: ${theme.colors.paleGold};
  width: 100%;
  padding: 20px 0 30px 0;
  @media (min-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .container {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (min-width: 1024px) {
      flex-flow: row-reverse;
      justify-content: flex-end;
    }
  }
  .img-container {
    width: 100%;
    height: 250px;
    @media (min-width: 1024px) {
      width: 580px;
      height: 610px;
    }
    overflow: hidden;
    margin-bottom: 30px;
  }
  .text-container {
    text-align: left;
    font-size: 1.3rem;
    line-height: 1.4;
    color: ${theme.colors.paleLightGreen};
    font-weight: 600;
    @media (min-width: 1024px) {
      width: 420px;
      margin-right: 100px;
    }
    a {
      color: inherit;
    }
  }
`;
