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
        <h3 style={{ color: '#3D3D3D', margin: '0px 0px', fontSize: '30px', fontWeight: 400, marginLeft: 50}}>Em busca do seu par...</h3>
      </div>

      <RowGrid>
        <Link href="/variascervejas">Claro</Link>
          <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
          <Link href="/TeorAte">Escuro</Link>
      </RowGrid>
    </Container>
  )
}

export default ClaroOuEscuro;