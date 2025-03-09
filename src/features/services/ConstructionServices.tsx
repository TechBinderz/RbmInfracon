import React from "react";
import {
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import {
  Plumbing,
  Construction,
  Foundation,
  LocalGasStation,
  Brush,
} from "@mui/icons-material";
import "../common/common.css";
import construction_service_1 from "../../assets/features/services/construction_services/construction_service (1).jpg";
import PageTitle from "../common/PageTitleDiv";
import AdditionalServices from "./components/AdditionalServices";
import ServiceGrid from "./components/ServiceGrid";

const ConstructionServices: React.FC = () => {
  const services = [
    {
      title: "Piping Fabrication & Erection",
      description: "Specialized fabrication and installation services for various materials including Carbon Steel, Stainless Steel, Alloy Steel, Duplex Steel, and Inconel/Nickel.",
      icon: <Plumbing sx={{ fontSize: 40 }} />,
      benefits: ["Carbon Steel", "Stainless Steel", "Alloy Steel", "Duplex Steel", "Inconel/Nickel"],
    },
    {
      title: "Structural Steel & Plate Fabrication",
      description: "Expert manufacturing and installation of industrial components including ducts, hoppers, chutes, shades, tanks, and chimneys.",
      icon: <Construction sx={{ fontSize: 40 }} />,
      benefits: ["Ducts", "Hoppers", "Chutes", "Tanks", "Chimneys"],
    },
    {
      title: "Civil Industrial Work",
      description: "Comprehensive civil construction solutions for industrial infrastructure.",
      icon: <Foundation sx={{ fontSize: 40 }} />,
      benefits: ["Foundations", "Buildings", "Road Construction", "Chimneys", "Industrial Structures"],
    },
    {
      title: "Oil & Gas Drilling",
      description: "State-of-the-art drilling solutions with advanced equipment for the oil and gas sector.",
      icon: <LocalGasStation sx={{ fontSize: 40 }} />,
      benefits: ["Advanced Equipment", "Comprehensive Solutions", "Industry Standards", "Safety Compliance"],
    },
    {
      title: "Grit Blasting & Painting",
      description: "Professional surface preparation and finishing services with scaffolding capabilities up to 20 meters.",
      icon: <Brush sx={{ fontSize: 40 }} />,
      benefits: ["Surface Preparation", "Painting", "Scaffolding up to 20m", "Quality Finishing"],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={construction_service_1} tileContent="Construction" />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Overview Section */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
              }}
            >
              RBM provides world-class construction services, ensuring adherence to international codes and best practices. Our comprehensive range of services covers everything from piping fabrication to industrial civil work, delivering excellence in every project.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <ServiceGrid services={services} title="Our Construction Services" />
        
        <Divider sx={{ marginTop: 10}} />
        <AdditionalServices servicePathName="constructionServices" />
      </Container>
    </>
  );
};

export default ConstructionServices;
