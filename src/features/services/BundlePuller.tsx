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
import bundle_puller_1 from "../../assets/features/services/bundlepuller/bundlepuller (1).jpg";
import bundle_puller_2 from "../../assets/features/services/bundlepuller/bundlepuller (2).jpg";
import bundle_puller_3 from "../../assets/features/services/bundlepuller/bundlepuller (3).jpg";
import bundle_puller_4 from "../../assets/features/services/bundlepuller/bundlepuller (4).jpg";

const BundlePuller: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={bundle_puller_1}
        tileContent="Bundle Puller"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Bundle Puller Solutions
            </Typography>
            <Typography variant="body1" paragraph>
              We provide a variety of services related to Bundle Puller equipment. Our skilled technicians are well-versed in the installation, operation, and maintenance of Bundle Puller systems. Their expertise ensures the safe and efficient extraction and replacement of heat exchanger bundles. Recognizing the importance of minimizing downtime and maximizing productivity, we prioritize delivering high-quality services in a timely manner.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                className="large"
                image={bundle_puller_2}
                alt="Bundle Puller Service"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                className="small"
                image={bundle_puller_3}
                alt="Safe Extraction"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Safe Extraction
                </Typography>
                <Typography variant="body1" paragraph>
                  Expert handling to ensure the safe and efficient removal of heat exchanger bundles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                className="small"
                image={bundle_puller_4}
                alt="Timely Maintenance"
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Timely Maintenance
                </Typography>
                <Typography variant="body1" paragraph>
                  Regular maintenance services to ensure reliable performance and reduce downtime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BundlePuller;
