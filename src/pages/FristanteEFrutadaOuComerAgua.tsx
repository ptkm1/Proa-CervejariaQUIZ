import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

// import { Container } from './styles';

const FrisanteEFrutadaOuComerAgua: React.FC = () => {
  return (
    <Container>
      <h1>Levinha Ou Moderada?</h1>
      <Link href="/Sour">Frisante e Frutada</Link>
      <Link href="/Baiana">Comer Água</Link>
    </Container>
  )
}

export default FrisanteEFrutadaOuComerAgua;