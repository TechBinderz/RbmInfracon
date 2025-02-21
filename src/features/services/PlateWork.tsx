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
import "../common/common.css";
import plate_work_1 from "../../assets/features/services/plateworks/plate_work (1).jpg";
import plate_work_2 from "../../assets/features/services/plateworks/plate_work (2).jpg";
import plate_work_3 from "../../assets/features/services/plateworks/plate_work (3).jpg";
import plate_work_4 from "../../assets/features/services/plateworks/plate_work (4).jpg";

const PlateWork: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={plate_work_1} tileContent="Plate Work" />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={6}>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              RBM Infracon's Plate Work services deliver precise fabrication and
              erection of structures like ducts, hoppers, and chutes.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Our skilled team ensures each structure meets client requirements
              with a focus on quality, performance, and durability.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Using advanced techniques and premium materials, we handle complex
              designs, maintain tight tolerances, and meet timelines,
              positioning us as a trusted industrial partner.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services:
            </Typography>
            <Typography
              component="ul"
              sx={{ pl: 2, listStyleType: "disc" }}
              style={{ paddingLeft: "20px", margin: 0 }}
            >
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Fabrication and erection of platework structures (ducts,
                hoppers, chutes)
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Precision construction to client standards
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Top-quality performance and durability
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Advanced techniques for intricate designs
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Safety-focused project execution
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Established partnerships in oil, gas, petrochemical, and power
                sectors
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={400}
                image={plate_work_2}
                alt="Plate Work Example"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={plate_work_3}
                alt="Plate Fabrication"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Plate Fabrication
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expert fabrication services designed to deliver precision and
                  strength in constructing industrial-grade platework
                  structures.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={plate_work_4}
                alt="Plate Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Plate Maintenance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Comprehensive maintenance services to extend the lifespan of
                  your platework structures, ensuring ongoing performance and
                  reliability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlateWork;
