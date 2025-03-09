import React from "react";
import {
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import {
  Construction,
  ElectricBolt,
  LocalShipping,
  Engineering,
} from "@mui/icons-material";
import "../common/common.css";
import procurment_services_1 from "../../assets/features/services/procurment_services.jpg";
import PageTitle from "../common/PageTitleDiv";
import AdditionalServices from "./components/AdditionalServices";
import ServiceGrid from "./components/ServiceGrid";

const ProcurementServices: React.FC = () => {
  const services = [
    {
      title: "Mechanical Equipment & Materials",
      description: "High-quality procurement of pipes, valves, structural steel, and industrial equipment from trusted suppliers.",
      icon: <Engineering sx={{ fontSize: 40 }} />,
      benefits: [
        "IBR Compliant Pipes & Fittings",
        "Advanced Valve Systems",
        "Structural Steel Solutions",
        "Material Handling Components",
        "Industrial Chemicals & Coatings",
        "Pumps, Turbines & Boilers",
      ],
    },
    {
      title: "Civil and Electrical Instruments",
      description: "Comprehensive procurement of construction materials and structural components meeting industrial specifications.",
      icon: <Construction sx={{ fontSize: 40 }} />,
      benefits: [
        "Structural Steel",
        "TMT Bars & Rods",
        "Ready-Mix Concrete (RMC)",
        "Cement & Aggregates",
      ],
    },
    {
      title: "Electrical & Instrumentation",
      description: "State-of-the-art electrical and automation equipment for industrial applications.",
      icon: <ElectricBolt sx={{ fontSize: 40 }} />,
      benefits: [
        "Cables & Wires",
        "Switchgear & Control Panels",
        "Transformers & Substations",
        "Instrumentation Equipment",
        "Automation Systems",
        "Electrical Accessories",
      ],
    },
    {
      title: "Oil & Gas Equipment",
      description: "Specialized procurement of exploration and drilling equipment for the oil and gas industry.",
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      benefits: [
        "Workover & Drilling Rigs",
        "SRPs & Sucker Rods",
        "Industrial Pumps",
        "Seamless Tubing",
        "Fittings & Accessories",
      ],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={procurment_services_1} tileContent="Procurement Services" />
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
              RBM specializes in the procurement of high-quality materials and equipment to support construction and operational activities. We maintain strong relationships with domestic and international suppliers/manufacturers to ensure reliable sourcing of industrial equipment, materials, and components that meet the highest quality standards and specifications.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <ServiceGrid services={services} title="Our Procurement Services" />
        
        <Divider sx={{ marginTop: 10}} />
        <AdditionalServices servicePathName="procurementServices" />
      </Container>
    </>
  );
};

export default ProcurementServices;
