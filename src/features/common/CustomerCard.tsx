// CustomerCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface CustomerCardProps {
  image: string;
  title: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  width: 200,
  borderRadius: 10,
  boxShadow: '8px 8px 15px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Make cards full-width on small screens
  },
}));

const CustomerCard: React.FC<CustomerCardProps> = ({ image, title }) => {
  return (
    <StyledCard>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CustomerCard;
