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
import RBMLOGOFULL from '../../assets/header/Rmb_logo_big.png'; // Default logo
import '../common/common.css';
import PageTitle from '../common/PageTitleDiv';
import themeColor from "../common/common";

// Management team data
const managementTeamList = [
  { title: "Managing Director", name: "Mr. J.B. Mani", emails: ["md@rbminfracon.com", "jbmani6212@gmail.com"] },
  { title: "Project Head", name: "Mr. Ranjay Kumar Roy", emails: ["ranjankumar@rbminfracon.com"] },
  { title: "HR & Admin-Central", name: "Mr. Santosh Gauda", emails: ["hr@rbminfracon.com"] },
  { title: "Account & Finance-Central", name: "Mr. Pankaj Kumar Sinha", emails: ["cfo@rbminfracon.com"] },
  { title: "Project Coordinator/Manager - Planning", name: "Mr. Aditya Mani", emails: ["planning@rbminfracon.com"], phone: "+91-96625494820" },
  { title: "Project Coordinator/Manager - Execution", name: "Mr. Kunal Soni", emails: ["execution@rbminfracon.com"], phone: "+91-96625494820" },
  { title: "Site Manager - RIL_IDC_Nagpur", name: "Mr. Raju Mani Tripathi", emails: ["rajeevrbminfracon@gmail.com"], phone: "+91-8511139662" },
  { title: "Site Manager - L&T_IOCL_Paradeep", name: "Mr. Shriniwash Tripathi", phone: "9712397606 / 7990109213" },
  { title: "Site Manager - Yara Fertilizer_Babralla", name: "P. Subhash Kartha", emails: ["rbmbabrala@gmail.com"], phone: "+91-7017599964, 09904018311" },
  { title: "Site Manager - RIL_Jamnagar", name: "Mr. Shriniwash Mishra", emails: ["shriniwashrbm@gmail.com"], phone: "+91-9825032634" },
  { title: "Site Manager - Nayara_Jamnagar", name: "Mr. Ramniwas Mishra", emails: ["mishraramniwashrbminfracon@gmail.com"] },
];

const ContactUs: React.FC = () => (
  <>
    <PageTitle imageUrl="https://picsum.photos/1920/1080" tileContent="Contact Us" />
    <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
      <Grid container spacing={4}>
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Enter Details
          </Typography>
          <Grid container spacing={2}>
            {['Your name', 'Your email address', 'Company', 'Phone', 'Country', 'Subject'].map((label, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  fullWidth
                  required
                  label={label}
                  id={`contact-${label.replace(/\s+/g, '-').toLowerCase()}`}
                  variant="outlined"
                  type={label.includes("email") ? "email" : label.includes("Phone") ? "tel" : "text"}
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
                control={<Checkbox color="default" name="agree" sx={{ color: themeColor }} />}
                label={
                  <Typography variant="body2">
                    I agree to the terms and conditions of RBM Infracon Limited{" "}
                    <Link href="#" underline="always" sx={{ color: themeColor }}>privacy policy</Link>.
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
          <Typography variant="h3" gutterBottom> Get in Touch </Typography>
          <Typography variant="h4" gutterBottom sx={{color: themeColor}}> Corporate Office </Typography>

          {/* Address with Icon */}
          <Box display="flex" alignItems="center" sx={{ marginBottom: "16px" }}>
            <LocationOnIcon sx={{ marginRight: "8px", color: themeColor }} />
            <Typography fontSize="18px" variant="body2">
              03, Snehdeep Residency, Office No. 3, Digjam Circle, Jamnagar, Gujarat, PIN Code: 361006
            </Typography>
          </Box>

          {/* Email and Phone Number */}
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: "16px" }}>
            {/* Email with Icon (left) */}
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ marginRight: "8px", color: themeColor }} />
              <Typography fontSize="18px" variant="body2">
                <a href="mailto:info@rbminfracon.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  info@rbminfracon.com
                </a>
              </Typography>
            </Box>

            {/* Phone Number with Icon (right) */}
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ marginRight: "8px", color: themeColor }} />
              <Typography fontSize="18px" variant="body2">
                <a href="tel:+9102882710463" style={{ textDecoration: 'none', color: 'inherit' }}>
                  +91 0288 2710463
                </a>
              </Typography>
            </Box>
          </Box>

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

      {/* Management Team Section */}
      <Grid container spacing={4} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} sx={{ padding: { xs: "0px 20px", sm: "0px 40px" } }}>
          <Typography variant="h4" gutterBottom>Our Management Team</Typography>
          <Box
            sx={{
              borderBottom: "2px solid #000", // Customize the color and thickness as needed
              marginBottom: "20px",
            }}
          />
        </Grid>
        <Grid container spacing={4}>
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
                className="card-shadow"
                sx={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{member.title}</Typography>
                  <Typography variant="body1" fontWeight="bold">{member.name}</Typography>
                  {member.emails?.map((email, i) => (
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
                  )}
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
