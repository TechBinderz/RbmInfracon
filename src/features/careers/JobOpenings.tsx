import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import PageTitle from '../common/PageTitleDiv';
import about_us_image from "../../assets/features/about-us/about_us1.jpeg";
import themeColor from '../common/common';

const jobOpenings = [
  {
    id: 1,
    title: 'Site Engineer',
    location: 'Jamnagar, Gujarat',
    description: 'Manage site operations and ensure timely project delivery.',
    qualifications: 'B.E./B.Tech in Civil Engineering with 2+ years experience.',
  },
  {
    id: 2,
    title: 'Safety Officer',
    location: 'Vadodara, Gujarat',
    description: 'Ensure compliance with safety protocols on-site.',
    qualifications: 'Diploma in Safety Engineering with 3+ years experience.',
  },
  // Add more job entries here
];

const JobOpenings = () => {
  return (
    <>
    <PageTitle
      imageUrl={about_us_image}
      tileContent="Job Openings"
    />
    <Grid container spacing={3} padding={3}>
      {jobOpenings.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.id}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {job.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Location: {job.location}
              </Typography>
              <Typography variant="body2" paragraph>
                {job.description}
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                Qualifications: {job.qualifications}
              </Typography>
              <Button variant="contained" sx={{ color: themeColor }}   style={{ marginTop: '10px' }} >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default JobOpenings;
