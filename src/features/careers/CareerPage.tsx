import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import axios from 'axios';
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
  Snackbar,
  Alert,
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
  const location = useLocation(); 
  const { jobDetails } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: jobDetails ? jobDetails.title : "",
    totalExperience: "",
    currentOrganization: "",
    noticePeriod: "",
    currentLocation: jobDetails ? jobDetails.location : "",
    currentCTC: "",
    expectedCTC: "",
    highestQualification: jobDetails ? jobDetails.qualifications : "",
  });

  const [resume, setResume] = useState<File | null>(null); 
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error"
  });

  useEffect(() => {
    if (jobDetails) {
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
    const file = e.target.files?.[0];
    if (file) {
      const allowedMimeTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedMimeTypes.includes(file.type)) {
        setSnackbar({
          open: true,
          message: "Only PDF, DOC, and DOCX files are allowed.",
          severity: "error",
        });
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async () => {
    try {
      // Validation checks
      if (!formData.name.trim()) {
        setSnackbar({
          open: true,
          message: "Name is required.",
          severity: "error",
        });
        return;
      }
  
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setSnackbar({
          open: true,
          message: "Please enter a valid email address.",
          severity: "error",
        });
        return;
      }
  
      if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
        setSnackbar({
          open: true,
          message: "Please enter a valid 10-digit phone number.",
          severity: "error",
        });
        return;
      }
  
      if (!formData.role.trim()) {
        setSnackbar({
          open: true,
          message: "Role applied for is required.",
          severity: "error",
        });
        return;
      }
  
      if (!formData.totalExperience.trim() || isNaN(Number(formData.totalExperience))) {
        setSnackbar({
          open: true,
          message: "Please enter a valid total experience (in years).",
          severity: "error",
        });
        return;
      }
  
      if (!formData.currentCTC.trim() || isNaN(Number(formData.currentCTC))) {
        setSnackbar({
          open: true,
          message: "Please enter a valid current CTC (in LPA).",
          severity: "error",
        });
        return;
      }
  
      if (!formData.expectedCTC.trim() || isNaN(Number(formData.expectedCTC))) {
        setSnackbar({
          open: true,
          message: "Please enter a valid expected CTC (in LPA).",
          severity: "error",
        });
        return;
      }
  
      if (!formData.noticePeriod.trim()) {
        setSnackbar({
          open: true,
          message: "Notice period is required.",
          severity: "error",
        });
        return;
      }
  
      if (!formData.highestQualification.trim()) {
        setSnackbar({
          open: true,
          message: "Highest qualification is required.",
          severity: "error",
        });
        return;
      }
  
      if (!resume) {
        setSnackbar({
          open: true,
          message: "Please upload your resume.",
          severity: "error",
        });
        return;
      }
  
      setLoading(true);
  
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("role", formData.role);
      formDataToSend.append("totalExperience", formData.totalExperience);
      formDataToSend.append("currentOrganization", formData.currentOrganization);
      formDataToSend.append("noticePeriod", formData.noticePeriod);
      formDataToSend.append("currentLocation", formData.currentLocation);
      formDataToSend.append("currentCTC", formData.currentCTC);
      formDataToSend.append("expectedCTC", formData.expectedCTC);
      formDataToSend.append("highestQualification", formData.highestQualification);
      formDataToSend.append("resume", resume); // Add the resume file
  
      // Submit form data
      const response = await axios.post(
        "https://rbmmail1.techbinderz.workers.dev/api/send-mail",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct content type
          },
        }
      );
  
      setSnackbar({
        open: true,
        message: response.data.message,
        severity: "success",
      });
  
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        totalExperience: "",
        currentOrganization: "",
        noticePeriod: "",
        currentLocation: "",
        currentCTC: "",
        expectedCTC: "",
        highestQualification: "",
      });
      setResume(null);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to submit application. Please try again.",
        severity: "error",
      });
      console.error("Error submitting application:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <PageTitle imageUrl={about_us_image} tileContent="Apply Online" />
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
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  );
};

export default CareerPage;
