import styled from 'styled-components';
import { Paragraph } from '../../styles/pages/Cerveja';

export const Container = styled.div`
  width: 100%;
  height: 100%;

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
      height: 68vh;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: -125px;
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
  cursor: pointer;
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
    font-size: 1.3rem;
  }
  p { 
    color: black;
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

export const RefazendoBloco2 = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin: 15px;
  margin-left: 0;
  margin-top: 0px;
  z-index: 51;

  h3 { 
    color: #E9428C;
    font-size: 1.3rem;
  }
  h3:first-of-type {
    margin-top: 15px;
  }
  ${Paragraph} { 
    color: #3D3D3D;
    
    font-size: 10px;
    font-weight: 400;
    height: max-content;
    width: 65%;
    @media (max-width:826px) {
      font-size: 12px;
      width: 100%;
      span { 
        margin-top: -25px;
      }
    }
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

export const VariasCervejasimg = styled.img`
  width: 270px;
  height: 270px;
  margin-top: 120px;
  box-shadow: 0px 0px 0px 3px #b9348b;
  @media (max-width: 826px) {
    width: 150px;
    height: 150px;
    box-shadow: 0px 0px 0px 3px #b9348b;
    margin-bottom: 10px;
    margin-top: 0px;
  }
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 826px) {

  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a { 
      font-size: 15px;
      width: 120px;
      height: 40px;
      text-align: center;
      font-weight: bold;
      font-size: 12px;
      /* height: max-content; */
    }
`

export const ScrollDown = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 400px;
  left: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E9428C;
  @media (max-width: 826px) {
    bottom: 200px;
    right: 10px;
  }

  @keyframes cupidMoove {
      0%   {bottom: 40vh;}
      25%  {bottom: 50vh;}
      50%  {bottom: 40vh;}
      75%  {bottom: 50vh;}
      100% {bottom: 40vh;}
  }

  animation-name: cupidMoove;
  animation-duration: 5s;
  animation-iteration-count: infinite;


  
`