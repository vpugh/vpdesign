import styled from 'styled-components';
import { theme } from '../theme';

export const BlurbContainer = styled.div`
  background: #aecaaf;
  width: 100%;
  padding: 30px 0 10px 0;
  margin: 20px 0;
  .container {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .title {
    color: ${theme.colors.darkGreen};
    margin-bottom: 20px;
    padding-bottom: 36px;
    padding-top: 24px;
    font-size: 2rem;
  }
  .img-container {
    max-width: 450px;
    height: 380px;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .text-container {
    text-align: left;
    @media (min-width: 1024px) {
      width: 480px;
      margin-left: 100px;
    }
  }
`;
