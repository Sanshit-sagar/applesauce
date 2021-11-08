import dynamic from 'next/dynamic'

const DynamicTiptap = dynamic(() => import('../components/Tiptap'))
// import Tiptap from '../components/Tiptap'

const Home = () => {

    return () <DynamicTiptap />
}

export default Home