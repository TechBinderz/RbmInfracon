import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo
import { Grid, Typography, Link, Container, Box, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook'; // Example social icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f9f9f9", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info Section */}
          <Grid item xs={12} sm={3}>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <img
                src={RBMLOGOFULL}
                alt="TechBinderz Logo"
                style={{ height: 90 }}
              />
            </Box>
            <Typography variant="body2" style={{ fontWeight: 200 }}>
              RBM Infracon LTD is an idealistic attempt towards professionalized
              treatment to problems generally out broken during various Process
              of engineering, execution, testing, commissioning operation and
              maintenance, particularly in the field of mechanical and rotary
              equipment.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="/aboutus" color="inherit" variant="body2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" color="inherit" variant="body2">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" variant="body2">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Office Locations Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Office Locations
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Typography variant="body2">Singapore</Typography>
              </li>
              <li>
                <Typography variant="body2">Thailand</Typography>
              </li>
              <li>
                <Typography variant="body2">India</Typography>
              </li>
              <li>
                <Typography variant="body2">Malaysia</Typography>
              </li>
              <li>
                <Typography variant="body2">Abu Dhabi</Typography>
              </li>
            </ul>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#88c057",
                color: "#fff",
                marginTop: "10px",
              }}
            >
              Contact Us
            </Button>
          </Grid>

          {/* Additional Actions Section */}
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#88c057",
                color: "#fff",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              Corporate Brochure
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#88c057",
                color: "#fff",
                marginBottom: "10px",
                width: "100%",
              }}
            >
              ESSG Report 2024
            </Button>
            <Box display="flex" gap={1}>
              <FacebookIcon style={{ color: "#3b5998" }} />
              <LinkedInIcon style={{ color: "#0e76a8" }} />
              <YouTubeIcon style={{ color: "#ff0000" }} />
            </Box>
          </Grid>
        </Grid>

        {/* Divider and Copyright Section */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop={4}
          style={{ width: '100%' }}
        >
          <Box
            style={{
              margin: '8px 0',
              width: '100%',
              height: '1px',
              backgroundColor: '#dcdcdc',
            }}
          />
          <Typography
            variant="body2"
            style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}
          >
            © Copyright 2022 All Rights Reserved | Privacy Policy | SEO & Website
            Design by SEO Web Logistics
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
