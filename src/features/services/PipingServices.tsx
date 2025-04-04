import React from "react";
import PageTitle from "../common/PageTitleDiv";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import "../common/common.css";
import piping_service_1 from "../../assets/features/services/piping/piping_service (1).jpg";
import piping_service_2 from "../../assets/features/services/piping/piping_service (2).jpg";
import piping_service_3 from "../../assets/features/services/piping/piping_service (3).jpg";
import piping_service_4 from "../../assets/features/services/piping/piping_service (4).jpg";

const PipingServices: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={piping_service_1} tileContent="Piping" />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              RBM Infracon Limited has capabilities for complete piping fabrication and erection in the oil & gas, petrochemicals, power generation, refineries and process plants industries. We work with a broad selection of materials including Carbon Steel, Stainless Steel, Alloy Steel, Duplex, and performance alloys such as Inconel/Nickel that are used in industrial applications due to their strength and resistance to corrosion. Custom fabrication, erection, welding, and extensive quality assurance on the materials are performed and in strict compliance with international standards ASME, API, and ISO.
            </Typography>
            <Typography variant="body1" paragraph>
              Focusing on precision, safety, and productivity, the company offers piping welding, NDT, hydro testing, and commissioning needed for piping system reliability. Due to the combination of advanced equipment, highly skilled personnel, and compliance to all HSE, Quality and legal regulations, we are able to provide quality formulated completed Units of complicated piping systems. 
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={400}
                image={piping_service_2}
                alt="Piping Services"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={piping_service_3}
                alt="Piping Installation"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Piping Installation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our team performs precise installation for various piping
                  systems, ensuring optimal functionality and safety.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={piping_service_4}
                alt="Piping Maintenance"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Piping Maintenance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Comprehensive maintenance services to extend the lifespan of
                  your piping systems and ensure continued efficiency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PipingServices;
