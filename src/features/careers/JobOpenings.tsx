import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Button, Container } from "@mui/material";
import { jobOpenings } from "./JobData"; // Assuming you have the jobOpenings data imported
import PageTitle from "../common/PageTitleDiv";
import about_us_image from "../../assets/features/about-us/about_us1.jpeg";
import themeColor from "../common/common";

const JobOpenings = () => {
  const navigate = useNavigate();

  const handleApplyNow = (job: any) => {
    // Navigate to CareerPage and pass job details in the state
    navigate("/careers/CareerOpening", { state: { jobDetails: job } });
  };

  return (
    <>
      <PageTitle imageUrl={about_us_image} tileContent="Job Openings" />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid
          container
          spacing={3}
          padding={3}
          justifyContent={jobOpenings.length < 3 ? "center" : "flex-start"}
        >
          {/* Check if jobOpenings is an array and contains items */}
          {Array.isArray(jobOpenings) && jobOpenings.length > 0 ? (
            jobOpenings.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <Card
                  className="card-shadow-1"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Location: {job.location}
                    </Typography>
                    <Typography variant="body2" paragraph height={"50px"}>
                      {job.description}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      Qualifications: {job.qualifications}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: themeColor,
                      marginTop: "auto",
                      alignSelf: "flex-end",
                      marginRight: "16px",
                      marginBottom: "16px",
                    }}
                    onClick={() => handleApplyNow(job)} // Handle Apply Now button click
                  >
                    Apply Now
                  </Button>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary">
              No job openings available at the moment.
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default JobOpenings;
