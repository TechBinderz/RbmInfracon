import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo
import { Grid, Typography, Link, Container, Box } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import LocationOn icon

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info Section */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <img
                src={RBMLOGOFULL} // Replace with the path to your logo
                alt="TechBinderz Logo"
                style={{ height: 90 }}  // Adjust height as needed
              />
            </Box>
            <Typography
              variant="body1"
              style={{ marginTop: "8px", fontWeight: 200 }}
            >
              RBM Infracon LTD is an idealistic attempt towards professionalized
              treatment to problems generally out broken during various Process
              of engineering, execution, testing, commissioning operation and
              maintenance, particularly in the field of mechanical and rotary
              equipment.
            </Typography>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Navigation
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

          {/* Office Location Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Office Location
            </Typography>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <LocationOnIcon style={{ marginRight: 8 }} />
              <Typography variant="body2">
                Office No.-03, Snehdeep Residency, <br />
                Near Digjam Circle, Airforce Road, <br />
                Jamnagar – 361 006 (Gujarat) INDIA.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" marginTop={1}>
              <EmailIcon style={{ marginRight: 8 }} />
              <a href="mailto:info@rbminfracon.com">info@rbminfracon.com</a>
            </Box>
            <Box display="flex" alignItems="center" marginTop={1}>
              <PhoneIcon style={{ marginRight: 8 }} />
              +91 0288 2710463
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
