import dynamic from 'next/dynamic'
const DynamicTiptap = dynamic(() => import('../components/Tiptap'))

const Home = () =>  <DynamicTiptap />;

export default Home