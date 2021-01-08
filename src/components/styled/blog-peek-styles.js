import styled from 'styled-components';

export const BlogIndexContainer = styled.div`
  /* margin: 40px 0; */
  padding-top: 2rem;
  padding-bottom: 2rem;
  .gridContainer {
    display: grid;
    grid-gap: 20px 40px;
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      margin-top: 80px;
    }
  }
`;
