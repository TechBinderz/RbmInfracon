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
  ChangeHistory,
  Settings,
  LocalFireDepartment,
  ViewColumn,
  Plumbing,
  CheckCircle,
} from "@mui/icons-material";
import "../common/common.css";
import bundle_puller_1 from "../../assets/features/services/bundlepuller/bundlepuller (2).jpg";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";
import AdditionalServices from "./components/AdditionalServices";

const TurnaroundServices: React.FC = () => {
  const theme = useTheme();

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
      <PageTitle imageUrl={bundle_puller_1} tileContent="Turnaround of Plants" />
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
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: themeColor,
          }}
        >
          Our Turnaround Services
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
      <AdditionalServices servicePathName="turnaroundServices" />
      </Container>
    </>
  );
};

export default TurnaroundServices;
