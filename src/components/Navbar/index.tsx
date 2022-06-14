import { AppBar, Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/icons/happy-avocado.svg'
import ShoppingCart from '../SVGicons/ShoppingCart'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from 'src/context/DataProvider'

export default function Navbar () {
  const { shoppingCart } = useContext<any>(DataContext)
  const [styles, setStyles] = useState<any>({
    fontSize: '12px'
  })
  useEffect(() => {
    setStyles({
      ...styles,
      transform: 'scale(1.3)'
    })
    const timer = setTimeout(() => {
      setStyles({ fontSize: '12px' })
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [shoppingCart])

  return (
    <>
      <AppBar color="inherit" position="sticky" sx={stylesNavbar.appBar}>
        <Container maxWidth="md" sx={stylesNavbar.container}>
          <Link href="/">
            <a style={{ textDecoration: 'none' }}>
              <Box alignItems="center" sx={stylesNavbar.boxHome}>
                <Image src={Logo} height={40} width={42} />
                <Typography
                  color="secondary"
                  sx={{ fontSize: 18, ml: 1, fontWeight: 700 }}
                >
                  Avo store
                </Typography>
              </Box>
            </a>
          </Link>
          <Link href="/cart">
            <a style={{ textDecoration: 'none' }}>
              <Box alignItems="center" sx={stylesNavbar.cart}>
                <ShoppingCart />
                <Box
                  sx={{
                    ...styles,
                    transition: 'ease .3s',
                    background: '#019267',
                    color: '#ffffff',
                    width: 20,
                    textAlign: 'center',
                    borderRadius: 100,
                    position: 'relative',
                    right: 15,
                    bottom: 8,
                    m: 0,
                    padding: 0
                  }}
                >
                  {shoppingCart.total}
                </Box>
              </Box>
            </a>
          </Link>
        </Container>
      </AppBar>
      <style jsx>{`
        div {
          animation-name: example;
          animation-duration: 4s;
        }
        @keyframes example {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}

const stylesNavbar = {
  appBar: {
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 15px 10px -15px #66666645'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boxHome: {
    display: 'flex',
    transition: '.3s ease',
    width: 130,
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  cart: {
    display: 'flex',
    transition: '.3s ease',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}
