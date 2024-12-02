import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {newsItems, NewsItem} from "../news/newsPages/NewsData"
import NewsCard from "../news/NewsCard";

const filteredNewsItems = newsItems.slice(0, 3);

const NewsSection = () => {
  return (
    <>
      <Typography sx={{paddingY: 4}} variant="h3" fontWeight="bold"  align="center">
        Latest News
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {filteredNewsItems.map((item: NewsItem, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link
                to={`/news/${item.pathName}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <NewsCard
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                />
              </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default NewsSection;
