import React from 'react';
import { Container } from './Styles';

const Botao = ({children, title, ...rest}: any) => {
  return (
    <Container { ...rest }>
      {children} {title}
    </Container>
  )
}

export default Botao;