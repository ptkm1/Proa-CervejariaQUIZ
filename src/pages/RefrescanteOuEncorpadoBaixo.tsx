import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

const RefrescanteOuEncorpado: React.FC = () => {
  return (
    <Container>
      <h1>Refrescante Ou Encorpado?</h1>
      <Link href="/Vienna">Dulçor</Link>
      <Link href="/FrutadoCondimentado">Frutado / Condimentado</Link>
    </Container>
  )
}

export default RefrescanteOuEncorpado;