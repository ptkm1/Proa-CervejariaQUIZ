import styled from 'styled-components';

interface Props {
  width?: string
  height?: string
}

export const Container = styled.div<Props>`
  background: ${prop => prop.theme.colors.primary};
  border: none;
  color: white;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: ${ prop => prop.width || "100px" };
  height: ${ prop => prop.width || "50px" };

  :hover {
    filter: brightness(0.8);
  }
`;