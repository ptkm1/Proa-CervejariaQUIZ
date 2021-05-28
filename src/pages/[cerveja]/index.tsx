import { Router ,useRouter } from 'next/dist/client/router';
import { getQueryParser } from 'next/dist/next-server/server/api-utils';
import Link from 'next/link';
import React from 'react';
import Botao from '../../components/Botao/Botao';
import VariasCervejas from '../../components/VariasCervejas';
import { Cervejas } from '../../data/mock';
import { CervejariaContainer, CervejariaInfo } from '../../styles/pages/Cerveja';

const CervejaPage: React.FC = () => {

  const { query: { cerveja } } = useRouter()
  const Router = useRouter()

  return (
    <div>
      <Botao 
      onClick={ ()=> Router.back() } 
      style={{ position: 'absolute', left: 15 }}
      >Voltar</Botao>
      { 
      cerveja === 'variascervejas' ? (
        <VariasCervejas />
        ) : (
        Cervejas
      .filter((e:any)=> e.titulo === cerveja )
      .map((e:any)=> (
        <CervejariaContainer>
          <img src={e.img} />
          <CervejariaInfo>
            <h1>{e.titulo}</h1>
            <p>{e.descricao}</p>
            <Botao>Experimente!</Botao>
          </CervejariaInfo>
        </CervejariaContainer>
      )) 
      )
      
      
      }
    </div>
  )
}

export default CervejaPage;