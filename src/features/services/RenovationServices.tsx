import React from "react";
import {
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import {
  Engineering,
  Speed,
  EnergySavingsLeaf,
} from "@mui/icons-material";
import "../common/common.css";
import performance_1 from "../../assets/features/services/performance/performance (1).jpg";
import PageTitle from "../common/PageTitleDiv";
import AdditionalServices from "./components/AdditionalServices";
import ServiceGrid from "./components/ServiceGrid";

const RenovationServices: React.FC = () => {
  const services = [
    {
      title: "Plant Renovation & Upgradation",
      description: "Comprehensive modernization solutions for existing industrial setups, enhancing operational efficiency and productivity.",
      icon: <Engineering />,
      benefits: ["Facility Modernization", "Equipment Upgrades", "Infrastructure Enhancement", "Performance Optimization"],
    },
    {
      title: "Process Efficiency Improvement",
      description: "Implementation of cutting-edge technologies and methodologies to enhance production efficiency and streamline operations.",
      icon: <Speed />,
      benefits: ["Advanced Technology Integration", "Production Optimization", "Workflow Enhancement", "Quality Improvement"],
    },
    {
      title: "Energy Optimization & Sustainability",
      description: "Innovative solutions for energy efficiency and sustainable industrial operations.",
      icon: <EnergySavingsLeaf />,
      benefits: ["Energy Efficiency", "Resource Optimization", "Sustainable Practices", "Cost Reduction"],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={performance_1} tileContent="Renovation & Performance Enhancement" />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Overview Section */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              RBM specializes in industrial revamp and operational performance enhancement, delivering innovative solutions for plant modernization, process efficiency improvement, and sustainable operations. Our comprehensive approach ensures optimal facility performance while maintaining industry standards and environmental responsibility.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <Typography variant="h5" align="center" gutterBottom sx={{ mb: 3 }}>
          Our Renovation & Enhancement Services
        </Typography>
        <ServiceGrid services={services} title="Our Renovation & Enhancement Services" />
        
        <Divider sx={{ marginTop: 10}} />
        <AdditionalServices servicePathName="renovationServices" />
      </Container>
    </>
  );
};

export default RenovationServices;
