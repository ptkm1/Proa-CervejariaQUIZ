import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container, RowGrid, TitlePart } from '../styles/pages/Home'

import Angel1 from '../assets/svgs/angel1.svg'
import Angel2 from '../assets/svgs/angel2.svg'
import Logo from '../assets/logo.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <div style={{ position: 'fixed', top: '10%', left: '20%' }}>
        <Angel1 />
      </div>
      <TitlePart style={{ position: 'fixed', top: '20%', zIndex: 99999 }} >
        <h1 style={{ fontSize: 40 }} id="titulo">Descubra qual Proa é seu </h1>
        <h1 style={{ color: '#E9428C', fontWeight: 'bold', fontSize: '40px' }}>Par Perfeito</h1>
      </TitlePart>

      <div style={{ position: 'fixed', top: '10%', right: '20%', zIndex: 99999 }}>
        <Angel2 />
      </div>

      <RowGrid style={{ marginTop: '-10%' }}>
            <Link href="/TradicionalOuArtesanal">Cerveja</Link>
              <h3 style={{ color: '#E9428C', margin: '0px 30px' }}>OU</h3>
            <Link href="/SOUR">Espumante</Link>
      </RowGrid>
      <div style={{ position: 'absolute', zIndex: 9999, top: '80vh', width: '50px' }}>
        <Logo />
      </div>
    </Container>
  )
}

export default Home
