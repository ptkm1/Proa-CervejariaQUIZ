import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cervejas = styled.div`
    overflow: auto;
    padding: 15px;
    width: 70%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ::-webkit-scrollbar {
      /* display: none; */
    }
`

export const CervejaBloco = styled.div`
  width: 400px;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`