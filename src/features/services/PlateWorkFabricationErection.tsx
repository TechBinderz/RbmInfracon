import React from "react";
import PageTitle from "../common/PageTitleDiv";
import { Typography, Grid, Card, CardMedia, CardContent, Container } from "@mui/material";

const PlateWorkFabricationErection: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="Plate Work Fabrication Erection"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              RBM Infracon offers comprehensive services for the fabrication, supply, and erection of
              platework structures. Our approach emphasizes superior quality and performance, ensuring
              that every project meets the highest standards of precision and durability.
            </Typography>
            <Typography paragraph>
              With a focus on delivering exceptional results, our team manages all aspects of plate
              work, from initial fabrication to final erection. We utilize advanced techniques and
              materials to handle complex projects efficiently and effectively, tailored to the specific
              requirements of our clients.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services:
            </Typography>
            <ul>
              <li>
                Comprehensive fabrication, supply, and erection of platework structures.
              </li>
              <li>
                Emphasis on superior quality and performance throughout the project lifecycle.
              </li>
              <li>
                Advanced techniques and high-grade materials for complex and large-scale projects.
              </li>
              <li>
                Tailored solutions to meet specific client requirements and industry standards.
              </li>
              <li>
                Skilled team ensuring precise execution and adherence to safety protocols.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="350"
                image="https://picsum.photos/500/300?random=13"
                alt="Plate Work Fabrication"
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
                image="https://picsum.photos/500/300?random=14"
                alt="Plate Work Supply"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Plate Work Supply
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reliable supply of high-quality platework materials to meet project demands and specifications.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/500/300?random=15"
                alt="Plate Work Erection"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Plate Work Erection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expert erection services ensuring precise installation and structural integrity of platework structures.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlateWorkFabricationErection;
