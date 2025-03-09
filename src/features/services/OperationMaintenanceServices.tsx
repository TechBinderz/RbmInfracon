import React from "react";
import {
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import {
  Business,
  Engineering,
  Science,
} from "@mui/icons-material";
import "../common/common.css";
import operation_maintenance_services from "../../assets/features/services/operation_maintenance_services.jpg";
import PageTitle from "../common/PageTitleDiv";
import AdditionalServices from "./components/AdditionalServices";
import ServiceGrid from "./components/ServiceGrid";

const OperationMaintenanceServices: React.FC = () => {
  const services = [
    {
      title: "Annual Rate Contracts",
      description: "Comprehensive servicing for various industrial plants including refineries, petroleum, cement, fertilizer, power, and coke oven plants.",
      icon: <Business sx={{ fontSize: 40 }} />,
      benefits: [
        "Refineries & Petroleum Plants",
        "Cement & Fertilizer Plants",
        "Power Plants",
        "Coke Oven Plants",
        "Experience with Reliance, Nayara, Tata",
      ],
    },
    {
      title: "Crude Wells Operation & Maintenance",
      description: "Expert services for revitalization and maintenance of crude wells using advanced technologies.",
      icon: <Engineering sx={{ fontSize: 40 }} />,
      benefits: [
        "Well Revitalization",
        "Workover Operations",
        "Advanced Extraction Tech",
        "Operational Efficiency",
      ],
    },
    {
      title: "Inspection & Testing Services",
      description: "Comprehensive non-destructive testing and inspection services ensuring structural integrity and safety.",
      icon: <Science sx={{ fontSize: 40 }} />,
      benefits: [
        "Non-Destructive Testing (NDT)",
        "Dry Penetration Testing (DPT)",
        "Weld Joint Testing",
        "Multiple Testing Methods",
      ],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={operation_maintenance_services} tileContent="Operation, Maintenance & Inspection" />
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
              RBM provides integrated Operation & Maintenance services to ensure asset longevity and operational efficiency. Our comprehensive range of services includes annual rate contracts with major industrial plants, crude well operations, and advanced inspection services. We pride ourselves on our partnerships with industry leaders and our commitment to maintaining the highest standards of quality and safety.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <ServiceGrid services={services} title="Our O&M and Inspection Services" />
        
        <Divider sx={{ marginTop: 10}} />
        <AdditionalServices servicePathName="operationMaintenanceServices" />
      </Container>
    </>
  );
};

export default OperationMaintenanceServices;
