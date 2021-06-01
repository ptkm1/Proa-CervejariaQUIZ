import { Router ,useRouter } from 'next/dist/client/router';
import { getQueryParser } from 'next/dist/next-server/server/api-utils';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Botao from '../../components/Botao/Botao';
import VariasCervejas from '../../components/VariasCervejas';
import { Cervejas } from '../../data/mock';
import { CervejariaContainer, CervejariaInfo, Toasty } from '../../styles/pages/Cerveja';
import { Container } from '../../styles/pages/Home';

import SleepAngel from '../../assets/svgs/sleepangel.svg'

const CervejaPage: React.FC = () => {

  const { query: { cerveja } } = useRouter()
  const Router = useRouter()

  const toasty = useRef<HTMLDivElement>()

  useEffect(()=>{ 
    setTimeout(()=>{
      toasty.current.style.transition = '3s'
      toasty.current.style.opacity = '0'
    },5000)
   },[])


  return (
    <Container>
      {/* <Botao 
      onClick={ ()=> Router.back() } 
      style={{ position: 'absolute', left: 15 }}
      >Voltar</Botao> */}
      { 
      cerveja === 'variascervejas' ? (
        <VariasCervejas />
        ) : (
        Cervejas
      .filter((e:any)=> e.titulo === cerveja )
      .map((e:any)=> (
        <CervejariaContainer>
          <img src={e.img} />
          <Toasty ref={toasty}>
            {e.toast}
          </Toasty>
          <CervejariaInfo>
            <h1>{e.titulo}</h1>
            <p>{e.descricao}</p>
            <Link href="/">Marcar Encontro</Link>
          </CervejariaInfo>
        </CervejariaContainer>
      )) 
      )
      }
      <div style={{ position: 'fixed', top: '40%', right: '20%' }}>
        <SleepAngel />
      </div>
    </Container>
  )
}

export default CervejaPage;