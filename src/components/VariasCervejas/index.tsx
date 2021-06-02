import { time } from 'console'
import Link from 'next/link'
import React, { useContext, useEffect, useRef } from 'react'
import { NotifyContext } from '../../contexts/notify'
import { CervejasMock2 } from '../../data/mockVariasCervejas'
import { CervejariaContainer, CervejariaInfo, Toasty } from '../../styles/pages/Cerveja'
import Botao from '../Botao/Botao'
import { Container, Cervejas, CervejaBloco } from './Styles'


const VariasCervejas: React.FC = () => {

  return (
    <Container>
      <Cervejas>
        {
        CervejasMock2.map((e: any) => (

          <CervejaBloco>
            <img style={{ width: '350px' }} src={e.img} />
            <CervejariaInfo style={{ marginLeft: 50 }}>
              <h3 style={{ marginLeft: 0, color: '#E9428C' }}>{e.titulo}</h3>
              <p style={{ marginLeft: 0, color: '#3D3D3D' }}>{e.descricao}</p>
              <p style={{ marginLeft: 0, color: '#3D3D3D' }}>{e.details}</p>
              <Link style={{ fontSize: 30 }} href="/">Marque um encontro</Link>
            </CervejariaInfo>
            </CervejaBloco>
        ))
        }
      </Cervejas>
    </Container>
  )
}

export default VariasCervejas
