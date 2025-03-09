import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Box,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Construction,
  ElectricBolt,
  LocalShipping,
  Engineering,
  CheckCircle,
} from "@mui/icons-material";
import "../common/common.css";
import engineering_service_1 from "../../assets/features/services/engineering_services/engineering_service (1).jpg";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";

const ProcurementServices: React.FC = () => {
  const theme = useTheme();

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
      <PageTitle imageUrl={engineering_service_1} tileContent="Procurement Services" />
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
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: themeColor,
          }}
        >
          Our Procurement Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[10],
                  },
                }}
                className="card-shadow"
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: theme.palette.grey[100],
                        mr: 2,
                        "&:hover": {
                          backgroundColor: themeColor,
                          "& .MuiSvgIcon-root": {
                            color: "white",
                          },
                        },
                      }}
                    >
                      {service.icon}
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: themeColor,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.benefits.map((benefit, idx) => (
                      <ListItem key={idx} sx={{ py: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircle sx={{ color: themeColor, fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit}
                          primaryTypographyProps={{
                            sx: { fontSize: "0.9rem" }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      <Divider sx={{ marginTop: 10}} />
      </Container>
    </>
  );
};

export default ProcurementServices;
