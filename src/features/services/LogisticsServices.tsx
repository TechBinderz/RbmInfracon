import React from "react";
import { Container, Grid, Typography, Divider } from "@mui/material";
import { LocalShipping, Engineering, DirectionsCar } from "@mui/icons-material";
import heavy_lifting from "../../assets/features/services/heavy_lifting.jpg";
import PageTitle from "../common/PageTitleDiv";
import ServiceGrid from "./components/ServiceGrid";
import AdditionalServices from "./components/AdditionalServices";

const services = [
  {
    title: "Heavy Equipment Transport & Installation",
    description:
      "Professional transport and installation services for heavy industrial equipment with comprehensive safety measures.",
    icon: <LocalShipping sx={{ fontSize: 40 }} />,
    benefits: [
      "Specialized Transport Solutions",
      "Professional Installation",
      "Safety Compliance",
      "Experienced Team",
    ],
  },
  {
    title: "Rigging & Lifting Solutions",
    description:
      "Expert rigging and lifting services for heavy equipment and industrial components.",
    icon: <Engineering sx={{ fontSize: 40 }} />,
    benefits: [
      "Advanced Rigging Equipment",
      "Certified Operators",
      "Load Analysis",
      "Safe Operations",
    ],
  },
  {
    title: "Fleet & Equipment Leasing",
    description:
      "Flexible leasing options for heavy equipment and specialized machinery to meet your project needs.",
    icon: <DirectionsCar sx={{ fontSize: 40 }} />,
    benefits: [
      "Diverse Equipment Fleet",
      "Flexible Lease Terms",
      "Maintenance Support",
      "Technical Assistance",
    ],
  },
];

const LogisticsServices: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={heavy_lifting}
        tileContent="Heavy Equipment Logistics"
      />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Overview Section */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item>
            <Typography
              variant="subtitle1"
              align="center"
              paragraph
              sx={{ mx: "auto", mb: 6 }}
            >
              RBM provides end-to-end heavy equipment transport and logistics
              solutions, ensuring safe and efficient handling of your valuable
              industrial assets. Our comprehensive services cover everything
              from equipment transport and installation to specialized rigging
              solutions and flexible equipment leasing options.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <ServiceGrid services={services} title="Our Logistics Services" />

        <Divider sx={{ marginTop: 10 }} />
        <AdditionalServices servicePathName="logisticsServices" />
      </Container>
    </>
  );
};

export default LogisticsServices;
