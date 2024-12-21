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
import steel_work_1 from "../../assets/features/services/steel_work (1).jpg";
import steel_work_2 from "../../assets/features/services/steel_work (2).jpg";
import steel_work_3 from "../../assets/features/services/steel_work (3).jpg";
import steel_work_4 from "../../assets/features/services/steel_work (4).jpg";

const StructuralSteelWork: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={steel_work_1} tileContent="Structural Steel Work" />
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
              RBM Infracon's Structural Steel Work services provide expertise in
              civil construction, coke plant maintenance, and the erection of
              plants and equipment. Our team excels in delivering high-quality
              solutions tailored to the needs of industrial clients.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              From blasting cleaning to painting, insulation, and refractory
              work, we handle every aspect of structural steel projects with
              precision and adherence to industry standards. Whether it’s a
              large-scale industrial facility or specialized plant maintenance,
              RBM Infracon ensures exceptional performance and durability.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services:
            </Typography>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
            <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Expertise in civil construction and plant erection.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Maintenance and upkeep of coke plants and heavy industrial
                equipment.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Blasting cleaning and professional painting services for
                industrial structures.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Comprehensive insulation and refractory work for structural
                projects.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Highly skilled workforce ensuring timely and safe project
                execution.
              </Typography>
            </ul>
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

        <Grid container spacing={5} sx={{ marginTop: 3 }}>
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
