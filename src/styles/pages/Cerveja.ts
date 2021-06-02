import styled from 'styled-components';

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
    border: solid #B9348B 1px;
    width: 400px;
    height: 400px;
    z-index: 999999;
    box-shadow: 0px 0px 0px 4px #E9428C;
  }

  a{
    width: 250px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;
    font-size: 22px;
    color: white;
    background-color: ${prop => prop.theme.colors.primary};
    margin: 5px;
    margin-top: 40px;
    margin-left: 0px;

    .rosa {
      background-color: #B9348B;
    }

    :hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width:826px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-left: 0px;
    img { 
      width: 200px;
      height: 200px;
      margin-top: -80px;
    }
      padding: 0;
      font-size: 15px;
    }

`;

export const CervejariaInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: 100vw;

  h1 {
    font-size: 1.3em;
    margin-bottom: 30px;
    color: #E9428C;
  }

  p {
    font-size: 0.9em;
    width: 60%;
    letter-spacing: -1px;
    color: #3D3D3D;
  }

  a { 
    width: max-content;
    height: max-content;
    padding: 15px;
  }
`;

export const Toasty = styled.div`
  position: absolute;
  top: 30%;
  right: 15%;
  width: 250px;
  height: max-content;
  padding: 5px;

  background: #B9348B;
`

export const Toasty1 = styled.div`
  position: absolute;
  top: 20%;
  right: 15%;
  width: 250px;
  height: max-content;
  padding: 10px;
  border-radius: 10px;
  z-index: 50;

  background: #B9348B;
`
export const Square = styled.div`
  position: absolute;
  top: 23%;
  right: 25%;
  width: 50px;
  height: 50px;
  transform: rotate(40deg);
  border-radius: 5px;
  background: #B9348B;
  z-index: 49;
`