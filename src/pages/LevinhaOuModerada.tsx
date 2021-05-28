import Link from 'next/link';
import React from 'react';
import { Container } from '../styles/pages/Home';


const LevinhaOuModerada: React.FC = () => {
  return (
    <Container>
      <h1>Levinha Ou Moderada?</h1>
      <Link href="/FristanteEFrutadaOuComerAgua">Levinha</Link>
      <Link href="/CNTP">Moderada</Link>
    </Container>
  )
}

export default LevinhaOuModerada;