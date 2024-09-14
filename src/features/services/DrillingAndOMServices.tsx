import React from "react";
import PageTitle from "../common/PageTitleDiv";
import { Typography, Grid, Card, CardMedia, CardContent, Container } from "@mui/material";

const DrillingAndOMServices: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="Drilling And O&M Services"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              RBM Infracon extends its expertise to drilling and Operations and Maintenance (O&M)
              services for crewed wells. With a wealth of experience and a commitment to excellence,
              we manage intricate processes to ensure the reliability, safety, and efficiency of well operations.
            </Typography>
            <Typography paragraph>
              Our team of skilled professionals brings together technical know-how and operational
              precision to deliver top-notch services that meet the diverse needs of our clients. Whether
              it’s initial drilling or ongoing maintenance, we adhere to strict industry standards to
              ensure smooth and sustainable operations.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Features:
            </Typography>
            <ul>
              <li>
                Comprehensive drilling services with a focus on precision and safety.
              </li>
              <li>
                Expert Operations & Maintenance (O&M) services tailored to the unique needs of crewed wells.
              </li>
              <li>
                Focus on maximizing operational efficiency while minimizing downtime.
              </li>
              <li>
                Adherence to strict industry regulations and safety protocols.
              </li>
              <li>
                Skilled workforce with extensive experience in managing both small and large-scale projects.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="350"
                image="https://picsum.photos/500/300?random=7"
                alt="Drilling Operations"
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
                image="https://picsum.photos/500/300?random=8"
                alt="Well Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Well Maintenance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Routine maintenance to ensure well systems continue to operate at peak efficiency, reducing risks and operational delays.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/500/300?random=9"
                alt="Emergency Well Repairs"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Emergency Well Repairs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Swift and reliable repair services to address critical well issues, ensuring minimal downtime and continued safe operation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DrillingAndOMServices;
