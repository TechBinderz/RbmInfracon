import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo
import { Grid, Typography, Link, Container, Box } from "@mui/material";

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
                <Link href="/about" color="inherit" variant="body2">
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
            <Typography variant="body2">
              123 Tech Street <br />
              Silicon Valley, CA <br />
              USA
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
