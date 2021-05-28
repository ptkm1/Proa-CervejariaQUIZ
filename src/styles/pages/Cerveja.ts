import styled from 'styled-components';

export const CervejariaContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  padding: 15em;
  align-items: center;
`;

export const CervejariaInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  h1 {
    font-size: 2em;
    margin-bottom: 30px;
    color: gray;
  }

  p {
    font-size: 1.5em;
    color: gray;
  }
`;