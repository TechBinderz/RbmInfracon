import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const newsItems = [
  {
    title: "CR3 Makes Impressive Debut at OGA2024",
    image: "path_to_image",
    description: "Short description of the event",
  },
  {
    title: "CR3 Earns Praise from Middle East Client",
    image: "path_to_image",
    description: "Short description of the event",
  },
  // Add more news articles here...
];

const NewsSection = () => {
  return (
    <>
      <Typography sx={{paddingY: 4}} variant="h2" align="center">
        Latest News
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {newsItems.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={news.title}
                height="140"
                image={news.image}
              />
              <CardContent>
                <Typography variant="h6">{news.title}</Typography>
                <Typography variant="body2">{news.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default NewsSection;
