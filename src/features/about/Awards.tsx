import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Awards: React.FC = () => {
  const awards = [
    {
      title: 'Award Title 1',
      year: '2024',
      description: 'Description of the award and its significance to RBM Infracon.',
      image: '/path/to/award1-image.jpg', // You'll need to add actual award images
      presentedBy: 'Awarding Organization 1'
    },
    {
      title: 'Award Title 2',
      year: '2023',
      description: 'Description of the award and its significance to RBM Infracon.',
      image: '/path/to/award2-image.jpg',
      presentedBy: 'Awarding Organization 2'
    },
    // Add more awards as needed
  ];

  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <EmojiEventsIcon sx={{ fontSize: 60, color: '#FFD700', mb: 2 }} />
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Our Awards & Recognition
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Celebrating our commitment to excellence and innovation in construction
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {awards.map((award, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={award.image}
                  alt={award.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom
                    sx={{ color: '#1a237e' }}
                  >
                    {award.title}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary" 
                    gutterBottom
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <EmojiEventsIcon sx={{ color: '#FFD700' }} />
                    {award.year} | {award.presentedBy}
                  </Typography>
                  <Typography variant="body1">
                    {award.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Awards;
