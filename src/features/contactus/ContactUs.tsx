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
import aditya_jay_photo from "../../assets/features/rbm_management/Mr. Aditya Jay Bajrang Mani.jpg";
import deepak_saxena_photo from "../../assets/features/rbm_management/Mr. Deepak Saxena.png";
import jaybajrang_ramaishish_photo from "../../assets/features/rbm_management/Mr. Jaybajrang Ramaishish Mani.jpg";
import narendra_sharma_photo from "../../assets/features/rbm_management/Mr. Narendra Sharma.png";
import pankaj_kumar_photo from "../../assets/features/rbm_management/Mr. Pankaj Kumar.png";
import ranjan_kumar_photo from "../../assets/features/rbm_management/Mr. Ranjan Kumar.png";
import ravi_pratap_photo from "../../assets/features/rbm_management/Mr. Ravi Pratap Singh.png";
import sanjay_singh_photo from "../../assets/features/rbm_management/Mr. Sanjay Singh.png";
import sreejith_pillai_photo from "../../assets/features/rbm_management/Mr. Sreejith Pillai.png";
import sunil_srivastava_photo from "../../assets/features/rbm_management/Mr. Sunil Srivastava.png";
import sunil_kumar_photo from "../../assets/features/rbm_management/Sunil Kumar Singh.png";
import contact_us_image from "../../assets/features/contact_us/contact_us.jpg";

// Management team data
const managementTeamList = [
  {
    image: jaybajrang_ramaishish_photo,
    title: "Chairman & Managing Director",
    name: "Mr. Jaybajrag Ramaishish Mani",
    emails: ["md@rbminfracon.com", "jbmani6212@gmail.com"],
  },
  {
    image: aditya_jay_photo,
    title: "Whole Time Director",
    name: "Mr. Aditya Jay Bajrag Mani",
  },
  { image: deepak_saxena_photo, title: "Director", name: "Mr. Deepak Saxena" },
  {
    image: narendra_sharma_photo,
    title: "Chief Financial Officer",
    name: "Mr. Narendra Sharma",
  },
  {
    image: pankaj_kumar_photo,
    title: "Corporate Projects & Operations Head",
    name: "Mr. Pankaj Kumar",
  },
  {
    image: sreejith_pillai_photo,
    title: "Commercial Head",
    name: "Mr. Sreejith Pillai",
  },
  {
    image: ranjan_kumar_photo,
    title: "Projects Head",
    name: "Mr. Ranjan Kumar",
  },
  {
    image: sunil_srivastava_photo,
    title: "Chief Human Resourses Officer",
    name: "Mr. Sunil Srivastava",
  },
  {
    image: ravi_pratap_photo,
    title: "Non-Executive Director of Oil & Gas Division",
    name: "Mr. Ravi Pratap Singh",
  },
  {
    image: sunil_kumar_photo,
    title: "ONGC Project Head",
    name: "Sunil Kumar Singh",
  },
  {
    image: sanjay_singh_photo,
    title: "President - Oil & Gas Division",
    name: "Mr. Sanjay Singh",
  },
];

const ContactUs: React.FC = () => (
  <>
    <PageTitle
      imageUrl={contact_us_image}
      tileContent="Contact Us"
    />
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
              03, Snehdeep Residency, Office No. 3, Digjam Circle, Jamnagar,
              Gujarat, PIN Code: 361006
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

      {/* Management Team Section */}
      <Grid container spacing={4} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} sx={{ padding: { xs: "0px 20px", sm: "0px 40px" } }}>
          <Typography variant="h4" gutterBottom>
            Our Management Team
          </Typography>
          <Box
            sx={{
              borderBottom: "2px solid #000", // Customize the color and thickness as needed
              marginBottom: "20px",
            }}
          />
        </Grid>
        <Grid container spacing={4} sx={{ marginLeft: "auto" }}>
          {managementTeamList.map((member, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ paddingLeft: { xs: "20px", sm: "40px" } }}
            >
              <Card
                className="card-shadow-1"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                  textAlign: "center",
                  padding: "16px",
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "16px",
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {member.title}
                  </Typography>
                  {/* {member.emails?.map((email, i) => (
                    <Typography variant="body2" key={i}>
                      <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      {email}
                    </Typography>
                  ))}
                  {member.phone && (
                    <Typography variant="body2">
                      <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      {member.phone}
                    </Typography>
                  )} */}
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
