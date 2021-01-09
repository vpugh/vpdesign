import styled from 'styled-components';

export const StepCard = styled.div`
  background: ${({ bgColor }) => bgColor || null};
  padding: 40px 0;
  @media (min-width: 1024px) {
    padding: 160px 0;
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.6;
    }
  }
`;
