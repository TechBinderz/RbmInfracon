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
import heater_operation_1 from "../../assets/features/services/heater/heater_operation (1).jpg";
import heater_operation_2 from "../../assets/features/services/heater/heater_operation (2).jpg";
import heater_operation_3 from "../../assets/features/services/heater/heater_operation (3).jpg";
import heater_operation_4 from "../../assets/features/services/heater/heater_operation (4).jpg";

const HeaterOperation: React.FC = () => {
  return (
    <>
      <PageTitle imageUrl={heater_operation_1} tileContent="Heater Operation" />
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
              RBM Infracon Limited proficiently manages heat exchangers guaranteeing superior thermal efficiency and equipment longevity in oil and gas, petrochemicals, refineries, power plants, and process industries. Our expertise also extends to bundle removal and reinsertion, high-pressure hydro jetting, and hydro testing services that withstand the heat exchange systems’ reliability and efficiency. Using advanced methods, and appropriate equipment, RBM Infracon Limited assists clients in minimizing downtime, increasing maintenance budget, and exercising operational efficiency.
            </Typography>
            <Typography
              paragraph
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}
            >
              Our skilled team uses advanced technology to manage, monitor, and
              maintain heating systems, focusing on minimizing downtime and
              maximizing efficiency.
            </Typography>
            {/* <Typography variant="h6" gutterBottom>
              Key Features:
            </Typography>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
            <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Comprehensive O&M services for heating systems.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Dedicated teams for optimal efficiency.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Support for residential, commercial, and industrial setups.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Quick response for maintenance and repairs.
              </Typography>
              <Typography variant="body1" component="li"    sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
              }}>
                Safety-focused and sustainable operations.
              </Typography> */}
            {/* </ul> */}
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
