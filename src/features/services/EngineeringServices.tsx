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
  Architecture,
  Assessment,
  Settings,
  Timeline,
  ElectricBolt,
  CheckCircle,
} from "@mui/icons-material";
import "../common/common.css";
import engineering_service_1 from "../../assets/features/services/engineering_services/engineering_service (1).jpg";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";

const EngineeringServices: React.FC = () => {
  const theme = useTheme();

  const services = [
    {
      title: "Conceptual & Feasibility Studies",
      description: "Comprehensive assessment of technical and financial viability for your projects, ensuring informed decision-making.",
      icon: <Assessment sx={{ fontSize: 40 }} />,
      benefits: ["Assessing technical", "Financial Viability"],
    },
    {
      title: "Detailed Engineering & Design",
      description: "Expert mechanical, civil, structural, and electrical engineering solutions tailored to your specific requirements.",
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
      description: "Ensuring seamless integration of electrical systems and controls.",
      icon: <ElectricBolt sx={{ fontSize: 40 }} />,
      benefits: ["System Integration", "Safety Compliance", "Performance Monitoring"],
    },
  ];

  return (
    <>
      <PageTitle imageUrl={engineering_service_1} tileContent="Engineering" />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Overview Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              RBM offers comprehensive engineering solutions that ensure efficient, cost-effective, and high-quality project engineering. Our team of experienced engineers and technical experts delivers innovative solutions across various industrial sectors.
            </Typography>
          </Grid>
        </Grid>

        {/* Services Grid */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: "bold",
            color: themeColor,
          }}
        >
          Our Engineering Services
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

export default EngineeringServices;
