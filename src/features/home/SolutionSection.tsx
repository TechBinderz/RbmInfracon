import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const solutions = [
  { title: "Catalyst Handling Services", image: "path_to_image" },
  { title: "Industrial Cleaning Services", image: "path_to_image" },
  { title: "Mechanical & Plant Maintenance Services", image: "path_to_image" },
  { title: "Pipeline & Process Services", image: "path_to_image" },
  { title: "Revamp, Construction & EPCC Services", image: "path_to_image" },
  { title: "Shutdowns & Turnarounds", image: "path_to_image" },
];

const SolutionSection = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Our Solutions
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={solution.title}
                height="140"
                image={solution.image}
              />
              <CardContent>
                <Typography variant="body2">{solution.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SolutionSection;
