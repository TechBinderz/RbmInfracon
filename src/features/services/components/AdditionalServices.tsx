import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import serviceCardData from "../ServiceCardData";
import { themeColor } from "../../common/common";

interface AdditionalServicesProps {
  servicePathName: string;
}

const AdditionalServices: React.FC<AdditionalServicesProps> = ({ servicePathName }) => {
  const service = serviceCardData.find((s) => s.pathName === servicePathName);
  
  if (!service?.additionalServices?.length) {
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: themeColor,
        }}
      >
        More About {service.title}
      </Typography>
      <Grid container spacing={4}>
        {service.additionalServices.map((subService, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Link
              to={`/services/${subService.pathName}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: (theme) => theme.shadows[10],
                  },
                }}
                className="card-shadow"
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={subService.image}
                  alt={subService.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: themeColor,
                        mb: 2,
                      }}
                    >
                      {subService.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {subService.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdditionalServices;
