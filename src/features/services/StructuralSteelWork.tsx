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
import steel_work_1 from "../../assets/features/services/structural/steel_work (1).jpg";
import steel_work_2 from "../../assets/features/services/structural/steel_work (2).jpg";
import steel_work_3 from "../../assets/features/services/structural/steel_work (3).jpg";
import steel_work_4 from "../../assets/features/services/structural/steel_work (4).jpg";

const StructuralSteelWork: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={steel_work_1} tileContent="Structural Steel Work" />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              RBM Infracon's Structural Steel Work services provide expertise in
              civil construction, coke plant maintenance, and the erection of
              plants and equipment. Our team excels in delivering high-quality
              solutions tailored to the needs of industrial clients.
            </Typography>
            <Typography variant="body1" paragraph>
              From blasting cleaning to painting, insulation, and refractory
              work, we handle every aspect of structural steel projects with
              precision and adherence to industry standards. Whether it’s a
              large-scale industrial facility or specialized plant maintenance,
              RBM Infracon ensures exceptional performance and durability.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
              <li>Expertise in civil construction and plant erection.</li>
              <li>Maintenance and upkeep of coke plants and heavy industrial equipment.</li>
              <li>Blasting cleaning and professional painting services for industrial structures.</li>
              <li>Comprehensive insulation and refractory work for structural projects.</li>
              <li>Highly skilled workforce ensuring timely and safe project execution.</li>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={400}
                image={steel_work_2}
                alt="Structural Steel Work"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={steel_work_3}
                alt="Plant Erection"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Plant Erection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We specialize in the precise erection of industrial plants and
                  heavy equipment, ensuring seamless integration and operational
                  efficiency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={steel_work_4}
                alt="Insulation and Refractory Work"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Insulation and Refractory Work
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our insulation and refractory services ensure long-term
                  durability and safety for industrial projects, adhering to the
                  highest standards.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StructuralSteelWork;
