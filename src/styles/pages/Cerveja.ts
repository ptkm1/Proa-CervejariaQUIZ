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
    width: 33.33%;
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

`;

export const CervejariaInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  h1 {
    font-size: 2em;
    margin-bottom: 30px;
    color: #E9428C;
  }

  p {
    font-size: 1.5em;
    color: #3D3D3D;
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