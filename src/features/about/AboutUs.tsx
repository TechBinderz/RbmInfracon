// AboutUs.tsx
import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GroupIcon from "@mui/icons-material/Group";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import CustomerPage from "../common/CustomerPage";
import PageTitle from "../common/PageTitleDiv";

const AboutUs: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl='https://picsum.photos/1920/1080' tileContent='About Us' />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section - Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              We are proud to be an ISO 9001:2015 accredited Company, and since
              our establishment in 1992, we have been a Specialist Contractor for
              Construction, Maintenance, and Turnaround services to Oil & Gas
              Refineries, Petrochemicals, Fertilizers, Gas Cracker Plants,
              Coal/Gas/WHR-based Power Plants, Chemicals, Cement, Fertilizers,
              Sugar Plants, Paper Plants, Irrigation, and other allied sectors.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
            >
              Presently we undertake the following activities:
            </Typography>
            <List sx={{ paddingLeft: { xs: 0, sm: 2 } }}>
              {[
                "Fabrication & Erection of Structural Work on EPC Basis.",
                "Tankage Work.",
                "Fabrication and erection of Piping such as CS/ SS/ Alloy steel including above ground and underground.",
                "ARC Maintenance of Refineries, Petrochemicals, Fertilizers Plant, etc.",
                "Turnaround (Shutdown) of Power, Refineries, and Petrochemicals, etc.",
                "Blasting & Painting for various industries.",
                "Insulation and Refractory work.",
                "Electrical and instrumentation.",
                "Wagon Tipplers, conveying system (Raw Material Handling, etc).",
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  />
                </ListItem>
              ))}
            </List>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              We have been providing these services for the last 25 years to
              renowned companies like Reliance Industries Limited, Nayara Energy
              Limited(Formerly Known as Essar Oil Limited), Afcons Infrastructure
              Ltd., Chemie-Tech-DORC-Nigeria, Chemie-Tech-Malta, GPPL- Malta, YARA
              Fertilizers, TATA Projects, L&T and many more. Safety is given prime
              importance while executing the projects at site. The whole erection
              works are performed in accordance to the project specific safety
              plan to avoid any safety hazard. RBM Infracon Limited. is well
              equipped with experienced team of construction personnel and
              equipment’s to execute the contracts with in house resources &
              facilities.
            </Typography>
          </Grid>

          {/* Right Section - Cards */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <AccessTimeIcon
                    fontSize="large"
                    sx={{ color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    Since 1992
                  </Typography>
                </Box>
                <Typography variant="body2">
                  Over 30 years of expertise in construction, maintenance, and
                  turnaround services.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <EngineeringIcon
                    fontSize="large"
                    sx={{ color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    Our Expertise
                  </Typography>
                </Box>
                <Typography variant="body2">
                  A team of experienced professionals dedicated to executing
                  contracts with precision and efficiency.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <GroupIcon
                    fontSize="large"
                    sx={{ color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    Our Clients
                  </Typography>
                </Box>
                <Typography variant="body2">
                  Trusted by industry leaders across multiple sectors, including
                  Reliance, L&T, and more.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <SafetyCheckIcon
                    fontSize="large"
                    sx={{ color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    Safety First
                  </Typography>
                </Box>
                <Typography variant="body2">
                  Committed to maintaining the highest safety standards in all our
                  projects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <CustomerPage />
      </Container>
    </>
  );
};

export default AboutUs;
