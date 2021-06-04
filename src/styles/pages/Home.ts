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
  #rosa {
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

  @media (max-width:640px) {
    background-size: 100% 30%;
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

  svg { 

  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  }


  @keyframes example {
  0%   {margin-top: 0px;}
  25%  {margin-bottom: 20px;}
  50%  {margin-top: 0px;}
  75%  {margin-top: 20px;}
  100% {margin-top: 0px;}
  }
  

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
  @media (max-height: 740px) {
    top: 0;
  }
`

export const RowGrid = styled.div`
  display: flex;
  align-items: center;
  margin-top: -300px;

  

  @media (max-width:826px) {
    margin-top: 50px;
    flex-direction: column;

    a { 
      font-size: 15px;
      width: 140px;
      height: 60px;
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      /* height: max-content; */
    }
  }

  @media (max-height: 740px) {
    margin-top: 50px;
  }
`

export const Footer = styled.div`
position: absolute;
z-index: 9999; 

`

export const MobileAngel = styled.div`
  position: absolute; // change to fixed
  margin-top: -50px; // change to 240px
  right: 20%; // change to 20%
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes example {
  0%   {margin-top: 10px;}
  25%  {margin-bottom: 0px;}
  50%  {margin-top: 10px;}
  75%  {margin-top: 0px;}
  100% {margin-top: 10px;}
  }

  @media (max-width: 768px) {
      right: 70px;
      top: 140px;
    svg { 
      width: 60px;
    }
  }


  @media (max-width: 1401px) {
      right: 150px;
      top: 200px;
    svg { 
      width: 90px;
    }
  }

  @media (max-height: 740px) {
    right: 200px;
  }

  @media (max-width: 640px) {
    right: 20px;
    top: 80px;
  }
`;