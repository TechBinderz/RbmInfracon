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
import hydrojetting_1 from "../../assets/features/services/hydrojetting/hydrojetting (1).jpg";
import hydrojetting_2 from "../../assets/features/services/hydrojetting/hydrojetting (2).jpg";
import hydrojetting_3 from "../../assets/features/services/hydrojetting/hydrojetting (3).jpg";
import hydrojetting_4 from "../../assets/features/services/hydrojetting/hydrojetting (4).jpg";

const Hydrojetting: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={hydrojetting_1} tileContent="Hydrojetting" />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Our Hydrojetting Machine services are crafted to offer
              comprehensive and efficient cleaning solutions for a range of
              industrial applications.
            </Typography>
            <Typography variant="body1" paragraph>
              With cutting-edge technology and state-of-the-art equipment at our
              disposal, our team provides high-pressure water jetting services.
              This specialized service is designed to eliminate stubborn
              deposits, scale, and contaminants from various surfaces, pipes,
              and equipment. We place a strong emphasis on safety, environmental
              sustainability, and achieving exceptional results, all geared
              towards assisting our clients in optimizing their operations.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={300}
                image={hydrojetting_2}
                alt="Hydrojetting Service"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={hydrojetting_3}
                alt="Surface Cleaning"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Surface Cleaning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  High-pressure water jets effectively remove tough deposits,
                  grime, and contaminants from industrial surfaces.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={hydrojetting_4}
                alt="Pipe and Equipment Cleaning"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Pipe and Equipment Cleaning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precision cleaning of pipes and machinery to enhance
                  operational efficiency and reduce downtime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hydrojetting;
