import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  margin: ${({ hasMargin = false }) => (hasMargin ? '40px auto' : '0 auto')};
  padding: ${({ responsiveCollapse }) =>
    responsiveCollapse ? null : '0 20px'};
  @media (min-width: 768px) {
    padding: 0 80px;
  }
`;
