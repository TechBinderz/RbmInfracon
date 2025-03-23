import React from "react";
import { Typography, Grid, Container, Divider } from "@mui/material";
import {
  Architecture,
  Assessment,
  Settings,
  Timeline,
  ElectricBolt,
} from "@mui/icons-material";
import "../common/common.css";
import engineering_service_1 from "../../assets/features/services/engineering_service.jpg";
import PageTitle from "../common/PageTitleDiv";
import AdditionalServices from "./components/AdditionalServices";
import ServiceGrid from "./components/ServiceGrid";

const services = [
  {
    title: "Conceptual & Feasibility Studies",
    description:
      "Comprehensive assessment of technical and financial viability for your projects, ensuring informed decision-making.",
    icon: <Assessment sx={{ fontSize: 40 }} />,
    benefits: ["Assessing technical", "Financial Viability"],
  },
  {
    title: "Detailed Engineering & Design",
    description:
      "Expert mechanical, civil, structural, and electrical engineering solutions tailored to your specific requirements.",
    icon: <Architecture sx={{ fontSize: 40 }} />,
    benefits: ["Mechanical", "Civil", "Structural", "Electrical Engineering"],
  },
  {
    title: "Process Optimization",
    description: "Enhancing system efficiency and productivity.",
    icon: <Settings sx={{ fontSize: 40 }} />,
    benefits: ["Efficiency Improvement", "Performance Analysis"],
  },
  {
    title: "Project Planning & Development",
    description: "Strategic project execution planning.",
    icon: <Timeline sx={{ fontSize: 40 }} />,
    benefits: ["Resource Planning", "Timeline Management", "Quality Control"],
  },
  {
    title: "Electrical & Instrumentation Engineering",
    description:
      "Ensuring seamless integration of electrical systems and controls.",
    icon: <ElectricBolt sx={{ fontSize: 40 }} />,
    benefits: [
      "System Integration",
      "Safety Compliance",
      "Performance Monitoring",
    ],
  },
];

const EngineeringServices: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={engineering_service_1} tileContent="Engineering" />
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
              RBM offers comprehensive engineering solutions that ensure
              efficient, cost-effective, and high-quality project engineering.
              Our team of experienced engineers and technical experts delivers
              innovative solutions across various industrial sectors.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <ServiceGrid services={services} title="Our Engineering Services" />

        <Divider sx={{ marginTop: 10 }} />
        <AdditionalServices servicePathName="engineeringServices" />
      </Container>
    </>
  );
};

export default EngineeringServices;
