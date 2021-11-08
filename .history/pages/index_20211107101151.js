import dynamic from 'next/dynamic'

const DynamicTiptap = dynamic(() => import('../components/Tiptap'))
// import Tiptap from '../components/Tiptap'

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
        
            <DynamicTiptap />
}

export default Home