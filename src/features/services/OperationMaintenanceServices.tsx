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
  Business,
  Engineering,
  Science,
  CheckCircle,
} from "@mui/icons-material";
import "../common/common.css";
import engineering_service_1 from "../../assets/features/services/engineering_services/engineering_service (1).jpg";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";

const OperationMaintenanceServices: React.FC = () => {
  const theme = useTheme();

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
      <PageTitle imageUrl={engineering_service_1} tileContent="Operation, Maintenance & Inspection" />
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
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: themeColor,
          }}
        >
          Our O&M and Inspection Services
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

export default OperationMaintenanceServices;
