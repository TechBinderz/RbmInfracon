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
import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo


// Define the functional component with TypeScript
const ContactUs: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      <Grid container spacing={4}>
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Your name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Your email address"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Company"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Phone"
                variant="outlined"
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Country"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="agree" color="primary" />}
                label={
                  <Typography variant="body2">
                    I agree to the terms and conditions of RBM Infracon Limited{" "}
                    <Link href="#" underline="always">
                      privacy policy
                    </Link>
                    .
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Info & Map Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Get in Touch
          </Typography>

          {/* Photo at the top */}
          <Box
            component="img"
            src={RBMLOGOFULL} // Replace with the actual photo URL
            alt="RBM Infracon"
            sx={{
              width: '30%',
              height: 'auto',
              marginBottom: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          />

          <Typography variant="body2" sx={{ marginBottom: "16px" }}>
            Thank you for your interest in RBM Infracon. For general, client, media, or
            recruiting inquiries, kindly leave your details and inquiry in the
            form and we will get back to you as soon as possible.
          </Typography>

          {/* Google Map Embed */}
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1393032999997!2d70.0577323150573!3d22.4707019852411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957e7b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5!2sRBM%20INFRACON%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1602290189336!5m2!1sen!2sin"
            sx={{ border: 0, width: "100%", height: "300px" }}
            allowFullScreen
            loading="lazy"
          />
        </Grid>
      </Grid>

      {/* Business Cards Section */}
      <Grid container spacing={4} sx={{ marginTop: "40px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom >
            Our Management Team
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {/* Existing Cards */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Managing Director</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. J.B. Mani
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  md@rbminfracon.com
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  jbmani6212@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Project Head</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Ranjay Kumar Roy
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  ranjankumar@rbminfracon.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">HR & Admin-Central</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Santosh Gauda
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  hr@rbminfracon.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Account & Finance-Central</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Pankaj Kumar Sinha
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  cfo@rbminfracon.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">
                  Project Coordinator/Manager - Planning
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Aditya Mani
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  planning@rbminfracon.com
                </Typography>
                <Typography variant="body2">
                  <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  +91-96625494820
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Site Manager - RIL_IDC_Nagpur</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Raju Mani Tripathi
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  rajeevrbminfracon@gmail.com
                </Typography>
                <Typography variant="body2">
                  <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  +91-8511139662
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Site Manager - L&T_IOCL_Paradeep</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Shriniwash Tripathi
                </Typography>
                <Typography variant="body2">
                  <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Mob: 9712397606 / 7990109213
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Site Manager - Yara Fertilizer_Babralla</Typography>
                <Typography variant="body1" fontWeight="bold">
                  P. Subhash Kartha
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  rbmbabrala@gmail.com
                </Typography>
                <Typography variant="body2">
                  <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  +91-7017599964, 09904018311
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Site Manager - RIL_Jamnagar</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Shriniwash Mishra
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  shriniwashrbm@gmail.com
                </Typography>
                <Typography variant="body2">
                  <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  +91-9825032634
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Site Manager - Nayara_Jamnagar</Typography>
                <Typography variant="body1" fontWeight="bold">
                  Mr. Ramniwas Mishra
                </Typography>
                <Typography variant="body2">
                  <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  mishraramniwashrbm@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
