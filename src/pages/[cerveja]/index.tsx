import { useRouter } from 'next/dist/client/router'
import React, { useContext, useEffect, useRef } from 'react'
import VariasCervejas from '../../components/VariasCervejas'
import { Cervejas } from '../../data/mock'
import ToastComponent from '../../components/Toasty'
import {
  Bottom,
  BottomItems,
  CervejaLayout,
  ImageAndInformations,
  Informations,
  Top,
  TopContent
} from '../../styles/pages/CervejaLayout'
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
  Button
} from '@material-ui/core'
import Barco from '../../assets/barco.png'
import Logo from '../../assets/logo.png'
import { MiddleButton } from '../../styles/pages/Layout'
import {
  ButtonCerv,
  ContainerVariasCervejas,
  ImgContent,
  Informations as Info
} from '../../components/VariasCervejas/NStyles'
import { CervejasMock2 } from '../../data/mockVariasCervejas'
import { FaArrowDown } from 'react-icons/fa'
import { ScrollDown } from '../../components/VariasCervejas/Styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const CervejaPage: React.FC = () => {
  const {
    query: { cerveja }
  } = useRouter()
  const Router = useRouter()

  return (
    <MuiThemeProvider theme={theme}>
      <CervejaLayout>
        <Top>
          {cerveja === 'variascervejas' ? (
            <>
              <ToastComponent>
                Você deu 3 matchs, mas não se preocupe! A proa não é ciumenta
              </ToastComponent>
              <ContainerVariasCervejas>
                {CervejasMock2.map((e: any) => (
                  <>
                {/* <ImgContent src="https://firebasestorage.googleapis.com/v0/b/landingpage-c01cd.appspot.com/o/Cervejas%2F3%20matchs.png?alt=media&token=0380dc87-49b1-43b5-9a88-76479e43eebc" /> */}
                <ImgContent src={e.img} />
                  <Info>
                    <Typography variant="h4">{e.titulo}</Typography>
                    <Typography variant="body1">{e.descricao}</Typography>
                    <Typography variant="caption">{e.details}</Typography>
                    <a
                    color="primary"
                    style={{background: 'purple', width: '180px', height: '40px', display: "flex", alignItems: "center", justifyContent: "center", cursor: 'pointer'}}
                    onClick={ () => window.location.href = e.link }
                    >Marcar Encontro!</a>
                  </Info>
                  </>
                ))}
                <ScrollDown>

                  <FaArrowDown size="17px" />
                </ScrollDown>
              </ContainerVariasCervejas>
           </>
          ) : (
            Cervejas.filter((e: any) => e.titulo === cerveja).map((e: any) => (
              <TopContent>
                <ToastComponent>{e.toast}</ToastComponent>
                <ImageAndInformations>
                  <img src={e.img} />
                  <Informations>
                    <Typography variant="h4">{e.cerveja}</Typography>
                    <Typography variant="body1">{e.descricao}</Typography>
                    <Typography variant="caption">{e.abv}</Typography>
                    <a href={e.link}>Marcar Encontro!</a>
                  </Informations>
                </ImageAndInformations>
              </TopContent>
            ))
          )}
        </Top>
        <Bottom>
          <BottomItems>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img src={Logo} id="logo" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img src={Barco} id="barquinho" />
            </div>
          </BottomItems>
        </Bottom>
      </CervejaLayout>
    </MuiThemeProvider>
  )
}

export default CervejaPage
