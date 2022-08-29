import GlobalStyle from '../../styles/GlobalStyled'
import Head from 'next/head'
import Inicio from '../components/Home'


export default function Home() {
  return (
   <>
    <Head>
      <title>Fabricio</title>
      
    </Head>
      <GlobalStyle />
      <Inicio />
   </>
  )
}
