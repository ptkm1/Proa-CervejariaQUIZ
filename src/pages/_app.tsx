import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import NotifyProvider from '../contexts/notify'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <NotifyProvider>
        <Component {...pageProps} />
      </NotifyProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
