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
import rail_wagon_1 from "../../assets/features/services/rail_wagon (1).jpg";
import rail_wagon_2 from "../../assets/features/services/rail_wagon (2).jpg";
import rail_wagon_3 from "../../assets/features/services/rail_wagon (3).jpg";
import rail_wagon_4 from "../../assets/features/services/rail_wagon (4).jpg";

const RailWagonLoadingServices: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={rail_wagon_1}
        tileContent="Rail Wagon Loading"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              RBM Infracon offers efficient and reliable rail wagon loading
              services designed to streamline logistics and transportation
              processes. Our services focus on maximizing loading capacity while
              ensuring compliance with all safety standards.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Our team utilizes advanced techniques and equipment to manage the
              loading process effectively, optimizing the logistics chain and
              enhancing operational efficiency. We are committed to delivering
              reliable solutions that meet our clients' specific needs and
              regulatory requirements.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Services:
            </Typography>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
            <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Efficient rail wagon loading services for streamlined logistics
                and transportation.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Maximization of loading capacity to enhance operational
                efficiency.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Adherence to stringent safety compliance standards.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Advanced techniques and equipment for effective load management.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Tailored solutions to meet specific client needs and regulatory
                requirements.
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={400}
                image={rail_wagon_2}
                alt="Rail Wagon Loading"
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
                image={rail_wagon_3}
                alt="Loading Capacity"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Maximized Loading Capacity
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our services are designed to maximize loading capacity,
                  ensuring efficient use of resources and enhanced
                  transportation logistics.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={rail_wagon_4}
                alt="Safety Compliance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Safety Compliance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We prioritize safety in all our rail wagon loading processes,
                  adhering to all relevant safety standards and regulations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RailWagonLoadingServices;
