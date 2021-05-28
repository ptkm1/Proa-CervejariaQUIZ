import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

// import { Container } from './styles';

const FrutadoCondimentado: React.FC = () => {
  return (
    <Container>
      <h1>Alcool a 7% ou Alcool a 4,8%</h1>
      <Link href="/Saidon">7%</Link>
      <Link href="/Veins">4,8%</Link>
    </Container>
  )
}

export default FrutadoCondimentado;