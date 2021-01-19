import styled from 'styled-components';

export const BlogIndexContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  @media (min-width: 1024px) {
    padding-bottom: 80px;
    padding-top: 80px;
  }
  .gridContainer {
    display: grid;
    grid-gap: 20px 40px;
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
