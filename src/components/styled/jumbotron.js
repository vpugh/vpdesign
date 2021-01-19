import styled from 'styled-components';

export const JumbotronStyled = styled.div`
  padding: 4rem 0;
  @media (min-width: 1024px) {
    padding-bottom: 4rem;
    padding-top: 5rem;
  }
  .container {
    @media (min-width: 480px) {
      width: 90%;
    }
    @media (min-width: 1024px) {
      width: 80%;
    }
    margin: 0 auto;
    max-width: 1280px;
  }
  .title {
    color: #fff;
    line-height: 1.2;
    font-family: 'Atiza';
    max-width: 80%;
    @media (min-width: 1024px) {
      font-size: 3.2rem;
      margin-bottom: 4vh;
      margin-bottom: 2rem;
      line-height: 1.3;
    }
  }
  .subtitle {
    color: #fff;
    max-width: 80%;
    @media (min-width: 1024px) {
      font-size: 1.3rem;
      line-height: 32px;
      line-height: 1.4;
    }
  }
  a {
    font-weight: bold;
    padding-left: 32px;
    padding-right: 32px;
    letter-spacing: 1px;
  }
`;
