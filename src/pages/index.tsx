import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Cerveja ou Espumante?</h1>
      <Link href="/TradicionalOuArtesanal">Cerveja</Link>
      <Link href="/SOUR" >Espumante</Link>
    </Container>
  )
}

export default Home
