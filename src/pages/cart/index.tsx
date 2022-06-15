import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
  Typography,
  ButtonGroup,
  Button,
  Divider,
  Alert,
} from "@mui/material";
import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import CartProductList from "src/components/CartProductsList";
import EmptyAlert from "src/components/EmptyAlert";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import { DataContext } from "src/context/DataProvider";

export default function Cart() {
  const { shoppingCart, setShoppingCart } = useContext<any>(DataContext);
  const { cart } = shoppingCart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    totalPrice();
  }, [shoppingCart]);

  const totalPrice = () => {
    let add: number = 0;
    cart.map(({ price, quantity }: any) => {
      add = add + price * quantity;
    });
    const truncate = Math.floor(add * 100) / 100;
    setTotal(truncate);
  };

  return (
    <>
      <Head>
        <title>Avo Store - Cart</title>
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={stylesCartPage.container}>
        {!total? (
          <EmptyAlert />
        ) : (
          <CartProductList
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        )}
        <Card sx={stylesCartPage.card}>
          <Typography fontWeight={700}> Total: {total}</Typography>
          <Button
            disabled={!(total > 0)}
            variant="contained"
            sx={stylesCartPage.buttonShopNow}
          >
            Buy now!
          </Button>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

const stylesCartPage = {
  container: { marginTop: 6, marginBottom: "190px" },
  card: {
    marginTop: 2,
    height: 100,
    display: "flex",
    alignItems: "center",
    pl: 5,
    pr: 2,
    justifyContent: "space-between",
  },
  buttonShopNow: {
    background: "#000000",
    color: "#ffffff",
    height: 55,
    width: 100,
    ml: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
