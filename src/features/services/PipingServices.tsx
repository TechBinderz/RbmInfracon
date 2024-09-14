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
import "../common/common.css"

const PipingServices: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="Piping Services"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        {/* <Typography variant="h4" gutterBottom>
          Precision Piping Services
        </Typography> */}
        <Grid container spacing={3} sx={{marginBottom:3}}>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              RBM Infracon specializes in precision Piping Services, offering
              fabrication and erection solutions for carbon steel (CS),
              stainless steel (SS), and alloy steel systems.
            </Typography>
            <Typography paragraph>
              Our skilled team ensures industry-standard installation and
              alignment, utilizing advanced techniques for aboveground and
              underground projects.
            </Typography>
            <Typography paragraph>
              We ensure durability, safety, and efficiency in all our projects.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services:
            </Typography>
            <ul>
              <li>Fabrication and Erection of Structural Work</li>
              <li>
                Installation of Aboveground and Underground Piping Systems
              </li>
              <li>ARC Maintenance of Refineries and Petrochemicals</li>
              <li>Turnaround (Shutdown) Services</li>
              <li>Blasting & Painting</li>
              <li>Insulation and Refractory Work</li>
              <li>Electrical and Instrumentation</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="350"
                image="https://picsum.photos/500/300?random=3"
                alt="Piping Services"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/500/300?random=1"
                alt="Piping Installation"
              />
              <CardContent>
                <Typography variant="h6" component="div">
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
                image="https://picsum.photos/500/300?random=2"
                alt="Piping Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
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
