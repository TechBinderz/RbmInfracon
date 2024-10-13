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
import heater_operation_1 from "../../assets/features/services/heater_operation (1).jpg";
import heater_operation_2 from "../../assets/features/services/heater_operation (2).jpg";
import heater_operation_3 from "../../assets/features/services/heater_operation (3).jpg";
import heater_operation_4 from "../../assets/features/services/heater_operation (4).jpg";

const HeaterOperation: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={heater_operation_1} tileContent="Heater Operation" />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography paragraph>
              RBM Infracon is a trusted provider of Heater Operation O&M
              services, ensuring reliable and efficient heating for residential,
              commercial, and industrial spaces.
            </Typography>
            <Typography paragraph>
              Our skilled team uses advanced technology to manage, monitor, and
              maintain heating systems, focusing on minimizing downtime and
              maximizing efficiency.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Key Features:
            </Typography>
            <ul>
              <li>Comprehensive O&M services for heating systems.</li>
              <li>Dedicated teams for optimal efficiency.</li>
              <li>
                Support for residential, commercial, and industrial setups.
              </li>
              <li>Quick response for maintenance and repairs.</li>
              <li>Safety-focused and sustainable operations.</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height={350}
                image={heater_operation_2}
                alt="Heater Operation"
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
                image={heater_operation_3}
                alt="Heater Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Heater Maintenance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Routine maintenance services to keep your heating systems in
                  peak condition, reducing the likelihood of unexpected
                  breakdowns.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-shadow">
              <CardMedia
                component="img"
                height="140"
                image={heater_operation_4}
                alt="Emergency Heater Repair"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Emergency Heater Repair
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fast and reliable repair services to address any urgent
                  issues, ensuring minimal downtime and quick resolution.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeaterOperation;
