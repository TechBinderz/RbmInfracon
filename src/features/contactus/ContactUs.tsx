import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Container,
  Button,
  Checkbox,
  FormControlLabel,
  // Link,
  Box,
  Snackbar,
  Alert,
  Paper,
  IconButton,
} from "@mui/material";
import { Email as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import "../common/common.css";
import PageTitle from "../common/PageTitleDiv";
import themeColor from "../common/common";
import contact_us_image from "../../assets/features/contact_us/contact_us.jpg";
import { styled } from "@mui/material/styles";

const locations = [
  {
    name: "BN Agritech Limited",
    location:
      "Survey No. 406, 407/1, 407/2, Village Bhimasar Anjar, Gujarat State Highway 50, Bhimasar, Gujarat 370240",
    state: "+91 99974 00788",
  },
  {
    name: "Chambal Fertilizers & Chemicals Limited",
    location: "555G+R5H, NH 76, CFCL Twp, Kota, Rajasthan 325208",
    state: "+91 744 278 2928",
  },
  {
    name: "Epitome Industires India Limited",
    location: "63MH+587, Road, Chandrani, Lakhapar, Gujarat 370020",
    // state: "Gujarat",
  },
  {
    name: "Kutch Copper Limited",
    location: "Shiracha, Navinal, Gujarat 370405",
    // state: "Gujarat"
  },
  {
    name: "Mundra Petrochemicals LIMITED",
    location: "RGFX+MJ6, NH 8A, Shiracha, Gujarat 370405",
    // state: "Gujarat",
  },
  {
    name: "Nayara Energy Limited",
    location: "Timbdi, Gujarat 361010",
    state: "+91 2833 661 444",
  },
  {
    name: "Nayara Energy Limited",
    location: "Dist, Khambhalia, Zankhar, Gujarat 361305",
    // state: "Gujarat"
  },
  {
    name: "ONGC",
    location: "WMF2+C28 Khodiyar Mata Ka Mandir, Ahmedabad, Gujarat 382435",
    // state: "Gujarat"
  },
  {
    name: "Praj Industries Limited",
    location:
      "Plot No. 307 to 314, Kandla SEZ, 24Q8+6PV, Kidana, Kidana Village, Gandhidham, Gujarat 370230",
    state: "+91 20 7180 2000",
  },
  {
    name: "Reliance Industries Limited",
    location: "G4X5+RJF, Nagothane Pezari Rd, Kadsure, Maharashtra 402125",
    state: "+91 22 3555 5000",
  },
  {
    name: "Thyssenkrupp (Technip - IOCL)",
    location: "96W3+PHG, Savli - Vadodara Rd, Vadodara, Gujarat 390022",
    // state: "Gujarat",
  },
  {
    name: "Vedanta Sesa coke  Gujrat",
    location: "7772+488, Lunva, Gujarat 370140",
    //  state: "Gujarat"
  },
  {
    name: "Yara Fertilizers India Pvt limited",
    location: "Indira Dham, Babrala, Uttar Pradesh 243201",
    // state: "UP",
  },
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const StyledIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: themeColor,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  "&:hover": {
    backgroundColor: themeColor,
  },
  "& .MuiSvgIcon-root": {
    "&.xlarge": {
      fontSize: theme.typography.h2.fontSize,
    },
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: themeColor,
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.h5,
  },
  [theme.breakpoints.up("sm")]: {
    ...theme.typography.h4,
  },
}));

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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

      if (
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
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

      if (!formData.message.trim()) {
        setSnackbar({
          open: true,
          message: "Message is required.",
          severity: "error",
        });
        return;
      }

      

      setLoading(true);

      // API call
      const response = await axios.post(
        "https://rbmmail1.techbinderz.workers.dev/api/send-contact-email",
        formData
      );

      setSnackbar({
        open: true,
        message: response.data.message || "Message sent successfully!",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        country: "",
        subject: "",
        message: "",
        agree: false,
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <PageTitle imageUrl={contact_us_image} tileContent="Contact Us" />

      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={4}>
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <StyledTitle variant="h4" gutterBottom>
              Get in Touch
            </StyledTitle>
            <ThemeProvider theme={theme}>
              <Grid container spacing={2}>
                {[
                  { label: "Your name", name: "name", type: "text" },
                  { label: "Your email address", name: "email", type: "email" },
                  { label: "Company", name: "company", type: "text" },
                  { label: "Phone", name: "phone", type: "tel" },
                  { label: "Country", name: "country", type: "text" },
                  { label: "Subject", name: "subject", type: "text" },
                ].map((field, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <TextField
                      fullWidth
                      required
                      label={field.label}
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleInputChange}
                      variant="outlined"
                      type={field.type}
                    />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="default"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleInputChange}
                        sx={{ color: themeColor }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the terms and conditions of RBM Infracon
                        Limited{" "}
                         privacy policy
                        .
                      </Typography>
                    }
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: themeColor, color: "#fff" }}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </Grid>
              </Grid>
            </ThemeProvider>
          </Grid>

          {/* Contact Info & Map Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: themeColor }}>
              {" "}
              Corporate Office{" "}
            </Typography>

            {/* Address with Icon */}
            <Box
              display="flex"
              alignItems="center"
              sx={{ marginBottom: "16px" }}
            >
              <LocationOnIcon sx={{ marginRight: "8px", color: themeColor }} />
              <Typography variant="body1">
                RBM Infracon Limited, 1st Floor, Ravi Plaza, Nilkanth Park,
                Dinchda Road, Jamnagar, Gujarat, India - 361002
              </Typography>
            </Box>

            {/* Email and Phone Number */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ marginBottom: "16px" }}
            >
              {/* Email with Icon (left) */}
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ marginRight: "8px", color: themeColor }} />
                <Typography variant="body1">
                  <a
                    href="mailto:info@rbminfracon.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    info@rbminfracon.com
                  </a>
                </Typography>
              </Box>

              {/* Phone Number with Icon (right) */}
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ marginRight: "8px", color: themeColor }} />
                <Typography variant="body1">
                  <a
                    href="tel:+9102882710463"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +91 0288 2710463
                  </a>
                </Typography>
              </Box>
            </Box>

            {/* Google Map Embed */}
            <Box
              component="iframe"
              src="https://www.google.com/maps/d/u/2/embed?mid=1JUsnk-PMXnixDXzdjDaSvdwfjvs_TRw&ehbc=2E312F&noprof=1"
              sx={{
                border: 0,
                width: "100%",
                height: { xs: "300px", sm: "400px" },
              }}
              allowFullScreen
              loading="lazy"
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ marginTop: "40px" }} id="locations">
          <Grid item xs={12}>
            <Typography
              variant="h3"
              align="center"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 2 }} // Adds margin-bottom to create space after the heading
            >
              Our Locations
            </Typography>
          </Grid>
          <Grid container spacing={4} sx={{ margin: "auto" }}>
            {locations.map((location, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledPaper elevation={3}>
                  <StyledIcon>
                    <LocationOnIcon className="xlarge" />
                  </StyledIcon>
                  <Typography variant="h6" gutterBottom color={themeColor}>
                    {location.name}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "center" }}>
                    {location.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "center", color: themeColor }}
                  >
                    {location.state}
                  </Typography>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </> 
  );
};

export default ContactUs;
