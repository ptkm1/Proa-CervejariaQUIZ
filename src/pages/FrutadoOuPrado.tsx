import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

const FrutadoOuPrado: React.FC = () => {
  return (
    <Container>
      <h1>Frutado ou Prado?</h1>
      <Link href="/RIS">Frutado</Link>
      <Link href="/BlackIPA">Prado</Link>
    </Container>
  )
}

export default FrutadoOuPrado;