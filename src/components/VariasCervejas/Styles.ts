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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    ::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 826px) {
      position: relative;
      justify-content: space-between;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;

    }
`

export const CervejaBloco = styled.div`
  width: 80%;
  height: max-content;
  margin-bottom: 50px;
  display: flex;
  flex-direction: flex;
  align-items: flex-start;

  @media (max-width: 826px) {
    flex-direction: row;
    border: solid;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0px;
    position: relative;
    margin-left: 0px;
    width: 100%;
    img {
      position: relative;
      width: 120px;
      height: 120px;
      margin-top: 0px;
      margin-left: 0px;
    }
    h3 { 
      font-size: 13px;
    }
    p { 
      width: 200px;
      font-size: 4px;
    }
    padding: 0;
    font-size: 15px;
  }
`

export const RefazendoBloco = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 15px;
  transition: all 0.8s;
  :hover {
      background-color: #d37ca3;
    }
  h3 { 
    color: #E9428C;
    font-size: 2rem;
  }

  img { 
    width: 400px;
    height: 400px;
  }

  @media (max-width: 826px) {
    img { width: 150px; height: 150px; }
    h3 { font-size: 1em; }
  }

`

export const VariasCervejasInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`