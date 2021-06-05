import styled from 'styled-components';
import Sea from '../../assets/background.png'

interface Props {
  background?: string
}

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: grid;
`;

export const Header = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  // Laptop
  @media (max-width: 1025px) {
    svg {
      width: 20vw;
    }
  }
  // Tablet
  @media (max-width: 769px) {

  }
  // Mobile
  @media (max-width: 426px) {
    
  }
`

export const Header2 = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 15%;

  svg {
      width: 10vw;
    }

    h3 {
      font-size: 3vw;
    }

  // Laptop
  @media (max-width: 1025px) {
    h3 {
      font-size: 30vw;
    }
    padding: 0 15px;
  }

  // Tablet
  @media (max-width: 769px) {
    
  }

  // Mobile
  @media (max-width: 426px) {
    h3 { 
    margin-top: -20px; 
    }
    svg {
      width: 18vw;
      top: 10px;
      left: 40%;
    }
  }
`

export const HeaderText = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-size: 2.5vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
  }
  h3 {
      font-size: 2.5vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
    }

    

  // Laptop
  @media (max-width: 1025px) {
    h4 { 
      font-size: 3vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
    }
    h3 {
      font-size: 3vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
    }
  }
  // Tablet
  @media (max-width: 769px) {

  }
  // Mobile
  @media (max-width: 426px) {

    h4 {
      font-size: 4vw;
      white-space: wrap;
      overflow: visible;
      text-overflow: clip;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
      position: absolute;
      right: 5%;
      top: 5%;
    }

    h3 {
      font-size: 4vw;
      white-space: wrap;
      overflow: visible;
      text-overflow: clip;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
      position: absolute;
      right: 20%;
      top: 5%;
    }
  }
  
`

export const HeaderTextIndex = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-size: 2.5vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
  }
  h3 {
      font-size: 2.5vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
    }

    

  // Laptop
  @media (max-width: 1025px) {
    h4 { 
      font-size: 3vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
    }
    h3 {
      font-size: 3vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
    }
  }
  // Tablet
  @media (max-width: 769px) {

  }
  // Mobile
  @media (max-width: 426px) {

    h4 {
      font-size: 4vw;
      white-space: wrap;
      overflow: visible;
      text-overflow: clip;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;

    }

    h3 {
      font-size: 4vw;
      white-space: wrap;
      overflow: visible;
      text-overflow: clip;
      font-family: 'Overpass Mono', monospace;
      white-space: 1px;
      letter-spacing: 0px;
    }
  }
  
`

export const HeaderSvgs = styled.div<Props>`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  

  svg {
    animation-name: cupidMoove;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    position: absolute;
    width: 20vw;

    @keyframes cupidMoove {
      0%   {margin-top: 10px;}
      25%  {margin-bottom: 0px;}
      50%  {margin-top: 10px;}
      75%  {margin-top: 0px;}
      100% {margin-top: 10px;}
    }
  }
`


export const Middle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  h6 { 
    margin: 5%;
    color: #3D3D3D;
    text-overflow: ellipsis;
    font-family: 'Overpass Mono', monospace;
    white-space: 1px;
    letter-spacing: 0px;
  }

  @media (max-width: 426px) {
    flex-direction: column;
  }

`

export const MiddleButton = styled.a<Props>`
  width: max-content;
  height: 70px;
  padding: 0 5%;
  text-decoration: none;
  background: ${ prop => prop.background || "#64358C" };
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  font-size: 2vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Overpass Mono', monospace;
  white-space: 1px;
  letter-spacing: 0px;

  @media (max-width: 769px) {
    font-size: 2vw;
    max-width: 300px;

    white-space: wrap;
    overflow: visible;
    text-overflow: clip;
    white-space: 1px;
    letter-spacing: 0px;
  }

  @media (max-width: 426px) {
    font-size: 4vw;
    max-width: 300px;

    white-space: wrap;
    overflow: visible;
    text-overflow: clip;
    white-space: 1px;
    letter-spacing: 0px;
  }
  
`

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Sea});
  background-size: 100% 100%;
  background-position: bottom;

  @media (max-width: 1025px) {
    background-size: 100% 80%;
    background-repeat: no-repeat;
  }

  @media (max-width: 426px) {
    background-size: 200% 80%;
    background-repeat: no-repeat;
  }

  @media (max-height: 814px) {
    background-size: 200% 100%;
  }
`

export const FooterItems = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 60% 40%;
  align-items: flex-end;
  padding-bottom: 20px;
    #barquinho {
      width: 15vw;
      height: 100%;
    }

    #logo {
      width: 300px;
    }
  
  // Laptop
  @media (max-width: 1025px) {
    #logo { 
      width: 25vw;
    }
    #barquinho {
      width: 25vw;
      height: 100%;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 769px) {
    #logo { 
      width: 36vw;
    }
  }

  @media (max-width: 426px) {
    #barquinho { 
      width: 35vw;
    }
  }

  @media (max-height: 769px) {
    padding-bottom: 30px;
  }

`