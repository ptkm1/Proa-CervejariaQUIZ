import styled from 'styled-components'

export const ContainerVariasCervejas = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  // Laptop
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 426px) {
    margin-top: 20px;
    height: 70vh;
  }

  @media (max-height: 769px) {
    margin-top: 20px;
    height: 70vh;
  }
`

export const ImgContent = styled.img`
  width: 250px;
  height: 250px;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 0px 3px #b9348b;

  //Laptop
  @media (max-width: 1025px) {
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 426px) {
    width: 45vw;
  }

  @media (max-height: 769px) {
  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 90%;
  height: 100%;
  margin-bottom: 50px;

  h4 {
    color: #E9428C;
  }

  p {
    text-align: justify;
    text-align-last: left;
    color: #3D3D3D;
  }

  span {
    color: #E9428C;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
      font-weight: bold;
  }

  h4 {
    width: 80%;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
      font-weight: bold;
  }

  p {
    width: 80%;
    text-align: justify;
    word-spacing: -1px;
    text-align-last: left;
    word-spacing: -2px;
    color: #3D3D3D;
     font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
  }


  @media (max-width: 1025px) {
    margin-bottom: 20px;
    h4 {
      font-size: 2vw;
    }
    p {
      font-size: 1.5vw;
    }
  }

  @media (max-width: 769px) {
  }

  @media (max-width: 426px) {
    margin-bottom: 2vh;
    width: 80vw;
    h4 {
      width: 80%;
      font-size: 2vh;
    }
    p {
      width: 80%;
      font-size: 1vh;
    }
  }

  @media (max-height: 769px) {
    p {
      font-size: 1.7vh;
    }
  }
`

export const ButtonCerv = styled.div`
    width: 200px;
    height: 50px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #64358C;
    display: flex;
    justify-content: center;
    align-items: center;
`
