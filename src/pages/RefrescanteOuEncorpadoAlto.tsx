import Link from 'next/link';
import React from 'react';
import { Container, Header, RowGrid, TitlePart } from '../styles/pages/Home';
import AngelBeer from '../assets/svgs/nossoscupidos.svg'

const RefrescanteOuEncorpado: React.FC = () => {
  return (
    <Container>
      <TitlePart>
        <h1 id="titulo"></h1>
      </TitlePart>
      <Header style={{ position: 'fixed', top: '50px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="workingcupid">
        <AngelBeer />
        <h3 style={{ color: '#3D3D3D', margin: '0px 0px', fontWeight: 400, marginLeft: 50}}>Nossos cupidos estão trabalhando...</h3>
      </Header>

      <RowGrid>
      <Link href="/Acapulco">Refrescante</Link>
          <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
          <Link href="/ClaroOuEscuro">Encorpado</Link>
      </RowGrid>
    </Container>
  )
}

export default RefrescanteOuEncorpado;