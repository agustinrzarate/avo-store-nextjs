import type { GetStaticProps } from 'next'
import Container from '@mui/material/Container'
import Navbar from 'src/components/Navbar'
import Head from 'next/head'
import ProductList from 'src/components/ProductList'
import HeadTitle from 'src/components/HeadTitle'
import Footer from 'src/components/Footer'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList } = await response.json()

  return {
    props: {
      productList
    }
  }
}

function Home (props: any): any {
  return (
    <>
      <Head>
        <title>Avo Store - Home</title>
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <HeadTitle />
        <ProductList productList={props.productList} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
