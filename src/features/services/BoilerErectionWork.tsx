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
import boiler_erection_1 from "../../assets/features/services/boiler/boiler_erection (1).jpg";
import boiler_erection_2 from "../../assets/features/services/boiler/boiler_erection (2).jpg";
import boiler_erection_3 from "../../assets/features/services/boiler/boiler_erection (3).jpg";
import boiler_erection_4 from "../../assets/features/services/boiler/boiler_erection (4).jpg";

const BoilerErectionWork: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={boiler_erection_1}
        tileContent="Boiler Erection Work"
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
              At RBM Infracon Limited, we specialize in delivering comprehensive
              boiler erection and maintenance services, meticulously tailored to
              meet the demanding requirements of industrial operations. With
              nearly three decades of experience in the EPC (Engineering,
              Procurement, and Construction) and industrial services sectors,
              our team ensures precision, efficiency, and the highest standards
              of safety and compliance.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Our Services Include:
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Boiler Erection:</strong>
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
                Expert handling of new boiler installations, including design
                coordination, equipment assembly, and commissioning.
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                Seamless integration with existing industrial infrastructure,
                minimizing downtime and maximizing efficiency.
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                }}
              >
                Strict adherence to ASME, IBR, and other internationally
                recognized standards.
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={300}
                image={boiler_erection_2}
                alt="Boiler Erection"
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
                image={boiler_erection_3}
                alt="Routine Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Routine Maintenance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preventive maintenance programs and detailed inspections to
                  ensure long-lasting performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={boiler_erection_4}
                alt="Repair and Overhaul"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Repair and Overhaul
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Emergency repair services to minimize operational disruptions
                  & Refurbishment and replacement of worn-out parts to restore
                  peak performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BoilerErectionWork;
