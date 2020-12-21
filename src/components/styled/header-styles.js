import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const transition = css`
  transition: 0.3s ease-in-out;
`;

export const HeaderContainer = styled.header`
  @media (max-width: 420px) {
    flex-direction: column;
  }
  background: #043137;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

export const Logo = styled(Link)`
  @media (max-width: 420px) {
    margin-bottom: 20px;
  }
  color: #fff;
  text-decoration: none;
  font-weight: bold;
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
  @media (min-width: 1024px) {
    width: 500px;
  }
`;

export const HeaderLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  /* margin-right: 30px; */
  border-bottom: 1px solid transparent;
  ${transition}
  &:hover {
    opacity: 0.5;
    border-bottom: 1px solid;
  }
`;

export const HeaderNormalLinks = styled.a`
  @media (max-width: 420px) {
    display: none;
  }
  color: #000;
  background: #fea400;
  text-decoration: none;
  padding: 2px 19px;
  border-radius: 14px;
  font-weight: bold;
  ${transition}
  &:hover {
    background: #fbbc49;
  }
`;
