import dynamic from 'next/dynamic'

const DynamicTiptap = dynamic(() => import('../components/Tiptap'))
// import Tiptap from '../components/Tiptap'

const Home = () => {

    return  <Tiptap />
}

export default Home