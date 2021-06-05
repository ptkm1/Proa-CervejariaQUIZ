import styled from 'styled-components'
import Sea from '../../assets/background.png'

export const CervejaLayout = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: grid;
  grid-template-rows: 2fr 1fr;
`

export const Top = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  // Laptop
  @media (max-width: 1025px) {
  }
  // Tablet
  @media (max-width: 769px) {
  }
  // Mobile
  @media (max-width: 426px) {
  }
`

export const Bottom = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Sea});
  background-size: 100% 100%;
  background-position: bottom;

  @media (max-width: 1025px) {
    background-size: 100% 90%;
    background-repeat: no-repeat;
  }

  @media (max-width: 426px) {
    background-size: 200% 100%;
    background-repeat: no-repeat;
  }
`

export const BottomItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: flex-end;
  
  #barquinho {
    width: 15vw;
    height: 100%;
  }

  #logo {
      margin-bottom: 5px;
    }

  // Laptop
  @media (max-width: 1025px) {
    #logo {
      width: 20vw;
    }
    #barquinho {
      width: 25vw;
      height: 100%;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 769px) {
    padding-bottom: 5px;
    #logo {
      width: 25vw;
    }
  }

  @media (max-width: 426px) {
    #barquinho {
      width: 35vw;
    }
    #logo {
      width: 35vw;
    }
    padding-bottom: 15px;
  }

  @media (max-height: 769px) {
    padding-bottom: 12px;
    #logo {
      width: 25vh;
    }
  }
`

// Product

export const TopContent = styled.div`
  width: 100%;
  height: max-content;

  // Laptop
  @media (max-width: 1025px) {
  }
  // Tablet
  @media (max-width: 769px) {
  }
  // Mobile
  @media (max-width: 426px) {
  }
`

export const TopContentScroll = styled.div`
  width: 100%;
  overflow: scroll;

  // Laptop
  @media (max-width: 1025px) {
  }
  // Tablet
  @media (max-width: 769px) {
  }
  // Mobile
  @media (max-width: 426px) {
  }
`

export const ImageAndInformations = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    box-shadow: 0px 0px 0px 3px #b9348b;
    margin-left: 25px;
  }

  h4 {
    color: #E9428C;
  }

  p {
    text-align: justify;
    word-spacing: -1px;
    text-align-last: left;
    word-spacing: -2px;
    color: #3D3D3D;
  }

  span {
    color: #E9428C;
  }


  // Laptop
  @media (max-width: 1025px) {
    
    img { 
        width: 25vw;
        margin-left: 17px;
        margin-bottom: 15px;
    }


  }
  // Tablet
  @media (max-width: 769px) {
    flex-direction: column;

    p {
      font-size: 4vw;
    }
  }
  // Mobile

  @media (max-width: 426px) {
    padding: 10px;
    h4 {
      font-size: 4vw;
      margin: 10px 0px;
    }

    p {
      font-size: 5vw;
    }

    img { 
      width: 35vw;
    }

  }

  @media (max-width: 321px) {
    padding: 10px;
    h4 {
      font-size: 4vw;
      margin: 10px 0px;
    }

    p {
      font-size: 3.7vw;
    }

    img { 
      width: 40vw;
    }

  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  a {
    width: 200px;
    height: 40px;
    background: #64358C;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  margin-left: 25px;

  h4 {
    width: 40%;
    font-family: 'Overpass Mono', monospace;
    white-space: 1px;
    text-justify: auto;
    letter-spacing: -2px;
  }

  p {
    width: 50%;
    font-family: 'Overpass Mono', monospace;
    white-space: 1px;
    letter-spacing: -0.10vw;
    text-align: left;
    line-height: 2.3vh;
  }

  // Laptop
  @media (max-width: 1025px) {
    margin-left: 15px;
    h4 {
      width: 70%;
    }
    p {
      font-size: 2.5vw;
      width: 63%;
    }

  }
  // Tablet
  @media (max-width: 769px) {
  }
  // Mobile
  @media (max-width: 426px) {
    width: 100%;
    margin-left: 0px;
    h4 {
      font-size: 5vw;
    }
    p {
      font-size: 4vw;
    }
  }
`
