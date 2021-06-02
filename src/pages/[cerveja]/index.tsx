import { Router ,useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useContext, useEffect, useRef } from 'react';
import Botao from '../../components/Botao/Botao';
import VariasCervejas from '../../components/VariasCervejas';
import { Cervejas } from '../../data/mock';
import { CervejariaContainer, CervejariaInfo, Toasty } from '../../styles/pages/Cerveja';
import { Container, MobileAngel } from '../../styles/pages/Home';

import SleepAngel from '../../assets/svgs/sleepangel.svg'
import { NotifyContext } from '../../contexts/notify';
import ToastComponent from '../../components/Toasty';

const CervejaPage: React.FC = () => {

  const { query: { cerveja } } = useRouter()
  const Router = useRouter()

  const toasty = useRef<HTMLDivElement>()


  // useEffect(()=>{ 
  //   if(toasty){
  //     setTimeout(()=>{
  //       toasty.current.style.transition = '3s'
  //       toasty.current.style.opacity = '0'
  //     },7000)
  //   }
    
  //  },[])


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
      {/* <ToastComponent ref={toasty}>Você deu 3 matchs, mas não se preocupe! A proa não é ciumenta</ToastComponent> */}
        <VariasCervejas />
      </>
        ) : (
        Cervejas
      .filter((e:any)=> e.titulo === cerveja )
      .map((e:any)=> (
        <>
        <CervejariaContainer>
          <img src={e.img} />
          {/* <Toasty ref={toasty}> {e.toast} </Toasty> */}
          <ToastComponent>
            {e.toast}
          </ToastComponent>
          <CervejariaInfo>
            <h1>{e.cerveja}</h1>
            <p>{e.descricao}</p>
            <p>{e.abv}</p>
            <Link href={`https://api.whatsapp.com/send?phone=557196805838&text=Marcar encontro com a Proa ${e.cerveja}.`}>Marcar Encontro</Link>
          </CervejariaInfo>
        </CervejariaContainer>
      <MobileAngel id="angelBG">
        <SleepAngel />
      </MobileAngel>
      </>
      )) 
      )
      }
    </Container>
  )
}

export default CervejaPage;