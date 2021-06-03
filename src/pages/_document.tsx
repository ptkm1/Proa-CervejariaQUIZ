import React, { useEffect, useRef } from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Logo from '../assets/logo.png'
import Barco from '../assets/barco.png'
import { Footer } from '../styles/pages/Home'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />

          <link rel="icon" href="https://rocketseat.com.br/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div
            style={{
              position: 'absolute',
              top: '75vh',
              display: 'flex',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <Footer id="responsive">
              <img id="reduce1" src={Logo} alt="" />
            </Footer>
            <Footer id="responsive">
              <img id="reduce" src={Barco} alt="" />
            </Footer>
          </div>
        </body>
      </Html>
    )
  }
}
