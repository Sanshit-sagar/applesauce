// import '../styles/globals.css'
import { getCssText } from '../stitches.config'
import Head from 'next/head' 
import Tiptap from '../components/Tiptap'

import './index.module.css'

const Home = () => {

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
        
            <Tiptap />
        </>
    );
}

export default Home