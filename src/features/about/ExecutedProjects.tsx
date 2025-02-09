import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Chip } from '@mui/material';

const ExecutedProjects: React.FC = () => {
  const projects = [
    {
      title: 'Project Name 1',
      location: 'Location 1',
      description: 'Description of the completed project 1. Details about the scope and achievements.',
      completionYear: '2024',
      category: 'Residential',
      image: '/path/to/completed-project1-image.jpg', // You'll need to add actual project images
    },
    {
      title: 'Project Name 2',
      location: 'Location 2',
      description: 'Description of the completed project 2. Details about the scope and achievements.',
      completionYear: '2023',
      category: 'Commercial',
      image: '/path/to/completed-project2-image.jpg',
    },
    // Add more projects as needed
  ];

  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 6
          }}
        >
          Executed Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
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
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={project.category} 
                      color="primary" 
                      size="small" 
                      sx={{ mr: 1 }}
                    />
                    <Chip 
                      label={`Completed ${project.completionYear}`} 
                      color="success" 
                      size="small" 
                    />
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {project.location}
                  </Typography>
                  <Typography variant="body1">
                    {project.description}
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

export default ExecutedProjects;
