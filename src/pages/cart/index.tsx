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
    cart.map(({ price, quantity }: any) => {
      const addPrice = price * quantity;
      setTotal(total + addPrice);
    });
  };

  const changeQuantity = (
    idCode: string,
    callback: (arg0: number) => number
  ) => {
    let newTotal: number = 0;
    const newCart = cart
      .map(({ attributes, id, image, name, price, sku, quantity }: any) => {
        if (id != idCode) {
          newTotal = newTotal + quantity;
          return {
            attributes,
            id,
            image,
            name,
            price,
            sku,
            quantity,
          };
        }
        newTotal = newTotal + callback(quantity);
        return {
          attributes,
          id,
          image,
          name,
          price,
          sku,
          quantity: callback(quantity),
        };
      })
      .filter(({ quantity }: any) => quantity > 0);
    setShoppingCart({
      total: newTotal,
      cart: newCart,
    });
  };

  const addAvo = (quantity: number) => quantity + 1;
  const subtractAvo = (quantity: number) => {
    if (quantity === 0) return quantity;
    return quantity - 1;
  };

  return (
    <>
      <Head>
        <title>Avo Store - Cart</title>
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 6, marginBottom: 6 }}>
        {total === 0 && (
          <Alert severity="error">
            <Typography fontWeight={700}>Your cart is empty</Typography> You
            will need to add some items to the cart before you can checkout.
          </Alert>
        )}
        {shoppingCart.cart?.map(({ name, id, price, image, quantity }: any) => (
          <>
            <Card
              key={id}
              sx={{
                display: "flex",
                alignItems: "center",
                maxWidth: "100%",
                maxHeight: 150,
                boxShadow: 0,
                borderRadius: 0,
              }}
            >
              <CardMedia
                component="img"
                height={150}
                image={image}
                alt={name}
                sx={{ maxWidth: 150 }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 700,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    color="#000000"
                    sx={{ fontSize: 20, fontWeight: 500, mb: 1 }}
                  >
                    {name}
                  </Typography>
                  <Typography mt={1} color="gray">
                    $ {price}
                  </Typography>
                </Box>
                <ButtonGroup variant="contained" sx={{ height: 30 }}>
                  <Button onClick={() => changeQuantity(id, subtractAvo)}>
                    -
                  </Button>
                  <Box
                    sx={{
                      width: 30,
                      margin: "0 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {quantity}
                  </Box>
                  <Button
                    sx={{ borderLeft: "1px solid #B2B2B2" }}
                    onClick={() => changeQuantity(id, addAvo)}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </CardContent>
            </Card>
            <Divider />
          </>
        ))}
        <Card
          sx={{
            marginTop: 2,
            height: 100,
            display: "flex",
            alignItems: "center",
            pl: 5,
            pr: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={700}> Total: {total}</Typography>
          <Button
            disabled={!(total > 0)}
            variant="contained"
            sx={{
              background: "#000000",
              color: "#ffffff",
              height: 55,
              width: 100,
              ml: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Buy!
          </Button>
        </Card>
      </Container>
      <Box sx={{position: 'absolute', width: "100%", bottom: 0}}>
        <Footer />
      </Box>
    </>
  );
}
