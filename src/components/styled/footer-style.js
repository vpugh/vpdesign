import styled from 'styled-components';
import { theme } from '../theme';

export const FooterContainer = styled.footer`
  background: ${theme.colors.darkGreen};
  margin: 0;
  padding: 0;
  color: ${theme.colors.lightLightGreen};
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    font-size: 0.8rem;
    @media (max-width: 480px) {
      flex-direction: column-reverse;
    }
  }
  .copyright {
    font-size: 0.8rem;
    color: ${theme.colors.superLightGreen};
  }
  .social-container {
    @media (max-width: 480px) {
      margin-bottom: 10px;
    }
  }
  .social-link {
    color: ${theme.colors.lightLightGreen};
    margin-left: 10px;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }
  }
`;
