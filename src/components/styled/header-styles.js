import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const transition = css`
  transition: 0.3s ease-in-out;
`;

export const HeaderContainer = styled.header`
  @media (max-width: 480px) {
    flex-direction: column;
  }
  background: #043137;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  text-transform: uppercase;
  align-items: center;
  padding: 20px 0;
`;

export const Logo = styled(Link)`
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${transition}
  &:hover {
    opacity: 0.75;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 550px;
  }
`;

export const HeaderLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  letter-spacing: 2px;
  ${transition}
  &:hover {
    opacity: 0.5;
  }
`;

export const HeaderNormalLinks = styled.a`
  @media (max-width: 480px) {
    display: none;
  }
  color: #000;
  background: #fea400;
  text-decoration: none;
  padding: 6px 19px;
  letter-spacing: 1px;
  ${transition}
  &:hover {
    background: #fbbc49;
  }
`;
