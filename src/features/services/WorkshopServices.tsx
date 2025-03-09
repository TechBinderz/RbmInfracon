import React from "react";
import {
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import {
  Inventory,
  LocalShipping,
  Build,
} from "@mui/icons-material";
import "../common/common.css";
import bundle_puller_1 from "../../assets/features/services/bundlepuller/bundlepuller (2).jpg";
import PageTitle from "../common/PageTitleDiv";
import AdditionalServices from "./components/AdditionalServices";
import ServiceGrid from "./components/ServiceGrid";

const WorkshopServices: React.FC = () => {
  const services = [
    {
      title: "Inventory & Storage Management",
      description: "Comprehensive inventory control and storage solutions for efficient warehouse operations.",
      icon: <Inventory sx={{ fontSize: 40 }} />,
      benefits: ["Inventory Tracking", "Storage Optimization", "Stock Management", "Space Utilization"],
    },
    {
      title: "Material Handling Solutions",
      description: "Advanced material handling equipment including Idlers, Rollers, and Conveyor Belts for seamless operations.",
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      benefits: ["Idlers & Rollers", "Conveyor Belts", "Material Transport", "Loading Solutions"],
    },
    {
      title: "Equipment Repair & Maintenance",
      description: "Professional maintenance and repair services to ensure optimal equipment performance and longevity.",
      icon: <Build sx={{ fontSize: 40 }} />,
      benefits: ["Preventive Maintenance", "Equipment Repairs", "Performance Optimization", "Regular Inspections"],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={bundle_puller_1} tileContent="Workshop & Warehouse Management" />
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
              RBM ensures streamlined warehouse and material handling operations with comprehensive management solutions. Our integrated approach combines efficient inventory control, advanced material handling equipment, and professional maintenance services to optimize your operational workflow.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <ServiceGrid services={services} title="Our Workshop & Warehouse Services" />
        
        <Divider sx={{ marginTop: 10}} />
        <AdditionalServices servicePathName="workshopServices" />
      </Container>
    </>
  );
};

export default WorkshopServices;
