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
  Paper,
} from "@mui/material";
import {
  Architecture,
  Assessment,
  Settings,
  Timeline,
  ElectricBolt,
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
    },
    {
      title: "Detailed Engineering & Design",
      description: "Expert mechanical, civil, structural, and electrical engineering solutions tailored to your specific requirements.",
      icon: <Architecture sx={{ fontSize: 40 }} />,
    },
    {
      title: "Process Optimization",
      description: "Advanced techniques to enhance system efficiency and productivity, maximizing operational performance.",
      icon: <Settings sx={{ fontSize: 40 }} />,
    },
    {
      title: "Project Planning & Development",
      description: "Strategic project execution planning to ensure seamless implementation and successful outcomes.",
      icon: <Timeline sx={{ fontSize: 40 }} />,
    },
    {
      title: "Electrical & Instrumentation Engineering",
      description: "Specialized solutions for seamless integration of electrical systems and controls.",
      icon: <ElectricBolt sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <>
      <PageTitle imageUrl={engineering_service_1} tileContent="Engineering" />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              maxWidth: "800px",
              mx: "auto",
              textAlign: "center",
              mb: 2,
            }}
          >
            RBM offers comprehensive engineering solutions that ensure efficient, cost-effective, and high-quality project engineering. Our team of experienced engineers and technical experts delivers innovative solutions across various industrial sectors.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[10],
                    "& .MuiIconButton-root": {
                      backgroundColor: themeColor,
                      color: "white",
                    },
                  },
                }}
              >
                <CardContent 
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.grey[100],
                      width: 80,
                      height: 80,
                      mb: 2,
                      transition: "all 0.3s ease-in-out",
                      "& .MuiSvgIcon-root": {
                        color: themeColor,
                      },
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
                    gutterBottom
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.2rem" },
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.875rem", sm: "0.9rem" },
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          component={Paper}
          elevation={3}
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.grey[50],
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              color: themeColor,
            }}
          >
            Why Choose Our Engineering Services?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mt: 2,
              lineHeight: 1.8,
            }}
          >
            We combine cutting-edge technology with industry best practices to provide engineering services that meet the highest standards of quality and safety. Our integrated approach ensures that every project is executed with precision and excellence.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default EngineeringServices;
