import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
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
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PageTitle from "../common/PageTitleDiv";
import about_us_image from "../../assets/features/about-us/about_us1.jpeg";
import themeColor from "../common/common";

// Options moved outside the component
const noticePeriodOptions = [
  "Immediate",
  "15 Days",
  "30 Days",
  "60 Days",
  "90+ Days",
];
const qualifications = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
];

const theme = createTheme({
  palette: {
    primary: { main: themeColor },
    secondary: { main: "#ff9800" },
    background: { default: "#f5f5f5", paper: "#ffffff" },
    text: { primary: "#212121", secondary: "#757575" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: { fontWeight: 700, color: "#004d40" },
    body1: { fontWeight: 400, color: "#212121" },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "grey",
        },
      },
    },
  },
});

const CareerPage: React.FC = () => {
  const location = useLocation(); // Get the state passed through the router
  const { jobDetails } = location.state || {}; // Destructure the jobDetails from the state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: jobDetails ? jobDetails.title : "", // Set default role from jobDetails
    totalExperience: "",
    currentOrganization: "",
    noticePeriod: "",
    currentLocation: jobDetails ? jobDetails.location : "", // Set default location from jobDetails
    currentCTC: "",
    expectedCTC: "",
    highestQualification: jobDetails ? jobDetails.qualifications : "", // Set default qualification from jobDetails
  });

  const [resume, setResume] = useState<File | null>(null); // Declare resume state

  useEffect(() => {
    if (jobDetails) {
      // Pre-fill any additional form fields with jobDetails if available
      setFormData((prevData) => ({
        ...prevData,
        role: jobDetails.title,
        currentLocation: jobDetails.location,
        highestQualification: jobDetails.qualifications,
      }));
    }
  }, [jobDetails]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      setResume(file); // Set the selected file in the state
    }
  };

  const handleSubmit = () => {
    // Validation logic and form submission handling here
    alert("Application submitted successfully!");
  };

  return (
    <>
      <PageTitle imageUrl={about_us_image} tileContent="Careers" />
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
            <Box component="form" noValidate sx={{ marginTop: "40px" }}>
              <Grid container spacing={3}>
                {/* Personal Information */}
                {[{ label: "Name", name: "name", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                  { label: "Role Applied For", name: "role", type: "text" }]
                  .map((field, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <TextField
                        fullWidth
                        label={field.label}
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        type={field.type}
                      />
                    </Grid>
                ))}

                {/* Job Details */}
                {[{ label: "Total Experience (in years)", name: "totalExperience" },
                  { label: "Current Organization", name: "currentOrganization" },
                  { label: "Current Location", name: "currentLocation" },
                  { label: "Current CTC (in LPA)", name: "currentCTC" },
                  { label: "Expected CTC (in LPA)", name: "expectedCTC" }]
                  .map((field, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <TextField
                        fullWidth
                        label={field.label}
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                      />
                    </Grid>
                ))}

                {/* Dropdowns */}
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
                  <Box sx={{ position: "relative", width: "100%" }}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={resume ? resume.name : ""}
                      placeholder="Upload Resume"
                      InputProps={{ readOnly: true }}
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        document.getElementById("fileInput")?.click()
                      }
                    />
                    <input
                      id="fileInput"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </Box>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" width="100%">
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: themeColor,
                        padding: 1.5,
                        fontSize: "1rem",
                        width: "50%",
                        marginTop: "30px",
                      }}
                      onClick={handleSubmit}
                    >
                      Submit Application
                    </Button>
                  </Box>
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
