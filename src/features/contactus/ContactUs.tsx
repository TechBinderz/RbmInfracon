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
} from "@mui/material";

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
                    I agree to the terms and conditions of CR3's{" "}
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
          <Typography variant="body2" sx={{ marginBottom: "16px" }}>
            Thank you for your interest in CR3. For general, client, media, or
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
    </Container>
  );
};

export default ContactUs;
