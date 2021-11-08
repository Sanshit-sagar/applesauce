import '../style.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
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
    <Component {...pageProps} />
}

export default MyApp