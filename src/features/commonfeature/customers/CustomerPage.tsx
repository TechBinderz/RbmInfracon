// CustomerPage.tsx
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import CustomerCard from './CustomerCard';

// Sample customer data
const customers = [
  {
    image: 'https://via.placeholder.com/150', // Replace with your image URL
    title: 'Customer 1',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Customer 2',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Customer 3',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Customer 4',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Customer 4',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Customer 4',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Customer 4',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Customer 4',
  },
];

const CustomerPage: React.FC = () => {
  return (
    <Container sx={{ padding: 4 }}>
      {/* Centered Heading with additional spacing */}
      <Typography 
        variant="h4" 
        align="center" 
        fontWeight="bold" 
        gutterBottom
        sx={{ mb: 3 }} // Adds margin-bottom to create space after the heading
      >
        Our Customers
      </Typography>
      
      {/* Customer Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {customers.map((customer, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CustomerCard image={customer.image} title={customer.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomerPage;
