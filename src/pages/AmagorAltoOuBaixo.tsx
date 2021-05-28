import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';

const AmagorAlto: React.FC = () => {
  return (
    <Container>
      <h1>Amagor Alto ou Baixo?</h1>
      <Link href="/RefrescanteOuEncorpadoAlto">Alto</Link>
      <Link href="/RefrescanteOuEncorpadoBaixo">Baixo</Link>
    </Container>
  )
}

export default AmagorAlto;