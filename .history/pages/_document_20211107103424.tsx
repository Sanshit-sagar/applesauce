import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
            <style 
                id="stitches" 
                dangerouslySetInnerHTML={{ __html: getCssText() }} 
            />

            <link 
                href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" 
                rel="stylesheet"
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