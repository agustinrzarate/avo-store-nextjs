import { Alert, Typography } from "@mui/material";

export default function EmptyAlert() {
  return (
    <Alert severity="error">
      <Typography fontWeight={700}>Your cart is empty</Typography> You will need
      to add some items to the cart before you can checkout.
    </Alert>
  );
}
