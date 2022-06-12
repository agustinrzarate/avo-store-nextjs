import { AppBar, Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/icons/happy-avocado.svg';
import ShoppingCart from '../SVGicons/ShoppingCart';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from 'src/context/DataProvider';

export default function Navbar() {
  const { shoppingCart } = useContext<any>(DataContext);

  useEffect(() => {}, [shoppingCart.total]);
  return (
    <>
      <AppBar color="inherit" position="sticky" sx={stylesNavbar.appBar}>
        <Container maxWidth="md" sx={stylesNavbar.container}>
          <Link href="/">
            <a style={{ textDecoration: 'none' }}>
              <Box alignItems="center" sx={stylesNavbar.boxHome}>
                <Image src={Logo} height={40} width={42} />
                <Typography color="secondary" sx={{ fontSize: 18, ml: 1, fontWeight: 700 }}>
                  Avo store
                </Typography>
              </Box>
            </a>
          </Link>
          <Link href="/">
            <a style={{ textDecoration: 'none' }}>
              <Box alignItems="center" sx={stylesNavbar.cart}>
                <ShoppingCart />
                <div>{shoppingCart.total}</div>
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
  );
}

const stylesNavbar = {
  appBar: {
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 15px 10px -15px #66666645',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxHome: {
    display: 'flex',
    transition: '.3s ease',
    width: 130,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  cart: {
    mr: 2,
    display: 'flex',
    transition: '.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
};
