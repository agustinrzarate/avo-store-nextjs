import type { GetStaticProps, NextPage } from 'next'
import Container from '@mui/material/Container'
import Navbar from 'src/components/Navbar'
import Head from 'next/head'
import ProductList, { IProduct } from 'src/components/ProductList'
import HeadTitle from 'src/components/HeadTitle'
import Footer from 'src/components/Footer'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://avo-store-nextjs.vercel.app/api/avo')
  const { data: productList } = await response.json()

  return {
    props: {
      productList
    }
  }
}

interface IProps {
  children: JSX.Element[] | JSX.Element;
  productList: Array<IProduct>;
}

const Home: NextPage<IProps> = (props) => {
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
