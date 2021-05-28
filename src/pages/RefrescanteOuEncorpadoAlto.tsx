import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

const RefrescanteOuEncorpado: React.FC = () => {
  return (
    <Container>
      <h1>Refrescante Ou Encorpado?</h1>
      <Link href="/Acapulco">Refrescante</Link>
      <Link href="/ClaroOuEscuro">Encorpado</Link>
    </Container>
  )
}

export default RefrescanteOuEncorpado;