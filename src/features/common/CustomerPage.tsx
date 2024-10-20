// CustomerPage.tsx
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import CustomerCard from './CustomerCard';
import ril from '../../assets/features/about-us/rbm-customers-images/ril.png'
import chemie from '../../assets/features/about-us/rbm-customers-images/chemie.jpg'
import essar from '../../assets/features/about-us/rbm-customers-images/essar.jpg'
import nayasa from '../../assets/features/about-us/rbm-customers-images/nayasa.png'
import adnoc from '../../assets/features/about-us/rbm-customers-images/adnoc.jpg'
import vale from '../../assets/features/about-us/rbm-customers-images/vale.png'
import adani from '../../assets/features/about-us/rbm-customers-images/adani.png'
import dalmia from '../../assets/features/about-us/rbm-customers-images/dalmia.jpg'
import afcons from '../../assets/features/about-us/rbm-customers-images/afcons.jpg'
import tata from '../../assets/features/about-us/rbm-customers-images/tata.png'
import technip from '../../assets/features/about-us/rbm-customers-images/technip.png'
import malco from '../../assets/features/about-us/rbm-customers-images/malco.jpg'
import petron from '../../assets/features/about-us/rbm-customers-images/petron.avif'
import essarprojects from '../../assets/features/about-us/rbm-customers-images/essarprojects.png'

// Sample customer data
const customers = [
  {
    image: ril, 
    title: 'Customer 1',
  },
  {
    image: chemie,
    title: 'Customer 2',
  },
  {
    image: essar,
    title: 'Customer 3',
  },
  {
    image: nayasa,
    title: 'Customer 4',
  },
  {
    image: adnoc,
    title: 'Customer 5',
  },
  {
    image: vale,
    title: 'Customer 6',
  },
  {
    image: adani,
    title: 'Customer 7',
  },
  {
    image: dalmia,
    title: 'Customer 8',
  },
  {
    image: afcons, 
    title: 'Customer 9',
  },
  {
    image: tata,
    title: 'Customer 10',
  },
  {
    image: technip,
    title: 'Customer 11',
  },
  {
    image: malco,
    title: 'Customer 12',
  },
  {
    image: petron,
    title: 'Customer 13',
  },
  {
    image: essarprojects,
    title: 'Customer 14',
  }
];

const CustomerPage: React.FC = () => {
  return (
    <Container sx={{ padding: 4 }}>
      {/* Centered Heading with additional spacing */}
      <Typography 
        variant="h3" 
        align="center" 
        fontWeight="bold" 
        gutterBottom
        sx={{ mb: 3 }} // Adds margin-bottom to create space after the heading
      >
        Business Partners
      </Typography>
      
      {/* Customer Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {customers.map((customer, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index} sx={{alignContent : 'center'}}>
            <CustomerCard image={customer.image} title={customer.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomerPage;
