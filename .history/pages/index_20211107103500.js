import dynamic from 'next/dynamic'
import Head from 'next/head'
import { getCssText  } from '../stitches.config'
const DynamicTiptap = dynamic(() => import('../components/Tiptap'))
// import Tiptap from '../components/Tiptap'

const Home = () => {
    return <DynamicTiptap />
}

export default Home