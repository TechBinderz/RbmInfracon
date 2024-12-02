import React from "react";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GroupIcon from "@mui/icons-material/Group";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import InsightsIcon from "@mui/icons-material/Insights";
import SupportIcon from "@mui/icons-material/Support"; // Updated to use correct import
import CustomerPage from "../common/CustomerPage";
import PageTitle from "../common/PageTitleDiv";
import "../common/common.css";
import themeColor from "../common/common";
// import about_us_image from "../../assets/features/about-us/about_us.png";
import about_us_image from "../../assets/features/about-us/about_us1.jpeg";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  return (
    <Card sx={{ mb: 2 }} className="card-shadow">
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          {icon}
          <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

const AboutUs: React.FC = () => {
  const cardData = [
    {
      icon: <AccessTimeIcon fontSize="large" sx={{ color: themeColor }} />,
      title: "Since 1992",
      description:
        "Over 30 years of expertise in construction, maintenance, and turnaround services.",
    },
    {
      icon: <EngineeringIcon fontSize="large" sx={{ color: themeColor }} />,
      title: "Our Expertise", 
      description:
        "A team of experienced professionals dedicated to executing contracts with precision and efficiency.",
    },
    {
      icon: <GroupIcon fontSize="large" sx={{ color: themeColor }} />,
      title: "Our Clients",
      description:
        "Trusted by industry leaders across multiple sectors, including Reliance, L&T, and more.",
    },
    {
      icon: <SafetyCheckIcon fontSize="large" sx={{ color: themeColor }} />,
      title: "Safety First",
      description:
        "Committed to maintaining the highest safety standards in all our projects.",
    },
    {
      icon: <InsightsIcon fontSize="large" sx={{ color: themeColor }} />,
      title: "Our Perspective",
      description:
        "Our perspective is shaped by our experiences, beliefs, and values. It influences how we perceive and interpret the world around us.",
    },
    {
      icon: <SupportIcon fontSize="large" sx={{ color: themeColor }} />,
      title: "Social Responsibility",
      description:
        "For the well-being of our community and the environment, we practice ethical and sustainable behaviors and actively work towards positive social change.",
    },
  ];

  return (
    <>
      <PageTitle
        imageUrl={about_us_image}
        tileContent="About Us"
      />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section - Content */}
          <Grid item xs={12} md={8} >
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              We are proud to be an ISO 9001:2015 accredited Company, and since
              our establishment in 1992, we have been a Specialist Contractor
              for Construction, Maintenance, and Turnaround services to Oil &
              Gas Refineries, Petrochemicals, Fertilizers, Gas Cracker Plants,
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
                    <CheckCircleOutlineIcon sx={{ color: themeColor }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ lineHeight: 1.6, marginTop: "10px" }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                We have been providing these services for the last 25 years to
                renowned companies like Reliance Industries Limited, Nayara
                Energy Limited (Formerly Known as Essar Oil Limited), Afcons
                Infrastructure Ltd., Chemie-Tech-DORC-Nigeria,
                Chemie-Tech-Malta, GPPL-Malta, YARA Fertilizers, TATA Projects,
                L&T, and many more.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Safety is given prime importance while executing the projects at
                site. The whole erection works are performed in accordance with
                the project-specific safety plan to avoid any safety hazard.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                <Box component="span" fontWeight="bold">
                  RBM Infracon Limited
                </Box>{" "}
                is well equipped with an experienced team of construction
                personnel and equipment to execute the contracts with in-house
                resources & facilities.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            {cardData.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </Grid>
        </Grid>
        <CustomerPage />
      </Container>
    </>
  );
};

export default AboutUs;
