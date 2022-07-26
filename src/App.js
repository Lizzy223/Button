import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { useFlutterwave } from 'flutterwave-react-v3';
import Buttons from './components/Button';



function App() {

  const config = {
    public_key: 'FLWPUBK_TEST-fe8286091d4928d4d97d5f872946622f-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

 useFlutterwave(config)

  return (
    <ChakraProvider >
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" >
          <VStack justifyContent='center' alignItems='center'>
            
            <Buttons/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
