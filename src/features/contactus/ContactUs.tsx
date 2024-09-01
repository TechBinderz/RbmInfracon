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
    <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px 0px" } }}>
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
              width: { xs: "50%", sm: "40%", md: "30%" },
              height: "auto",
              marginBottom: "16px",
              borderRadius: "8px",
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3686.83449329288!2d70.015849!3d22.472853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395715df42713d45%3A0xaf92b8afb778e883!2sRBM%20INFRACON%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1725184351371!5m2!1sen!2sin"
            sx={{ border: 0, width: "100%", height: { xs: "200px", sm: "300px" } }}
            allowFullScreen
            loading="lazy"
          />
        </Grid>
      </Grid>

      {/* Business Cards Section */}
      <Grid container spacing={4} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} sx={{ padding: { xs: '0px 20px', sm: '0px 40px' }, marginLeft:'0px;' }}>
          <Typography variant="h4" gutterBottom> 
            Our Management Team
          </Typography>
        </Grid>
        <Grid container spacing={4} >
          {/* Management Team Cards */}
          {[
            {
              title: "Managing Director",
              name: "Mr. J.B. Mani",
              emails: ["md@rbminfracon.com", "jbmani6212@gmail.com"],
            },
            {
              title: "Project Head",
              name: "Mr. Ranjay Kumar Roy",
              emails: ["ranjankumar@rbminfracon.com"],
            },
            {
              title: "HR & Admin-Central",
              name: "Mr. Santosh Gauda",
              emails: ["hr@rbminfracon.com"],
            },
            {
              title: "Account & Finance-Central",
              name: "Mr. Pankaj Kumar Sinha",
              emails: ["cfo@rbminfracon.com"],
            },
            {
              title: "Project Coordinator/Manager - Planning",
              name: "Mr. Aditya Mani",
              emails: ["planning@rbminfracon.com"],
              phone: "+91-96625494820",
            },
            {
              title: "Project Coordinator/Manager - Execution",
              name: "Mr. Kunal Soni",
              emails: ["execution@rbminfracon.com"],
              phone: "+91-96625494820",
            },
            {
              title: "Site Manager - RIL_IDC_Nagpur",
              name: "Mr. Raju Mani Tripathi",
              emails: ["rajeevrbminfracon@gmail.com"],
              phone: "+91-8511139662",
            },
            {
              title: "Site Manager - L&T_IOCL_Paradeep",
              name: "Mr. Shriniwash Tripathi",
              phone: "9712397606 / 7990109213",
            },
            {
              title: "Site Manager - Yara Fertilizer_Babralla",
              name: "P. Subhash Kartha",
              emails: ["rbmbabrala@gmail.com"],
              phone: "+91-7017599964, 09904018311",
            },
            {
              title: "Site Manager - RIL_Jamnagar",
              name: "Mr. Shriniwash Mishra",
              emails: ["shriniwashrbm@gmail.com"],
              phone: "+91-9825032634",
            },
            {
              title: "Site Manager - Nayara_Jamnagar",
              name: "Mr. Ramniwas Mishra",
              emails: ["mishraramniwashrbm@gmail.com"],
            },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ paddingleft: { xs: '20px', sm: '40px' } }}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{member.title}</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {member.name}
                  </Typography>
                  {member.emails && member.emails.map((email, i) => (
                    <Typography variant="body2" key={i}>
                      <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      {email}
                    </Typography>
                  ))}
                  {member.phone && (
                    <Typography variant="body2">
                      <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                      {member.phone}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
