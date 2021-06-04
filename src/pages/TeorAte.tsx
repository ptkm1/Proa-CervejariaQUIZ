import Link from 'next/link';
import React from 'react';
import { Container, Header, RowGrid, TitlePart } from '../styles/pages/Home';
import AngelBeer from '../assets/svgs/nossoscupidos.svg'

const TeorAte: React.FC = () => {
  return (
    <Container>

      <Header  id="workingcupid">
        <AngelBeer />
        <h3 style={{ color: '#3D3D3D', margin: '0px 0px', fontSize: '30px', fontWeight: 400, marginLeft: 50}}>Nossos cupidos estão trabalhando...</h3>
      </Header>
      <TitlePart>
        <h5 style={{ color: '#3D3D3D', margin: '0px -20%', fontSize: '30px', fontWeight: 400, marginLeft: 50}}></h5>
      </TitlePart>

      <RowGrid>
      <a style={{ background: '#64358C'}} href="/Mallampati">Teor alcoólico até 4,4%</a>
          <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
        <a style={{ background: '#E9428C'}} href="/FrutadoOuPrado">Teor alcoólico acima de 7%</a>
      </RowGrid>
    </Container>
  )
}

export default TeorAte;