import Link from 'next/link';
import React from 'react';
import Botao from '../components/Botao/Botao';
import { Container } from '../styles/pages/Home';

const Cerveja: React.FC = () => {
  return (
    <Container>
      <h1>Tradicional ou Artesanal?</h1>
      <Link href="/ChoppLeveOuEncorpado">Tradicional</Link>
      <Link href="/AmagorAltoOuBaixo">Artesanal</Link>
    </Container>
  )
}

export default Cerveja;