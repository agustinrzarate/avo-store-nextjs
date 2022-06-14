import { Box, Container, Grid, Typography } from '@mui/material'
import avocado from 'public/images/avocados.jpg'
import Image from 'next/image'
import Navbar from 'src/components/Navbar'
import Head from 'next/head'
import Footer from 'src/components/Footer'

const avoFacts = [
  {
    id: '1',
    title: 'Most avocados come from Mexico',
    content:
      'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.'
  },
  {
    id: '2',
    title: 'The conquistadors were huge fans.',
    content:
      'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. '
  },
  {
    id: '3',
    title: '“Avocado” wasn’t its original name.',
    content:
      'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”'
  },
  {
    id: '4',
    title: 'It’s actually a fruit.',
    content:
      'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.'
  },
  {
    id: '5',
    title: 'There’s a secret trick to ripening them up quick',
    content:
      'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.'
  }
]

function About () {
  return (
    <>
      <Head>
        <title>Avo Store - About Us</title>
      </Head>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Typography variant="h3" fontSize={32} mb={4} textAlign="center" fontStyle="italic">
          13 Surprising Facts About Avocados
        </Typography>
        <Image src={avocado} alt="Avocados" />
        <Grid container mt={3} rowSpacing={{ xs: 2, sm: 4, md: 6 }} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
            {avoFacts.map(({ title, content, id }) => (
                <Grid item key={id} sx={{ maxWidth: 450 }}>
                    <Box display="flex" alignItems="center">
                        <div>{id}</div>
                        <Typography ml={2} fontWeight={600} fontSize={18}>
                            {title}
                        </Typography>
                    </Box>
                    <Typography>{content}</Typography>
                </Grid>
            ))}
        </Grid>
      </Container>
      <Footer />
       <style jsx>{`
           div {
               font-size: 72px;
               color: #CECECE;
           }
        `}</style>
    </>
  )
}

export default About
