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
  Inventory,
  LocalShipping,
  Build,
  CheckCircle,
} from "@mui/icons-material";
import "../common/common.css";
import engineering_service_1 from "../../assets/features/services/engineering_services/engineering_service (1).jpg";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";

const WorkshopServices: React.FC = () => {
  const theme = useTheme();

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
      <PageTitle imageUrl={engineering_service_1} tileContent="Workshop & Warehouse Management" />
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
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: themeColor,
          }}
        >
          Our Workshop & Warehouse Services
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

export default WorkshopServices;
