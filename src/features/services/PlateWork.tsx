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

const PlateWork: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="Plate Work"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              RBM Infracon's Plate Work services provide comprehensive solutions
              for fabricating and erecting platework structures such as ducts,
              hoppers, and chutes with the highest levels of precision and
              efficiency.
            </Typography>
            <Typography paragraph>
              Our team of highly skilled craftsmen ensures that every structure
              meets specific client requirements, with a commitment to superior
              quality, performance, and long-term durability.
            </Typography>
            <Typography paragraph>
              By leveraging advanced techniques and premium-grade materials, we
              excel in handling complex designs, maintaining tight tolerances,
              and executing large-scale projects. We strictly adhere to safety
              protocols and project timelines, positioning RBM Infracon as a
              trusted partner for industrial infrastructure solutions.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services:
            </Typography>
            <ul>
              <li>
                Complete fabrication and erection of platework structures, including ducts, hoppers, and chutes.
              </li>
              <li>
                Precision construction tailored to client-specific designs and standards.
              </li>
              <li>
                Commitment to delivering top-tier quality, performance, and durability.
              </li>
              <li>
                Use of advanced techniques and high-grade materials to handle intricate geometries and challenging specifications.
              </li>
              <li>
                Proven expertise in managing large-scale industrial projects while maintaining stringent safety standards.
              </li>
              <li>
                Long-standing partnerships across sectors such as oil and gas, petrochemical, and power industries.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="450"
                image="https://picsum.photos/500/300?random=3"
                alt="Plate Work Example"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/500/300?random=1"
                alt="Plate Fabrication"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Plate Fabrication
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expert fabrication services designed to deliver precision and
                  strength in constructing industrial-grade platework structures.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/500/300?random=2"
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
