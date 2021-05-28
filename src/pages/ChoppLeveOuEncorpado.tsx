import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

const ChoppLeveOuEncorpado: React.FC = () => {
  return (
    <Container>
      <h1>Chopp Leve ou Encorpado?</h1>
      <Link href="/Baiana">Leve</Link>
      <Link href="/CNTP">Encorpado</Link>
    </Container>
  )
}

export default ChoppLeveOuEncorpado;