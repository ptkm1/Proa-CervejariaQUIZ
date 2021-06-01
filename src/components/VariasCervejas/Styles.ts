import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cervejas = styled.div`
    overflow: auto;
    padding: 15px;
    width: 80%;
    height: 65vh;
    position: absolute;
    top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ::-webkit-scrollbar {
      display: none;
    }
`

export const CervejaBloco = styled.div`
  width: 80%;
  height: max-content;
  margin-bottom: 50px;
  display: flex;
  flex-direction: flex;
  align-items: flex-start;
`