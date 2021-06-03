import Link from 'next/link';
import React from 'react';
import { Container, Header, RowGrid, TitlePart } from '../styles/pages/Home';
import AngelBeer from '../assets/svgs/nossoscupidos1.svg'

const ClaroOuEscuro: React.FC = () => {
  return (
    <Container>
      <TitlePart>
        <h1 id="titulo"></h1>
      </TitlePart>
      <Header  id="workingcupid">
        <AngelBeer />
        <h3 style={{ color: '#E9428C', margin: '0px 0px', fontSize: '30px', fontWeight: 400, marginLeft: 50}}>Em busca do seu par...</h3>
      </Header>

      <RowGrid>
        <a style={{ background: '#64358C'}}  href="/variascervejas">Claro</a>
          <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
        <a style={{ background: '#E9428C'}} href="/TeorAte">Escuro</a>
      </RowGrid>
    </Container>
  )
}

export default ClaroOuEscuro;