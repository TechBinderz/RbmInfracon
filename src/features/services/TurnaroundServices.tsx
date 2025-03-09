import React from "react";
import {
  Typography,
  Grid,
  Container,
  Divider,
} from "@mui/material";
import {
  ChangeHistory,
  Settings,
  LocalFireDepartment,
  ViewColumn,
  Plumbing,
} from "@mui/icons-material";
import "../common/common.css";
import hydrojetting_2 from "../../assets/features/services/hydrojetting/hydrojetting (2).jpg";
import PageTitle from "../common/PageTitleDiv";
import AdditionalServices from "./components/AdditionalServices";
import ServiceGrid from "./components/ServiceGrid";

const TurnaroundServices: React.FC = () => {
  const services = [
    {
      title: "Heat Exchangers & Vessels",
      description: "Comprehensive maintenance of heat exchangers and vessels including bundle handling and internal repairs.",
      icon: <ChangeHistory sx={{ fontSize: 40 }} />,
      benefits: [
        "Bundle Removal & Reinsertion",
        "Hydro Jetting",
        "Hydrotesting",
        "Manhole Operations",
        "Internal Scaffolding",
      ],
    },
    {
      title: "Fin-Fans & Reactors",
      description: "Expert maintenance of fin-fans and reactor systems ensuring optimal performance.",
      icon: <Settings sx={{ fontSize: 40 }} />,
      benefits: [
        "Tube Cleaning & Alignment",
        "Catalyst Removal",
        "Johnson Screen Repair",
        "Shell Repairs",
      ],
    },
    {
      title: "Boilers & Heaters",
      description: "Specialized services for boiler maintenance and heater systems in various industrial plants.",
      icon: <LocalFireDepartment sx={{ fontSize: 40 }} />,
      benefits: [
        "Refractory Work",
        "Tube Replacement",
        "Burner Maintenance",
        "Reformer Expertise",
      ],
    },
    {
      title: "Columns & Trays",
      description: "Professional handling of column internals and tray systems according to engineering specifications.",
      icon: <ViewColumn sx={{ fontSize: 40 }} />,
      benefits: [
        "Tray Removal & Installation",
        "Column Cleaning",
        "Engineering Compliance",
        "Performance Optimization",
      ],
    },
    {
      title: "Valve & PSV Services",
      description: "Critical maintenance of valves and pressure safety valves in industrial facilities.",
      icon: <Plumbing sx={{ fontSize: 40 }} />,
      benefits: [
        "Valve Overhauling",
        "PSV Maintenance",
        "Critical Component Service",
        "Safety Compliance",
      ],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={hydrojetting_2} tileContent="Turnaround of Plants" />
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
              RBM is a global leader in turnaround services for refineries, petrochemicals, and fertilizer plants. With over three decades of experience, we have successfully executed over 100 shutdowns lasting between 5 to 45 days. Our comprehensive approach ensures efficient maintenance and upgradation of all static equipment during plant turnarounds, maximizing operational efficiency and minimizing downtime.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <ServiceGrid services={services} title="Our Turnaround Services" />
        
        <Divider sx={{ marginTop: 10}} />
        <AdditionalServices servicePathName="turnaroundServices" />
      </Container>
    </>
  );
};

export default TurnaroundServices;
