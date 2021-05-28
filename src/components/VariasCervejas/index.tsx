import React from 'react'
import { CervejasMock2 } from '../../data/mockVariasCervejas'
import { CervejariaContainer, CervejariaInfo } from '../../styles/pages/Cerveja'
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
            <CervejariaInfo style={{ marginLeft: 0 }}>
              <h1 style={{ marginLeft: 0 }}>{e.titulo}</h1>
              <p style={{ marginLeft: 0 }}>{e.descricao}</p>
              <Botao>Experimente!</Botao>
            </CervejariaInfo>
            </CervejaBloco>
        ))
        }
      </Cervejas>
    </Container>
  )
}

export default VariasCervejas
