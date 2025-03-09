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
  Engineering,
  Speed,
  EnergySavingsLeaf,
  CheckCircle,
} from "@mui/icons-material";
import "../common/common.css";
import performance_1 from "../../assets/features/services/performance/performance (1).jpg";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";
import AdditionalServices from "./components/AdditionalServices";

const RenovationServices: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Plant Renovation & Upgradation",
      description: "Comprehensive modernization solutions for existing industrial setups, enhancing operational efficiency and productivity.",
      icon: <Engineering sx={{ fontSize: 40 }} />,
      benefits: ["Facility Modernization", "Equipment Upgrades", "Infrastructure Enhancement", "Performance Optimization"],
    },
    {
      title: "Process Efficiency Improvement",
      description: "Implementation of cutting-edge technologies and methodologies to enhance production efficiency and streamline operations.",
      icon: <Speed sx={{ fontSize: 40 }} />,
      benefits: ["Advanced Technology Integration", "Production Optimization", "Workflow Enhancement", "Quality Improvement"],
    },
    {
      title: "Energy Optimization & Sustainability",
      description: "Innovative solutions for energy efficiency and sustainable industrial operations.",
      icon: <EnergySavingsLeaf sx={{ fontSize: 40 }} />,
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
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
              }}
            >
              RBM specializes in industrial revamp and operational performance enhancement, delivering innovative solutions for plant modernization, process efficiency improvement, and sustainable operations. Our comprehensive approach ensures optimal facility performance while maintaining industry standards and environmental responsibility.
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
          Our Renovation & Enhancement Services
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
      <AdditionalServices servicePathName="renovationServices" />
      </Container>
    </>
  );
};

export default RenovationServices;
