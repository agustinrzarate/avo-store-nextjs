import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Divider
} from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import TableDetail from 'src/components/TableDetail'
import React, { useState, useContext } from 'react'
import { DataContext } from './../../context/DataProvider'
interface ICart {
  attributes: any;
  id: string;
  image: string;
  name: string;
  price: number;
  sku: string;
  quantity?: number;
}

export async function getStaticPaths () {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data } = await response.json()
  const paths = data.map(({ id }: any) => ({ params: { id } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }: any) {
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  )
  const product = await response.json()
  return { props: { product } }
}

export default function AvoDetail ({ product }: any) {
  const {
    attributes: { shape, hardiness, taste }
  } = product
  const datatable = { shape, hardiness, taste }
  const [value, setValue] = useState<number>(0)
  const { shoppingCart, setShoppingCart } = useContext<any>(DataContext)
  const { cart, total } = shoppingCart

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    value > -1 && setValue(value)
  }

  const existAvocado = () => {
    const test = cart.some((elem: ICart) => elem.sku === product.sku)
    return test
  }

  const findProduct = () => {
    const newCart = cart.map(
      ({ attributes, id, image, name, price, sku, quantity = 0 }: ICart) => {
        if (sku === product.sku) {
          return {
            attributes,
            id,
            image,
            name,
            price,
            sku,
            quantity: quantity + value
          }
        }
        return {
          attributes,
          id,
          image,
          name,
          price,
          sku,
          quantity
        }
      }
    )
    return newCart
  }

  const addAvocado = () => {
    const avo = {
      ...product,
      quantity: value
    }

    if (!existAvocado()) {
      setShoppingCart({
        total: total + value,
        cart: [...cart, avo]
      })
    } else {
      setShoppingCart({
        total: total + value,
        cart: findProduct()
      })
    }
    setValue(0)
  }

  return (
    <>
      <Head>
        <title>Avo Store - Avocado detail</title>
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
          <Image src={product?.image} height={300} width={300} />
          <Box>
            <Typography
              color="#000000"
              sx={{ fontSize: 24, fontWeight: 500, mb: 1 }}
            >
              {product.name}
            </Typography>
            <Typography mt={1}>$ {product?.price}</Typography>
            <Typography
              fontSize={10}
              sx={{
                background: '#f2f2f2',
                borderRadius: 1,
                p: 0.5,
                width: 100
              }}
            >
              SKU: {product.sku}
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <TextField
                value={value}
                type="number"
                autoComplete="off"
                onChange={handleChange}
                sx={{ height: 55, mr: 2, width: 100 }}
              />
              <Button
                disabled={!(value > 0) }
                onClick={addAvocado}
                color="secondary"
                variant="contained"
                startIcon={<AddShoppingCartRoundedIcon />}
                sx={{
                  height: 55,
                  ml: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography sx={{
                  fontSize: 12,
                  '@media (max-width: 900px)': {
                    display: 'none'
                  }
                }}>Add to cart</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 20, fontWeight: 500, mb: 1 }}>
            About this avocado
          </Typography>
          <Typography>{product.attributes?.description}</Typography>
          <Divider sx={{ marginTop: 5 }} />
        </Box>
        <Box mt={5}>
          <TableDetail attributes={datatable} />
        </Box>
      </Container>
      <Footer />
    </>
  )
}
