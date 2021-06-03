import styled from 'styled-components'

import bg from '../../assets/background.png'



export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #titulo {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: -10%;
    font-weight: 400;
  }

  #Logo {
    position: absolute;
    bottom: 35%;
    left: 50%;
    z-index: 9999999;
    svg { 
      width: 100px;
    }
  }

  #workingcupid {
    svg { 
      width: 100px;
    }
    }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
  #rosabg {
      background-color: #B9348B;
    }

  a{
    width: 350px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;
    font-size: 22px;
    color: white;
    margin: 5px;

    

    :hover {
      filter: brightness(0.8);
    }

    @media (max-width:826px) {
    width: 90%;
    height: 60px;
    }
  }

  background: url(${bg});
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: center bottom;

  @media (max-width:826px) {
    background-size: 100% 20%;
  }
  
`

export const TitlePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  margin-bottom: -50px;
  
  #rosa {
        color: #E9428C;
        margin-bottom: 45px;
      }
      h1 { font-size: 35px; color: gray; 
    }
  
  @media (max-width: 768px) {
    h1 { font-size: 1rem; color: gray;  text-align: center; }
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  h3 {
    font-size: 30px;
    color: #3D3D3D; 
    margin: 0px 0px;
    font-weight: 400; 
    margin-left: 50;
  }

  @media (max-width: 726px) {
    padding: 15px;
    h3 { 
      font-size: 21px;
      text-align: justify;
      width: 50%;

    }
  }
  
`

export const RowGrid = styled.div`
  display: flex;
  align-items: center;
  margin-top: -300px;

  

  @media (max-width:826px) {
    flex-direction: column;
    margin-top: 50px;
  }
`

export const Footer = styled.div`
position: absolute;
z-index: 9999; 

`

export const MobileAngel = styled.div`
  position: fixed;
  top: 240px;
  right: 20%;

  @media (max-width: 768px) {
      right: 80px;
      top: 90px;
    svg { 
      width: 60px;
    }
  }
`;