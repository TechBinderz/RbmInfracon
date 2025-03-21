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
import drilling_service_1 from "../../assets/features/services/drilling/drilling_service (1).jpg";
import drilling_service_2 from "../../assets/features/services/drilling/drilling_service (2).jpg";
import drilling_service_3 from "../../assets/features/services/drilling/drilling_service (3).jpg";
import drilling_service_4 from "../../assets/features/services/drilling/drilling_service (4).jpg";

const DrillingAndOMServices: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={drilling_service_1}
        tileContent="Crude Oil Extraction & Drilling"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              RBM specializes in oilfield exploration and drilling services.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Our skilled team combines technical expertise with industry
              standards, delivering precision in both drilling and ongoing
              maintenance.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Features:
            </Typography>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
            <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Exploration & Drilling Operations.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Well Completion & Production Enhancement.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Onshore & Offshore Drilling.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Reservoir Management & Optimization.
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={300}
                image={drilling_service_2}
                alt="Drilling Operations"
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
                image={drilling_service_3}
                alt="Well Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Well Maintenance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Routine maintenance to ensure well systems continue to operate
                  at peak efficiency, reducing risks and operational delays.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={drilling_service_4}
                alt="Emergency Well Repairs"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Emergency Well Repairs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Swift and reliable repair services to address critical well
                  issues, ensuring minimal downtime and continued safe
                  operation.
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
