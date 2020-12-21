import styled from 'styled-components';
import { theme } from '../theme';

const darkGreen = theme.colors.darkGreen;

export const BlurbContainer = styled.div`
  background: #aecaaf;
  width: 100%;
  padding: 30px 0 10px 0;
  margin: 20px 0;
  .container {
    display: flex;
    @media (max-width: 420px) {
      flex-direction: column;
    }
  }
  .title {
    color: ${darkGreen};
    margin-bottom: 20px;
    padding-bottom: 30px;
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
