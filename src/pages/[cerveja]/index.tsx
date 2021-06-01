import { Router ,useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useContext, useEffect, useRef } from 'react';
import Botao from '../../components/Botao/Botao';
import VariasCervejas from '../../components/VariasCervejas';
import { Cervejas } from '../../data/mock';
import { CervejariaContainer, CervejariaInfo, Toasty } from '../../styles/pages/Cerveja';
import { Container } from '../../styles/pages/Home';

import SleepAngel from '../../assets/svgs/sleepangel.svg'
import { NotifyContext } from '../../contexts/notify';

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
      <> 
      <Toasty ref={toasty}>Você deu 3 matchs, mas não se preocupe! A proa não é ciumenta</Toasty>
        <VariasCervejas />
      </>
        ) : (
        Cervejas
      .filter((e:any)=> e.titulo === cerveja )
      .map((e:any)=> (
        <>
        <CervejariaContainer>
          <img src={e.img} />
          <Toasty ref={toasty}> {e.toast} </Toasty>
          <CervejariaInfo>
            <h1>{e.titulo}</h1>
            <p>{e.descricao}</p>
            <Link href="/">Marcar Encontro</Link>
          </CervejariaInfo>
        </CervejariaContainer>
      <div id="angelBG" style={{ position: 'fixed', top: '40%', right: '20%' }}>
        <SleepAngel />
      </div>
      </>
      )) 
      )
      }
    </Container>
  )
}

export default CervejaPage;