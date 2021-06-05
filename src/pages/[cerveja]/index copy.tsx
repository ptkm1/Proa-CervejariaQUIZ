import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useContext, useEffect, useRef } from 'react'
import VariasCervejas from '../../components/VariasCervejas'
import { Cervejas } from '../../data/mock'
import {
  CervejariaContainer,
  CervejariaInfo,
  Paragraph,
  Toasty
} from '../../styles/pages/Cerveja'
import { Container, MobileAngel } from '../../styles/pages/Home'

import SleepAngel from '../../assets/svgs/sleepangel.svg'
import ToastComponent from '../../components/Toasty'

const CervejaPage: React.FC = () => {
  const {
    query: { cerveja }
  } = useRouter()
  const Router = useRouter()

  const toasty = useRef<HTMLDivElement>()

  return (
    <Container>
      {cerveja === 'variascervejas' ? (
        <>
          <ToastComponent>Você deu 3 matchs, mas não se preocupe! A proa não é ciumenta</ToastComponent>
          <VariasCervejas />
        </>
      ) : (
        Cervejas.filter((e: any) => e.titulo === cerveja).map((e: any) => (
          <>
            <CervejariaContainer>
              <img src={e.img} />
              <ToastComponent>{e.toast}</ToastComponent>
              <CervejariaInfo>
                <h1>{e.cerveja}</h1>
                <Paragraph>
                  <p>{e.descricao}</p>
                  <span>{e.abv}</span>
                <Link
                  href={`https://api.whatsapp.com/send?phone=557196805838&text=Marcar encontro com a Proa ${e.cerveja}.`}
                >
                  Marcar Encontro
                </Link>
                </Paragraph>
              </CervejariaInfo>
            </CervejariaContainer>
          </>
        ))
      )}
    </Container>
  )
}

export default CervejaPage
