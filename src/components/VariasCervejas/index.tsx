import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { CervejasMock2 } from '../../data/mockVariasCervejas'
import { CervejariaContainer, CervejariaInfo, Paragraph, Toasty } from '../../styles/pages/Cerveja'
import { MobileAngel } from '../../styles/pages/Home'
import AngelSleep from '../../assets/svgs/sleepangel.svg'
import { FaArrowDown } from 'react-icons/fa'

import { Container, Cervejas, RefazendoBloco, RefazendoBloco2, VariasCervejasimg, Column, Row, ScrollDown } from './Styles'


const VariasCervejas: React.FC = () => {

  return (
    <Container>
      {/* <Cervejas>
        {
          CervejasMock2.map((e: any) => (
            <>
          <Link href={`${e.url}`} >
          <RefazendoBloco key={e.title}>
              <img src={e.img} />
              <h3>{e.titulo}</h3>
            </RefazendoBloco>
            </Link>
            </>
        ))
        }
      </Cervejas> */}
      
      <Cervejas>
        <Column>
        <VariasCervejasimg  src="https://firebasestorage.googleapis.com/v0/b/landingpage-c01cd.appspot.com/o/Cervejas%2F3%20matchs.png?alt=media&token=0380dc87-49b1-43b5-9a88-76479e43eebc" />
        <Row>
        {
          CervejasMock2.map((e: any) => (
            <>
          <RefazendoBloco2 key={e.title}>
              <h3>{e.titulo}</h3>
              <Paragraph style={{ overflow: 'visible' }}>{e.descricao}</Paragraph>
              <Paragraph style={{ marginTop: 10 }}>{e.details}</Paragraph>
              <Row>
                <a style={{ background: '#64358C', width: 'max-content', height: 'max-content', padding: '15px', marginLeft: '0'}} href={`https://api.whatsapp.com/send?phone=557196805838&text=Marcar encontro com a Proa ${e.titulo}.`}>Marcar Encontro</a>
              </Row>
            </RefazendoBloco2>
            </>
        ))
        }
        </Row>
        </Column>
        <ScrollDown>
          <FaArrowDown size="17px" />
        </ScrollDown>
      </Cervejas>

    </Container>
  )
}

export default VariasCervejas
