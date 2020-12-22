import styled, { css } from 'styled-components';
import { theme } from '../theme';

const transition = css`
  transition: 0.3s ease-in-out;
`;

export const RegularButton = styled.a`
  color: #000;
  margin-top: ${(props) => props.marginTop};
  background: ${theme.colors.gold};
  text-decoration: none;
  padding: 6px 19px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  font-weight: ${(props) => (props.isBold ? 'bold' : null)};
  ${transition}
  &:hover {
    background: #fbbc49;
    cursor: pointer;
  }
`;
