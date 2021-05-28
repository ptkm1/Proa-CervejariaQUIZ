import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

const ClaroOuEscuro: React.FC = () => {
  return (
    <Container>
      <h1>Claro Ou Escuro?</h1>
      <Link href="/variascervejas">Claro</Link>
      <Link href="/TeorAte">Escuro</Link>
    </Container>
  )
}

export default ClaroOuEscuro;