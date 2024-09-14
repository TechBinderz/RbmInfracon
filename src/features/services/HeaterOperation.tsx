import React from "react";
import PageTitle from "../common/PageTitleDiv";
import { Typography, Grid, Card, CardMedia, CardContent, Container } from "@mui/material";

const HeaterOperation: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="Heater Operation"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              In Heater Operation, RBM Infracon excels as a reliable partner for
              top-notch Operation and Maintenance (O&M) services. Our dedicated
              team specializes in maintaining heating systems to ensure they
              function optimally, providing uninterrupted warmth and comfort in
              residential, commercial, and industrial spaces.
            </Typography>
            <Typography paragraph>
              We prioritize efficiency and safety in every project, utilizing
              advanced technology and a highly skilled workforce to monitor,
              manage, and troubleshoot heating systems. Whether it’s routine
              maintenance or emergency repairs, our comprehensive services are
              designed to minimize downtime and maximize performance.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Features:
            </Typography>
            <ul>
              <li>
                Expertise in Operation & Maintenance (O&M) services for all types of heating systems.
              </li>
              <li>
                Dedicated teams ensuring optimal performance and energy efficiency.
              </li>
              <li>
                Specialized support for residential, commercial, and industrial heating systems.
              </li>
              <li>
                Quick response times for both routine maintenance and emergency repairs.
              </li>
              <li>
                Focus on safety and sustainability in all operational processes.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="350"
                image="https://picsum.photos/500/300?random=4"
                alt="Heater Operation"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/500/300?random=5"
                alt="Heater Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Heater Maintenance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Routine maintenance services to keep your heating systems in peak condition, reducing the likelihood of unexpected breakdowns.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/500/300?random=6"
                alt="Emergency Heater Repair"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Emergency Heater Repair
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fast and reliable repair services to address any urgent issues, ensuring minimal downtime and quick resolution.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeaterOperation;
