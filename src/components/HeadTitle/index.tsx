import { Box, Typography } from '@mui/material';
import Logo from '../../../public/icons/happy-avocado.svg';
import Image from 'next/image';

export default function HeadTitle () {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
          '&:hover': {
              animation: 'effect linear 1s',
          },
          "@keyframes effect": {
              "0%":{
                  transform: "scale(1,1)",
              },
              "25%":{
                  transform: "scale(1.3, 0.6)",
              },
              "50%":{
                  transform: "scale(1.1, 0.9)",
              },
              "100%":{
                  transform: "scale(1,1)",
              },
          }
        }}
      >
        <Typography fontSize={36} fontWeight={600} mr={1} fontStyle="italic" color="#064635">
          PLATZI
        </Typography>
        <Image src={Logo} height={60} width={60} />
        <Typography fontSize={36} fontWeight={600} ml={0} fontStyle="italic" color="secondary">
          STORE
        </Typography>
      </Box>
    );
}