import Link from 'next/link';
import React from 'react';
import { Container, Header, RowGrid, TitlePart } from '../styles/pages/Home';
import AngelBeer from '../assets/svgs/nossoscupidos.svg'

const ChoppLeveOuEncorpado: React.FC = () => {
  return (
    <Container>
      <TitlePart>
        <h1 id="titulo"></h1>
      </TitlePart>
      <Header  id="workingcupid">
        <AngelBeer />
        <h3 style={{ color: '#3D3D3D', margin: '0px 0px', fontSize: '30px', fontWeight: 400, marginLeft: 50}}>Nossos cupidos estão trabalhando...</h3>
      </Header>

      <RowGrid>
        <a style={{ background: '#64358C'}} href="/Baiana">Leve</a>
          <h3 style={{ color: '#E9428C', margin: '0px 30px', fontWeight: 600 }}>OU</h3>
        <a style={{ background: '#E9428C'}} href="/CNTP">Encorpada</a>
      </RowGrid>
    </Container>
  )
}

export default ChoppLeveOuEncorpado;