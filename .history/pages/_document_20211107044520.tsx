import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
            <style 
                id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

            <link 
                href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' 
                rel='stylesheet' 
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}