import {
  Box,
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
import workover_drilling_1 from "../../assets/features/services/performance/performance (1).jpg";
import workover_drilling_2 from "../../assets/features/services/performance/performance (2).jpg";
import workover_drilling_3 from "../../assets/features/services/performance/performance (3).jpg";
// import workover_drilling_4 from "../../assets/features/services/performance/performance (4).jpg";

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledList = styled("ul")(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

const StyledListItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const StyledCard = styled(Card)(({ }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

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
            <StyledText variant="body1">
              RBM Infracon Limited, through its recently awarded Model
              Production Enhancement Contract (MPEC) by ONGC, is resolutely
              focused on enhancing crude oil production by employing advanced
              workover and drilling techniques. Our expertise, particularly
              demonstrated in the ONGC Nandej project, underscores our
              commitment to driving performance improvements and operational
              excellence within the oil and gas sector.
            </StyledText>
            <Typography variant="h5" gutterBottom>
              Key Services Offered:
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Workover Operations:</strong>
            </Typography>
            <StyledList>
              <StyledListItem>
                <Typography variant="body1">
                  Comprehensive evaluation of existing wells to identify
                  potential for increased production.
                </Typography>
              </StyledListItem>
              <StyledListItem>
                <Typography variant="body1">
                  Reconditioning, cleaning, and repair of wellbore components to
                  restore optimal flow.
                </Typography>
              </StyledListItem>
              <StyledListItem>
                <Typography variant="body1">
                  Advanced intervention techniques to address blockages, casing
                  issues, and reservoir communication challenges.
                </Typography>
              </StyledListItem>
            </StyledList>
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
        </Grid>
        <Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" gutterBottom color={themeColor}>
                Highlights of Our Work at ONGC Nandej:
              </Typography>
              <StyledList>
                <StyledListItem>
                  <Typography variant="body1">
                    Expertise in enhancing the performance of crude oil wells
                    through targeted interventions.
                  </Typography>
                </StyledListItem>
                <StyledListItem>
                  <Typography variant="body1">
                    Seamless coordination with stakeholders to ensure timely
                    delivery of results.
                  </Typography>
                </StyledListItem>
              </StyledList>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                image={workover_drilling_2}
                alt="Drilling Services"
                sx={{
                  height: 200,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom color={themeColor}>
                  Drilling Services
                </Typography>
                <StyledText variant="body2">
                  Deployment of precision drilling techniques to access untapped
                  reserves. Utilization of standardized practices to ensure
                  safety, efficiency, and environmental compliance. Integration
                  of innovative tools and technologies to enhance drilling
                  accuracy and reduce downtime.
                </StyledText>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                image={workover_drilling_3}
                alt="Production Enhancement"
                sx={{
                  height: 200,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom color={themeColor}>
                  Production Enhancement for Crude Oil Wells
                </Typography>
                <StyledText variant="body2">
                  Tailored strategies for boosting crude oil output using
                  state-of-the-art recovery methods. Application of enhanced oil
                  recovery (EOR) techniques to extract additional reserves.
                  Continuous monitoring and optimization to sustain long-term
                  production gains.
                </StyledText>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WorkoverDrillingServices;
