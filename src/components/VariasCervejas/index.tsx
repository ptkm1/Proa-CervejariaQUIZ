import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
// import { ModalContext } from '../../contexts/modal'
import { CervejasMock2 } from '../../data/mockVariasCervejas'
import { CervejariaContainer, CervejariaInfo, Toasty } from '../../styles/pages/Cerveja'
import Modal from '../Modal'

import { Container, Cervejas, RefazendoBloco } from './Styles'


const VariasCervejas: React.FC = () => {

  // const { ShowModal, setShowModal } = useContext(ModalContext)

  return (
    <Container>
      <Cervejas>
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
      </Cervejas>
    </Container>
  )
}

export default VariasCervejas
