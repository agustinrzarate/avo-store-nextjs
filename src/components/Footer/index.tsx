import { Divider, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section>
        <Divider variant="middle" sx={{ mt: 20 }} />
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            my: 7,
          }}
        >
          <Box>
            <Typography fontWeight={600}>About us</Typography>
            <Link href="/about">
              <a>
                <Typography>More about us</Typography>
              </a>
            </Link>
          </Box>
          <Box>
            <Typography fontWeight={600}>Services</Typography>
            <Link href="/">
              <a>
                <Typography>All products</Typography>
              </a>
            </Link>
          </Box>
          <Box>
            <Typography fontWeight={600}>Made for</Typography>
            <Typography>
              <Link href="/">
                <a>Platzi</a>
              </Link>
              {''} and course of Next.JS
            </Typography>
          </Box>
        </Container>
      </section>
      <style jsx>{`
        a {
          text-decoration: inherit;
        }
      `}</style>
    </>
  );
}
