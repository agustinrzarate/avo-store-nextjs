import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Divider,
  ButtonGroup,
} from "@mui/material";
import { IContext } from "src/context/DataProvider";
import { ICart } from "src/iterfaces/Icart";

export default function CartProductList({
  shoppingCart,
  setShoppingCart,
}: IContext) {
  const changeQuantity = (
    idCode: string,
    callback: (arg0: number) => number
  ) => {
    let newTotal: number = 0;
    const newCart = shoppingCart.cart
      .map(
        ({ attributes, id, image, name, price, sku, quantity = 0 }: ICart) => {
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
        }
      )
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
    <Box>
      {shoppingCart.cart?.map(({ name, id, price, image, quantity }: ICart) => (
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
    </Box>
  );
}
