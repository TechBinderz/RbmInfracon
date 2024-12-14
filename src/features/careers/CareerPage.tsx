import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
  MenuItem,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PageTitle from '../common/PageTitleDiv';
import about_us_image from "../../assets/features/about-us/about_us1.jpeg";
import themeColor from '../common/common';

const theme = createTheme({
  palette: {
    primary: {
      main: themeColor, // Deep green
    },
    secondary: {
      main: '#ff9800', // Amber
    },
    background: {
      default: '#f5f5f5', // Light gray
      paper: '#ffffff', // White background for form
    },
    text: {
      primary: '#212121', // Dark gray
      secondary: '#757575', // Medium gray
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      color: '#004d40',
    },
    body1: {
      fontWeight: 400,
      color: '#212121',
    },
  },
});

const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    totalExperience: '',
    currentOrganization: '',
    noticePeriod: '',
    currentLocation: '',
    currentCTC: '',
    expectedCTC: '',
    highestQualification: '',
  });

  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.role ||
      !formData.totalExperience ||
      !formData.currentOrganization ||
      !formData.noticePeriod ||
      !formData.currentLocation ||
      !formData.currentCTC ||
      !formData.expectedCTC ||
      !formData.highestQualification ||
      !resume
    ) {
      alert('Please fill all fields and upload a resume.');
      return;
    }

    console.log('Form Data:', formData);
    console.log('Resume File:', resume);
    alert('Application submitted successfully!');
  };

  const noticePeriodOptions = ['Immediate', '15 Days', '30 Days', '60 Days', '90+ Days'];
  const qualifications = ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD'];

  return (
    <>
    <PageTitle
      imageUrl={about_us_image}
      tileContent="Career Page"
    />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Career Opportunities
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Join us! Fill in your details and upload your resume.
          </Typography>
          <Box component="form" noValidate>
            <Grid container spacing={3}>
              {/* Personal Information */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                  type="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Role Applied For"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Job Details */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Total Experience (in years)"
                  name="totalExperience"
                  value={formData.totalExperience}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Current Organization"
                  name="currentOrganization"
                  value={formData.currentOrganization}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Notice Period"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleInputChange}
                  variant="outlined"
                  select
                  required
                >
                  {noticePeriodOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Current Location"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Current CTC (in LPA)"
                  name="currentCTC"
                  value={formData.currentCTC}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Expected CTC (in LPA)"
                  name="expectedCTC"
                  value={formData.expectedCTC}
                  onChange={handleInputChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Highest Qualification"
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleInputChange}
                  variant="outlined"
                  select
                  required
                >
                  {qualifications.map((qualification) => (
                    <MenuItem key={qualification} value={qualification}>
                      {qualification}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Resume Upload */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  component="label"
                  fullWidth
                  sx={{ height: '56px' }}
                >
                  Upload Resume
                  <input
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </Button>
                {resume && (
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    {resume.name}
                  </Typography>
                )}
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit}
                  sx={{ padding: 1.5, fontSize: '1rem' }}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    </>
  );
};

export default CareerPage;
