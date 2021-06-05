import React from 'react';
import { Header, Middle, PageLayout, Footer, FooterItems, HeaderText, HeaderSvgs, MiddleButton, HeaderTextIndex } from '../styles/pages/Layout';
import { 
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
  Button
} from '@material-ui/core'
import Barco from '../assets/barco.png'
import Logo from '../assets/logo.png'
import Cupido1 from '../assets/svgs/angel1.svg'
import Cupido2 from '../assets/svgs/angel2.svg'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme)

const Home: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>    
    <PageLayout>
      <Header>
        <HeaderSvgs>
          <Cupido1 />
        </HeaderSvgs>
        <HeaderTextIndex>
          <Typography variant="h4" style={{ color: '#3D3D3D' }} gutterBottom>Descubra qual Proa</Typography>
          <Typography variant="h3" style={{ color: '#E9428C' }} gutterBottom>É o seu Par Perfeito</Typography>
        </HeaderTextIndex>
        <HeaderSvgs>
          <Cupido2 />
        </HeaderSvgs>
      </Header>
      <Middle>
        <MiddleButton href="/TradicionalOuArtesanal" background="#64358C"> Cerveja </MiddleButton>
          <Typography variant="h6" gutterBottom>OU</Typography>
        <MiddleButton href="/SOUR" background="#B9348B"> Espumante </MiddleButton>
      </Middle>
      <Footer>
        <FooterItems>
          <div style={{ display: 'flex', justifyContent: "flex-end" }} >
            <img src={Logo} id="logo" />
          </div>
          <div style={{ display: 'flex', justifyContent: "flex-end" }}>
            <img src={Barco} id="barquinho" />
          </div>
        </FooterItems>
      </Footer>
    </PageLayout>
    </MuiThemeProvider>
  )
}

export default Home;