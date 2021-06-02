import styled from 'styled-components';

export const MobileAngel = styled.div`
  position: fixed;
  top: 40%;
  right: 20%;

  @media (max-width: 768px) {
    svg { 
    width: 90px;
  }
  }
`;
