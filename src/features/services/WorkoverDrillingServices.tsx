import React from "react";
import PageTitle from "../common/PageTitleDiv";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
} from "@mui/material";
import workover_drilling_1 from "../../assets/features/services/performance/performance (1).jpg";
import workover_drilling_2 from "../../assets/features/services/performance/performance (2).jpg";
import workover_drilling_3 from "../../assets/features/services/performance/performance (3).jpg";
import workover_drilling_4 from "../../assets/features/services/performance/performance (4).jpg";
const WorkoverDrillingServices: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={workover_drilling_1}
        tileContent="Performance Enhancement"
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
              RBM Infracon Limited, through its recently awarded Model Production Enhancement
              Contract (MPEC) by ONGC, is resolutely focused on enhancing crude oil production by
              employing advanced workover and drilling techniques. Our expertise, particularly
              demonstrated in the ONGC Nandej project, underscores our commitment to driving
              performance improvements and operational excellence within the oil and gas sector.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services Offered:
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Workover Operations:</strong>
            </Typography>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <Typography
                variant="body1"
                component="li"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                Comprehensive evaluation of existing wells to identify potential for increased
                production.
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                Reconditioning, cleaning, and repair of wellbore components to restore optimal flow.
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                Advanced intervention techniques to address blockages, casing issues, and reservoir
                communication challenges.
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={300}
                image={workover_drilling_2}
                alt="Workover Operations"
              />
            </Card>
          </Grid>
        </Grid><Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={12}>
            <Box sx={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "8px" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#39ac4b", fontWeight: "bold" }}
              >
                Highlights of Our Work at ONGC Nandej:
              </Typography>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                <Typography
                  variant="body1"
                  component="li"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Expertise in enhancing the performance of crude oil wells through targeted interventions.
                </Typography>
                <Typography
                  variant="body1"
                  component="li"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Seamless coordination with stakeholders to ensure timely delivery of results.
                </Typography>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow" sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={workover_drilling_3}
                alt="Drilling Services"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Drilling Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deployment of precision drilling techniques to access untapped reserves. 
                  Utilization of standardized practices to ensure safety, efficiency, and environmental compliance. 
                  Integration of innovative tools and technologies to enhance drilling accuracy and reduce downtime.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow" sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={workover_drilling_4}
                alt="Production Enhancement"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Production Enhancement for Crude Oil Wells
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tailored strategies for boosting crude oil output using state-of-the-art recovery methods. 
                  Application of enhanced oil recovery (EOR) techniques to extract additional reserves. 
                  Continuous monitoring and optimization to sustain long-term production gains.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      </Container>
    </>
  );
};

export default WorkoverDrillingServices;
