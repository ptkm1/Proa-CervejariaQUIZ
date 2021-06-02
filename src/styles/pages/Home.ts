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

  a{
    width: 350px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;
    font-size: 22px;
    color: white;
    background-color: ${prop => prop.theme.colors.primary};
    margin: 5px;

    .rosa {
      background-color: #B9348B;
    }

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
  
`

export const TitlePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
  
  h1 {
    font-size: 1em;
  }
`

export const RowGrid = styled.div`
  display: flex;
  align-items: center;
  margin-top: -300px;

  @media (max-width:826px) {
    flex-direction: column;
  }
`

export const Footer = styled.div`
position: absolute;
z-index: 9999; 

`

export const ImgResponsive = styled.img`
width: 50%;
`