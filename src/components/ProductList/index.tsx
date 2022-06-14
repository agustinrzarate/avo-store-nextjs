import { CardMedia, Card, CardContent, Typography, Grid, Divider } from '@mui/material'
import Link from 'next/link'

interface IProduct {
  name: string;
  id: string;
  sku: string;
  image: string;
  attributes: object;
  price: any;
}

interface IProductListrops {
  productList: Array<IProduct>;
}

export default function ProductList ({ productList }: IProductListrops) {
  return (
    <>
      <Grid container rowSpacing={{ xs: 2, sm: 4, md: 6 }} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        {productList?.map(({ name, id, price, image }: IProduct) => (
          <Grid item key={id}>
            <Link href={`/avo/${id}`}>
              <a>
                <Card
                  sx={{
                    maxWidth: 385,
                    transition: '.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.05)'
                    }
                  }}
                >
                  <CardMedia component="img" height={250} image={image} alt={name} />
                  <CardContent>
                    <Typography color="#000000" sx={{ fontSize: 16, fontWeight: 500, mb: 1 }}>
                      {name}
                    </Typography>
                    <Divider />
                    <Typography mt={1}>$ {price}</Typography>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
      <style jsx>{`
        a {
          text-decoration: inherit;
        }
      `}</style>
    </>
  )
}
