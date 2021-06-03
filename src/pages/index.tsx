import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container, Header, RowGrid, TitlePart } from '../styles/pages/Home'

import Angel1 from '../assets/svgs/angel1.svg'
import Angel2 from '../assets/svgs/angel2.svg'
import Logo from '../assets/logo.png'
import Barco from '../assets/barco.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>PROA-QUIZ</title>
      </Head>
      <Header>

          <Angel1  />

      <TitlePart>
        <h1>Descubra qual Proa é seu </h1>
        <h1 id="rosa">Par Perfeito</h1>
      </TitlePart>

        <Angel2 />

      </Header>

      <RowGrid style={{ marginTop: '-10%' }}>
            <a style={{ background: '#64358C'}} href="/TradicionalOuArtesanal">Cerveja</a>
              <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
            <a style={{ background: '#E9428C'}} href="/SOUR">Espumante</a>
      </RowGrid>
    </Container>
  )
}

export default Home
