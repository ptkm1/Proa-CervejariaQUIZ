import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

const TeorAte: React.FC = () => {
  return (
    <Container>
      <h1>Teor ate</h1>
      <Link href="/Mallampar">4,4%</Link>
      <Link href="/FrutadoOuPrado">7%</Link>
    </Container>
  )
}

export default TeorAte;