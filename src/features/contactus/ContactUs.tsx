import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Container,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { Email as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../common/common.css";
import PageTitle from "../common/PageTitleDiv";
import themeColor from "../common/common";
import contact_us_image from "../../assets/features/contact_us/contact_us.jpg";

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

const ContactUs: React.FC = () => (
  <>
    <PageTitle imageUrl={contact_us_image} tileContent="Contact Us" />
    <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
      <Grid container spacing={4}>
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Get in Touch
          </Typography>
          <Grid container spacing={2}>
            {[
              "Your name",
              "Your email address",
              "Company",
              "Phone",
              "Country",
              "Subject",
            ].map((label, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  required
                  label={label}
                  id={`contact-${label.replace(/\s+/g, "-").toLowerCase()}`}
                  variant="outlined"
                  type={
                    label.includes("email")
                      ? "email"
                      : label.includes("Phone")
                      ? "tel"
                      : "text"
                  }
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Message"
                id="contact-message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="default"
                    name="agree"
                    sx={{ color: themeColor }}
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the terms and conditions of RBM Infracon Limited{" "}
                    <Link
                      href="#"
                      underline="always"
                      sx={{ color: themeColor }}
                    >
                      privacy policy
                    </Link>
                    .
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ backgroundColor: themeColor }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Info & Map Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: themeColor }}>
            {" "}
            Corporate Office{" "}
          </Typography>

          {/* Address with Icon */}
          <Box display="flex" alignItems="center" sx={{ marginBottom: "16px" }}>
            <LocationOnIcon sx={{ marginRight: "8px", color: themeColor }} />
            <Typography fontSize="18px" variant="body2">
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
              <Typography fontSize="18px" variant="body2">
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
              <Typography fontSize="18px" variant="body2">
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
              height: { xs: "200px", sm: "300px" },
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
            sx={{ mb: 8 }} // Adds margin-bottom to create space after the heading
          >
            Our Locations
          </Typography>
        </Grid>
        <Grid container spacing={4} sx={{ margin: "auto" }}>
          {locations.map((location, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className="card-shadow-1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  // padding: "16px",
                }}
              >
                <CardContent>
                  <Box display="flex">
                    <LocationOnIcon
                      sx={{
                        fontSize: 50,
                        color: themeColor,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ color: themeColor }}
                        gutterBottom
                      >
                        {location.name}
                      </Typography>
                      <Typography variant="body1">
                        {location.location}
                      </Typography>
                      <Typography variant="h6" sx={{ color: themeColor }}>
                        {location.state}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  </>
);

export default ContactUs;
