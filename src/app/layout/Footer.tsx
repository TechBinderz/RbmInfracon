// import React from 'react';
import RBMLOGOFULL from "../../assets/header/Rmb_logo_big.png"; // Default logo
import { Grid, Typography, Container, Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook"; // Example social icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { HashLink } from "react-router-hash-link";
import themeColor from "../../features/common/common";
import corporateBrochurePdf from "../../assets/footer/brochure.pdf";

// Custom scroll function to add offset for the fixed navbar
const scrollWithOffset = (el: HTMLElement) => {
  const yOffset = -80; // Adjust this value to the height of your navbar
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer
      id="footer"
      style={{ backgroundColor: "#f9f9f9", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info Section */}
          <Grid item xs={12} sm={3}>
            <HashLink
              smooth
              to="/#top"
              scroll={(el) => scrollWithOffset(el)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box display="flex" alignItems="center" marginBottom={2}>
                <img
                  src={RBMLOGOFULL}
                  alt="RBM Infracon Logo"
                  style={{ height: 90 }}
                />
              </Box>
            </HashLink>
            <Typography variant="body2">
              RBM Infracon LTD is a premier integrated industrial service
              provider, delivering innovative solutions in infrastructure
              development and project management with a focus on quality and
              sustainability.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: "600" }}>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <HashLink
                  smooth
                  to="/#top"
                  scroll={(el) => scrollWithOffset(el)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body1">Home</Typography>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/aboutus#top"
                  scroll={(el) => scrollWithOffset(el)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body1">About Us</Typography>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/services#top"
                  scroll={(el) => scrollWithOffset(el)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body1">Services</Typography>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/contact#top"
                  scroll={(el) => scrollWithOffset(el)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body1">Contact</Typography>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/investors#top"
                  scroll={(el) => scrollWithOffset(el)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body1">Investors</Typography>
                </HashLink>
              </li>
            </ul>
          </Grid>

          {/* Office Locations Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: "600" }}>
              Office Locations
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <HashLink
                  smooth
                  to="/contact#locations"
                  scroll={(el) => scrollWithOffset(el)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body1">India</Typography>
                </HashLink>
              </li>
              <li>
                <Typography variant="body1">Dubai</Typography>
              </li>
            </ul>
            <HashLink
              smooth
              to="/contact#top"
              scroll={(el) => scrollWithOffset(el)}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                style={{
                  display: "inline-block",
                  backgroundColor: themeColor,
                  color: "#fff",
                  marginBottom: "10px",
                  fontSize: "0.9em",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: "10px 16px",
                  borderRadius: "4px",
                }}
              >
                Contact Us
              </Button>
            </HashLink>
          </Grid>

          {/* Additional Actions Section */}
          <Grid item xs={12} sm={3}>
            <Button
              href={corporateBrochurePdf} // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              style={{
                display: "inline-block",
                backgroundColor: themeColor,
                color: "#fff",
                marginBottom: "10px",
                fontSize: "0.9em",
                width: "100%",
                textAlign: "center",
                textDecoration: "none",
                padding: "10px 16px", // Adjust padding for button appearance
                borderRadius: "4px", // Optional: to round the corners
              }}
            >
              Corporate Brochure
            </Button>
            {/* <Button
              href={corporateBrochurePdf} // Replace with your actual link
              target="_blank"
              variant="contained"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: themeColor,
                color: "#fff",
                marginBottom: "10px",
                width: "100%",
                fontSize: "0.9em",
                textAlign: "center",
                textDecoration: "none",
                padding: "10px 16px", // Adjust padding for button appearance
                borderRadius: "4px", // Optional: to round the corners
              }}
            >
              ESSG Report 2024
            </Button> */}
            <Box display="flex" gap={1}>
              <a
                href="https://www.facebook.com/profile.php?id=61555355951153"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon style={{ color: "#3b5998" }} />
              </a>
              <a
                href="https://www.linkedin.com/company/rbm-infracon-limited/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ color: "#0e76a8" }} />
              </a>
            </Box>
          </Grid>
        </Grid>

        {/* Divider and Copyright Section */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop={4}
          style={{ width: "100%" }}
        >
          <Box
            style={{
              margin: "8px 0",
              width: "100%",
              height: "1px",
              backgroundColor: "#dcdcdc",
            }}
          />
          <Typography
            variant="body2"
            style={{
              fontSize: "0.9em",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            &copy; Copyright 2024 All Rights Reserved | Privacy Policy | SEO &
            Website Design by TechBinderz
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
