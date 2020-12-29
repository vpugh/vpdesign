import styled, { css } from 'styled-components';
import { theme } from '../theme';
import { Link } from 'gatsby';

const transition = css`
  transition: 0.3s ease-in-out;
`;

export const RegularButton = styled.a`
  color: #000;
  margin-top: ${(props) => props.hasmargintop};
  background: ${theme.colors.baseGold};
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

export const LinkButton = styled(Link)`
  color: #000;
  margin-top: ${(props) => props.hasmargintop};
  background: ${theme.colors.baseGold};
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
