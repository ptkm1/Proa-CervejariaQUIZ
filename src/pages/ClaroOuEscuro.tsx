import Link from 'next/link';
import React from 'react';
import { Container, RowGrid, TitlePart } from '../styles/pages/Home';
import AngelBeer from '../assets/svgs/nossoscupidos1.svg'

const ClaroOuEscuro: React.FC = () => {
  return (
    <Container>
      <TitlePart>
        <h1 id="titulo"></h1>
      </TitlePart>
      <div style={{ position: 'fixed', top: '48px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="workingcupid">
        <AngelBeer />
        <h3 style={{ color: '#E9428C', margin: '0px 0px', fontSize: '30px', fontWeight: 400, marginLeft: 50}}>Em busca do seu par...</h3>
      </div>

      <RowGrid>
        <a style={{ background: '#64358C'}}  href="/variascervejas">Claro</a>
          <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
        <a style={{ background: '#E9428C'}} href="/TeorAte">Escuro</a>
      </RowGrid>
    </Container>
  )
}

export default ClaroOuEscuro;