import Link from 'next/link';
import React from 'react';
import { Container, RowGrid, TitlePart } from '../styles/pages/Home';
import AngelBeer from '../assets/svgs/nossoscupidos.svg'

const TeorAte: React.FC = () => {
  return (
    <Container>
      {/* <TitlePart>
        <h1 id="titulo">Teor alcóolico</h1>
      </TitlePart> */}
      <div style={{ position: 'fixed', top: '10%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} id="workingcupid">
        <AngelBeer />
        <h3 style={{ color: '#3D3D3D', margin: '0px 0px', fontSize: '30px', fontWeight: 400, marginLeft: 50}}>Nossos cupidos estão trabalhando...</h3>
      </div>
      <TitlePart>
        <h5 style={{ color: '#3D3D3D', margin: '0px -20%', fontSize: '30px', fontWeight: 400, marginLeft: 50}}></h5>
      </TitlePart>

      <RowGrid>
      <Link href="/Mallampati">Teor alcoólico até 4,4%</Link>
          <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
          <Link href="/FrutadoOuPrado">Teor alcoólico acima de 7%</Link>
      </RowGrid>
    </Container>
  )
}

export default TeorAte;