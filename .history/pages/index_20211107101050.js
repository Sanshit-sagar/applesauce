import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Tiptap'))
import Tiptap from '../components/Tiptap'

const Home = () => {

    return  <Tiptap />
}

export default Home