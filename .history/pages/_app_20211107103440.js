import '../style.css'
import Head from 'next/head'
import { getCssText } from '../stitches.config'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp