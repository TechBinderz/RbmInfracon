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
  LocalShipping,
  Engineering,
  DirectionsCar,
  CheckCircle,
} from "@mui/icons-material";
import "../common/common.css";
import heavy_lifting from "../../assets/features/services/heavy_lifting.jpg";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";

const LogisticsServices: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Heavy Equipment Transport & Installation",
      description: "Professional transport and installation services for heavy industrial equipment with comprehensive safety measures.",
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
      description: "Expert rigging and lifting services for heavy equipment and industrial components.",
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
      description: "Flexible leasing options for heavy equipment and specialized machinery to meet your project needs.",
      icon: <DirectionsCar sx={{ fontSize: 40 }} />,
      benefits: [
        "Diverse Equipment Fleet",
        "Flexible Lease Terms",
        "Maintenance Support",
        "Technical Assistance",
      ],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={heavy_lifting} tileContent="Heavy Equipment Logistics" />
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
              RBM provides end-to-end heavy equipment transport and logistics solutions, ensuring safe and efficient handling of your valuable industrial assets. Our comprehensive services cover everything from equipment transport and installation to specialized rigging solutions and flexible equipment leasing options.
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
          Our Logistics Services
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

export default LogisticsServices;
