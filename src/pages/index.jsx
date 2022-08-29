import GlobalStyle from '../../styles/GlobalStyled'
import Head from 'next/head'
import Container  from "../components/Container/index";

export default function Home() {
  return (
   <>
    <Head>
      <title>Fabricio</title>
      
    </Head>
      <GlobalStyle />
      <Container />
   </>
  )
}
