import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PageTitle from "../common/PageTitleDiv";
import { themeColor } from "../common/common";
import drilling_service_1 from "../../assets/features/services/drilling/drilling_service (1).jpg";
import drilling_service_2 from "../../assets/features/services/drilling/drilling_service (7).jpg";
import drilling_service_3 from "../../assets/features/services/drilling/drilling_service (3).jpg";
import drilling_service_4 from "../../assets/features/services/drilling/drilling_service (4).jpg";

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  ...theme.typography.body1,
}));

const StyledList = styled("ul")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

const StyledListItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  ...theme.typography.body1,
}));

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const DrillingAndOMServices = () => {
  return (
    <>
      <PageTitle
        imageUrl={drilling_service_1}
        tileContent="Crude Oil Extraction & Drilling"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <StyledText>
              RBM specializes in oilfield exploration and drilling services.
            </StyledText>
            <StyledText>
              Our skilled team combines technical expertise with industry
              standards, delivering precision in both drilling and ongoing
              maintenance.
            </StyledText>

            <Typography variant="h6" gutterBottom>
              Key Features:
            </Typography>
            <StyledList>
              <StyledListItem>Exploration & Drilling Operations</StyledListItem>
              <StyledListItem>
                Well Completion & Production Enhancement
              </StyledListItem>
              <StyledListItem>Onshore & Offshore Drilling</StyledListItem>
              <StyledListItem>
                Reservoir Management & Optimization
              </StyledListItem>
            </StyledList>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                height={300}
                image={drilling_service_2}
                alt="Drilling Operations"
              />
            </StyledCard>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={drilling_service_3}
                alt="Well Maintenance"
              />
              <CardContent>
                <Typography variant="h6" component="div" color={themeColor}>
                  Well Maintenance
                </Typography>
                <StyledText>
                  Routine maintenance to ensure well systems continue to operate
                  at peak efficiency, reducing risks and operational delays.
                </StyledText>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={drilling_service_4}
                alt="Emergency Well Repairs"
              />
              <CardContent>
                <Typography variant="h6" component="div" color={themeColor}>
                  Emergency Well Repairs
                </Typography>
                <StyledText>
                  Swift and reliable repair services to address critical well
                  issues, ensuring minimal downtime and continued safe
                  operation.
                </StyledText>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DrillingAndOMServices;
