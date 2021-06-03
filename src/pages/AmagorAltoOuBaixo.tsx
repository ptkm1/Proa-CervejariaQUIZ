import Link from 'next/link';
import React from 'react';
import { Container, RowGrid, TitlePart } from '../styles/pages/Home';
import AngelBeer from '../assets/svgs/nossoscupidos.svg'

const AmagorAlto: React.FC = () => {
  return (
    <Container>
      <TitlePart>
        <h1 id="titulo"></h1>
      </TitlePart>
      <div style={{ position: 'fixed', top: '50px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="workingcupid">
        <AngelBeer />
        <h3 style={{ color: '#3D3D3D', margin: '0px 0px', fontSize: '30px', fontWeight: 400, marginLeft: 50}}>Nossos cupidos estão trabalhando...</h3>
      </div>

      <RowGrid>
        <a style={{ background: '#64358C'}} href="/RefrescanteOuEncorpadoAlto">Alto</a>
          <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
        <a style={{ background: '#E9428C'}} href="/RefrescanteOuEncorpadoBaixo">Baixo</a>
      </RowGrid>
    </Container>
  )
}

export default AmagorAlto;