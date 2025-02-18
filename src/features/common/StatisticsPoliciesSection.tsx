import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import CountUp from "react-countup";

const statsData = [
  {
    icon: <AssignmentTurnedInIcon fontSize="large" />,
    count: "30+",
    label: "Years of experience",
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    count: "35+",
    label: "Satisfied customers",
  },
  {
    icon: <StarIcon fontSize="large" />,
    count: "500+",
    label: "Complete projects",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    count: "13+",
    label: "Award winning",
  },
];

// const policiesData = [
//   {
//     title: "Quality Policy",
//     description:
//       "Policy of RBM Infracon Limited that all of our activities are carried out in accordance with our business management system.",
//   },
//   {
//     title: "HSE Policy",
//     description:
//       "RBM Infracon LTD. is committed to protecting the health and safety of everybody involved with our activities.",
//     routerLinkTo: "/aboutus/hseperformance",
//   },
//   {
//     title: "HR Policy",
//     description:
//       "Our policy and action to possess and retain this valuable resource for getting the end objectives of our organization.",
//   },
// ];

const StatisticsPoliciesSection = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Statistics Section */}
      <Box
      sx={{
        backgroundColor: "#4caf50",
        color: "white",
        py: 3,
        mb: 4,
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {statsData.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {stat.icon}
              <Typography variant="h4" fontWeight="bold">
                
                  <CountUp
                    start={0}
                    end={parseInt(stat.count)} // Numeric part
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                
              </Typography>
              <Typography>{stat.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
      {/* Policies Section */}
      {/* <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          System & Control
        </Typography>
        <Typography variant="h6">
          From complete turn key to System & Control RBM Infracon LTD. Leave the
          building to the professionals.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {policiesData.map((policy, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ textAlign: "center", p: 2, height: "100%" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#4caf50"
                  gutterBottom
                >
                  {policy.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {policy.description}
                </Typography>
                {policy?.routerLinkTo ? (
                  <Link
                    to={policy.routerLinkTo}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      variant="text"
                      sx={{ color: "#4caf50", textTransform: "none" }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Read More
                    </Button>
                  </Link>
                ) : (
                  <></>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default StatisticsPoliciesSection;
