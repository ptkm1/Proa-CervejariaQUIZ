import styled from 'styled-components'

export const CervejariaContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  padding: 15em;
  align-items: center;
  margin-top: -250px;
  margin-left: -100px;

  img {
    border: solid #b9348b 1px;
    width: 400px;
    height: 400px;
    z-index: 999999;
    box-shadow: 0px 0px 0px 4px #e9428c;
  }

  a {
    width: 250px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 22px;
    color: white;
    background-color: ${prop => prop.theme.colors.primary};
    margin: 5px;
    margin-top: 40px;
    margin-left: 0px;

    .rosa {
      background-color: #b9348b;
    }

    :hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 826px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-left: 0px;
    img {
      width: 150px;
      height: 150px;
      position: absolute;
      top: 40px;
      left: 15px;
    }
    padding: 0;
    font-size: 15px;
  }
`

export const CervejariaInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: 100vw;

  h1 {
    font-size: 1.3em;
    font-weight: bold;
    margin-top: -60px;
    margin-bottom: -15px;
    color: #e9428c;
  }

  p {
    font-size: 0.9em;
    width: 60%;
    letter-spacing: -1px;
    color: #3d3d3d;
  }
  span { 
    font-size: 0.7em;
    letter-spacing: -1px;
    color: #3d3d3d;
    font-weight: 600;
  }

  a {
    width: max-content;
    height: max-content;
    padding: 15px;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    position: absolute;
    top: 250px;
    p {
      font-size: 10px;
      white-space: normal;
      letter-spacing: -0.3px;
      font-weight: 600;
      text-align: justify;
      line-height: 20px;

      width: 90%;
      margin-left: 10px;
    }
    a {
      font-size: 13px;
      margin-left: 10px;
    }
    h1 {
      margin-top: -25px;
      margin-bottom: -15px;
      margin-left: 10px;
      line-height: 20px;
    }
    span { 
      font-size: 0.7em;
      margin-left: 10px;
      letter-spacing: -1px;
      color: #3d3d3d;
    }
  }
`

export const Toasty = styled.div`
  position: absolute;
  top: 30%;
  right: 15%;
  width: 250px;
  height: max-content;
  padding: 5px;

  background: #b9348b;
`

export const Toasty1 = styled.div`
  position: absolute;
  top: 70px;
  right: 270px;
  width: 250px;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  z-index: 50;
  background: #b9348b;
  font-size: 9px;
  font-size: 100%;

  
  @media (max-width: 826px) {
    width: 100px;
    height: 80px;
    top: 50px;
    right: 40px;
    font-size: 50%;
  }
  @media (max-height: 740px) {
    top: 10px;
    right: 150px;
  }

  @media (max-width: 1401px) {
      right: 30px;
      top: 70px;
    svg { 
      width: 60px;
    }
  }
`
export const Square = styled.div`
  position: absolute;
  top: 120px;
  right: 450px;
  width: 50px;
  height: 50px;
  transform: rotate(40deg);
  border-radius: 5px;
  background: #b9348b;
  z-index: 49;

  @media (max-width: 1401px) {
      right: 170px;
      top: 130px;
    svg { 
      width: 60px;
    }
  }

  @media (max-width: 826px) {
    width: 50px;
    top: 80px;
    right: 75px;
  }
  @media (max-height: 740px) {
    top: 65px;
    right: 300px;
    @media (max-width:826px) {
      right: 200px;
      top: 50px;
      width: 20px;
    }
  }
`

export const Paragraph = styled.div`
  height: 330px;
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`